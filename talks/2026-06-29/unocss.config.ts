import config from "@slidev/client/uno.config.ts";
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

      // DESIGN.md on-dark text tokens — for text on code blocks and dark surfaces
      "text-ink": "text-[#141413] dark:text-warm-50",
      "text-on-dark": "text-[#faf9f5]",
      "text-on-dark-soft": "text-[#a09d96]",

      // ══════════════════════════════════════════════════════════════
      // TYPE SCALE TOKENS  (Claude DESIGN.md)
      //
      // Font families are defined in styles/style.css:
      //   Display (h1,h2) — EB Garamond serif, weight 600
      //   Title  (h3-h6) — Inter sans, weight 600
      //   Body   (p,li)  — Inter sans, weight 400
      //   Code   (pre)   — JetBrains Mono, weight 400
      //
      // Weight discipline:
      //   400 running text, code
      //   600 headings, strong emphasis
      //   700 display numerals only (stat counters)
      //
      // Progressive negative tracking on display sizes
      // (Claude DESIGN.md Copernicus pattern)
      // ══════════════════════════════════════════════════════════════

      // Display: EB Garamond serif — progressive negative tracking
      "text-display-xl": "text-[64px] leading-[1.05] tracking-[-1.5px]",
      "text-display-lg": "text-[48px] leading-[1.10] tracking-[-1px]",
      "text-display-md": "text-[36px] leading-[1.15] tracking-[-0.5px]",
      "text-display-sm": "text-[28px] leading-[1.20] tracking-[-0.3px]",

      // Title: Inter sans — clean, tight
      "text-title-lg": "text-[22px] leading-[1.3]",
      "text-title-md": "text-[18px] leading-[1.4]",
      "text-title-sm": "text-[16px] leading-[1.4]",

      // Body: Inter sans — comfortable reading
      "text-body-md": "text-[16px] leading-[1.55]",
      "text-body-sm": "text-[14px] leading-[1.55]",

      // Supporting — self-contained weights and tracking
      "text-caption-token": "text-[13px] leading-[1.4] font-500",
      "text-caption-caps":
        "text-[12px] leading-[1.4] font-500 tracking-[1.5px] uppercase",

      // ── Cards ──────────────────────────────────────────────────────────
      // `card` is the visual foundation: background, rounding, ring.
      // Used by both raw <div class="card"> in slides.md AND the <Card>
      // Vue component (which adds structural features: title, subtitle,
      // items, LaTeX rendering). When styling cards, edit HERE — the
      // component picks up these styles automatically via class="card".
      //
      // Light: warm-200 (#efe9de) on warm-50 (#faf9f5) — visible step
      // Dark:  warm-950 (#252320) on warm-1000 (#181715) — visible step
      card:
        "rounded-xl bg-warm-200 dark:bg-warm-950 " +
        "ring-1 ring-warm-300/60 dark:ring-warm-800/40",

      // Elevated variant for nested or emphasized cards.
      // Light: warm-300 (#e8e0d2) — one step above base card
      // Dark:  warm-900 (#3d3a2f) — one step above base card
      "card-elevated":
        "rounded-xl bg-warm-300 dark:bg-warm-900 " +
        "ring-1 ring-warm-400/50 dark:ring-warm-700/40",

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
          sans: ["Inter", "Noto Sans SC"],
          serif: ["EB Garamond", "Noto Serif SC"],
          mono: "JetBrains Mono"
        },
      }),
    ],
  },
]);
