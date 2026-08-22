import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    // ════════════════════════════════════════════════════════
    // COLOR PALETTE — OKLCH, single source of truth.
    // ════════════════════════════════════════════════════════
    colors: {
      neutral: {
        50: "oklch(0.9851 0.0001 271.2)",
        100: "oklch(0.9674 0.0014 285.2)",
        200: "oklch(0.9316 0.0028 285.8)",
        300: "oklch(0.8711 0.0055 286.0)",
        400: "oklch(0.7118 0.0130 286.0)",
        500: "oklch(0.5517 0.0139 285.9)",
        600: "oklch(0.4419 0.0147 285.7)",
        700: "oklch(0.3703 0.0119 285.8)",
        800: "oklch(0.2739 0.0055 286.0)",
        900: "oklch(0.2103 0.0059 285.8)",
        950: "oklch(0.1785 0.0041 285.9)",
        975: "oklch(0.1553 0.0042 285.8)",
        1000: "oklch(0.1408 0.0044 285.8)",
      },
      red: {
        50: "oklch(0.9705 0.0129 16.9)",
        100: "oklch(0.9356 0.0309 17.5)",
        200: "oklch(0.8845 0.0592 18.2)",
        300: "oklch(0.7106 0.1661 22.2)",
        400: "oklch(0.6229 0.1980 25.0)",
        500: "oklch(0.5310 0.2064 26.7)",
        600: "oklch(0.4827 0.1877 27.0)",
        700: "oklch(0.4364 0.1683 26.8)",
        800: "oklch(0.3823 0.1459 26.2)",
        900: "oklch(0.3289 0.1230 26.2)",
        950: "oklch(0.2730 0.0993 25.0)",
      },
      gold: {
        50: "oklch(0.9921 0.0171 99.7)",
        100: "oklch(0.9790 0.0395 97.8)",
        200: "oklch(0.9596 0.0762 98.0)",
        300: "oklch(0.9359 0.1196 98.0)",
        400: "oklch(0.9087 0.1517 96.0)",
        500: "oklch(0.8422 0.1726 84.6)",
        600: "oklch(0.7458 0.1529 84.6)",
        700: "oklch(0.6482 0.1327 85.4)",
        800: "oklch(0.5435 0.1112 86.4)",
        900: "oklch(0.4346 0.0889 87.1)",
        950: "oklch(0.3184 0.0651 88.4)",
      },
    },
    // ════════════════════════════════════════════════════════
    // FONT FAMILIES
    // ════════════════════════════════════════════════════════
    fontFamily: {
      sans: "'SF Pro', 'PingFang SC', system-ui, sans-serif",
      serif: "'New York', serif",
      mono: "'SF Mono', ui-monospace, monospace",
    },
  },
  shortcuts: {
    // ════════════════════════════════════════════════════════
    // 1. SEMANTIC TOKENS — shadcn/ui-style naming.
    //    Each maps a semantic name to palette values with
    //    dark: variant for automatic theme switching.
    // ════════════════════════════════════════════════════════

    // Background
    "bg-background": "bg-neutral-50 dark:bg-neutral-1000",
    "text-foreground": "text-neutral-950 dark:text-neutral-50",
    "text-foreground-soft": "text-[#1c1c1e] dark:text-neutral-100",

    // Card
    "bg-card": "bg-neutral-200 dark:bg-neutral-950",
    "text-card-foreground": "text-neutral-950 dark:text-neutral-50",

    // Primary
    "text-primary": "text-red-500 dark:text-red-400",
    "bg-primary": "bg-red-500 dark:bg-red-400",
    "text-primary-foreground": "text-white dark:text-neutral-950",

    // Secondary
    "bg-secondary": "bg-neutral-200 dark:bg-neutral-800",
    "text-secondary-foreground": "text-[#111113] dark:text-neutral-100",

    // Muted
    "bg-muted": "bg-neutral-100 dark:bg-neutral-900",
    "text-muted-foreground": "text-[#52525b] dark:text-neutral-400",

    // Accent
    "text-accent": "text-gold-500 dark:text-gold-400",
    "bg-accent": "bg-gold-500 dark:bg-gold-400",
    "text-accent-foreground": "text-[#111113] dark:text-neutral-950",

    // Destructive
    "text-destructive": "text-red-600 dark:text-red-400",

    // Border / Ring
    "border-border": "border-neutral-300 dark:border-neutral-800",
    "ring-ring": "ring-red-400",

    // Legacy aliases (still used in slides.md)
    "text-body": "text-[#3f3f46] dark:text-neutral-300",
    "text-subtle": "text-[#71717a] dark:text-neutral-500",
    "text-ink": "text-[#111113] dark:text-neutral-50",
    "text-on-dark": "text-[#fafafa]",
    "text-on-dark-soft": "text-[#a1a1aa]",

    // ════════════════════════════════════════════════════════
    // 2. TYPE SCALE
    // ════════════════════════════════════════════════════════

    "text-display-xl": "font-sans text-[56px] leading-[1.2]",
    "text-display-lg": "font-sans text-[44px] leading-[1.25]",
    "text-display-md": "font-sans text-[34px] leading-[1.3]",
    "text-display-sm": "font-sans text-[28px] leading-[1.35]",

    "text-title-lg": "font-sans text-[24px] leading-[1.4]",
    "text-title-md": "font-sans text-[20px] leading-[1.45]",
    "text-title-sm": "font-sans text-[18px] leading-[1.5]",

    "text-body-lg": "font-sans text-[18px] leading-[1.7]",
    "text-body-md": "font-sans text-[16px] leading-[1.75]",
    "text-body-sm": "font-sans text-[14px] leading-[1.7]",

    "text-caption-token": "font-sans text-[13px] leading-[1.5] font-medium",
    "text-caption-caps":
      "font-sans text-[12px] leading-[1.5] font-medium tracking-[1.5px] uppercase",

    // ════════════════════════════════════════════════════════
    // 3. COMPONENTS
    // ════════════════════════════════════════════════════════

    // Cards
    card:
      "rounded-xl bg-neutral-200 dark:bg-neutral-950 " +
      "ring-1 ring-neutral-300/60 dark:ring-neutral-800/40",

    "card-elevated":
      "rounded-xl bg-neutral-300 dark:bg-neutral-900 " +
      "ring-1 ring-neutral-400/50 dark:ring-neutral-700/40",

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
      "rounded-lg bg-red-50 dark:bg-red-950/40 " +
      "p-3 text-sm text-red-700 dark:text-red-300",

    "callout-accent":
      "rounded-lg bg-gold-50 dark:bg-gold-950/40 " +
      "p-3 text-sm text-gold-700 dark:text-gold-300",

    // Dividers
    separator: "border-b border-neutral-300/70 dark:border-neutral-800/50",

    divider:
      "border-0 h-px bg-gradient-to-r " +
      "from-transparent via-neutral-400/60 dark:via-neutral-700/60 to-transparent",

    caption: "text-[13px] leading-[1.4] font-medium text-muted-foreground",

    // Stat
    stat: "text-center",
    "stat-num": "text-4xl font-bold text-primary tabular-nums",
    "stat-label": "text-xs text-muted-foreground mt-1.5",

    // Academic
    "ref-entry": "text-[13px] leading-[1.65] text-muted-foreground",
    "journal-name": "text-primary font-medium",
    theorem:
      "rounded-lg bg-red-50/80 dark:bg-red-950/20 " +
      "p-4 text-sm border-l-4 border-red-400 dark:border-red-500",
    definition:
      "rounded-lg bg-gold-50/80 dark:bg-gold-950/30 " +
      "p-4 text-sm border-l-4 border-gold-400 dark:border-gold-500",
  },
});
