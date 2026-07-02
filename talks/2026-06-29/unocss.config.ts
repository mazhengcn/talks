import { defineConfig, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    // ════════════════════════════════════════════════════════════
    // COLOR PALETTE — Claude.com DESIGN.md (warm cream + coral + amber).
    // ════════════════════════════════════════════════════════════
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
    // ════════════════════════════════════════════════════════════
    // FONT FAMILIES
    //
    // Chinese → Noto Sans SC (serif fallback: Noto Serif SC)
    // English → Inter (sans) + EB Garamond (serif display)
    // Mono   → JetBrains Mono
    //
    // Loaded via presetWebFonts (Google Fonts).
    // ════════════════════════════════════════════════════════════
    fontFamily: {
      sans: "'Inter', 'Noto Sans SC'",
      serif: "'EB Garamond', 'Noto Serif SC'",
      mono: "'JetBrains Mono'",
    },
  },
  shortcuts: {
    // ════════════════════════════════════════════════════════════
    // 1. SEMANTIC TOKENS — shadcn/ui-style naming.
    //    Each maps a semantic name to palette values with
    //    dark: variant for automatic theme switching.
    // ════════════════════════════════════════════════════════════

    // Background
    "bg-background": "bg-warm-50 dark:bg-warm-1000",
    "text-foreground": "text-warm-1000 dark:text-warm-50",
    "text-foreground-soft": "text-[#252523] dark:text-warm-100",

    // Card
    "bg-card": "bg-warm-200 dark:bg-warm-950",
    "text-card-foreground": "text-warm-950 dark:text-warm-50",

    // Primary
    "text-primary": "text-coral-500 dark:text-coral-400",
    "bg-primary": "bg-coral-500 dark:bg-coral-400",
    "text-primary-foreground": "text-white dark:text-warm-950",

    // Secondary
    "bg-secondary": "bg-warm-200 dark:bg-warm-800",
    "text-secondary-foreground": "text-[#111113] dark:text-warm-100",

    // Muted
    "bg-muted": "bg-warm-100 dark:bg-warm-900",
    "text-muted-foreground": "text-[#6c6a64] dark:text-warm-400",

    // Accent
    "text-accent": "text-amber-500 dark:text-amber-400",
    "bg-accent": "bg-amber-500 dark:bg-amber-400",
    "text-accent-foreground": "text-[#141413] dark:text-warm-950",

    // Border / Ring
    "border-border": "border-warm-300 dark:border-warm-800",

    // Legacy editorial aliases (used in slides.md and components)
    "text-body": "text-[#3d3d3a] dark:text-warm-300",
    "text-subtle": "text-[#8e8b82] dark:text-warm-500",
    "text-ink": "text-[#141413] dark:text-warm-50",
    "text-on-dark": "text-[#faf9f5]",
    "text-on-dark-soft": "text-[#a09d96]",

    // ════════════════════════════════════════════════════════════
    // 2. TYPE SCALE
    //
    // Display: EB Garamond serif — Claude editorial voice
    // Title/Body/Caption: Inter sans — humanist screen reading
    // ════════════════════════════════════════════════════════════

    // Display: EB Garamond serif — academic authority
    "text-display-xl": "font-serif text-[56px] leading-[1.2]",
    "text-display-lg": "font-serif text-[44px] leading-[1.25]",
    "text-display-md": "font-serif text-[34px] leading-[1.3]",
    "text-display-sm": "font-serif text-[28px] leading-[1.35]",

    // Title: Inter sans — clean, readable
    "text-title-lg": "font-sans text-[24px] leading-[1.4]",
    "text-title-md": "font-sans text-[20px] leading-[1.45]",
    "text-title-sm": "font-sans text-[18px] leading-[1.5]",

    // Body: Inter sans — comfortable Chinese reading
    "text-body-lg": "font-sans text-[18px] leading-[1.7]",
    "text-body-md": "font-sans text-[16px] leading-[1.75]",
    "text-body-sm": "font-sans text-[14px] leading-[1.7]",

    // Supporting
    "text-caption-token": "font-sans text-[13px] leading-[1.5] font-medium",
    "text-caption-caps":
      "font-sans text-[12px] leading-[1.5] font-medium tracking-[1.5px] uppercase",

    // ════════════════════════════════════════════════════════════
    // 3. COMPONENTS
    // ════════════════════════════════════════════════════════════

    // Cards
    card:
      "rounded-xl bg-warm-200 dark:bg-warm-950 " +
      "ring-1 ring-warm-300/60 dark:ring-warm-800/40",

    "card-elevated":
      "rounded-xl bg-warm-300 dark:bg-warm-900 " +
      "ring-1 ring-warm-400/50 dark:ring-warm-700/40",

    // Badges
    badge:
      "inline-flex items-center rounded-full " +
      "px-3 py-1 text-xs font-medium " +
      "bg-secondary text-secondary-foreground",

    "badge-primary":
      "inline-flex items-center rounded-full " +
      "px-3 py-1 text-xs font-medium tracking-widest uppercase " +
      "bg-primary text-primary-foreground",

    "badge-accent":
      "inline-flex items-center rounded-full " +
      "px-3 py-1 text-xs font-medium tracking-widest uppercase " +
      "bg-accent text-accent-foreground",

    // Callouts
    callout:
      "rounded-lg bg-coral-50 dark:bg-coral-950/40 " +
      "p-3 text-sm text-coral-700 dark:text-coral-300",

    "callout-accent":
      "rounded-lg bg-amber-50 dark:bg-amber-950/40 " +
      "p-3 text-sm text-amber-700 dark:text-amber-300",

    // Dividers
    separator: "border-b border-warm-300/70 dark:border-warm-800/50",

    divider:
      "border-0 h-px bg-gradient-to-r " +
      "from-transparent via-warm-400/60 dark:via-warm-700/60 to-transparent",

    caption: "text-[13px] leading-[1.4] font-medium text-muted-foreground",

    // Stat
    stat: "text-center",
    "stat-num": "text-4xl font-bold text-primary tabular-nums",
    "stat-label": "text-xs text-muted-foreground mt-1.5",

    // Academic
    "ref-entry": "text-[13px] leading-[1.65] text-muted-foreground",
    "journal-name": "text-primary font-medium",
    theorem:
      "rounded-lg bg-coral-50/80 dark:bg-coral-950/20 " +
      "p-4 text-sm border-l-4 border-coral-400 dark:border-coral-500",
    definition:
      "rounded-lg bg-amber-50/80 dark:bg-amber-950/30 " +
      "p-4 text-sm border-l-4 border-amber-400 dark:border-amber-500",
  },
  presets: [
    presetWebFonts({
      fonts: {
        inter: "Inter:400,500,600,700",
        "eb-garamond": "EB Garamond:400,500,600,700",
        "noto-sans-sc": "Noto Sans SC:400,500,700",
        mono: "JetBrains Mono:400,500,600,700",
      },
    }),
  ],
});
