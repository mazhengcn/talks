# Talks Metadata System - Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      TALKS REPOSITORY                           │
│                                                                 │
│  talks/                                                         │
│  ├── 2025-12-28/                                               │
│  │   ├── slides.md          ◄── Frontmatter (title, lang)     │
│  │   └── metadata.json      ◄── Manual config (optional)      │
│  ├── 2025-08-18/                                               │
│  │   ├── slides.md                                             │
│  │   └── metadata.json                                         │
│  └── ...                                                        │
│                                                                 │
└──────────────┬──────────────────────────────────────────────────┘
               │
               │ Git Push to main
               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GITHUB ACTIONS                               │
│                                                                 │
│  1. Trigger on push                                            │
│  2. Run: bun run scripts/collect-metadata.ts                   │
│  3. Generate talks-metadata.json                               │
│  4. Commit back to repo                                        │
│                                                                 │
└──────────────┬──────────────────────────────────────────────────┘
               │
               │ Auto-commits
               ▼
┌─────────────────────────────────────────────────────────────────┐
│                  METADATA COLLECTION                            │
│                                                                 │
│  scripts/collect-metadata.ts                                    │
│  ┌──────────────────────────────────────┐                      │
│  │ For each talk:                       │                      │
│  │ 1. Read slides.md frontmatter        │                      │
│  │ 2. Load metadata.json (if exists)    │                      │
│  │ 3. Extract speaker info              │                      │
│  │ 4. Generate URLs                     │                      │
│  │ 5. Combine all metadata              │                      │
│  └──────────────────────────────────────┘                      │
│                                                                 │
│  Output:                                                        │
│  ├── dist/talks-metadata.json                                  │
│  └── public/talks-metadata.json                                │
│                                                                 │
└──────────────┬──────────────────────────────────────────────────┘
               │
               │ Deployment
               ▼
┌─────────────────────────────────────────────────────────────────┐
│                       NETLIFY                                   │
│                                                                 │
│  https://zheng-talks.netlify.app/                              │
│  ├── /2025/hksiam/           (Slides)                          │
│  ├── /2025/cmcms/            (Slides)                          │
│  └── /talks-metadata.json    ◄── API Endpoint                 │
│                                                                 │
│  CORS Headers: ✓                                               │
│  Cache: 1 hour                                                 │
│                                                                 │
└──────────────┬──────────────────────────────────────────────────┘
               │
               │ HTTP Fetch
               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   NEXT.JS WEBSITE                               │
│                                                                 │
│  app/talks/page.tsx                                            │
│  ┌──────────────────────────────────────┐                      │
│  │ async function getTalks() {          │                      │
│  │   const res = await fetch(           │                      │
│  │     'https://...talks-metadata.json',│                      │
│  │     { next: { revalidate: 3600 } }   │                      │
│  │   )                                  │                      │
│  │   return res.json()                  │                      │
│  │ }                                    │                      │
│  └──────────────────────────────────────┘                      │
│                                                                 │
│  Components:                                                    │
│  ├── TalkCard      - Display individual talk                   │
│  ├── TalksList     - List all talks                           │
│  ├── TalksTimeline - Timeline view                            │
│  └── TalksSearch   - Search & filter                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
┌──────────────┐
│  slides.md   │
│  (frontmatter)│
└──────┬───────┘
       │
       ├─────────► Extract: title, language, speaker
       │
       ▼
┌──────────────┐     ┌─────────────────────────────┐
│metadata.json │────►│  Collection Script          │
│  (optional)  │     │                             │
└──────────────┘     │  - Merge all sources        │
                     │  - Generate URLs             │
       ┌─────────────┤  - Format output            │
       │             │  - Validate data            │
       │             └─────────────────────────────┘
       │                        │
       ▼                        ▼
┌──────────────┐     ┌──────────────────────────┐
│ Folder Name  │     │  talks-metadata.json     │
│ (2025-12-28) │     │                          │
└──────────────┘     │  {                       │
       │             │    "generatedAt": "...", │
       └────────────►│    "count": 6,           │
                     │    "talks": [...]        │
Extract: date        │  }                       │
                     └──────────────────────────┘
```

## Metadata Structure

```
TalksCollection
├── generatedAt: string         (Timestamp)
├── count: number                (Total talks)
└── talks: TalkMetadata[]
    └── TalkMetadata
        ├── id: string           (Folder name)
        ├── title: string        ← From slides.md frontmatter
        ├── date: string         ← From folder name
        ├── speaker: string      ← From slides.md content
        ├── affiliation: string  ← From slides.md content
        ├── conference: string   ← From metadata.json
        ├── location: string     ← From metadata.json
        ├── language: string     ← From slides.md frontmatter
        ├── slidesUrl: string    ← Auto-generated
        ├── pdfUrl: string       ← Auto-generated
        ├── sourceUrl: string    ← Auto-generated
        ├── description: string  ← From metadata.json
        ├── tags: string[]       ← From metadata.json
        ├── collaborators: []    ← From metadata.json or slides
        ├── published: boolean   ← From metadata.json
        └── custom: object       ← From metadata.json
```

## Automation Flow

```
Developer                GitHub Actions            Netlify              Next.js
    │                         │                       │                   │
    │ 1. Edit slides.md       │                       │                   │
    │ 2. Add metadata.json    │                       │                   │
    │                         │                       │                   │
    │ 3. git push main       │                       │                   │
    ├────────────────────────►│                       │                   │
    │                         │                       │                   │
    │                         │ 4. Workflow triggers  │                   │
    │                         │ 5. Run collection     │                   │
    │                         │ 6. Generate JSON      │                   │
    │                         │ 7. Commit result      │                   │
    │                         ├──────────────────────►│                   │
    │                         │                       │ 8. Deploy         │
    │                         │                       │ 9. Serve JSON     │
    │                         │                       ├──────────────────►│
    │                         │                       │                   │ 10. Fetch data
    │                         │                       │                   │ 11. Render UI
    │                         │                       │◄──────────────────┤
    │                         │                       │                   │
    │                         │                       │  GET /talks       │
    │                         │                       │  metadata.json    │
    │                         │                       │                   │
```

## File Dependencies

```
types/metadata.ts
    ↓ (imported by)
scripts/collect-metadata.ts
    ↓ (reads)
talks/*/slides.md
talks/*/metadata.json
    ↓ (generates)
dist/talks-metadata.json
public/talks-metadata.json
    ↓ (deployed to)
Netlify: /talks-metadata.json
    ↓ (consumed by)
Next.js Application
```

## Build Process

```
bun run build
    │
    ├─► rimraf dist
    │
    ├─► bun --filter='*' run build
    │   └─► Build all slidev presentations
    │
    └─► bun run metadata
        └─► scripts/collect-metadata.ts
            ├─► Scan talks directories
            ├─► Extract metadata
            ├─► Generate JSON
            └─► Write to dist/ and public/
```

## Component Architecture (Next.js)

```
Next.js App
│
├── app/
│   ├── talks/
│   │   ├── page.tsx                 ← Main listing
│   │   ├── [year]/page.tsx          ← Filtered by year
│   │   └── search/page.tsx          ← Search interface
│   │
│   └── api/
│       └── talks/
│           ├── route.ts             ← Proxy endpoint
│           ├── recent/route.ts      ← Recent talks
│           └── search/route.ts      ← Search API
│
├── components/
│   ├── TalkCard.tsx                 ← Individual talk
│   ├── TalksList.tsx                ← Grid of talks
│   ├── TalksTimeline.tsx            ← Timeline view
│   └── TalksSearch.tsx              ← Search & filter
│
├── types/
│   └── talks-metadata.ts            ← Type definitions
│
└── utils/
    └── talks.ts                     ← Helper functions
```

## Security & Performance

```
┌─────────────────────────────────────────┐
│          Security Layers                │
├─────────────────────────────────────────┤
│ ✓ CORS headers configured               │
│ ✓ Read-only public access               │
│ ✓ No sensitive data exposed             │
│ ✓ GitHub Actions secrets                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       Performance Optimizations         │
├─────────────────────────────────────────┤
│ ✓ Static JSON generation                │
│ ✓ CDN caching (1 hour)                  │
│ ✓ Next.js ISR (revalidate: 3600)        │
│ ✓ Compressed responses                  │
│ ✓ Minimal payload size                  │
└─────────────────────────────────────────┘
```
