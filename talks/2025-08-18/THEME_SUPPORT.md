# Light/Dark Theme Support Guide

## Overview

The SJTU color system now fully supports both light and dark themes with automatic detection based on your system preference or manual control through Slidev.

## Theme Configuration

### Automatic Theme Detection

```yaml
---
colorSchema: auto # Automatically detects system preference
---
```

### Manual Theme Control

```yaml
---
colorSchema: light # Force light mode
---

# OR

---
colorSchema: dark # Force dark mode
---
```

## Color Adaptations

### Primary Colors
- **Light Mode**: Darker variants for better contrast on white backgrounds
  - SJTU Blue: `#0066cc` → `#0052a3` (darker)
  - Academic Gold: `#e29a28` → `#bc7a1d` (darker)

- **Dark Mode**: Lighter variants for better contrast on dark backgrounds
  - SJTU Blue: `#0066cc` → `#36acff` (lighter)
  - Academic Gold: `#e29a28` → `#f5c968` (lighter)

### Surface Colors
- **Light Mode**: White and light grays
  - Background: `#ffffff`
  - Surface 2: `#f8f9fa`
  - Surface 3: `#f1f3f4`

- **Dark Mode**: Dark grays and blacks
  - Background: `#1a1a1a`
  - Surface 2: `#2d2d2d`
  - Surface 3: `#404040`

### Text Colors
- **Light Mode**: Dark text on light backgrounds
  - Primary text: `#212529`
  - Secondary text: `#6c757d`
  - Muted text: `#adb5bd`

- **Dark Mode**: Light text on dark backgrounds
  - Primary text: `#ffffff`
  - Secondary text: `#a3a3a3`
  - Muted text: `#737373`

## Usage Examples

### Theme-Aware Components

```html
<!-- Cards that adapt to theme -->
<div class="card">
  <h3 class="text-on-surface">Title</h3>
  <p class="text-on-surface-variant">Description</p>
</div>

<!-- Buttons with proper contrast -->
<button class="btn-primary">Primary Action</button>
<button class="btn-outline">Secondary Action</button>

<!-- Adaptive glow effects -->
<div class="glow-adaptive bg-primary text-white p-4 rounded">
  Glowing element that adapts to theme
</div>
```

### Color Shortcuts

All shortcuts automatically adapt:

- `bg-primary` → Light: `bg-sjtu-600`, Dark: `bg-sjtu-400`
- `text-primary` → Light: `text-sjtu-700`, Dark: `text-sjtu-300`
- `card` → Adapts borders, shadows, and backgrounds
- `glow-adaptive` → Different glow intensities for each theme

### CSS Variables

The system provides CSS custom properties:

```css
/* These automatically switch based on theme */
var(--sjtu-primary)          /* Main brand color */
var(--sjtu-secondary)        /* Secondary brand color */
var(--surface-bg)            /* Background color */
var(--text-on-surface)       /* Primary text color */
var(--border-color)          /* Border color */
```

## Best Practices

### 1. Use Semantic Classes
```html
<!-- Good: Semantic, theme-aware -->
<p class="text-on-surface">Main content</p>
<p class="text-on-surface-variant">Secondary content</p>

<!-- Avoid: Hard-coded colors -->
<p class="text-gray-900 dark:text-white">Content</p>
```

### 2. Test Both Themes
Always test your slides in both light and dark modes to ensure proper contrast and readability.

### 3. Use Adaptive Effects
```html
<!-- Adaptive glow that works in both themes -->
<div class="glow-adaptive">Content</div>

<!-- Rather than fixed intensity -->
<div class="glow-sjtu">Content</div>
```

### 4. Proper Card Styling
```html
<!-- Cards with proper theme support -->
<div class="card p-4">
  <h3 class="text-on-surface">Card Title</h3>
  <p class="text-on-surface-variant">Card description</p>
</div>
```

## Accessibility Features

- High contrast ratios maintained in both themes
- Proper color relationships preserved
- Screen reader friendly semantic markup
- Focus indicators work in both themes
- No information conveyed by color alone

## Debugging Theme Issues

### Check Current Theme
The body element will have `dark` class in dark mode:

```css
/* Dark mode styles automatically applied */
.dark .my-element {
  /* Dark mode specific styles */
}
```

### Browser Developer Tools
1. Open DevTools
2. Check if `<html class="dark">` is present
3. Toggle system theme to test switching
4. Verify CSS custom properties update

### Common Issues

1. **Colors not switching**: Check if using semantic classes vs. hardcoded
2. **Poor contrast**: Verify text/background color combinations
3. **Glow effects too bright**: Use adaptive variants
4. **Borders invisible**: Ensure proper border color classes

## Performance

- Colors are tree-shaken based on usage
- CSS custom properties enable efficient theme switching
- No JavaScript required for theme detection
- Minimal CSS output with optimized selectors
