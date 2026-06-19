# 🎯 Talks Metadata System - Complete Implementation

## Overview

A fully automated metadata collection and distribution system for your Slidev talks that:

1. ✅ Collects metadata from all talks automatically
2. ✅ Stores and updates on every git push via GitHub Actions
3. ✅ Provides easy access for Next.js and other web projects

## 📦 What's Included

### Core System

- **TypeScript Schema** - Type-safe metadata definitions
- **Collection Script** - Automated metadata extraction
- **GitHub Actions** - Auto-update on push to main
- **Netlify Deployment** - CORS-enabled JSON endpoint
- **Build Integration** - Runs on every build

### Documentation

- **Quick Start** - Get going in 5 minutes
- **System Guide** - Complete technical documentation
- **Next.js Examples** - Ready-to-use components
- **Field Reference** - metadata.json template guide
- **Implementation Summary** - What was built and how

## 🚀 Quick Start

### 1. Test It Now

The system is already working! Check the metadata:

```bash
# View generated metadata
cat dist/talks-metadata.json

# Or fetch from the endpoint (after deployment)
curl https://zheng-talks.netlify.app/talks-metadata.json
```

### 2. Add Metadata to Your Talks

For each talk, create `talks/YOUR-TALK/metadata.json`:

```json
{
  "conference": "ICML 2025",
  "location": "Vienna, Austria",
  "description": "Brief description of your talk",
  "tags": ["machine-learning", "optimization"],
  "collaborators": ["Co-author Name"],
  "published": true
}
```

### 3. Generate Metadata

```bash
# Manually generate
bun run metadata

# Or build (which includes metadata)
bun run build
```

### 4. Auto-update on Push

Just push to main - GitHub Actions will:

1. Run the collection script
2. Generate updated metadata
3. Commit back to repo
4. Deploy to Netlify

## 🌐 Access from Next.js

### Server Component (Recommended)

```typescript
// app/talks/page.tsx
async function getTalks() {
  const res = await fetch('https://zheng-talks.netlify.app/talks-metadata.json', {
    next: { revalidate: 3600 } // Cache for 1 hour
  })
  return res.json()
}

export default async function TalksPage() {
  const { talks } = await getTalks()

  return (
    <div>
      <h1>My Talks</h1>
      {talks.map(talk => (
        <div key={talk.id}>
          <h2>{talk.title}</h2>
          <p>{talk.date} • {talk.conference}</p>
          <a href={talk.slidesUrl}>View Slides</a>
        </div>
      ))}
    </div>
  )
}
```

### Client Component

```typescript
'use client'
import { useEffect, useState } from 'react'

export default function TalksList() {
  const [talks, setTalks] = useState([])

  useEffect(() => {
    fetch('https://zheng-talks.netlify.app/talks-metadata.json')
      .then(r => r.json())
      .then(data => setTalks(data.talks))
  }, [])

  return <div>{/* render talks */}</div>
}
```

## 📊 Metadata Structure

Each talk includes:

```typescript
{
  id: string              // "2025-12-28"
  title: string           // "DeepRTE v1.1.0"
  date: string            // "2025-12-28"
  speaker?: string        // "Zheng Ma"
  affiliation?: string    // "Shanghai Jiao Tong University"
  conference?: string     // "ICML 2025"
  location?: string       // "Vienna, Austria"
  language?: string       // "en" or "zh-CN"
  slidesUrl?: string      // "https://..."
  pdfUrl?: string         // "https://..."
  sourceUrl?: string      // "https://github.com/..."
  description?: string    // Brief description
  tags?: string[]         // ["ml", "optimization"]
  collaborators?: string[] // ["Jane Doe"]
  published?: boolean     // true/false
  custom?: object         // Any custom fields
}
```

## 📁 File Structure

```
/home/zheng/repos/github.com/mazhengcn/talks/
├── scripts/
│   └── collect-metadata.ts         # ← Collection script
├── types/
│   └── metadata.ts                 # ← TypeScript types
├── .github/workflows/
│   └── update-metadata.yml         # ← Auto-update workflow
├── docs/
│   ├── QUICK_START.md             # ← Start here!
│   ├── METADATA_SYSTEM.md         # ← Full docs
│   ├── NEXTJS_EXAMPLES.md         # ← Integration examples
│   ├── METADATA_JSON_TEMPLATE.md  # ← Field reference
│   └── IMPLEMENTATION_SUMMARY.md  # ← What was built
├── talks/
│   ├── 2025-12-28/
│   │   ├── slides.md              # Auto-extracted
│   │   └── metadata.json          # ← Add this (optional)
│   ├── 2025-08-18/
│   │   ├── slides.md
│   │   └── metadata.json          # ← Example included
│   └── template/
│       └── metadata.json          # ← Template for new talks
├── dist/
│   └── talks-metadata.json        # ← Generated (deployed)
├── public/
│   └── talks-metadata.json        # ← Copy for convenience
├── package.json                   # ← Added 'metadata' script
└── netlify.toml                   # ← Added CORS headers
```

## 🔄 How It Works

### Automatic Workflow

```
Push to main
    ↓
GitHub Actions triggers
    ↓
Runs: bun run scripts/collect-metadata.ts
    ↓
Scans talks/* directories
    ↓
Extracts from slides.md + metadata.json
    ↓
Generates talks-metadata.json
    ↓
Commits back to repo
    ↓
Deploys to Netlify
    ↓
Available at /talks-metadata.json
```

## 📚 Documentation

| Document                                                 | Description                     |
| -------------------------------------------------------- | ------------------------------- |
| [QUICK_START.md](./QUICK_START.md)                       | Get started in 5 minutes        |
| [METADATA_SYSTEM.md](./METADATA_SYSTEM.md)               | Complete system documentation   |
| [NEXTJS_EXAMPLES.md](./NEXTJS_EXAMPLES.md)               | Ready-to-use Next.js components |
| [METADATA_JSON_TEMPLATE.md](./METADATA_JSON_TEMPLATE.md) | Field reference and examples    |
| [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) | What was implemented            |

## 🎯 Key Features

### 1. Automatic Extraction

- Title, speaker, affiliation from slides.md
- Date from folder name (2025-12-28)
- Language from frontmatter

### 2. Manual Configuration

- Optional metadata.json per talk
- Override auto-extracted values
- Add conference, location, tags

### 3. Production Ready

- CORS enabled for cross-origin access
- Cached responses (1 hour)
- GitHub Actions automation
- TypeScript support

### 4. Easy Integration

- Simple JSON endpoint
- Next.js examples included
- API route examples
- RSS feed generation

## 🛠️ Commands

```bash
# Generate metadata only
bun run metadata

# Build slides (includes metadata)
bun run build

# Dev mode
bun run dev

# Type check
bun run typecheck
```

## 🌍 API Endpoint

**Production**: `https://zheng-talks.netlify.app/talks-metadata.json`

**Response Format**:

```json
{
  "generatedAt": "2025-12-22T09:33:39.209Z",
  "count": 6,
  "talks": [
    {
      "id": "2025-12-28",
      "title": "deeprte v1.1.0",
      "date": "2025-12-28",
      "speaker": "Zheng Ma",
      "conference": "Example Conference Name",
      "location": "Shanghai, China",
      "slidesUrl": "https://...",
      "tags": ["deep-learning", "radiative-transfer"],
      ...
    }
  ]
}
```

## ✅ Next Steps

1. **Add metadata.json to all your talks**
   - Copy from `template/metadata.json`
   - Fill in conference, location, tags

2. **Customize as needed**
   - Edit `scripts/collect-metadata.ts` for custom logic
   - Update URL mappings
   - Add new fields to schema

3. **Integrate with your Next.js site**
   - Use examples from `docs/NEXTJS_EXAMPLES.md`
   - Build talk listings
   - Add search/filter functionality

4. **Deploy and test**
   - Push to main
   - Check GitHub Actions
   - Verify endpoint works

## 💡 Tips

- **Tags**: Use lowercase, hyphen-separated (`"deep-learning"`)
- **Dates**: Auto-extracted from folder names
- **Drafts**: Set `"published": false` to hide
- **Custom fields**: Use `custom` object for special metadata
- **Testing**: Run `bun run metadata` locally before pushing

## 🆘 Troubleshooting

**Metadata not updating?**

- Check GitHub Actions tab for errors
- Run `bun run metadata` locally to test
- Verify metadata.json is valid JSON

**Missing fields?**

- Check slides.md frontmatter
- Add to metadata.json
- Rebuild metadata

**CORS issues?**

- Endpoint has CORS enabled
- Use server-side fetch in Next.js
- Or create API route proxy

## 🎉 Success!

You now have a fully automated metadata system that:

- ✅ Automatically collects talk metadata
- ✅ Updates on every git push
- ✅ Provides easy JSON API access
- ✅ Works seamlessly with Next.js
- ✅ Is production-ready and scalable

**Endpoint**: [`https://zheng-talks.netlify.app/talks-metadata.json`](https://zheng-talks.netlify.app/talks-metadata.json)

Start by reading the [Quick Start Guide](./QUICK_START.md) and exploring the [Next.js Examples](./NEXTJS_EXAMPLES.md)!
