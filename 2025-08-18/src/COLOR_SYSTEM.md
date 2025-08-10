# SJTU Color System Documentation

This document describes the custom UnoCSS preset designed for presentations based on Shanghai Jiao Tong University's visual identity.

## Overview

The SJTU color system provides a comprehensive palette designed for modern presentations with excellent readability in both light and dark modes. It extends UnoCSS with SJTU-inspired colors while maintaining compatibility with Slidev's theming system.

## Color Categories

### 1. Primary SJTU Colors

- **SJTU Blue** (`sjtu-*`): The official SJTU deep blue color
  - Core color: `#0066cc` (sjtu-600)
  - Available in shades 50-950
  - Usage: Primary brand elements, headings, call-to-action buttons

- **Academic Gold** (`academic-*`): Secondary brand color
  - Core color: `#e29a28` (academic-600)
  - Available in shades 50-950
  - Usage: Accents, highlights, academic content

### 2. Tech Colors

Modern vibrant colors for contemporary presentations:

- **Electric Blue** (`tech-electric-*`): `#0ea5e9`
- **Cyber Green** (`tech-cyber-*`): `#22c55e`
- **Innovation Purple** (`tech-innovation-*`): `#a855f7`
- **Energy Orange** (`tech-energy-*`): `#f97316`

### 3. Semantic Colors

Standard semantic colors for UI feedback:
- **Success**: Green tones
- **Warning**: Gold/yellow tones
- **Error**: Red tones
- **Info**: Blue tones

### 4. Neutral Colors

Comprehensive neutral palette from white to black (neutral-0 to neutral-1000) for backgrounds, text, and borders.

## Usage Examples

### Text Styling

```html
<!-- Primary text colors -->
<h1 class="text-primary">SJTU Blue Text</h1>
<h2 class="text-secondary">Academic Gold Text</h2>
<p class="text-on-surface">Readable body text</p>
<p class="text-on-surface-variant">Secondary text</p>

<!-- Gradient text effects -->
<h1 class="text-gradient-sjtu">SJTU Gradient</h1>
<h2 class="text-gradient-academic">Academic Gradient</h2>
<h3 class="text-gradient-tech">Tech Gradient</h3>

<!-- Emphasis styles -->
<span class="emphasis-primary">Primary Emphasis</span>
<span class="emphasis-secondary">Secondary Emphasis</span>
<span class="emphasis-tech">Tech Emphasis</span>
```

### Background Styling

```html
<!-- Solid backgrounds -->
<div class="bg-primary">Primary background</div>
<div class="bg-surface">Surface background</div>
<div class="bg-surface-2">Elevated surface</div>

<!-- Gradient backgrounds -->
<div class="bg-gradient-sjtu">SJTU gradient</div>
<div class="bg-gradient-academic">Academic gradient</div>
<div class="bg-gradient-tech">Tech gradient</div>
```

### Interactive Elements

```html
<!-- Buttons -->
<button class="btn-primary">Primary Button</button>
<button class="btn-secondary">Secondary Button</button>
<button class="btn-outline">Outline Button</button>

<!-- Cards -->
<div class="card">Basic card</div>
<div class="card-hover">Hoverable card</div>

<!-- Code blocks -->
<div class="code-block">
  <code>console.log('hello');</code>
</div>
```

### Special Effects

```html
<!-- Glow effects -->
<div class="glow-sjtu">SJTU glow</div>
<div class="glow-tech">Tech glow</div>

<!-- Hover states -->
<div class="hover-primary">Hover for primary color</div>
<div class="hover-surface">Hover for surface change</div>
```

## Dark/Light Mode Support

All colors and shortcuts are designed to work seamlessly in both modes:

- Colors automatically adjust based on `dark:` variants
- Surface colors provide appropriate contrast
- Text colors maintain readability
- Interactive states work in both modes

## Integration with Slidev

The preset extends Slidev's default theme without breaking existing functionality:

- Works with existing Slidev layouts
- Compatible with syntax highlighting
- Maintains transition effects
- Supports all Slidev features

## Customization

You can extend or override colors by modifying the `preset-sjtu.ts` file:

```typescript
// Add custom colors
colors: {
  'custom': {
    500: '#your-color',
  }
}

// Add custom shortcuts
shortcuts: {
  'my-style': 'bg-custom-500 text-white',
}
```

## Accessibility

The color system follows accessibility best practices:

- High contrast ratios for text readability
- Semantic color meanings
- Multiple ways to convey information (not just color)
- Works with screen readers and assistive technologies

## Examples in Slides

See the updated slide content for practical examples of how to use these colors effectively in presentations.
