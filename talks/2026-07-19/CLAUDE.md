# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About this talk

长聘教职答辩 (Tenure-Track Defense) — Zheng Ma's promotion presentation at Shanghai Jiao Tong University, School of Mathematical Sciences. Content is in Chinese. The talk is not published (`"published": false` in metadata.json).

The visual design follows the **Claude.com DESIGN.md** system (`claude.design.md`): cream canvas (#faf9f5), coral primary (#cc785c), EB Garamond serif display headings, Inter sans body, JetBrains Mono code. This is deliberately distinct from the SJTU-branded template used by other talks in this repo.

## Design system reference

The `claude.design.md` file is a [DESIGN.md](https://github.com/google-labs-code/design.md) specification — a machine-readable design token file that defines the Claude.com visual language. It is **not** a CLAUDE.md. The talk's UnoCSS config (`unocss.config.ts`) implements a subset of these tokens as shortcuts and color scales.

## Custom UnoCSS layer

`unocss.config.ts` defines the entire visual system beyond what Slidev's default preset provides:

- **Color scales:** `warm` (cream-based neutrals 50–1000), `coral` (primary, 50–950), `amber` (accent, 50–950)
- **Semantic tokens** (layer 1): `bg-background`, `text-foreground`, `text-primary`, `bg-primary`, `bg-card`, `bg-muted`, `bg-secondary`, `text-muted-foreground`, `text-accent`, `bg-accent`, `border-border` — shadcn/ui-style naming mapped to warm/coral/amber palette values with `dark:` variants
- **Type scale shortcuts** (layer 2): `text-display-{xl,lg,md,sm}` (EB Garamond serif), `text-title-{lg,md,sm}`, `text-body-{lg,md,sm}`, `text-caption-token`, `text-caption-caps`
- **Component shortcuts** (layer 3): `card`, `card-elevated`, `callout`, `callout-accent`, `badge`, `badge-primary`, `badge-accent`, `separator`, `divider`, `caption`, `stat`, `stat-num`, `stat-label`, `ref-entry`, `journal-name`, `theorem`, `definition`
- **Web fonts** (via `presetWebFonts`): Inter + Noto Sans SC (sans, Google Fonts), EB Garamond + Noto Serif SC (serif, Google Fonts), JetBrains Mono (mono, Google Fonts)

`styles/style.css` sets the typographic hierarchy: EB Garamond serif for `h1`/`h2` (weight 700), Inter sans for `h3`–`h6` (weight 600), Inter sans for body (weight 400). All color values use `@apply` semantic shortcuts (`text-primary`, `bg-background`, `bg-coral-50`, etc.) — no hardcoded hex in CSS.

## Custom components

All four components are talk-specific (not from the template):

- **`Card.vue`** — Structured content block. Props: `title`, `subtitle`, `items` (string array), `icon` (Iconify icon name), `size` (sm/md/lg), `variant` (default/elevated/callout/callout-accent), `enableLatex`. Renders inline markdown in title/subtitle/items. When `enableLatex` is true, runs KaTeX on `$...$` math after mount and on prop changes.
- **`DataTable.vue`** — Card-wrapped table. Props: `headers`, `rows`, `highlightCol` (0-indexed column to highlight in coral), `caption`, `enableLatex` (default true). Renders inline markdown and KaTeX in all cells.
- **`List.vue`** — Standalone list with KaTeX rendering (same pattern as Card but without card wrapping).
- **`SectionDivider.vue`** — Visual section divider.

## Composables

- **`useKaTeX.ts`** — Dynamic KaTeX loader + DOM walker. Walks a container's text nodes, finds `$...$` delimiters, and replaces them with KaTeX-rendered `<span>` elements. Inherits computed styles (color, font, background) from the parent element and propagates them to nested `.katex` children — this is critical for gradient text and theme-aware colors to work inside math expressions.

## Utilities

- **`markdown.ts`** — `renderInlineMarkdown(text)`: HTML-escapes input, then converts `**bold**`, `*italic*`, `` `code` ``, `~~strikethrough~~` to HTML. LaTeX `$...$` is left untouched (rendered separately by `useKaTeX`).

## Slides structure

`slides.md` has four major sections with Chinese content:

1. **个人情况简介** — Academic background, publications (30+ papers, 5 preprints), open-source software (DeepRTE, APNNs, Kipack), and funding (NSFC major/key/young, provincial)
2. **教学与人才培养** — Teaching 13 courses across undergrad/grad levels, curriculum design for Math+AI, student supervision (6 PhD, 3 MS, 2 graduated PhD, 5 graduated MS, 1 postdoc, 13 undergrad theses)
3. **科学研究与应用** — Three research lines: DeepRTE (neural operator for radiative transfer, 80× speedup), APNNs (asymptotic-preserving neural networks for multiscale kinetic equations), Diffusion models for PDE inverse problems (FWI, ODE-DPS, Wasserstein-2 guidance)
4. **服务与未来规划** — Service (conference organization, journal reviewing, admissions), AI4S vision (data × model × algorithm as constraints), Loop Engineering (LLM agent-driven scientific computing), plasma fusion foundation model as next frontier

Appendices: full publication list (34 papers), complete teaching records (2020–2026).

## LaTeX usage

The talk uses KaTeX extensively in slides.md. Math appears in two contexts:

1. **Inline in prose** — `$...$` inside card titles, subtitles, items, table cells. Rendered at runtime by `useKaTeX` (when `enableLatex` is true on Card/DataTable).
2. **Display math** — `$$...$$` blocks rendered by Slidev's built-in KaTeX support.

Key mathematical content includes the Boltzmann/transport equation, asymptotic analysis notation (`ε → 0`, `O(ε)`), and neural operator formulations.
