# Talk Metadata Configuration

This `metadata.json` file provides additional information about this talk that complements the frontmatter in `slides.md`.

## Fields

### Required/Recommended

- **conference**: Name of the conference, workshop, or event
- **location**: City and country (e.g., "Shanghai, China")
- **description**: Brief description of the talk content
- **tags**: Array of relevant topics/keywords

### Optional

- **collaborators**: Array of co-authors or collaborators
- **published**: Boolean indicating if the talk is public (default: true)
- **custom**: Object for any custom fields you want to track

## Example

```json
{
  "conference": "ICML 2025",
  "location": "Vienna, Austria",
  "description": "Presenting our latest work on deep learning for PDEs",
  "tags": ["deep-learning", "pde", "scientific-computing"],
  "collaborators": ["Jane Doe", "John Smith"],
  "published": true,
  "custom": {
    "award": "Best Paper Award",
    "video": "https://youtube.com/watch?v=...",
    "slides_version": "2.0"
  }
}
```

## Field Details

### conference
The official name of the conference or event. Examples:
- "International Conference on Machine Learning (ICML) 2025"
- "NeurIPS 2025"
- "Shanghai University Seminar Series"

### location
Physical location where the talk was given. Format: "City, Country"
- "Vienna, Austria"
- "Shanghai, China"
- "Virtual" (for online talks)

### description
A concise summary (1-3 sentences) of what the talk covers. This will be displayed in listings and search results.

### tags
Keywords for categorization and search. Use lowercase, hyphen-separated words:
- "deep-learning"
- "neural-networks"
- "scientific-computing"
- "radiative-transfer"

### collaborators
Names of people who contributed to this work. Format as array of strings:
```json
["Jane Doe", "John Smith", "Alice Wang"]
```

### published
Set to `false` if you want to hide this talk from public listings:
```json
"published": false
```

### custom
Any additional metadata specific to this talk:
```json
{
  "award": "Best Presentation",
  "video": "https://...",
  "code": "https://github.com/...",
  "dataset": "https://...",
  "doi": "10.1000/...",
  "citations": 42
}
```

## Notes

- This file is **optional** - if not present, metadata will be extracted from `slides.md` frontmatter
- Fields here **override** auto-extracted values from frontmatter
- The file is read during the metadata collection process
- Changes will be reflected after the next build or metadata update
