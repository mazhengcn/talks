<script setup lang="ts">
import { useNav } from "@slidev/client";

const { currentPage, currentSlideRoute } = useNav();
const title =
  (currentSlideRoute.value.meta?.slide as any)?.frontmatter?.title ||
  "Tenure Track Defense";
</script>

<template>
  <div
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-3 text-xs bg-warm-50 dark:bg-warm-1000"
  >
    <!-- Subtle warm accent line at top of footer -->
    <div
      class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-coral-500/30 to-transparent dark:via-coral-400/20"
    ></div>

    <div class="flex items-center gap-4 text-warm-600 dark:text-warm-400">
      <span class="font-medium text-warm-800 dark:text-warm-200"> 马 征 </span>
      <span class="text-warm-400 dark:text-warm-700">|</span>
      <span>数学科学学院 · 自然科学研究院</span>
    </div>

    <div class="flex items-center gap-3 text-warm-500 dark:text-warm-500">
      <span>{{ title }}</span>
      <span class="text-warm-400 dark:text-warm-700">|</span>
      <span>{{ currentPage }}</span>
    </div>
  </div>
</template>
