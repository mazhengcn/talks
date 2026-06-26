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
 *   variant="callout"        → callout        (coral-tinted bg, coral text)
 *   variant="callout-accent" → callout-accent (amber-tinted bg, amber text)
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

// KaTeX instance cache
let katex: any = null;

/**
 * Load KaTeX library dynamically.
 * First tries window.katex (if loaded by Slidev), then dynamic import.
 */
async function loadKaTeX() {
  if (katex) return katex;

  try {
    if ((window as any).katex) {
      katex = (window as any).katex;
      return katex;
    }
    const katexModule = await import("katex");
    katex = katexModule.default || katexModule;
    return katex;
  } catch (error) {
    console.warn("Failed to load KaTeX:", error);
    return null;
  }
}

/**
 * Process LaTeX math expressions in the component.
 * Finds text nodes with $...$ patterns and renders them using KaTeX.
 */
async function processMath() {
  if (!props.enableLatex || !cardRef.value) return;

  await nextTick();

  try {
    const katexInstance = await loadKaTeX();
    if (!katexInstance || !katexInstance.render) {
      console.warn("KaTeX render method not available");
      return;
    }

    const walker = document.createTreeWalker(
      cardRef.value,
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

    textNodes.forEach((textNode) => {
      const text = textNode.textContent!;
      const parts = text.split(/(\$[^$]+\$)/g);

      if (parts.length > 1) {
        const fragment = document.createDocumentFragment();

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
            const math = part.slice(1, -1);
            const span = document.createElement("span");

            try {
              katexInstance.render(math, span, {
                throwOnError: false,
                displayMode: false,
              });

              if (inheritedStyles) {
                span.style.cssText = inheritedStyles;
              }

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
watch([() => props.title, () => props.subtitle, () => props.items], () => {
  processMath();
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
        <span class="text-foreground-soft" v-html="renderInlineMarkdown(title)" />
      </div>
      <span v-else class="text-foreground-soft" v-html="renderInlineMarkdown(title)" />
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
