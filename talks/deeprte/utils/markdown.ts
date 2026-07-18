/**
 * Render basic inline markdown to HTML.
 * Supports: **bold**, *italic*, `code`, ~~strikethrough~~
 * HTML is escaped first; only known-safe tags are produced.
 * LaTeX $...$ is left untouched — use useKaTeX composable for math rendering.
 */
export function renderInlineMarkdown(text: string): string {
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
