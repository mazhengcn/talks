<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";

const props = defineProps<{
  pros: string[];
  cons: string[];
}>();

// Refs for DOM elements
const containerRef = ref<HTMLElement>();

// KaTeX instance cache
let katex: any = null;

/**
 * Load KaTeX library dynamically
 * First tries window.katex (if loaded by Slidev), then dynamic import
 */
async function loadKaTeX() {
  if (katex) return katex;

  try {
    // Try window.katex first (if already loaded by Slidev)
    if ((window as any).katex) {
      katex = (window as any).katex;
      return katex;
    }

    // Try dynamic import
    const katexModule = await import("katex");
    katex = katexModule.default || katexModule;
    return katex;
  } catch (error) {
    console.warn("Failed to load KaTeX:", error);
    return null;
  }
}

/**
 * Process LaTeX math expressions in the component
 * Finds text nodes with $...$ patterns and renders them using KaTeX
 */
async function processMath() {
  if (!containerRef.value) return;

  await nextTick();

  try {
    const katexInstance = await loadKaTeX();
    if (!katexInstance || !katexInstance.render) {
      console.warn("KaTeX render method not available");
      return;
    }

    // Find all text nodes that contain LaTeX
    const walker = document.createTreeWalker(
      containerRef.value,
      NodeFilter.SHOW_TEXT,
      null,
    );

    const textNodes: Text[] = [];
    let node = walker.nextNode();
    while (node) {
      if (node.textContent && /\$[^$]+\$/.test(node.textContent)) {
        textNodes.push(node as Text);
      }
      node = walker.nextNode();
    }

    // Process each text node
    textNodes.forEach((textNode) => {
      const text = textNode.textContent!;
      const parts = text.split(/(\$[^$]+\$)/g);

      if (parts.length > 1) {
        const fragment = document.createDocumentFragment();

        // Get computed styles from parent element to preserve styling
        const parentElement = textNode.parentElement;
        let inheritedStyles = "";

        if (parentElement) {
          const computedStyle = window.getComputedStyle(parentElement);
          const color = computedStyle.color;
          const fontSize = computedStyle.fontSize;
          inheritedStyles = `color: ${color}; font-size: ${fontSize};`;
        }

        parts.forEach((part) => {
          if (part.startsWith("$") && part.endsWith("$")) {
            // This is a LaTeX expression
            const math = part.slice(1, -1);
            const span = document.createElement("span");
            span.style.cssText = inheritedStyles;

            try {
              katexInstance.render(math, span, {
                throwOnError: false,
                displayMode: false,
              });
            } catch (err) {
              span.textContent = part;
              console.warn("KaTeX render error:", err);
            }

            fragment.appendChild(span);
          } else if (part) {
            // Regular text
            fragment.appendChild(document.createTextNode(part));
          }
        });

        textNode.parentNode?.replaceChild(fragment, textNode);
      }
    });
  } catch (error) {
    console.warn("Failed to process math:", error);
  }
}

// Process math on mount and when props change
onMounted(() => {
  processMath();
});

watch(
  [() => props.pros, () => props.cons],
  () => {
    processMath();
  },
  { deep: true },
);
</script>

<template>
  <div
    ref="containerRef"
    grid="~ cols-2 gap-x-4 items-end"
    my4
    absolute
    bottom-0
    left-15
    right-15
  >
    <div v-click flex="~ col gap-1" class="pros-cons-drawer">
      <div
        flex="~ gap-1 items-center"
        font-600
        class="text-green-600 dark:text-green-400"
      >
        <div i-ph-thumbs-up-duotone />
        Pros
      </div>

      <div
        class="text-green-800 dark:text-green-200 border border-green-200/30 dark:border-green-700 rounded-lg bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-900/20 dark:to-emerald-800/15 backdrop-blur-sm"
        px3
        py3
        pb-12
        mb--10
        relative
        flex="~ col gap-2"
      >
        <div v-for="pro in pros" :key="pro" flex="~ gap-2 items-center">
          <div
            i-ph-check-circle-duotone
            class="text-green-600 dark:text-green-400"
            text-xl
            flex-shrink-0
          />
          {{ pro }}
        </div>
        <div
          absolute
          top--4px
          right-4px
          left-4px
          h-4px
          class="bg-green-100/70 dark:bg-green-800/30 border-t border-l border-r border-green-200/40 dark:border-green-600 rounded-t-lg backdrop-blur-sm"
        />
      </div>
    </div>

    <div v-click flex="~ col gap-1" class="pros-cons-drawer">
      <div
        flex="~ gap-1 items-center"
        class="text-red-600 dark:text-red-400"
        font-600
      >
        <div i-ph-thumbs-down-duotone />
        Cons
      </div>

      <div
        class="text-red-800 dark:text-red-200 border border-red-200/30 dark:border-red-700 rounded-lg bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-900/20 dark:to-rose-800/15 backdrop-blur-sm"
        px3
        py3
        pb-12
        mb--10
        relative
        flex="~ col gap-2"
      >
        <div v-for="con in cons" :key="con" flex="~ gap-2 items-center">
          <div
            i-ph-warning-duotone
            class="text-orange-600 dark:text-orange-400"
            text-xl
            flex-shrink-0
          />
          {{ con }}
        </div>
        <div
          absolute
          top--4px
          right-4px
          left-4px
          h-4px
          class="bg-red-100/70 dark:bg-red-800/30 border-t border-l border-r border-red-200/40 dark:border-red-600 rounded-t-lg backdrop-blur-sm"
        />
      </div>
    </div>
  </div>
</template>

<style>
.pros-cons-drawer {
  transition: all 0.15s ease;
}
.pros-cons-drawer.slidev-vclick-hidden {
  transform: translateY(100%);
}
</style>
