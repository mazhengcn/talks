# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, and other AGENTS.md-compatible tools) when working with code in this repository.

## Project overview

A [Slidev](https://sli.dev) monorepo for presentations. Each talk under `talks/` is its own Bun workspace. The repo builds to static HTML, deployed on Netlify.

## Commands

```bash
bun --bun run dev              # Interactive picker → launch slidev dev server for a talk
bun --bun run build            # Build all talks + generate metadata
bun --bun run typecheck        # Type-check with vue-tsc
bun --bun run lint             # oxlint (TypeScript + Vue + import plugins)
bun --bun run format           # oxfmt — format all files (skips Slidev markdown)
bun --bun run format:check     # oxfmt — check formatting only
bun --bun run metadata         # Generate talks-metadata.json only
bun --bun run update           # Regenerate netlify.toml redirects from talk dirs
```

Per-talk (inside `talks/<talk-name>/`):

```bash
bun --bun run dev              # Start slidev dev server for this talk
bun --bun run build            # Build + export PDF for this talk (calls scripts/build.ts)
bun --bun run export           # Export slides as PDF only
```

There are no tests in this repo.

### MCP server

Slidev exposes an MCP (Model Context Protocol) server at the dev server's `/__mcp` endpoint. This lets AI coding agents interact with a running presentation directly — navigating slides, reading slide content, and more.

Register the MCP server with:

```bash
claude mcp add --transport http slidev http://localhost:3030/__mcp  # Claude Code
codex mcp add --transport http slidev http://localhost:3030/__mcp   # Codex
```

The Slidev dev server must be running (via `bun run dev`) for the MCP server to be reachable. If the dev server is on a different port, adjust the URL accordingly.

## Architecture

### Workspace structure

Each directory under `talks/` is a Bun workspace (`"workspaces": ["talks/*"]` in root `package.json`). Dependencies use Bun's **catalog protocol** — the root `package.json` defines version pins under `workspaces.catalog`, and individual talk `package.json` files reference `"catalog:"` strings. This ensures all talks share the same Slidev, UnoCSS, and Vite versions.

### Talk structure

Every talk has:

- `slides.md` — Slidev markdown with YAML frontmatter (title, lang, etc.). **Note:** oxfmt skips `slides.md` and `pages/*.md` — it cannot parse Slidev's YAML frontmatter syntax. Markdown formatting for these files requires `prettier-plugin-slidev` if needed.
- `metadata.json` — conference/location/tags/description (optional, merged into the global metadata)
- `package.json` — `dev`/`build`/`export` scripts calling slidev CLI or `scripts/build.ts`
- `components/`, `styles/`, `public/`, `pages/` — standard Slidev extension directories
- `vite.config.ts` — optional Vite config override (some talks include this)
- `global-bottom.vue` — per-talk global bottom component (speaker info, conference badge)
- `README.md` — first `# Title` line is used by the dev picker for display

### Template

`template/` is a canonical talk with SJTU branding. When creating a new talk, copy `template/` and adapt `slides.md` + `metadata.json`.

Key template components:

- **`GlassCard.vue`** — glassmorphism card with 10 color variants, 3 sizes, optional Iconify icon, and runtime KaTeX rendering for `$...$` math in titles/subtitles/list items
- **`List.vue`** — standalone list with the same KaTeX rendering as GlassCard, without card wrapping
- **`ProsCons.vue`** — two-column animated comparison (pros/cons) triggered on `v-click`
- **`Repo.vue`** — GitHub repository link with `carbon-logo-github` icon
- **`Emphasis.vue`** — inline code-style pill
- **`IconTest.vue`** — utility component for testing Iconify icon rendering and dynamic class binding

Template styles:

- **`styles/preset-sjtu.ts`** — UnoCSS preset defining SJTU color scales (blue/academic), tech sub-palettes, text/background gradients, glow effects, and 30+ theme-aware shortcuts
- **`styles/style.css`** — CSS custom properties for light/dark mode, Monaco editor overrides, KaTeX sizing, v-click transitions
- **`styles/index.ts`** — side-effect CSS import

Template documentation under `docs/`:

- **`COLOR_SYSTEM.md`** — color palette and theming reference
- **`THEME_SUPPORT.md`** — light/dark mode theme support guide
- **`USAGE_EXAMPLES.md`** — component usage examples

The template's `global-bottom.vue` generates animated polygon background layers using `seedrandom` for deterministic randomness. It reads per-slide frontmatter keys (`glow`, `glowOpacity`, `glowHue`, `glowSeed`) for configuration and adapts blend modes for light/dark themes.

### UnoCSS architecture

Root `uno.config.ts` is a trivial re-export of `@slidev/client/uno.config.ts`. The actual customization happens in `template/unocss.config.ts` (and per-talk copies), which merges the Slidev default with `presetSJTU()` and `presetWebFonts()` (Inter, JetBrains Mono, Ubuntu, Caveat — with local font caching via `createLocalFontProcessor()`).

### Scripts

- **`scripts/picker.ts`** — interactive CLI that lists date-prefixed talk folders (matching `^\d{4}-`), reads `README.md` titles, and launches slidev. Supports `-y` flag to auto-select the first folder. `bun dev` opens VS Code on the slides.md (via `code`) and starts the dev server.
- **`scripts/build.ts`** — builds a single talk via `slidev build` (using `tinyexec` as a lightweight `execa` alternative). Locates the repo root via `findUp` on `bun.lock`. Has a **stale-dist caching mechanism**: if `dist-stale/<talk-name>/` exists, it copies the stale build directly (including `talks-metadata.json`) to `dist/` and skips the full build. If no PDF exists in the talk's `assets/`, it exports one via `slidev export --per-slide`. Detects the talk directory from `cwd.split("/").pop()`.
- **`scripts/collect-metadata.ts`** — scans all `talks/` dirs (ignoring `reuse` and `template`), extracts frontmatter via **hand-rolled regex parsing** (not a YAML parser — multi-line YAML values are not supported in slides.md frontmatter). Extracts speaker info from a `text-left` div in the slides content and collaborators from "Joint work with" patterns. Uses typed metadata structures (`TalkMetadata`, `TalkMetadataConfig`, `TalksCollection`) from `types/metadata.ts`. Reads `BASE_URL` env var (default: `https://zheng-talks.netlify.app`). Outputs to both `dist-stale/` and `public/`. Can be imported and called as `collectAllMetadata()`.
- **`scripts/redirects.ts`** — auto-generates `netlify.toml` from scratch. Discovers all talks via `talks/*/package.json` glob (not just date-prefixed ones — unlike the picker). For each talk: `/talk/pdf` → 302 to raw PDF on GitHub, `/talk/src` → 302 to GitHub source tree, `/talk/*` → 200 SPA fallback. Also generates a root `/` → 302 redirect to the base URL. Preserves CORS headers on `/talks-metadata.json`.
- **`scripts/random-icons.ts`** — utility to generate random icon lists from Iconify collections. Not integrated into the build pipeline.
- **`scripts/pdf2png.sh`** — Ghostscript-based PDF-to-PNG converter (300 DPI, transparent). Not called by any orchestration script.

### Metadata system

The metadata pipeline is documented in `docs/METADATA_SYSTEM.md`. Additional docs live under `docs/`:

- **`ARCHITECTURE.md`** — architecture decision records and design rationale
- **`IMPLEMENTATION_SUMMARY.md`** — implementation notes and summaries
- **`METADATA_JSON_TEMPLATE.md`** — metadata JSON schema reference
- **`NEXTJS_EXAMPLES.md`** — examples for consuming the metadata API
- **`QUICK_START.md`** — quick start guide
- **`README.md`** — docs index

A GitHub Action (`.github/workflows/update-metadata.yml`) runs `collect-metadata.ts` on every push to main that touches `talks/**`, commits the updated JSON back (with `[skip ci]`), and uploads it as a 90-day artifact. The JSON is served at `https://zheng-talks.netlify.app/talks-metadata.json` with `Access-Control-Allow-Origin: *` and 1-hour cache.

### Key dependencies

- **Slidev** (`@slidev/cli`, `@slidev/client`) — presentation framework
- **UnoCSS** — atomic CSS; root `uno.config.ts` re-exports `@slidev/client/uno.config.ts`
- **Bun** — package manager, runtime, and build tool
- **oxlint** — fast linter (TypeScript, Vue, import, unicorn, oxc plugins; `.oxlintrc.json`)
- **oxfmt** — fast formatter (80 char width; Slidev markdown excluded; `.oxfmtrc.json`)
- **Playwright Chromium** — used by Slidev for PDF export
- **Netlify** — hosting with SPA redirects

### TypeScript config

`tsconfig.json` targets `esnext` with `module: "esnext"`, uses `bundler` module resolution, `noEmit: true`, `allowImportingTsExtensions: true`, `allowSyntheticDefaultImports: true`. Excludes markdown files and `dist-stale`/`dist` directories.

`types.d.ts` declares an ambient module for `.css` imports so TypeScript doesn't error on CSS side-effect imports.

### Other directories

- **`fonts/`** — local font files for offline use/caching (used by `presetWebFonts` with `createLocalFontProcessor()`)
- **`.devcontainer/`** — VS Code Dev Container configuration for reproducible development environments
- **`dist/`** / **`dist-stale/`** — build outputs; `dist-stale/` serves as a per-talk build cache (see `scripts/build.ts`)

### Environment variables

No `.env` files exist. The only env var used is `BASE_URL` (in `collect-metadata.ts`).

## Project skills

### slidev (`/slidev`)

Comprehensive Slidev reference skill for creating and editing presentations. Covers Markdown syntax, frontmatter, animations, code highlighting, diagrams (Mermaid/PlantUML/LaTeX), layouts, presenter tools, and export/build options. Invoke via `/slidev` or use `Skill` tool with `slidev` when working on `slides.md` files.

Full reference files live under `.agents/skills/slidev/references/`.
