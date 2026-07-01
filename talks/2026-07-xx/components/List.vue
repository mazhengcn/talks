<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { renderInlineMarkdown } from "../utils/markdown";
import { useKaTeX } from "../composables/useKaTeX";

interface Props {
  items?: string[];
  variant?:
    | "primary"
    | "secondary"
    | "tech"
    | "neutral"
    | "gradient-primary"
    | "gradient-secondary"
    | "gradient-tech"
    | "success"
    | "warning"
    | "error";
  enableLatex?: boolean;
  listStyle?: "dot" | "square";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "neutral",
  enableLatex: false,
  listStyle: "square",
});

// Refs for DOM elements
const listRef = ref<HTMLElement>();
const { processMath } = useKaTeX(listRef);

// Lifecycle hooks
onMounted(() => {
  if (props.enableLatex) processMath();
});

// Re-process math when props change
watch([() => props.items], () => {
  if (props.enableLatex) processMath();
});

const dotClasses: Record<string, string> = {
  primary: "text-red-500",
  secondary: "text-red-400",
  tech: "text-gold-500",
  neutral: "text-red-500",
  "gradient-primary": "text-red-500",
  "gradient-secondary": "text-red-400",
  "gradient-tech": "text-gold-500",
  success: "text-red-500",
  warning: "text-gold-500",
  error: "text-red-600",
};
</script>

<template>
  <ul v-if="items && items.length" ref="listRef" class="space-y-2 ml--4">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex flex-gap-4 items-center"
    >
      <!-- Square bullet (Slidev style) -->
      <div
        v-if="listStyle === 'square'"
        i-ph:square-duotone
        :class="dotClasses[variant]"
      />
      <!-- Round dot bullet -->
      <div v-else i-ph:circle-duotone :class="dotClasses[variant]" />
      <div class="text-body flex-1" v-html="renderInlineMarkdown(item)" />
    </li>
  </ul>

  <!-- Default slot for custom content -->
  <div v-if="!items || !items.length">
    <slot />
  </div>
</template>
