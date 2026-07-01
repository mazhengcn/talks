<script setup lang="ts">
import { useNav } from "@slidev/client";

const { currentPage, currentSlideRoute } = useNav();
const title =
  (currentSlideRoute.value.meta?.slide as any)?.frontmatter?.title ||
  "长聘教职答辩";
</script>

<template>
  <div
    class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 py-3 text-xs bg-neutral-50 dark:bg-neutral-1000"
  >
    <!-- Subtle warm accent line at top of footer -->
    <div
      class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent dark:via-red-400/20"
    ></div>

    <div class="flex items-center gap-4 text-neutral-600 dark:text-neutral-400">
      <span class="font-medium text-neutral-800 dark:text-neutral-200"> 马 征 </span>
      <span class="text-neutral-400 dark:text-neutral-700">|</span>
      <span>数学科学学院</span>
    </div>

    <div class="flex items-center gap-3 text-neutral-500 dark:text-neutral-500">
      <span>{{ title }}</span>
      <span class="text-neutral-400 dark:text-neutral-700">|</span>
      <span>{{ currentPage }}</span>
    </div>
  </div>
</template>
