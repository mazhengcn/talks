# Talks Metadata System - Quick Start Guide

## 🚀 Quick Start

### 1. Add Metadata to a Talk

Create `metadata.json` in your talk folder (e.g., `talks/2025-12-28/metadata.json`):

```json
{
  "conference": "ICML 2025",
  "location": "Vienna, Austria",
  "description": "Brief description of your talk",
  "tags": ["machine-learning", "optimization"],
  "published": true
}
```

### 2. Generate Metadata Locally

```bash
bun run metadata
```

This creates:

- `dist/talks-metadata.json`
- `public/talks-metadata.json`

### 3. Automatic Updates

Metadata automatically updates on every push to `main` via GitHub Actions.

## 📊 Metadata Structure

Each talk has:

- **Automatically extracted**: title, date, speaker, language (from `slides.md`)
- **Manually configured**: conference, location, description, tags (from `metadata.json`)
- **Auto-generated**: URLs for slides, PDF, source code

## 🌐 Access from Next.js

### Fetch at Build Time (Recommended)

```typescript
async function getTalks() {
  const res = await fetch(
    "https://zheng-talks.netlify.app/talks-metadata.json",
    {
      next: { revalidate: 3600 },
    },
  );
  return res.json();
}
```

### Use in Component

```tsx
export default async function TalksPage() {
  const { talks } = await getTalks();

  return (
    <div>
      {talks.map((talk) => (
        <div key={talk.id}>
          <h2>{talk.title}</h2>
          <a href={talk.slidesUrl}>View Slides</a>
        </div>
      ))}
    </div>
  );
}
```

## 📝 Available Fields

```typescript
interface TalkMetadata {
  id: string; // "2025-12-28"
  title: string; // "DeepRTE v1.1.0"
  date: string; // "2025-12-28"
  speaker?: string; // "Zheng Ma"
  affiliation?: string; // "Shanghai Jiao Tong University"
  conference?: string; // "ICML 2025"
  location?: string; // "Vienna, Austria"
  slidesUrl?: string; // "https://..."
  pdfUrl?: string; // "https://..."
  sourceUrl?: string; // "https://github.com/..."
  description?: string; // Brief description
  tags?: string[]; // ["ml", "optimization"]
  collaborators?: string[]; // ["Jane Doe"]
  published?: boolean; // true/false
  custom?: object; // Any custom fields
}
```

## 📂 File Structure

```
talks/
  2025-12-28/
    slides.md          # ← Auto-extracts: title, speaker, date
    metadata.json      # ← Manual config: conference, tags, etc.
    package.json
    ...
```

## 🔄 Workflow

1. **Add/update talk** → Create `slides.md` + optional `metadata.json`
2. **Push to main** → GitHub Actions runs automatically
3. **Metadata updates** → `talks-metadata.json` regenerated
4. **Next.js fetches** → Your website shows latest talks

## 🛠️ Commands

```bash
# Generate metadata
bun run metadata

# Build slides (also generates metadata)
bun run build

# Dev mode
bun run dev
```

## 📖 Full Documentation

- [Metadata System Guide](./METADATA_SYSTEM.md)
- [Next.js Integration Examples](./NEXTJS_EXAMPLES.md)
- [metadata.json Template](./METADATA_JSON_TEMPLATE.md)

## 🔗 API Endpoint

**Production**: `https://zheng-talks.netlify.app/talks-metadata.json`

Returns:

```json
{
  "generatedAt": "2025-12-22T...",
  "count": 6,
  "talks": [...]
}
```

## 💡 Tips

1. **Tags**: Use lowercase, hyphen-separated (e.g., `"deep-learning"`)
2. **Dates**: Auto-extracted from folder names (`2025-12-28`)
3. **Optional fields**: Only add what's relevant
4. **Custom fields**: Use `custom` object for special metadata

## ⚙️ Configuration

Edit [`scripts/collect-metadata.ts`](../scripts/collect-metadata.ts) to:

- Change URL mappings
- Modify extraction logic
- Add custom fields

## 🚨 Troubleshooting

**Metadata not updating?**

1. Check GitHub Actions tab
2. Run `bun run metadata` locally
3. Verify `metadata.json` is valid JSON

**Missing fields?**

1. Check frontmatter in `slides.md`
2. Add to `metadata.json`
3. Rebuild metadata

**CORS issues in Next.js?**

- The endpoint has CORS enabled
- Use server-side fetch (recommended)
- Or add proxy API route
