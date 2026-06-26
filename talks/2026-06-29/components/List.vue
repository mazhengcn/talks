<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";

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
  if (!props.enableLatex || !listRef.value) return;

  await nextTick();

  try {
    const katexInstance = await loadKaTeX();
    if (!katexInstance || !katexInstance.render) {
      console.warn("KaTeX render method not available");
      return;
    }

    // Find all text nodes that contain LaTeX
    const walker = document.createTreeWalker(
      listRef.value,
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
          const stylesToCopy = [
            "color",
            "font-family",
            "font-size",
            "font-weight",
            "font-style",
            "text-decoration",
            "background",
            "background-image",
            "background-clip",
            "-webkit-background-clip",
            "-webkit-text-fill-color",
          ];

          const styleRules = stylesToCopy
            .map((prop) => `${prop}: ${computedStyle.getPropertyValue(prop)}`)
            .filter(
              (rule) => !rule.includes("none") && !rule.includes("normal"),
            )
            .join("; ");

          if (styleRules) {
            inheritedStyles = styleRules;
          }
        }

        parts.forEach((part) => {
          if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
            // Render math expression
            const math = part.slice(1, -1); // Remove $ delimiters
            const span = document.createElement("span");

            try {
              katexInstance.render(math, span, {
                throwOnError: false,
                displayMode: false,
              });

              // Apply inherited styles to the KaTeX span
              if (inheritedStyles) {
                span.style.cssText = inheritedStyles;
              }

              // Apply styles to nested KaTeX elements
              const katexElements = span.querySelectorAll(".katex, .katex *");
              katexElements.forEach((elem: Element) => {
                if (elem instanceof HTMLElement && inheritedStyles) {
                  const colorMatch = inheritedStyles.match(/color:\s*([^;]+)/);
                  const backgroundMatch = inheritedStyles.match(
                    /background[^:]*:\s*([^;]+)/g,
                  );
                  const textFillMatch = inheritedStyles.match(
                    /-webkit-text-fill-color:\s*([^;]+)/,
                  );

                  if (colorMatch) {
                    elem.style.color = colorMatch[1];
                  }
                  if (textFillMatch) {
                    elem.style.webkitTextFillColor = textFillMatch[1];
                  }
                  if (backgroundMatch) {
                    backgroundMatch.forEach((bg) => {
                      const [prop, value] = bg.split(":");
                      elem.style.setProperty(prop.trim(), value.trim());
                    });
                    elem.style.webkitBackgroundClip = "text";
                    elem.style.backgroundClip = "text";
                  }
                }
              });

              fragment.appendChild(span);
            } catch (error) {
              console.warn("KaTeX render error:", error);
              fragment.appendChild(document.createTextNode(part));
            }
          } else if (part) {
            // Regular text
            fragment.appendChild(document.createTextNode(part));
          }
        });

        textNode.parentNode?.replaceChild(fragment, textNode);
      }
    });
  } catch (error) {
    console.warn("Error processing math:", error);
  }
}

/**
 * Render basic inline markdown to HTML.
 * Supports: **bold**, *italic*, `code`, ~~strikethrough~~
 * HTML is escaped first; only known-safe tags are produced.
 * LaTeX $...$ is left untouched — processMath() handles it post-render.
 */
function renderInlineMarkdown(text: string): string {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  // Inline code — before bold/italic to avoid conflict
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  // Bold
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  // Italic
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  html = html.replace(/_([^_]+)_/g, "<em>$1</em>");
  // Strikethrough
  html = html.replace(/~~([^~]+)~~/g, "<del>$1</del>");
  return html;
}

// Lifecycle hooks
onMounted(() => {
  processMath();
});

// Re-process math when props change
watch([() => props.items], () => {
  processMath();
});

const dotClasses: Record<string, string> = {
  primary: "text-coral-500",
  secondary: "text-coral-400",
  tech: "text-amber-500",
  neutral: "text-coral-500",
  "gradient-primary": "text-coral-500",
  "gradient-secondary": "text-coral-400",
  "gradient-tech": "text-amber-500",
  success: "text-coral-500",
  warning: "text-amber-500",
  error: "text-coral-600",
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
