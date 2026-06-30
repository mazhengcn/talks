<script setup lang="ts">
/**
 * SectionDivider — centered section header for transition slides.
 *
 * Used on `layout: center` slides to introduce a new major section.
 * Renders a Coral badge label, a display heading (h2, Noto Serif SC),
 * and a short decorative rule below.
 *
 * @example
 *   <SectionDivider badge="研究方向一" heading="动理学方程的基础模型<br>与保结构 AI 方法" />
 *   <SectionDivider badge="第二部分" heading="教学与人才培养" />
 */
interface Props {
  badge: string;
  heading: string;
}

defineProps<Props>();
</script>

<template>
  <div class="text-center space-y-4">
    <span class="badge-primary text-sm">{{ badge }}</span>
    <h2 class="text-display-md mt-2" v-html="heading" />
    <div class="w-12 h-0.5 bg-coral-400/40 rounded-full mx-auto mt-4" />
  </div>
</template>
