<script setup lang="ts">
/**
 * Global bottom component — SJTU 百廿红 PPTX design system.
 *
 * Header (layout-aware):
 *   default — accent bar (left edge) + SJTU logo (top-right).
 *             Title is CSS-driven via h1/h2 in style.css.
 *   cover   — SJTU logo (top-left, above the title).
 *   center  — SJTU emblem centered above the title (VI standard seal).
 *   other   — SJTU logo only.
 * Footer:  Full-width "上海交通大学" banner (footer-banner.png) at the very
 *          bottom, matching the PPTX content-slide footer. Speaker info and
 *          page number are overlaid on top of the banner.
 */
import { computed } from "vue";
import { useNav } from "@slidev/client";

const { currentPage, currentSlideRoute } = useNav();

const layout = computed(
  () =>
    (currentSlideRoute.value.meta?.slide as any)?.frontmatter?.layout ||
    "default",
);

/**
 * Extract the real page title from the first `#` heading in the slide content.
 * `frontmatter.title` is an override field and may not match the actual heading.
 */
function extractHeading(content: string): string {
  const match = content.match(/^# (.+?)(?:\n|$)/m);
  return match ? match[1].trim() : "";
}

/** Dynamic right padding: keep page number visually centered at ~pr-10 */
const pagePr = computed(() => {
  const digits = String(currentPage.value).length;
  // Each extra digit needs ~half a digit-width less padding (tabular-nums, text-xs)
  return `${2.7 - (digits - 1) * 0.32}rem`;
});

const title = computed(() => {
  const slide = currentSlideRoute.value.meta?.slide as any;
  const raw = slide?.source?.contentRaw ?? slide?.content ?? "";
  return (
    extractHeading(raw) ||
    slide?.title ||
    slide?.frontmatter?.title ||
    "长聘教职答辩"
  );
});
</script>

<template>
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <!-- HEADER — cover: logo top-left, default: accent bar + logo      -->
  <!-- ═══════════════════════════════════════════════════════════════ -->

  <!-- Cover layout: SJTU logo top-left, above the title -->
  <div
    v-if="layout === 'cover'"
    class="absolute top-0 left-0 z-10 pointer-events-none"
  >
    <img
      src="/sjtu-logo.png"
      alt="上海交通大学"
      class="h-12 mt-5 ml-8 opacity-90 dark:opacity-80"
    />
  </div>

  <!-- Default layout: accent bar (left edge) + SJTU logo (right) -->
  <div
    v-if="layout === 'default'"
    class="absolute top-0 left-0 right-0 z-10 pointer-events-none"
  >
    <!-- Accent bar — left edge -->
    <div class="absolute top-5 left-0 w-5 h-12 rounded-r-sm bg-gradient-to-b from-red-500 to-[#ED7D31]" />

    <!-- SJTU Logo — right edge -->
    <img
      src="/sjtu-logo.png"
      alt="上海交通大学"
      class="absolute top-0 right-0 h-12 mt-5 mr-8 opacity-90 dark:opacity-80"
    />
  </div>

  <!-- Center / section layout: SJTU emblem centered above the title -->
  <div
    v-if="layout === 'center'"
    class="absolute top-0 left-0 right-0 z-10 pointer-events-none flex justify-center"
  >
    <img
      src="/sjtu-emblem.png"
      alt=""
      aria-hidden="true"
      class="mt-32 w-14 h-14"
    />
  </div>

  <!-- ═══════════════════════════════════════════════════════════════ -->
  <!-- FOOTER — PPTX layout 9: full-width SJTU banner,                -->
  <!--           then small speaker-info footnotes below it.          -->
  <!-- ═══════════════════════════════════════════════════════════════ -->
  <div class="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center">
    <!-- Footer banner — full-width red strip -->
    <img
      src="/footer-banner.png"
      alt=""
      aria-hidden="true"
      class="w-full block opacity-50 dark:opacity-90"
    />

    <!-- Speaker info footnotes — below the banner -->
    <div
      class="flex items-center justify-between w-full pl-10 py-1 text-xs tracking-[0.08em]"
      :style="{ paddingRight: pagePr }"
    >
      <div class="flex items-center gap-2 text-subtle">
        <span class="font-semibold text-foreground-soft">马 征</span>
        <span class="w-px h-2.5 bg-neutral-300/70 dark:bg-neutral-700/50" />
        <span class="font-light">数学科学学院</span>
      </div>

      <div class="flex items-center gap-2 text-subtle">
        <span class="font-light">{{ title }}</span>
        <span class="w-px h-2.5 bg-neutral-300/70 dark:bg-neutral-700/50" />
        <span class="font-medium tabular-nums">{{ currentPage }}</span>
      </div>
    </div>
  </div>
</template>
