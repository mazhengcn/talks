<script setup lang="ts">
/**
 * DataTable — card-wrapped table with neutral border styling.
 *
 * Replaces raw HTML <table> markup in slides.md. Uses the `card` UnoCSS
 * shortcut for the visual shell and applies neutral-token borders + muted header
 * background consistent with the rest of the design system.
 *
 * Supports inline markdown (**bold**, *italic*, `code`) and optional KaTeX
 * rendering for $...$ math in all cells.
 *
 * @example
 *   <DataTable
 *     :headers="['方面', '经典方法', '我们的方法']"
 *     :rows="[
 *       ['推理时间', '$10^4$ 秒', '~2.3 秒'],
 *       ['复用性', '无', '零样本泛化'],
 *     ]"
 *     :highlight-col="2"
 *     caption="我们的方法在各项指标上均优于经典方法。"
 *   />
 */
import { onMounted, ref, watch } from "vue";
import { renderInlineMarkdown } from "../utils/markdown";
import { useKaTeX } from "../composables/useKaTeX";

interface Props {
  /** Column header text (supports markdown / LaTeX). */
  headers: string[];
  /** Row data — each row is an array of cell strings. */
  rows: string[][];
  /** 0-indexed column to highlight with primary color. */
  highlightCol?: number;
  /** Optional caption rendered below the table in subtle text. */
  caption?: string;
  /** Enable runtime KaTeX rendering for $...$ math. Default true. */
  enableLatex?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  highlightCol: -1,
  enableLatex: true,
});

const tableRef = ref<HTMLElement>();
const { processMath } = useKaTeX(tableRef);

onMounted(() => {
  if (props.enableLatex) processMath();
});

watch([() => props.headers, () => props.rows, () => props.caption], () => {
  if (props.enableLatex) processMath();
});

function isHighlighted(colIndex: number): boolean {
  return colIndex === props.highlightCol;
}

function isLastRow(rowIndex: number): boolean {
  return rowIndex === props.rows.length - 1;
}
</script>

<template>
  <div ref="tableRef" class="card p-0 overflow-auto">
    <table class="w-full text-sm">
      <thead>
        <tr
          class="border-b border-neutral-300 dark:border-neutral-800 bg-muted"
        >
          <th
            v-for="(header, i) in headers"
            :key="i"
            class="text-left py-2 font-medium"
            :class="isHighlighted(i) ? 'text-primary' : 'text-muted-foreground'"
            v-html="renderInlineMarkdown(header)"
          />
        </tr>
      </thead>
      <tbody class="text-body">
        <tr
          v-for="(row, ri) in rows"
          :key="ri"
          :class="[
            'border-b border-neutral-300/60 dark:border-neutral-800/50',
            { 'border-b-0': isLastRow(ri) },
          ]"
        >
          <td
            v-for="(cell, ci) in row"
            :key="ci"
            class="py-2"
            :class="{
              'font-medium': ci === 0 || isHighlighted(ci),
              'text-primary': isHighlighted(ci),
            }"
            v-html="renderInlineMarkdown(cell)"
          />
        </tr>
      </tbody>
    </table>
    <p v-if="caption" class="text-xs text-subtle mt-3">
      <span v-html="renderInlineMarkdown(caption)" />
    </p>
  </div>
</template>
