import { nextTick, type Ref } from "vue";

/**
 * Composable for runtime KaTeX rendering within a DOM container.
 *
 * Call `processMath()` after mount and when content changes.
 * The container ref must point to a rendered DOM element.
 *
 * @example
 *   const containerRef = ref<HTMLElement>();
 *   const { processMath } = useKaTeX(containerRef);
 *   onMounted(() => processMath());
 *   watch(() => props.items, () => processMath());
 */
export function useKaTeX(containerRef: Ref<HTMLElement | undefined>) {
  let katex: any = null;

  /** Load KaTeX library dynamically. */
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

  /** Walk the container DOM and render $...$ math with KaTeX. */
  async function processMath() {
    if (!containerRef.value) return;

    await nextTick();

    try {
      const katexInstance = await loadKaTeX();
      if (!katexInstance || !katexInstance.render) {
        console.warn("KaTeX render method not available");
        return;
      }

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

      textNodes.forEach((textNode) => {
        const text = textNode.textContent!;
        const parts = text.split(/(\$[^$]+\$)/g);

        if (parts.length <= 1) return;

        const fragment = document.createDocumentFragment();
        let inheritedStyles = "";

        const parentElement = textNode.parentElement;
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

          if (styleRules) inheritedStyles = styleRules;
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

              // Propagate inherited color/bg to nested KaTeX elements
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

                  if (colorMatch) elem.style.color = colorMatch[1];
                  if (textFillMatch)
                    elem.style.webkitTextFillColor = textFillMatch[1];
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
      });
    } catch (error) {
      console.warn("Error processing math:", error);
    }
  }

  return { processMath };
}
