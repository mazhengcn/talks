<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";

interface Props {
  title?: string;
  subtitle?: string;
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
  size?: "sm" | "md" | "lg";
  icon?: string;
  enableLatex?: boolean;
  listStyle?: "dot" | "square";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "neutral",
  size: "md",
  enableLatex: false,
  listStyle: "square",
});

// Refs for DOM elements
const cardRef = ref<HTMLElement>();

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
  if (!props.enableLatex || !cardRef.value) return;

  await nextTick();

  try {
    const katexInstance = await loadKaTeX();
    if (!katexInstance || !katexInstance.render) {
      console.warn("KaTeX render method not available");
      return;
    }

    // Find all text nodes that contain LaTeX
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

// Lifecycle hooks
onMounted(() => {
  processMath();
});

// Re-process math when props change
watch([() => props.title, () => props.subtitle, () => props.items], () => {
  processMath();
});

// Style configuration — matches Anthropic warm design tokens
const variantClasses = {
  primary: "",
  secondary: "",
  tech: "",
  neutral: "",
  "gradient-primary": "",
  "gradient-secondary": "",
  "gradient-tech": "",
  success: "",
  warning: "",
  error: "",
};

const sizeClasses = {
  sm: "p-3 text-sm",
  md: "p-5",
  lg: "p-6 text-lg",
};

const titleClasses = {
  primary: "text-primary",
  secondary: "text-primary",
  tech: "text-primary",
  neutral: "text-foreground-soft",
  "gradient-primary": "text-primary",
  "gradient-secondary": "text-primary",
  "gradient-tech": "text-primary",
  success: "text-primary",
  warning: "text-primary",
  error: "text-primary",
};

const subtitleClasses = {
  primary: "text-muted-foreground",
  secondary: "text-muted-foreground",
  tech: "text-muted-foreground",
  neutral: "text-muted-foreground",
  "gradient-primary": "text-muted-foreground",
  "gradient-secondary": "text-muted-foreground",
  "gradient-tech": "text-muted-foreground",
  success: "text-muted-foreground",
  warning: "text-muted-foreground",
  error: "text-muted-foreground",
};

const iconClasses = {
  primary: "text-primary",
  secondary: "text-primary",
  tech: "text-primary",
  neutral: "text-primary",
  "gradient-primary": "text-primary",
  "gradient-secondary": "text-primary",
  "gradient-tech": "text-primary",
  success: "text-primary",
  warning: "text-primary",
  error: "text-primary",
};

const dotClasses = {
  primary: "bg-coral-500",
  secondary: "bg-coral-500",
  tech: "bg-coral-500",
  neutral: "bg-coral-500",
  "gradient-primary": "bg-coral-500",
  "gradient-secondary": "bg-coral-500",
  "gradient-tech": "bg-coral-500",
  success: "bg-coral-500",
  warning: "bg-coral-500",
  error: "bg-coral-500",
};
</script>

<template>
  <div
    ref="cardRef"
    class="card"
    :class="sizeClasses[size]"
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
        <span class="text-foreground-soft">{{ title }}</span>
      </div>
      <span v-else class="text-foreground-soft">{{ title }}</span>
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
      {{ subtitle }}
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
        {{ item }}
      </li>
    </ul>

    <!-- Default slot for custom content -->
    <div v-if="!items || !items.length">
      <slot />
    </div>
  </div>
</template>

<style scoped>
/**
 * Solid color-block card — depth through background contrast, not borders or shadows.
 * Variant backgrounds are applied via variantClasses above.
 */
</style>
