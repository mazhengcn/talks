import config from "@slidev/client/uno.config.ts";
import { mergeConfigs, presetWebFonts } from "unocss";

export default mergeConfigs([
  config,
  {
    theme: {
      colors: {
        // Anthropic-inspired warm palette
        warm: {
          50: "#faf9f5", // Canvas
          100: "#f5f0e8", // Surface soft
          200: "#efe9de", // Surface card
          300: "#e8e0d2", // Surface strong
          400: "#d9cfbb",
          500: "#c4b99e",
          600: "#a0987c",
          700: "#78725b",
          800: "#545041",
          900: "#3d3a2f",
          950: "#252320", // Dark elevated
          975: "#1f1e1b", // Dark soft
          1000: "#181715", // Dark surface
        },
        coral: {
          50: "#fdf0ec",
          100: "#fbe0d9",
          200: "#f6c1b3",
          300: "#f0a28d",
          400: "#e68367",
          500: "#cc785c", // Primary
          600: "#a9583e", // Active/hover
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
          500: "#e8a55a", // Accent
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
          :root {
            --slidev-code-padding: 8px 12px;
          }
          #slide-content {
            background-color: #faf9f5 !important;
            color: #141413 !important;
          }
          .dark #slide-content {
            background-color: #181715 !important;
            color: #faf9f5 !important;
          }
          .slidev-layout {
            font-family: 'Inter', 'Noto Sans SC', system-ui, -apple-system, sans-serif;
          }
          .slidev-layout h1, .slidev-layout h2, .slidev-layout h3 {
            font-family: 'Noto Serif SC', 'Source Serif 4', 'Noto Sans SC', serif;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: -0.015em;
          }
          .slidev-layout h1 {
            letter-spacing: -0.025em;
          }
          .slidev-layout p, .slidev-layout li {
            line-height: 1.625;
          }
        `,
      },
    ],
    shortcuts: {
      // ── Semantic surfaces ─────────────────────────
      "bg-background": "bg-warm-50 dark:bg-warm-1000",
      "text-foreground": "text-warm-1000 dark:text-warm-50",
      "text-foreground-soft": "text-warm-900 dark:text-warm-200",
      "bg-muted": "bg-warm-100 dark:bg-warm-975",
      "text-muted-foreground": "text-warm-700 dark:text-warm-400",
      "border-border": "border-warm-300 dark:border-warm-800",
      "text-body": "text-warm-900/80 dark:text-warm-200/80",
      "text-subtle": "text-warm-600 dark:text-warm-500",

      // ── Card — elevated surface with warm tint ──
      card:
        "rounded-xl " +
        "border border-warm-300/60 dark:border-warm-800/60 " +
        "bg-warm-100/60 dark:bg-warm-950/60 " +
        "backdrop-blur-sm " +
        "shadow-sm ring-1 ring-warm-1000/3 dark:ring-warm-50/3",

      // ── Card elevated — more prominent ───────────
      "card-elevated":
        "rounded-xl " +
        "border border-warm-300/80 dark:border-warm-700/60 " +
        "bg-warm-100/80 dark:bg-warm-950/80 " +
        "backdrop-blur-md " +
        "shadow-md ring-1 ring-warm-1000/5 dark:ring-warm-50/5",

      // ── Badges ──────────────────────────────────
      badge:
        "inline-flex items-center rounded-full " +
        "border border-warm-300/70 dark:border-warm-700/50 " +
        "bg-warm-200/60 dark:bg-warm-900/50 " +
        "px-2.5 py-0.5 text-xs font-medium " +
        "text-warm-700 dark:text-warm-300",

      "badge-primary":
        "inline-flex items-center rounded-full " +
        "border border-coral-300/60 dark:border-coral-700/40 " +
        "bg-coral-50/80 dark:bg-coral-950/50 " +
        "px-2.5 py-0.5 text-xs font-medium " +
        "text-coral-600 dark:text-coral-300",

      "badge-accent":
        "inline-flex items-center rounded-full " +
        "border border-amber-300/60 dark:border-amber-700/40 " +
        "bg-amber-50/80 dark:bg-amber-950/50 " +
        "px-2.5 py-0.5 text-xs font-medium " +
        "text-amber-600 dark:text-amber-300",

      // ── Accent colors ───────────────────────────
      "text-primary": "text-coral-500 dark:text-coral-400",
      "text-accent": "text-amber-500 dark:text-amber-400",
      "bg-primary": "bg-coral-500 dark:bg-coral-400",
      "bg-accent": "bg-amber-500 dark:bg-amber-400",

      // ── Callout boxes ───────────────────────────
      callout:
        "rounded-lg " +
        "border border-coral-200/60 dark:border-coral-800/40 " +
        "bg-coral-50/70 dark:bg-coral-950/30 " +
        "p-3 text-sm text-coral-700 dark:text-coral-300",

      "callout-accent":
        "rounded-lg " +
        "border border-amber-200/60 dark:border-amber-800/40 " +
        "bg-amber-50/70 dark:bg-amber-950/30 " +
        "p-3 text-sm text-amber-700 dark:text-amber-300",

      // ── Separator ───────────────────────────────
      separator: "border-b border-warm-300/70 dark:border-warm-800/50",
    },
    presets: [
      presetWebFonts({
        fonts: {
          sans: ["Noto Sans SC", "Inter"],
          serif: ["Noto Serif SC", "Source Serif 4"],
          mono: "JetBrains Mono",
        },
      }),
    ],
  },
]);
