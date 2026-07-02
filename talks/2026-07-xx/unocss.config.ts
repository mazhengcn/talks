import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      // ══════════════════════════════════════════════════════════════
      // SJTU NEUTRAL — clean grays, slightly warm to pair with red.
      // ══════════════════════════════════════════════════════════════
      neutral: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e8e8ea",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b",
        950: "#111113",
        975: "#0c0c0e",
        1000: "#09090b",
      },
      // ══════════════════════════════════════════════════════════════
      // SJTU RED — primary brand color #C8161E (交大红 / 百廿红).
      // Overrides UnoCSS built-in red with the SJTU VI specification.
      // ══════════════════════════════════════════════════════════════
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#f87171",
        400: "#e64545",
        500: "#C8161E", // SJTU brand red
        600: "#b01218",
        700: "#991015",
        800: "#7f0d12",
        900: "#660b0e",
        950: "#4d080b",
      },
      // ══════════════════════════════════════════════════════════════
      // SJTU GOLD — secondary accent #FFC000.
      // ══════════════════════════════════════════════════════════════
      gold: {
        50: "#fffdf0",
        100: "#fff9db",
        200: "#fff3b8",
        300: "#ffeb8a",
        400: "#ffe05c",
        500: "#FFC000", // SJTU gold
        600: "#d9a300",
        700: "#b38700",
        800: "#8c6a00",
        900: "#664d00",
        950: "#403000",
      },
    },
  },
  shortcuts: {
    // ── Surface / semantic ────────────────────────────────────
    "bg-background": "bg-neutral-50 dark:bg-neutral-1000",
    "text-foreground": "text-neutral-950 dark:text-neutral-50",
    "bg-muted": "bg-neutral-100 dark:bg-neutral-900",
    "text-foreground-soft": "text-[#1c1c1e] dark:text-neutral-100",
    "text-muted-foreground": "text-[#52525b] dark:text-neutral-400",
    "border-border": "border-neutral-300 dark:border-neutral-800",
    "text-body": "text-[#3f3f46] dark:text-neutral-300",
    "text-subtle": "text-[#71717a] dark:text-neutral-500",
    "text-ink": "text-[#111113] dark:text-neutral-50",
    "text-on-dark": "text-[#fafafa]",
    "text-on-dark-soft": "text-[#a1a1aa]",

    // ══════════════════════════════════════════════════════════════
    // TYPE SCALE — each shortcut self-applies the correct font
    // family via CSS variables defined in typography.css.
    // ══════════════════════════════════════════════════════════════

    // Display
    "text-display-xl": "text-[56px] leading-[1.2] [font-family:var(--font-sans)]",
    "text-display-lg": "text-[44px] leading-[1.25] [font-family:var(--font-sans)]",
    "text-display-md": "text-[34px] leading-[1.3] [font-family:var(--font-sans)]",
    "text-display-sm": "text-[28px] leading-[1.35] [font-family:var(--font-sans)]",

    // Title
    "text-title-lg": "text-[24px] leading-[1.4] [font-family:var(--font-sans)]",
    "text-title-md": "text-[20px] leading-[1.45] [font-family:var(--font-sans)]",
    "text-title-sm": "text-[18px] leading-[1.5] [font-family:var(--font-sans)]",

    // Body
    "text-body-lg": "text-[18px] leading-[1.7] [font-family:var(--font-sans)]",
    "text-body-md": "text-[16px] leading-[1.75] [font-family:var(--font-sans)]",
    "text-body-sm": "text-[14px] leading-[1.7] [font-family:var(--font-sans)]",

    // Supporting
    "text-caption-token": "text-[13px] leading-[1.5] font-medium [font-family:var(--font-sans)]",
    "text-caption-caps":
      "text-[12px] leading-[1.5] font-medium tracking-[1.5px] uppercase [font-family:var(--font-sans)]",

    // ── Cards ────────────────────────────────────────────────
    card:
      "rounded-xl bg-neutral-200 dark:bg-neutral-950 " +
      "ring-1 ring-neutral-300/60 dark:ring-neutral-800/40",

    "card-elevated":
      "rounded-xl bg-neutral-300 dark:bg-neutral-900 " +
      "ring-1 ring-neutral-400/50 dark:ring-neutral-700/40",

    // ── Badges ───────────────────────────────────────────────
    badge:
      "inline-flex items-center rounded-full " +
      "px-3 py-1 text-xs font-medium " +
      "bg-neutral-200 dark:bg-neutral-800 " +
      "text-[#111113] dark:text-neutral-100",

    "badge-primary":
      "inline-flex items-center rounded-full " +
      "px-3 py-1 text-xs font-medium tracking-widest uppercase " +
      "bg-red-500 text-white",

    "badge-accent":
      "inline-flex items-center rounded-full " +
      "px-3 py-1 text-xs font-medium tracking-widest uppercase " +
      "bg-gold-500 text-[#111113]",

    // ── Semantic accent shortcuts ────────────────────────────
    "text-primary": "text-red-500 dark:text-red-400",
    "text-accent": "text-gold-500 dark:text-gold-400",
    "bg-primary": "bg-red-500 dark:bg-red-400",
    "bg-accent": "bg-gold-500 dark:bg-gold-400",

    // ── Callouts ─────────────────────────────────────────────
    callout:
      "rounded-lg " +
      "bg-red-50 dark:bg-red-950/40 " +
      "p-3 text-sm text-red-700 dark:text-red-300",

    "callout-accent":
      "rounded-lg " +
      "bg-gold-50 dark:bg-gold-950/40 " +
      "p-3 text-sm text-gold-700 dark:text-gold-300",

    // ── Dividers ──────────────────────────────────────────────
    separator: "border-b border-neutral-300/70 dark:border-neutral-800/50",

    divider:
      "border-0 h-px bg-gradient-to-r " +
      "from-transparent via-neutral-400/60 dark:via-neutral-700/60 to-transparent",

    caption: "text-[13px] leading-[1.4] font-medium text-[#71717a] dark:text-neutral-500",

    // ── Stat ─────────────────────────────────────────────────
    stat: "text-center",
    "stat-num": "text-4xl font-bold text-primary tabular-nums",
    "stat-label": "text-xs text-muted-foreground mt-1.5",

    // ── Academic ─────────────────────────────────────────────
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
