# SJTU Color System Usage Examples

This file demonstrates practical usage of the SJTU color system in Slidev presentations.

## Slide Header Examples

```markdown
# Main Title {.emphasis-primary.text-4xl}
# Section Title {.text-primary.font-semibold}
# Subsection {.text-secondary.font-medium}
```

## Content Highlighting

```markdown
<!-- Key concepts -->
<span class="emphasis-tech">neural operators</span>
<span class="emphasis-primary">SJTU research</span>
<span class="emphasis-secondary">academic excellence</span>

<!-- Important information boxes -->
<div class="card bg-tech-cyber-50 dark:bg-tech-cyber-950 border-tech-cyber-200 dark:border-tech-cyber-800 p-4">
  Key insight goes here
</div>

<!-- Warning/attention boxes -->
<div class="card bg-academic-50 dark:bg-academic-950 border-academic-200 dark:border-academic-800 p-4">
  Important note
</div>
```

## Interactive Elements

```markdown
<!-- Buttons for navigation or emphasis -->
<button class="btn-primary">Learn More</button>
<button class="btn-secondary">Download Paper</button>
<button class="btn-outline">View Code</button>

<!-- Hover effects for interactive elements -->
<div class="hover-primary p-4 rounded cursor-pointer">
  Hover me for primary color
</div>
```

## Code Blocks and Technical Content

```markdown
<!-- Enhanced code blocks -->
<div class="code-block p-4">
  <code class="text-tech-cyber">
  def neural_operator(x):
      return model.forward(x)
  </code>
</div>
```

## Mathematical Content

```markdown
<!-- Equations with colored emphasis -->
<div class="text-primary text-xl">
$$
\mathcal{N}: \mathcal{A} \rightarrow \mathcal{U}
$$
</div>

<!-- Description with semantic colors -->
<div class="text-on-surface-variant">
where $\mathcal{N}$ represents the <span class="text-primary">neural operator</span>
</div>
```

## Layout Combinations

```markdown
<!-- Two-column layout with consistent theming -->
<div class="grid grid-cols-2 gap-6">
  <div class="card p-6">
    <h3 class="text-primary mb-4">Problem</h3>
    <p class="text-on-surface">Description here</p>
  </div>
  <div class="card p-6">
    <h3 class="text-secondary mb-4">Solution</h3>
    <p class="text-on-surface">Solution here</p>
  </div>
</div>
```

## Visual Effects

```markdown
<!-- Glowing elements for emphasis -->
<div class="glow-sjtu bg-primary text-white p-6 rounded-lg text-center">
  Key Result: 95% Accuracy
</div>

<!-- Gradient backgrounds for visual appeal -->
<div class="bg-gradient-tech text-white p-8 rounded-lg">
  <h2 class="text-2xl mb-4">Future Directions</h2>
  <p>Next steps in our research...</p>
</div>
```

## Accessibility Tips

- Use semantic color classes that work in both light and dark modes
- Always combine color with other visual cues (icons, typography, etc.)
- Test readability in both modes
- Use high contrast combinations for important text

## Performance Tips

- The preset is optimized for minimal CSS output
- Colors are tree-shaken based on usage
- Use shortcuts for common patterns
- Leverage CSS custom properties for dynamic theming
