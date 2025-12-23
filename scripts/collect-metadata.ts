import type { TalkMetadata, TalkMetadataConfig, TalksCollection } from '../types/metadata'
import { existsSync } from 'node:fs'
import fs from 'node:fs/promises'
import { join } from 'node:path'
import process from 'node:process'
import fg from 'fast-glob'

const TALKS_DIR = join(process.cwd(), 'talks')
const OUTPUT_FILE = join(process.cwd(), 'dist/talks-metadata.json')
const BASE_URL = process.env.BASE_URL || 'https://zheng-talks.netlify.app'
const REPO_URL = 'https://github.com/mazhengcn/talks'

/**
 * Extract frontmatter from markdown file
 */
async function extractFrontmatter(filePath: string): Promise<Record<string, any>> {
  const content = await fs.readFile(filePath, 'utf-8')
  const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/)

  if (!frontmatterMatch)
    return {}

  const frontmatter = frontmatterMatch[1]
  const parsed: Record<string, any> = {}

  frontmatter.split('\n').forEach((line) => {
    const match = line.match(/^([^:]+):[ \t]*([^ \t].*)?$/)
    if (match) {
      const [, key, value] = match
      // Skip if value is undefined or empty
      if (!value)
        return
      // Parse boolean and string values
      if (value === 'true')
        parsed[key.trim()] = true
      else if (value === 'false')
        parsed[key.trim()] = false
      else
        parsed[key.trim()] = value.trim().replace(/^['"](.*)['"]$/, '$1')
    }
  })

  return parsed
}

/**
 * Load optional metadata config file from talk directory
 */
async function loadMetadataConfig(talkDir: string): Promise<TalkMetadataConfig> {
  const configPath = join(talkDir, 'metadata.json')
  if (!existsSync(configPath))
    return {}

  try {
    const content = await fs.readFile(configPath, 'utf-8')
    return JSON.parse(content)
  }
  catch (error) {
    console.warn(`Failed to parse metadata.json in ${talkDir}:`, error)
    return {}
  }
}

/**
 * Parse date from folder name or frontmatter
 */
function parseDate(folderId: string, _frontmatter: Record<string, any>): string {
  // Try to extract date from folder name (e.g., "2025-12-28")
  const dateMatch = folderId.match(/^(\d{4}-\d{2}-\d{2})/)
  if (dateMatch)
    return dateMatch[1]

  // Try to extract from frontmatter or other sources
  // You can customize this based on your needs
  return new Date().toISOString().split('T')[0]
}

/**
 * Extract speaker info from frontmatter or slides content
 */
async function extractSpeakerInfo(filePath: string, frontmatter: Record<string, any>) {
  const content = await fs.readFile(filePath, 'utf-8')

  // Try to find speaker name and affiliation from common patterns

  const speakerMatch = content.match(/<div[^>]*text-left[^>]*>(.*?)<\/div>\s*<div[^>]*text-left[^>]*>(.*?)<\/div>/s)
  const collaboratorsMatch = content.match(/Joint work with (.+?)<\/div>/)

  return {
    speaker: frontmatter.speaker || speakerMatch?.[1]?.replace(/<[^>]*>/g, '').trim(),
    affiliation: frontmatter.affiliation || speakerMatch?.[2]?.replace(/<[^>]*>/g, '').trim(),
    collaborators: collaboratorsMatch?.[1]?.split(/,|and/).map(s => s.trim()).filter(Boolean),
  }
}

/**
 * Collect metadata for a single talk
 */
async function collectTalkMetadata(talkDir: string): Promise<TalkMetadata | null> {
  const slidesPath = join(talkDir, 'slides.md')

  if (!existsSync(slidesPath)) {
    console.warn(`No slides.md found in ${talkDir}`)
    return null
  }

  try {
    const folderId = talkDir.split('/').pop()!
    const frontmatter = await extractFrontmatter(slidesPath)
    const config = await loadMetadataConfig(talkDir)
    const speakerInfo = await extractSpeakerInfo(slidesPath, frontmatter)
    const date = parseDate(folderId, frontmatter)

    const metadata: TalkMetadata = {
      id: folderId,
      title: frontmatter.title || config.custom?.title || 'Untitled',
      date,
      speaker: speakerInfo.speaker,
      affiliation: speakerInfo.affiliation,
      conference: config.conference,
      location: config.location,
      conferenceUrl: config.conference_url,
      language: frontmatter.lang || 'en',
      slidesUrl: `${BASE_URL}/${folderId}/`,
      pdfUrl: `${REPO_URL}/blob/main/talks/${folderId}/assets/${folderId}.pdf?raw=true`,
      sourceUrl: `${REPO_URL}/tree/main/talks/${folderId}`,
      description: config.description,
      tags: config.tags,
      collaborators: speakerInfo.collaborators || config.collaborators,
      published: config.published ?? true,
      custom: config.custom,
    }

    return metadata
  }
  catch (error) {
    console.error(`Error collecting metadata for ${talkDir}:`, error)
    return null
  }
}

/**
 * Main function to collect all talks metadata
 */
async function collectAllMetadata(): Promise<void> {
  console.log('🔍 Scanning for talks...')

  // Find all talk directories (excluding reuse and template)
  const talkDirs = await fg('*/', {
    cwd: TALKS_DIR,
    onlyDirectories: true,
    ignore: ['reuse', 'template'],
  })

  console.log(`Found ${talkDirs.length} talk directories`)

  const talks: TalkMetadata[] = []

  for (const dir of talkDirs) {
    const talkDir = join(TALKS_DIR, dir)
    console.log(`Processing ${dir}...`)

    const metadata = await collectTalkMetadata(talkDir)
    if (metadata) {
      talks.push(metadata)
    }
  }

  // Sort by date (newest first)
  talks.sort((a, b) => b.date.localeCompare(a.date))

  const collection: TalksCollection = {
    generatedAt: new Date().toISOString(),
    count: talks.length,
    talks,
  }

  // Ensure output directory exists
  await fs.mkdir(join(process.cwd(), 'dist'), { recursive: true })

  // Write to file
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(collection, null, 2), 'utf-8')

  console.log(`✅ Successfully generated metadata for ${talks.length} talks`)
  console.log(`📁 Output: ${OUTPUT_FILE}`)

  // Also write to a public directory for easier access
  const publicOutput = join(process.cwd(), 'public/talks-metadata.json')
  await fs.mkdir(join(process.cwd(), 'public'), { recursive: true })
  await fs.writeFile(publicOutput, JSON.stringify(collection, null, 2), 'utf-8')
  console.log(`📁 Public output: ${publicOutput}`)
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  collectAllMetadata().catch((error) => {
    console.error('Failed to collect metadata:', error)
    process.exit(1)
  })
}

export { collectAllMetadata }
