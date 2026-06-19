# Talks Metadata System - Implementation Summary

## ✅ What Was Implemented

### 1. **Metadata Schema** ([types/metadata.ts](../types/metadata.ts))

- Comprehensive TypeScript interfaces for talk metadata
- Support for:
  - Basic info: title, date, speaker, affiliation
  - Event details: conference, location
  - URLs: slides, PDF, source code
  - Content: description, tags, collaborators
  - Status: published flag
  - Custom fields: extensible metadata

### 2. **Metadata Collection Script** ([scripts/collect-metadata.ts](../scripts/collect-metadata.ts))

- Automatically scans all talk directories
- Extracts metadata from:
  - `slides.md` frontmatter (title, language, speaker)
  - Optional `metadata.json` files (conference, tags, description)
- Generates clean JSON output
- Creates both public and dist versions

### 3. **GitHub Actions Workflow** ([.github/workflows/update-metadata.yml](../.github/workflows/update-metadata.yml))

- Triggers on push to main
- Automatically runs metadata collection
- Commits updated metadata back to repo
- Uploads artifacts for backup

### 4. **Integration with Build Process**

- Added `metadata` script to [package.json](../package.json)
- Integrated into build pipeline
- Metadata generated on every build

### 5. **Deployment Configuration**

- Updated [netlify.toml](../netlify.toml) with CORS headers
- Metadata served at `/talks-metadata.json`
- 1-hour cache for optimal performance
- Full CORS support for external consumption

### 6. **Documentation**

- [Quick Start Guide](./QUICK_START.md) - Get started in 5 minutes
- [Metadata System Guide](./METADATA_SYSTEM.md) - Complete documentation
- [Next.js Examples](./NEXTJS_EXAMPLES.md) - Ready-to-use code
- [metadata.json Template](./METADATA_JSON_TEMPLATE.md) - Field reference

### 7. **Example Configurations**

- Created sample `metadata.json` for existing talks:
  - [talks/2025-12-28/metadata.json](../talks/2025-12-28/metadata.json)
  - [talks/2025-08-18/metadata.json](../talks/2025-08-18/metadata.json)
- Template file for new talks: [template/metadata.json](../template/metadata.json)

## 📊 Generated Output

The system generates `talks-metadata.json` with this structure:

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
      "affiliation": "Shanghai Jiao Tong University",
      "conference": "Example Conference Name",
      "location": "Shanghai, China",
      "slidesUrl": "https://zheng-talks.netlify.app/2025/deeprte/",
      "pdfUrl": "https://github.com/mazhengcn/talks/blob/main/talks/2025-12-28/assets/...",
      "sourceUrl": "https://github.com/mazhengcn/talks/tree/main/talks/2025-12-28",
      "description": "Pre-trained Attention-based Neural Network for Radiative Transfer",
      "tags": [
        "deep-learning",
        "radiative-transfer",
        "neural-network",
        "physics"
      ],
      "collaborators": ["Min Tang", "Yekun Zhu"],
      "published": true,
      "custom": {
        "version": "v1.1.0"
      }
    }
    // ... more talks
  ]
}
```

## 🔄 How It Works

### Automatic Flow (on git push)

```
1. Push to main
   ↓
2. GitHub Actions triggers
   ↓
3. Runs: bun run scripts/collect-metadata.ts
   ↓
4. Scans all talks/* directories
   ↓
5. Extracts frontmatter + metadata.json
   ↓
6. Generates talks-metadata.json
   ↓
7. Commits back to repo
   ↓
8. Deploys to Netlify
   ↓
9. Available at: /talks-metadata.json
```

### Manual Flow (local development)

```bash
# Generate metadata locally
bun run metadata

# Or as part of build
bun run build
```

## 🌐 Next.js Integration

### Server-Side (Recommended)

```typescript
// app/talks/page.tsx
async function getTalks() {
  const res = await fetch('https://zheng-talks.netlify.app/talks-metadata.json', {
    next: { revalidate: 3600 }
  })
  return res.json()
}

export default async function TalksPage() {
  const { talks } = await getTalks()
  return <TalksList talks={talks} />
}
```

### Client-Side

```typescript
'use client'
import useSWR from 'swr'

export function TalksList() {
  const { data } = useSWR(
    'https://zheng-talks.netlify.app/talks-metadata.json',
    fetcher
  )
  return <div>{/* render talks */}</div>
}
```

### API Route

```typescript
// app/api/talks/route.ts
export async function GET() {
  const res = await fetch(
    "https://zheng-talks.netlify.app/talks-metadata.json",
  );
  const data = await res.json();
  return NextResponse.json(data);
}
```

## 📁 File Structure

```
talks/
├── scripts/
│   └── collect-metadata.ts      # Collection script
├── types/
│   └── metadata.ts              # TypeScript types
├── .github/
│   └── workflows/
│       └── update-metadata.yml  # Auto-update workflow
├── docs/
│   ├── QUICK_START.md          # Quick guide
│   ├── METADATA_SYSTEM.md      # Full docs
│   ├── NEXTJS_EXAMPLES.md      # Integration examples
│   └── METADATA_JSON_TEMPLATE.md # Field reference
├── talks/
│   ├── 2025-12-28/
│   │   ├── slides.md           # Auto-extracts metadata
│   │   ├── metadata.json       # Manual config (optional)
│   │   └── ...
│   └── template/
│       └── metadata.json       # Template for new talks
├── dist/
│   └── talks-metadata.json     # Generated (deployed)
├── public/
│   └── talks-metadata.json     # Copy for convenience
└── netlify.toml                # CORS config
```

## 🎯 Key Features

### 1. **Automatic Extraction**

- Title, speaker, affiliation from slides frontmatter
- Date from folder naming convention
- Language from frontmatter

### 2. **Manual Configuration**

- Optional `metadata.json` per talk
- Override auto-extracted values
- Add conference, location, tags, etc.

### 3. **Flexible & Extensible**

- Custom fields via `custom` object
- Easy to add new metadata types
- TypeScript support for type safety

### 4. **Production Ready**

- CORS enabled for cross-origin access
- Cached for performance (1 hour)
- GitHub Actions for automation
- Netlify deployment

### 5. **Developer Friendly**

- TypeScript types included
- Comprehensive documentation
- Ready-to-use examples
- Easy local testing

## 🚀 Usage Instructions

### Adding Metadata to a New Talk

1. Create your talk folder: `talks/2025-xx-xx/`
2. Add `slides.md` (title auto-extracted)
3. (Optional) Add `metadata.json`:
   ```json
   {
     "conference": "Conference Name",
     "location": "City, Country",
     "description": "Brief description",
     "tags": ["tag1", "tag2"]
   }
   ```
4. Push to main → Automatic update!

### Testing Locally

```bash
# Generate metadata
bun run metadata

# Check output
cat dist/talks-metadata.json

# Build everything
bun run build
```

### Accessing from Next.js

```bash
# In your Next.js project
curl https://zheng-talks.netlify.app/talks-metadata.json

# Or use in code
fetch('https://zheng-talks.netlify.app/talks-metadata.json')
```

## 🔧 Configuration

### Customize URL Mappings

Edit `scripts/collect-metadata.ts`:

```typescript
const mapping: Record<string, string> = {
  "2025-12-28": "2025/deeprte",
  // Add your mappings here
};
```

### Change Base URL

Set environment variable:

```bash
BASE_URL=https://your-domain.com bun run metadata
```

### Modify Metadata Schema

Edit `types/metadata.ts` to add new fields:

```typescript
export interface TalkMetadata {
  // ... existing fields
  videoUrl?: string; // Add new field
  duration?: number; // Add another field
}
```

## 📈 Benefits

1. **Centralized Metadata**: Single source of truth for all talks
2. **Automatic Updates**: No manual JSON editing
3. **Type Safety**: TypeScript support
4. **Easy Integration**: Simple JSON API
5. **Version Control**: Metadata tracked in git
6. **Scalable**: Handles unlimited talks
7. **Documented**: Comprehensive guides

## 🔗 API Endpoints

- **Production**: `https://zheng-talks.netlify.app/talks-metadata.json`
- **Local**: `http://localhost/talks-metadata.json` (after build)

## 📝 Next Steps

1. **Add metadata.json to all talks** for complete information
2. **Update conference and location** fields as needed
3. **Set up your Next.js integration** using the examples
4. **Customize the collection script** if needed
5. **Monitor GitHub Actions** for successful updates

## 💡 Tips

- Use lowercase, hyphen-separated tags: `"deep-learning"`
- Keep descriptions concise (1-3 sentences)
- Add collaborators for joint work
- Use `published: false` for drafts
- Leverage `custom` field for special metadata

## 🆘 Support

- Documentation: See `docs/` folder
- Examples: See `docs/NEXTJS_EXAMPLES.md`
- Issues: Check GitHub Actions logs
- Testing: Run `bun run metadata` locally

---

**Result**: A fully automated, production-ready metadata system that makes your talks easily discoverable and integrable with any web project! 🎉
