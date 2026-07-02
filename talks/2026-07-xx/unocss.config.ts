import config from "@slidev/client/uno.config.ts";
import { mergeConfigs } from "unocss";

export default mergeConfigs([
  config,
  {
    theme: {
      // Token values live in styles/theme.css — here we just wire
      // the UnoCSS scale names to the CSS variables.
      colors: {
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
          975: "var(--neutral-975)",
          1000: "var(--neutral-1000)",
        },
        red: {
          50: "var(--red-50)",
          100: "var(--red-100)",
          200: "var(--red-200)",
          300: "var(--red-300)",
          400: "var(--red-400)",
          500: "var(--red-500)",
          600: "var(--red-600)",
          700: "var(--red-700)",
          800: "var(--red-800)",
          900: "var(--red-900)",
          950: "var(--red-950)",
        },
        gold: {
          50: "var(--gold-50)",
          100: "var(--gold-100)",
          200: "var(--gold-200)",
          300: "var(--gold-300)",
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
          700: "var(--gold-700)",
          800: "var(--gold-800)",
          900: "var(--gold-900)",
          950: "var(--gold-950)",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
        mono: "var(--font-mono)",
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
    // TYPE SCALE — each shortcut self-applies font-sans so it
    // works correctly regardless of parent element context.
    // ══════════════════════════════════════════════════════════════

    // Display
    "text-display-xl": "font-sans text-[56px] leading-[1.2]",
    "text-display-lg": "font-sans text-[44px] leading-[1.25]",
    "text-display-md": "font-sans text-[34px] leading-[1.3]",
    "text-display-sm": "font-sans text-[28px] leading-[1.35]",

    // Title
    "text-title-lg": "font-sans text-[24px] leading-[1.4]",
    "text-title-md": "font-sans text-[20px] leading-[1.45]",
    "text-title-sm": "font-sans text-[18px] leading-[1.5]",

    // Body
    "text-body-lg": "font-sans text-[18px] leading-[1.7]",
    "text-body-md": "font-sans text-[16px] leading-[1.75]",
    "text-body-sm": "font-sans text-[14px] leading-[1.7]",

    // Supporting
    "text-caption-token": "font-sans text-[13px] leading-[1.5] font-medium",
    "text-caption-caps":
      "font-sans text-[12px] leading-[1.5] font-medium tracking-[1.5px] uppercase",

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
  },
]);
