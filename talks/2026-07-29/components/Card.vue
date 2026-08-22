<script setup lang="ts">
/**
 * Card — structured content block for slides.
 *
 * ## Visual styling
 * Rendered as a `<div>` with a surface class controlled by the `variant` prop.
 * Each variant maps to an UnoCSS shortcut defined in unocss.config.ts:
 *
 *   variant="default"        → card           (rounded-xl, warm bg, subtle ring)
 *   variant="elevated"       → card-elevated  (lighter bg, more visible ring)
 *   variant="callout"        → callout        (SJTU-red-tinted bg, red text)
 *   variant="callout-accent" → callout-accent (gold-tinted bg, gold text)
 *
 * Raw `<div class="card">` in slides.md gives you the same visual shell without
 * the structural features (title, subtitle, items, LaTeX) that this component adds.
 *
 * ## Structural features
 * - `title` / `subtitle` — rendered with inline markdown support
 * - `items` — list with square bullets
 * - `icon` — optional Iconify icon next to the title
 * - `enableLatex` — runtime KaTeX rendering for $...$ math in title/subtitle/items
 * - `size` — controls padding and font scale (sm | md | lg)
 * - `variant` — which UnoCSS surface shortcut to use (default | elevated | callout | callout-accent)
 * - Default slot — fallback for custom content when no items are provided
 */
import { nextTick, onMounted, ref, watch } from "vue";
import { renderInlineMarkdown } from "../utils/markdown";
import { useKaTeX } from "../composables/useKaTeX";

interface Props {
  title?: string;
  subtitle?: string;
  items?: string[];
  size?: "sm" | "md" | "lg";
  variant?: "default" | "elevated" | "callout" | "callout-accent";
  icon?: string;
  enableLatex?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  variant: "default",
  enableLatex: false,
});

// Refs for DOM elements
const cardRef = ref<HTMLElement>();
const { processMath } = useKaTeX(cardRef);

// Lifecycle hooks
onMounted(() => {
  if (props.enableLatex) processMath();
});

// Re-process math when content props change
watch([() => props.title, () => props.subtitle, () => props.items], () => {
  if (props.enableLatex) processMath();
});

// Surface variant → UnoCSS shortcut (defined in unocss.config.ts)
const surfaceVariantClasses: Record<string, string> = {
  default: "card",
  elevated: "card-elevated",
  callout: "callout",
  "callout-accent": "callout-accent",
};

// Size presets — padding + font scale
const sizeClasses: Record<string, string> = {
  sm: "p-3 text-sm",
  md: "p-5",
  lg: "p-6 text-lg",
};
</script>

<template>
  <div
    ref="cardRef"
    :class="[surfaceVariantClasses[variant], sizeClasses[size]]"
  >
    <!-- Title with optional icon -->
    <div
      v-if="title"
      class="font-semibold leading-tight"
      :class="[
        size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl',
        subtitle
          ? size === 'lg'
            ? 'mb-2'
            : size === 'sm'
              ? 'mb-1'
              : 'mb-1.5'
          : size === 'lg'
            ? 'mb-4'
            : size === 'sm'
              ? 'mb-2'
              : 'mb-3',
      ]"
    >
      <div v-if="icon" class="flex items-center">
        <div
          class="mr-2.5 flex-shrink-0 text-primary"
          :class="[
            icon,
            size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl',
          ]"
        />
        <span
          class="text-foreground-soft"
          v-html="renderInlineMarkdown(title)"
        />
      </div>
      <span
        v-else
        class="text-foreground-soft"
        v-html="renderInlineMarkdown(title)"
      />
    </div>

    <!-- Subtitle -->
    <div
      v-if="subtitle"
      class="leading-relaxed text-muted-foreground"
      :class="[
        size === 'lg'
          ? 'text-base mb-4'
          : size === 'sm'
            ? 'text-xs mb-2'
            : 'text-sm mb-3',
      ]"
    >
      <span v-html="renderInlineMarkdown(subtitle)" />
    </div>

    <!-- List Items -->
    <ul
      v-if="items && items.length"
      class="space-y-2 ml--4"
      :class="[
        size === 'lg' ? 'space-y-3' : size === 'sm' ? 'space-y-1' : 'space-y-2',
      ]"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="text-body"
        :class="[
          size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm',
        ]"
      >
        <span v-html="renderInlineMarkdown(item)" />
      </li>
    </ul>

    <!-- Default slot for custom content -->
    <div v-if="!items || !items.length">
      <slot />
    </div>
  </div>
</template>
