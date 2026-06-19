# Next.js Integration Examples

## Installation

1. Copy the type definitions:

```bash
mkdir -p types
curl -o types/talks-metadata.ts https://raw.githubusercontent.com/mazhengcn/talks/main/types/metadata.ts
```

2. Install dependencies (if using custom utilities):

```bash
npm install date-fns # or your preferred date library
```

## Example Components

### TalkCard Component

```typescript
// components/TalkCard.tsx
import type { TalkMetadata } from '@/types/talks-metadata'
import Link from 'next/link'

interface TalkCardProps {
  talk: TalkMetadata
}

export function TalkCard({ talk }: TalkCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold mb-2">{talk.title}</h3>

      <div className="text-sm text-gray-600 mb-3">
        <time dateTime={talk.date}>
          {new Date(talk.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        {talk.conference && (
          <span className="ml-2">• {talk.conference}</span>
        )}
        {talk.location && (
          <span className="ml-2">📍 {talk.location}</span>
        )}
      </div>

      {talk.description && (
        <p className="text-gray-700 mb-4">{talk.description}</p>
      )}

      {talk.tags && talk.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {talk.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-3">
        {talk.slidesUrl && (
          <Link
            href={talk.slidesUrl}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            View Slides →
          </Link>
        )}
        {talk.pdfUrl && (
          <Link
            href={talk.pdfUrl}
            target="_blank"
            className="text-green-600 hover:underline"
          >
            Download PDF
          </Link>
        )}
      </div>
    </div>
  )
}
```

### Talks List Page

```typescript
// app/talks/page.tsx
import { TalkCard } from '@/components/TalkCard'
import type { TalksCollection } from '@/types/talks-metadata'

async function getTalks(): Promise<TalksCollection> {
  const res = await fetch(
    'https://zheng-talks.netlify.app/talks-metadata.json',
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch talks')
  }

  return res.json()
}

export default async function TalksPage() {
  const { talks, count } = await getTalks()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Talks & Presentations
      </h1>

      <p className="text-gray-600 mb-8">
        {count} talks total
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {talks.map(talk => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>
    </div>
  )
}
```

### Filtered by Year

```typescript
// app/talks/[year]/page.tsx
import { TalkCard } from '@/components/TalkCard'
import type { TalksCollection } from '@/types/talks-metadata'
import { notFound } from 'next/navigation'

async function getTalks(): Promise<TalksCollection> {
  const res = await fetch(
    'https://zheng-talks.netlify.app/talks-metadata.json',
    { next: { revalidate: 3600 } }
  )
  return res.json()
}

export async function generateStaticParams() {
  const { talks } = await getTalks()
  const years = [...new Set(talks.map(t => t.date.split('-')[0]))]
  return years.map(year => ({ year }))
}

export default async function YearPage({
  params
}: {
  params: { year: string }
}) {
  const { talks } = await getTalks()
  const yearTalks = talks.filter(t => t.date.startsWith(params.year))

  if (yearTalks.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Talks from {params.year}
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {yearTalks.map(talk => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>
    </div>
  )
}
```

### Search & Filter Component

```typescript
'use client'

import { useState, useMemo } from 'react'
import { TalkCard } from '@/components/TalkCard'
import type { TalkMetadata } from '@/types/talks-metadata'

interface TalksSearchProps {
  talks: TalkMetadata[]
}

export function TalksSearch({ talks }: TalksSearchProps) {
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState<string>('')

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    talks.forEach(talk => {
      talk.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [talks])

  const filteredTalks = useMemo(() => {
    return talks.filter(talk => {
      const matchesSearch = search === '' ||
        talk.title.toLowerCase().includes(search.toLowerCase()) ||
        talk.description?.toLowerCase().includes(search.toLowerCase())

      const matchesTag = selectedTag === '' ||
        talk.tags?.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [talks, search, selectedTag])

  return (
    <div>
      <div className="mb-8 flex gap-4">
        <input
          type="text"
          placeholder="Search talks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-lg"
        />

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="">All Tags</option>
          {allTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTalks.map(talk => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>

      {filteredTalks.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          No talks found matching your criteria
        </p>
      )}
    </div>
  )
}
```

Then use it in a page:

```typescript
// app/talks/search/page.tsx
import { TalksSearch } from '@/components/TalksSearch'
import type { TalksCollection } from '@/types/talks-metadata'

async function getTalks(): Promise<TalksCollection> {
  const res = await fetch(
    'https://zheng-talks.netlify.app/talks-metadata.json',
    { next: { revalidate: 3600 } }
  )
  return res.json()
}

export default async function SearchPage() {
  const { talks } = await getTalks()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Search Talks</h1>
      <TalksSearch talks={talks} />
    </div>
  )
}
```

### Timeline View

```typescript
// components/TalksTimeline.tsx
import type { TalkMetadata } from '@/types/talks-metadata'
import Link from 'next/link'

interface TalksTimelineProps {
  talks: TalkMetadata[]
}

export function TalksTimeline({ talks }: TalksTimelineProps) {
  const groupedByYear = talks.reduce((acc, talk) => {
    const year = talk.date.split('-')[0]
    if (!acc[year]) acc[year] = []
    acc[year].push(talk)
    return acc
  }, {} as Record<string, TalkMetadata[]>)

  const years = Object.keys(groupedByYear).sort((a, b) => b.localeCompare(a))

  return (
    <div className="space-y-12">
      {years.map(year => (
        <div key={year}>
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            {year}
          </h2>

          <div className="space-y-6 border-l-2 border-gray-300 pl-6">
            {groupedByYear[year].map(talk => (
              <div key={talk.id} className="relative">
                <div className="absolute -left-8 w-4 h-4 bg-blue-600 rounded-full" />

                <div className="bg-white p-4 rounded-lg shadow">
                  <time className="text-sm text-gray-500">
                    {new Date(talk.date).toLocaleDateString()}
                  </time>

                  <h3 className="text-xl font-semibold mt-1">
                    {talk.title}
                  </h3>

                  {talk.conference && (
                    <p className="text-gray-600 mt-1">
                      {talk.conference}
                      {talk.location && ` • ${talk.location}`}
                    </p>
                  )}

                  {talk.slidesUrl && (
                    <Link
                      href={talk.slidesUrl}
                      target="_blank"
                      className="inline-block mt-2 text-blue-600 hover:underline"
                    >
                      View Slides →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
```

## API Route Examples

### Get All Talks

```typescript
import type { TalksCollection } from "@/types/talks-metadata";
// app/api/talks/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://zheng-talks.netlify.app/talks-metadata.json",
      { next: { revalidate: 3600 } },
    );

    const data: TalksCollection = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch talks" },
      { status: 500 },
    );
  }
}
```

### Get Recent Talks

```typescript
import type { TalksCollection } from "@/types/talks-metadata";
// app/api/talks/recent/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number.parseInt(searchParams.get("limit") || "5");

  try {
    const res = await fetch(
      "https://zheng-talks.netlify.app/talks-metadata.json",
      { next: { revalidate: 3600 } },
    );

    const data: TalksCollection = await res.json();
    const recent = data.talks.slice(0, limit);

    return NextResponse.json({ talks: recent, count: recent.length });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch talks" },
      { status: 500 },
    );
  }
}
```

### Search Endpoint

```typescript
import type { TalksCollection } from "@/types/talks-metadata";
// app/api/talks/search/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const tag = searchParams.get("tag");

  try {
    const res = await fetch(
      "https://zheng-talks.netlify.app/talks-metadata.json",
      { next: { revalidate: 3600 } },
    );

    const data: TalksCollection = await res.json();

    let filtered = data.talks;

    if (query) {
      filtered = filtered.filter(
        (talk) =>
          talk.title.toLowerCase().includes(query) ||
          talk.description?.toLowerCase().includes(query) ||
          talk.conference?.toLowerCase().includes(query),
      );
    }

    if (tag) {
      filtered = filtered.filter((talk) => talk.tags?.includes(tag));
    }

    return NextResponse.json({ talks: filtered, count: filtered.length });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to search talks" },
      { status: 500 },
    );
  }
}
```

## RSS Feed Generation

```typescript
import type { TalksCollection } from "@/types/talks-metadata";
// app/talks/rss.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://zheng-talks.netlify.app/talks-metadata.json",
    { next: { revalidate: 3600 } },
  );

  const data: TalksCollection = await res.json();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Zheng's Talks</title>
    <link>https://your-site.com/talks</link>
    <description>Talks and presentations</description>
    ${data.talks
      .map(
        (talk) => `
    <item>
      <title>${escapeXml(talk.title)}</title>
      <link>${talk.slidesUrl}</link>
      <description>${escapeXml(talk.description || "")}</description>
      <pubDate>${new Date(talk.date).toUTCString()}</pubDate>
      <guid>${talk.id}</guid>
    </item>
    `,
      )
      .join("")}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return c;
    }
  });
}
```
