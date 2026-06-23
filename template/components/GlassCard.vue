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

// Style configuration — tinted backgrounds, no borders
const variantClasses = {
  primary: "bg-sjtu-50 dark:bg-sjtu-950/30",
  secondary: "bg-academic-50 dark:bg-academic-950/30",
  tech: "bg-tech-electric-50 dark:bg-tech-electric-950/30",
  neutral: "",
  "gradient-primary": "bg-sjtu-50 dark:bg-sjtu-950/30",
  "gradient-secondary": "bg-academic-50 dark:bg-academic-950/30",
  "gradient-tech": "bg-tech-electric-50 dark:bg-tech-electric-950/30",
  success: "bg-success-50 dark:bg-success-950/30",
  warning: "bg-warning-50 dark:bg-warning-950/30",
  error: "bg-error-50 dark:bg-error-950/30",
};

const sizeClasses = {
  sm: "p-3 text-sm",
  md: "p-4",
  lg: "p-6 text-lg",
};

const titleClasses = {
  primary: "text-sjtu-600 dark:text-sjtu-400",
  secondary: "text-academic-600 dark:text-academic-400",
  tech: "text-tech-electric-600 dark:text-tech-electric-400",
  neutral: "text-on-surface",
  "gradient-primary": "text-gradient-sjtu",
  "gradient-secondary": "text-gradient-academic",
  "gradient-tech": "text-gradient-tech",
  success: "text-success-600 dark:text-success-400",
  warning: "text-warning-600 dark:text-warning-400",
  error: "text-error-600 dark:text-error-400",
};

const subtitleClasses = {
  primary: "text-sjtu-500 dark:text-sjtu-300",
  secondary: "text-academic-500 dark:text-academic-300",
  tech: "text-tech-electric-500 dark:text-tech-electric-300",
  neutral: "text-on-surface-variant",
  "gradient-primary": "text-sjtu-600 dark:text-sjtu-400",
  "gradient-secondary": "text-academic-600 dark:text-academic-400",
  "gradient-tech": "text-tech-electric-600 dark:text-tech-electric-400",
  success: "text-success-500 dark:text-success-300",
  warning: "text-warning-500 dark:text-warning-300",
  error: "text-error-500 dark:text-error-300",
};

const iconClasses = {
  primary: "text-sjtu-400 dark:text-sjtu-300",
  secondary: "text-academic-400 dark:text-academic-300",
  tech: "text-tech-electric-400 dark:text-tech-electric-300",
  neutral: "text-on-surface",
  "gradient-primary": "text-sjtu-400 dark:text-sjtu-300",
  "gradient-secondary": "text-academic-400 dark:text-academic-300",
  "gradient-tech": "text-tech-electric-400 dark:text-tech-electric-300",
  success: "text-success-600 dark:text-success-400",
  warning: "text-warning-600 dark:text-warning-400",
  error: "text-error-600 dark:text-error-400",
};

const dotClasses = {
  primary: "bg-sjtu-400",
  secondary: "bg-academic-400",
  tech: "bg-tech-electric-400",
  neutral: "bg-neutral-400",
  "gradient-primary": "bg-sjtu-400",
  "gradient-secondary": "bg-academic-400",
  "gradient-tech": "bg-tech-electric-400",
  success: "bg-success-400",
  warning: "bg-warning-400",
  error: "bg-error-400",
};
</script>

<template>
  <div
    ref="cardRef"
    class="rounded-xl transition-all duration-200 bg-white dark:bg-neutral-900"
    :class="[variantClasses[variant], sizeClasses[size]]"
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
          class="mr-2.5 flex-shrink-0"
          :class="[
            icon,
            iconClasses[variant],
            size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl',
          ]"
        />
        <span :class="titleClasses[variant]">{{ title }}</span>
      </div>
      <span v-else :class="titleClasses[variant]">{{ title }}</span>
    </div>

    <!-- Subtitle -->
    <div
      v-if="subtitle"
      class="leading-relaxed"
      :class="[
        subtitleClasses[variant],
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
        class="flex flex-gap-4 items-center"
        :class="[
          size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm',
        ]"
      >
        <!-- Square bullet (Slidev style) -->
        <!-- <span
          v-if="listStyle === 'square'"
          class="inline-block w-1.5 h-1.5 mr-3 flex-shrink-0"
          :class="dotClasses[variant]"
        /> -->
        <div
          v-if="listStyle === 'square'"
          i-ph:square-duotone
          :class="dotClasses[variant]"
        />
        <!-- Round dot bullet -->
        <!-- <span
          v-else
          class="inline-block w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0"
          :class="dotClasses[variant]"
        /> -->
        <div v-else i-ph:circle-duotone :class="dotClasses[variant]" />
        <div class="text-on-surface flex-1">
          {{ item }}
        </div>
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
