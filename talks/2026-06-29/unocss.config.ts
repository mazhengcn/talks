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
      fontFamily: {
        sans: [
          "'Noto Sans SC'",
          "'PingFang SC'",
          "'Microsoft YaHei'",
          "'WenQuanYi Micro Hei'",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: [
          "'Noto Serif SC'",
          "'Songti SC'",
          "'SimSun'",
          "serif",
        ],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
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
      // TYPE SCALE TOKENS  (Chinese academic presentation)
      //
      // Font families — unified Chinese system fonts:
      //   Display (h1,h2) — Noto Serif SC, weight 700 (CSS cascade)
      //   Title  (h3-h6)  — Noto Sans SC, weight 600 (CSS cascade)
      //   Body   (p,li)   — Noto Sans SC, weight 400 (CSS cascade)
      //   Code   (pre)    — JetBrains Mono (CSS cascade)
      //
      // Each shortcut includes `font-serif` or `font-sans` so it
      // works correctly even on non-semantic elements (e.g. <p> used
      // as a heading).
      //
      // CHINESE-SPECIFIC RULES:
      //   - NO negative letter-spacing (CJK characters occupy fixed em)
      //   - Line-height 1.7+ for body text
      //   - Line-height 1.2+ for display text
      //   - Weight 700 for serif display (CJK serif projects lighter)
      // ══════════════════════════════════════════════════════════════

      // Display: Noto Serif SC — academic authority, generous leading
      "text-display-xl": "font-serif text-[56px] leading-[1.2]",
      "text-display-lg": "font-serif text-[44px] leading-[1.25]",
      "text-display-md": "font-serif text-[34px] leading-[1.3]",
      "text-display-sm": "font-serif text-[28px] leading-[1.35]",

      // Title: Noto Sans SC — clean, readable
      "text-title-lg": "font-sans text-[24px] leading-[1.4]",
      "text-title-md": "font-sans text-[20px] leading-[1.45]",
      "text-title-sm": "font-sans text-[18px] leading-[1.5]",

      // Body: Noto Sans SC — comfortable Chinese reading
      "text-body-lg": "font-sans text-[18px] leading-[1.7]",
      "text-body-md": "font-sans text-[16px] leading-[1.75]",
      "text-body-sm": "font-sans text-[14px] leading-[1.7]",

      // Supporting — self-contained weights and tracking
      "text-caption-token": "font-sans text-[13px] leading-[1.5] font-medium",
      "text-caption-caps":
        "font-sans text-[12px] leading-[1.5] font-medium tracking-[1.5px] uppercase",

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
      "stat-num": "text-4xl font-bold text-primary tabular-nums",
      "stat-label": "text-xs text-muted-foreground mt-1.5",

      // ── Academic typography ──────────────────────────────────────
      // Reference entry — paper citation line in appendix
      "ref-entry": "text-[13px] leading-[1.65] text-muted-foreground",

      // Journal name in citations (primary colored)
      "journal-name": "text-primary font-medium",

      // Theorem block — coral-tinted with left border
      theorem:
        "rounded-lg bg-coral-50/80 dark:bg-coral-950/20 " +
        "p-4 text-sm border-l-4 border-coral-400 dark:border-coral-500",

      // Definition block — amber-tinted with left border
      definition:
        "rounded-lg bg-amber-50/80 dark:bg-amber-950/30 " +
        "p-4 text-sm border-l-4 border-amber-400 dark:border-amber-500",
    },
    presets: [
      presetWebFonts({
        fonts: {
          mono: "JetBrains Mono",
        },
      }),
    ],
  },
]);
