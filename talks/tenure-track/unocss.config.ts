import config from "@slidev/client/uno.config.ts";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import { mergeConfigs, presetWebFonts } from "unocss";

export default mergeConfigs([
  config,
  {
    theme: {
      colors: {
        warm: {
          50: "#faf9f5",
          100: "#f5f0e8",
          200: "#efe9de",
          300: "#e8e0d2",
          400: "#d9cfbb",
          500: "#c4b99e",
          600: "#a0987c",
          700: "#78725b",
          800: "#545041",
          900: "#3d3a2f",
          950: "#252320",
          975: "#1f1e1b",
          1000: "#181715",
        },
        coral: {
          50: "#fdf0ec",
          100: "#fbe0d9",
          200: "#f6c1b3",
          300: "#f0a28d",
          400: "#e68367",
          500: "#cc785c",
          600: "#a9583e",
          700: "#8a4230",
          800: "#6b3225",
          900: "#4c231a",
          950: "#2d1410",
        },
        amber: {
          50: "#fef9f0",
          100: "#fdf0db",
          200: "#fae0b7",
          300: "#f5cc89",
          400: "#f0b85b",
          500: "#e8a55a",
          600: "#d49340",
          700: "#b07830",
          800: "#8c5e25",
          900: "#68441c",
          950: "#442b12",
        },
      },
    },
    preflights: [
      {
        getCSS: () => `
          /* ── Slidev code padding ────────────────── */
          :root {
            --slidev-code-padding: 8px 12px;
          }

          /* ── Slide background ─────────────────── */
          #slide-content {
            background-color: #faf9f5 !important;
            color: #141413 !important;
          }
          .dark #slide-content {
            background-color: #181715 !important;
            color: #faf9f5 !important;
          }

          /* ── Typographic defaults ────────────────── */
          .slidev-layout {
            font-family: 'Geist', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
            font-weight: 400;
            font-optical-sizing: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
          }

          /* ── Display headings: Cormorant Garamond (DESIGN.md substitute: weight 500, -0.02em) ── */
          .slidev-layout h1, .slidev-layout h2 {
            font-family: 'Cormorant Garamond', 'Noto Serif SC', 'Lora', serif !important;
            font-weight: 500 !important;
            letter-spacing: -0.02em;
            text-wrap: pretty;
          }
          .slidev-layout h1 { line-height: 1.1 !important; }
          .slidev-layout h2 { line-height: 1.15 !important; }
          /* ── Utility headings: sans, DESIGN.md title-md (18px, 500, 1.4, 0) ── */
          .slidev-layout h3, .slidev-layout h4,
          .slidev-layout h5, .slidev-layout h6 {
            font-family: 'Geist', 'Noto Sans SC', system-ui, -apple-system, sans-serif !important;
            font-weight: 500 !important;
            line-height: 1.4 !important;
            letter-spacing: 0;
            text-wrap: pretty;
          }

          /* ── Body: DESIGN.md body-md (16px, 400, 1.55, 0) ── */
          .slidev-layout p, .slidev-layout li {
            font-weight: 400;
            line-height: 1.55;
            text-wrap: pretty;
          }

          /* ── Lists: padding & marker color ──────────── */
          .slidev-layout ul, .slidev-layout ol {
            padding-left: 1.5em;
          }

          .slidev-layout ul > li::marker {
            color: #cc785c;
          }
          .dark .slidev-layout ul > li::marker {
            color: #e68367;
          }

          .slidev-layout ol > li::marker {
            color: #cc785c;
            font-weight: 600;
            font-feature-settings: "tnum";
          }
          .dark .slidev-layout ol > li::marker {
            color: #e68367;
          }

          /* ── Code blocks: DESIGN.md code-window-card (dark surface, 12px radius) ── */
          .slidev-code {
            background: #181715 !important;
            color: #faf9f5 !important;
            border-radius: 12px;
            font-family: 'JetBrains Mono', ui-monospace, monospace;
            font-size: 14px;
            line-height: 1.6;
          }
          .dark .slidev-code {
            background: #1f1e1b !important;
          }

          /* ── Inline code — warm coral tint, no border ── */
          .slidev-layout :not(pre) > code {
            background: #fdf0ec;
            color: #a9583e;
            padding: 0.15em 0.4em;
            border-radius: 4px;
            font-size: 0.9em;
          }
          .dark .slidev-layout :not(pre) > code {
            background: #2d1410;
            color: #e68367;
          }

          /* ── Links ────────────────────────────────── */
          .slidev-layout a {
            color: #a9583e;
            text-decoration: none;
            border-bottom: 1px solid transparent;
            transition: border-color 0.2s ease, color 0.2s ease;
          }
          .dark .slidev-layout a {
            color: #e68367;
          }
          .slidev-layout a:hover {
            border-bottom-color: currentColor;
            color: #8a4230;
          }
          .dark .slidev-layout a:hover {
            color: #f0a28d;
          }

          /* ── Math — KaTeX ──────────────────────────── */
          .katex {
            font-size: 1.05em !important;
            font-weight: 400 !important;
          }
          .katex-display {
            margin: 0.75em 0 !important;
          }

          /* ── Strong / emphasis ────────────────────── */
          .slidev-layout strong {
            font-weight: 600 !important;
            color: inherit;
          }
          .dark .slidev-layout strong {
            color: #faf9f5;
          }
          .slidev-layout em {
            font-style: italic;
          }

          /* ── Click transitions ────────────────────── */
          .slidev-vclick-target {
            transition: opacity 500ms ease, filter 350ms ease;
          }
          .slidev-vclick-hidden {
            opacity: 0;
            pointer-events: none;
            filter: blur(2px);
          }

          /* ── Fade transitions ─────────────────────── */
          .fade-out-leave-active {
            transition: opacity calc(var(--slidev-transition-duration) * 0.6) ease-out;
          }
          .fade-out-enter-active {
            transition: opacity calc(var(--slidev-transition-duration) * 0.8) ease-in;
            transition-delay: calc(var(--slidev-transition-duration) * 0.6);
          }
          .fade-out-enter-from,
          .fade-out-leave-to {
            opacity: 0;
          }

          /* ── Tables ────────────────────────────────── */
          .slidev-layout table {
            border-collapse: collapse;
            font-feature-settings: "tnum", "lnum";
          }
          .slidev-layout th {
            font-family: 'Geist', 'Noto Sans SC', system-ui, sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 0.7rem;
          }
          .slidev-layout td {
            font-feature-settings: "tnum", "lnum";
          }
          .slidev-layout td,
          .slidev-layout th {
            padding: 0.625rem 0.75rem;
          }

          /* ── Selection ─────────────────────────────── */
          ::selection {
            background: #f6c1b3;
            color: #141413;
          }
          .dark ::selection {
            background: #8a4230;
            color: #faf9f5;
          }

          /* ── Scrollbar ─────────────────────────────── */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #d9cfbb;
            border-radius: 3px;
          }
          .dark ::-webkit-scrollbar-thumb {
            background: #545041;
          }

          /* ── Slide number ─────────────────────────── */
          #slide-container .slidev-page-number {
            font-family: "Geist", system-ui, sans-serif;
            font-feature-settings: "tnum";
            font-size: 0.7rem;
            opacity: 0.45;
          }
        `,
      },
    ],
    shortcuts: {
      "bg-background": "bg-warm-50 dark:bg-warm-1000",
      "text-foreground": "text-warm-1000 dark:text-warm-50",
      "bg-muted": "bg-warm-100 dark:bg-warm-900",
      // DESIGN.md text tokens: body-strong=#252523, muted=#6c6a64, body=#3d3d3a, muted-soft=#8e8b82
      "text-foreground-soft": "text-[#252523] dark:text-warm-100",
      "text-muted-foreground": "text-[#6c6a64] dark:text-warm-400",
      "border-border": "border-warm-300 dark:border-warm-800",
      "text-body": "text-[#3d3d3a] dark:text-warm-300",
      "text-subtle": "text-[#8e8b82] dark:text-warm-500",

      // ── Cards: DESIGN.md feature-card = surface-card #efe9de, 12px radius ──
      card:
        "rounded-xl bg-warm-200 dark:bg-warm-975 " +
        "ring-1 ring-[#e6dfd8]/60 dark:ring-warm-800/20",

      "card-elevated":
        "rounded-xl bg-warm-300 dark:bg-warm-950 " +
        "ring-1 ring-[#e6dfd8]/70 dark:ring-warm-800/25",

      // ── Badges: DESIGN.md badge-pill = surface-card bg, ink #141413 text ──
      badge:
        "inline-flex items-center rounded-full " +
        "px-3 py-1 text-xs font-medium " +
        "bg-warm-200 dark:bg-warm-800 " +
        "text-[#141413] dark:text-warm-100",

      // DESIGN.md badge-coral: solid primary bg, white text, 12px/500/1.5px tracking
      "badge-primary":
        "inline-flex items-center rounded-full " +
        "px-3 py-1 text-xs font-medium tracking-widest uppercase " +
        "bg-coral-500 text-white",

      // DESIGN.md accent-amber #e8a55a — solid fill, matching badge-coral pattern
      "badge-accent":
        "inline-flex items-center rounded-full " +
        "px-3 py-1 text-xs font-medium tracking-widest uppercase " +
        "bg-amber-500 text-[#141413]",

      "text-primary": "text-coral-500 dark:text-coral-400",
      "text-accent": "text-amber-500 dark:text-amber-400",
      "bg-primary": "bg-coral-500 dark:bg-coral-400",
      "bg-accent": "bg-amber-500 dark:bg-amber-400",

      // ── Callouts: tinted solid bg, no borders ──
      callout:
        "rounded-lg " +
        "bg-coral-50 dark:bg-coral-950/40 " +
        "p-3 text-sm text-coral-700 dark:text-coral-300",

      "callout-accent":
        "rounded-lg " +
        "bg-amber-50 dark:bg-amber-950/40 " +
        "p-3 text-sm text-amber-700 dark:text-amber-300",

      separator: "border-b border-warm-300/70 dark:border-warm-800/50",

      // ── Simple utility components ──
      // Horizontal rule — subtle warm line for within-slide separation
      divider:
        "border-0 h-px bg-gradient-to-r " +
        "from-transparent via-warm-400/60 dark:via-warm-700/60 to-transparent",

      // Caption — DESIGN.md: 13px, weight 500, line-height 1.4
      caption: "text-[13px] leading-[1.4] font-medium text-[#8e8b82] dark:text-warm-500",

      // Stat — large number + tiny label, lighter than a card
      stat: "text-center",
      "stat-num": "text-4xl font-bold text-primary tracking-tight tabular-nums",
      "stat-label": "text-xs text-muted-foreground mt-1",
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: ["Geist", "Noto Sans SC"],
          serif: ["Cormorant Garamond", "Lora", "Noto Serif SC"],
          mono: "JetBrains Mono"
        },
        processors: createLocalFontProcessor(),
      }),
    ],
  },
]);
