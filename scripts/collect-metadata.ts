import type {
  TalkMetadata,
  TalkMetadataConfig,
  TalksCollection,
} from "../types/metadata";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import { basename, join } from "node:path";
import process from "node:process";
import fg from "fast-glob";
import matter from "gray-matter";

const TALKS_DIR = join(process.cwd(), "talks");
const PUBLIC_OUTPUT_FILE = join(process.cwd(), "public/talks-metadata.json");
const BASE_URL = process.env.BASE_URL || "https://zheng-talks.netlify.app";
const REPO_URL = "https://github.com/mazhengcn/talks";

/**
 * Extract frontmatter from markdown file
 */
async function extractFrontmatter(
  filePath: string,
): Promise<Record<string, unknown>> {
  const content = await fs.readFile(filePath, "utf-8");
  return matter(content).data;
}

/**
 * Load optional metadata config file from talk directory
 */
async function loadMetadataConfig(
  talkDir: string,
): Promise<TalkMetadataConfig> {
  const configPath = join(talkDir, "metadata.json");
  if (!existsSync(configPath)) return {};

  try {
    const content = await fs.readFile(configPath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.warn(`Failed to parse metadata.json in ${talkDir}:`, error);
    return {};
  }
}

/**
 * Parse date from folder name or frontmatter
 */
function parseDate(
  folderId: string,
  frontmatter: Record<string, unknown>,
  config: TalkMetadataConfig,
): string {
  // Try to extract date from folder name (e.g., "2025-12-28")
  const dateMatch = folderId.match(/^(\d{4}-\d{2}-\d{2})/);
  if (dateMatch) return dateMatch[1];

  // Try to extract from frontmatter or other sources
  const candidate = config.date ?? frontmatter.date;
  if (candidate instanceof Date) return candidate.toISOString().split("T")[0];
  if (typeof candidate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(candidate))
    throw new Error(
      `${folderId}: add a valid YYYY-MM-DD date to slides.md or metadata.json`,
    );
  return candidate;
}

/**
 * Extract speaker info from frontmatter or slides content
 */
async function extractSpeakerInfo(
  filePath: string,
  frontmatter: Record<string, unknown>,
) {
  const content = await fs.readFile(filePath, "utf-8");

  // Try to find speaker name and affiliation from common patterns

  const speakerMatch = content.match(
    /<div[^>]*text-left[^>]*>(.*?)<\/div>\s*<div[^>]*text-left[^>]*>(.*?)<\/div>/s,
  );
  const collaboratorsMatch = content.match(/Joint work with (.+?)<\/div>/);

  return {
    speaker:
      (typeof frontmatter.speaker === "string" && frontmatter.speaker) ||
      speakerMatch?.[1]?.replace(/<[^>]*>/g, "").trim(),
    affiliation:
      (typeof frontmatter.affiliation === "string" &&
        frontmatter.affiliation) ||
      speakerMatch?.[2]?.replace(/<[^>]*>/g, "").trim(),
    collaborators: collaboratorsMatch?.[1]
      ?.split(/,|and/)
      .map((s) => s.trim())
      .filter(Boolean),
  };
}

/**
 * Collect metadata for a single talk
 */
async function collectTalkMetadata(
  talkDir: string,
): Promise<TalkMetadata | null> {
  const slidesPath = join(talkDir, "slides.md");

  if (!existsSync(slidesPath)) {
    console.warn(`No slides.md found in ${talkDir}`);
    return null;
  }

  try {
    const folderId = basename(talkDir);
    const frontmatter = await extractFrontmatter(slidesPath);
    const config = await loadMetadataConfig(talkDir);
    const speakerInfo = await extractSpeakerInfo(slidesPath, frontmatter);
    const date = parseDate(folderId, frontmatter, config);
    const pdf = config.pdf ?? `assets/${folderId}.pdf`;
    if (!existsSync(join(talkDir, pdf)))
      throw new Error(`${folderId}: PDF not found at ${pdf}`);

    const title = frontmatter.title;
    const language = config.language ?? frontmatter.lang;

    const metadata: TalkMetadata = {
      id: folderId,
      title:
        (typeof title === "string" && title) ||
        (typeof config.custom?.title === "string" && config.custom.title) ||
        "Untitled",
      date,
      speaker: speakerInfo.speaker,
      affiliation: speakerInfo.affiliation,
      conference: config.conference,
      location: config.location,
      conferenceUrl: config.conference_url,
      language: typeof language === "string" ? language : "en",
      slidesUrl: `${BASE_URL}/${folderId}/`,
      pdfUrl: `${REPO_URL}/blob/main/talks/${folderId}/${pdf}?raw=true`,
      sourceUrl: `${REPO_URL}/tree/main/talks/${folderId}`,
      description: config.description,
      tags: config.tags,
      collaborators: speakerInfo.collaborators || config.collaborators,
      published: config.published ?? true,
      custom: config.custom,
    };

    return metadata;
  } catch (error) {
    throw new Error(`Error collecting metadata for ${talkDir}`, {
      cause: error,
    });
  }
}

/**
 * Main function to collect all talks metadata
 */
interface CollectMetadataOptions {
  check?: boolean;
  outputFiles?: string[];
}

async function collectAllMetadata(
  options: CollectMetadataOptions = {},
): Promise<void> {
  console.log("🔍 Scanning for talks...");

  // Find all talk directories (excluding reuse and template)
  const talkDirs = await fg("*/", {
    cwd: TALKS_DIR,
    onlyDirectories: true,
    ignore: ["reuse", "template"],
  });

  console.log(`Found ${talkDirs.length} talk directories`);

  const talks: TalkMetadata[] = [];

  for (const dir of talkDirs) {
    const talkDir = join(TALKS_DIR, dir);
    console.log(`Processing ${dir}...`);

    const metadata = await collectTalkMetadata(talkDir);
    if (metadata) {
      talks.push(metadata);
    }
  }

  // Sort by date (newest first)
  talks.sort((a, b) => b.date.localeCompare(a.date));

  const collection: TalksCollection = {
    generatedAt: new Date().toISOString(),
    count: talks.length,
    talks,
  };

  console.log(`✅ Successfully validated metadata for ${talks.length} talks`);

  if (options.check) return;

  const outputFiles = options.outputFiles ?? [PUBLIC_OUTPUT_FILE];
  const json = `${JSON.stringify(collection, null, 2)}\n`;
  for (const outputFile of outputFiles) {
    await fs.mkdir(join(outputFile, ".."), { recursive: true });
    await fs.writeFile(outputFile, json, "utf-8");
    console.log(`📁 Output: ${outputFile}`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  collectAllMetadata({ check: process.argv.includes("--check") }).catch(
    (error) => {
      console.error("Failed to collect metadata:", error);
      process.exit(1);
    },
  );
}

export { collectAllMetadata };
