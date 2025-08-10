---
layout: cover
highlighter: shiki
css: unocss
colorSchema: auto
transition: fade-out
mdc: true
glowSeed: 4
title: SJTU Slidev Template
remoteAssets: true
---

# SJTU Slidev Template {.emphasis-primary.text-4xl}

<div text-2xl class="text-on-surface-variant">Component Showcase & Design System Demo</div>

<div mt15 />

<div flex="~ col gap-2">
  <div text-left text-2xl class="text-on-surface">Template Showcase</div>
  <div text-left text-sm class="text-secondary">Shanghai Jiao Tong University</div>
  <div text-left text-sm class="text-on-surface-variant">Modern presentation template with comprehensive design system</div>
</div>

<div abs-br mx-10 my-11 flex="~ col items-end" text-center>
  <div text-sm class="text-on-surface-muted">August 10, 2025</div>
</div>

---
layout: center
---

# SJTU Design System Overview

Complete color palette and component showcase

<div class="grid grid-cols-3 gap-5 mt-7">
  <GlassCard
    title="SJTU Blue"
    subtitle="University brand"
    variant="primary"
    size="md"
    icon="i-ph-graduation-cap-duotone"
  >
    <div class="space-y-3">
      <div class="bg-gradient-sjtu h-8 rounded"></div>
      <div class="grid grid-cols-3 gap-1">
        <div class="bg-sjtu-400 h-4 rounded"></div>
        <div class="bg-sjtu-600 h-4 rounded"></div>
        <div class="bg-sjtu-800 h-4 rounded"></div>
      </div>
      <div class="text-sm text-on-surface-variant">Primary university color</div>
    </div>
  </GlassCard>

  <GlassCard
    title="Academic Gold"
    subtitle="Excellence tone"
    variant="secondary"
    size="md"
    icon="i-ph-medal-duotone"
  >
    <div class="space-y-3">
      <div class="bg-gradient-academic h-8 rounded"></div>
      <div class="grid grid-cols-3 gap-1">
        <div class="bg-academic-400 h-4 rounded"></div>
        <div class="bg-academic-600 h-4 rounded"></div>
        <div class="bg-academic-800 h-4 rounded"></div>
      </div>
      <div class="text-sm text-on-surface-variant">Warm academic tones</div>
    </div>
  </GlassCard>

  <GlassCard
    title="Tech Spectrum"
    subtitle="Modern colors"
    variant="tech"
    size="md"
    icon="i-ph-cpu-duotone"
  >
    <div class="space-y-3">
      <div class="bg-gradient-tech h-8 rounded"></div>
      <div class="grid grid-cols-3 gap-1">
        <div class="bg-tech-electric-500 h-4 rounded"></div>
        <div class="bg-tech-cyber-500 h-4 rounded"></div>
        <div class="bg-tech-innovation-500 h-4 rounded"></div>
      </div>
      <div class="text-sm text-on-surface-variant">Vibrant tech colors</div>
    </div>
  </GlassCard>
</div>

<div class="grid grid-cols-2 gap-8 mt-7">
  <GlassCard
    title="Interactive Buttons"
    subtitle="Glassmorphism effects"
    variant="gradient-primary"
    icon="i-ph-hand-tap-duotone"
    size="md"
  >
    <div class="space-y-3">
      <div class="flex gap-3 justify-center">
        <button class="btn-primary text-sm">Primary</button>
        <button class="btn-secondary text-sm">Secondary</button>
        <button class="btn-outline text-sm">Outline</button>
      </div>
      <div class="text-sm text-on-surface-variant text-center">Modern glass design with hover effects</div>
    </div>
  </GlassCard>

  <GlassCard
    title="Accent Colors"
    subtitle="Vibrant highlights"
    variant="gradient-secondary"
    icon="i-ph-palette-duotone"
    size="md"
  >
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-accent-magenta-700 h-8 rounded flex items-center justify-center">
          <span class="text-white text-sm font-medium">Magenta</span>
        </div>
        <div class="bg-accent-aqua-700 h-8 rounded flex items-center justify-center">
          <span class="text-white text-sm font-medium">Aqua</span>
        </div>
      </div>
      <div class="text-sm text-on-surface-variant text-center">Special emphasis colors</div>
    </div>
  </GlassCard>
</div>

---
layout: center
---

# Enhanced GlassCard Demo

<div class="grid grid-cols-3 gap-6 mt-8">
    <GlassCard
    title="Neural Networks"
    subtitle="Deep learning fundamentals"
    variant="primary"
    icon="i-ph:cube-transparent-duotone"
    :items="['Forward propagation', 'Backpropagation', 'Gradient descent', 'Activation functions']"
  />

  <GlassCard
    title="Research Focus"
    subtitle="Current projects"
    variant="gradient-secondary"
    icon="i-ph:circles-three-duotone"
    :items="['Radiative Transfer', 'Neural Operators', 'Physics-Informed ML', 'Scientific Computing']"
  />

  <GlassCard
    title="Development"
    subtitle="Technical stack"
    variant="tech"
    icon="i-ph:chart-bar-duotone"
    :items="['Python/JAX', 'Neural Networks', 'Scientific Computing', 'Open Source']"
    />
</div>

<div class="grid grid-cols-4 gap-4 mt-8">
  <GlassCard
    title="Success"
    variant="success"
    icon="i-material-symbols:19mp-outline-rounded"
    size="sm"
    :items="['Completed', 'Validated', 'Published']"
  />

  <GlassCard
    title="Warning"
    variant="warning"
    icon="i-ph:circles-three-duotone"
    size="sm"
    :items="['In Progress', 'Review Needed', 'Pending']"
  />

  <GlassCard
    title="Error"
    variant="error"
    icon="i-ph:chart-bar-duotone"
    size="sm"
    :items="['Failed Tests', 'Bug Reports', 'Critical Issues']"
  />

  <GlassCard
    title="Gradient Primary"
    variant="gradient-primary"
    icon="i-ph:cube-transparent-duotone"
    size="sm"
    :items="['Vibrant', 'Modern', 'Eye-catching']"
  />
</div>

---

# Another demo

<div class="grid grid-cols-2 gap-8 mt-8">
  <GlassCard
    title="Large Card with Icon"
    subtitle="Enhanced with Iconify icons"
    variant="tech"
    icon="i-ph:acorn"
    size="lg"
  >
    <div class="text-on-surface">
      This card demonstrates the <span class="emphasis-tech">enhanced features</span>:
      <br>• Icon support from Iconify
      <br>• Better text spacing without subtitles
      <br>• Reduced shadow for cleaner look
      <br>• New gradient border variants
    </div>
  </GlassCard>

  <GlassCard variant="gradient-primary" size="lg">
    <div class="text-gradient-tech text-xl font-bold mb-4">Gradient Borders</div>
    <div class="text-on-surface mb-4">
      The new gradient variants create beautiful colored borders that adapt to both themes.
    </div>
    <div class="flex flex-wrap gap-2">
      <div class="bg-tech-electric/20 px-3 py-1 rounded text-sm">Electric</div>
      <div class="bg-tech-innovation/20 px-3 py-1 rounded text-sm">Innovation</div>
      <div class="bg-tech-cyber/20 px-3 py-1 rounded text-sm">Cyber</div>
    </div>
  </GlassCard>
</div>

---

# List Style Options

<div class="grid grid-cols-2 gap-8 mt-8">
  <GlassCard
    title="Square Bullets (Default)"
    subtitle="Matches Slidev's default style"
    variant="primary"
    :items="['Machine Learning', 'Deep Learning', 'Neural Networks', 'Scientific Computing']"
    list-style="square"
  />

  <GlassCard
    title="Round Dot Bullets"
    subtitle="Classic circular bullet points"
    variant="secondary"
    :items="['Data Science', 'Python Programming', 'Research Papers', 'Open Source']"
    list-style="dot"
  />
</div>

<div class="grid grid-cols-3 gap-6 mt-8">
  <GlassCard
    title="Tech Style"
    variant="tech"
    size="sm"
    :items="['JAX Framework', 'GPU Computing', 'CUDA Support']"
    list-style="square"
  />

  <GlassCard
    title="Success Status"
    variant="success"
    size="sm"
    :items="['Tests Passing', 'Code Review', 'Documentation']"
    list-style="dot"
  />

  <GlassCard
    title="Gradient Style"
    variant="gradient-primary"
    size="sm"
    :items="['Modern Design', 'Vibrant Colors', 'Clean Layout']"
    list-style="square"
  />
</div>

---

# GlassCard with LaTeX Support

<div class="grid grid-cols-2 gap-8 mt-8">
  <GlassCard
    title="Mathematical Formulation with $\LaTeX$"
    subtitle="The radiative transfer equation involves $I(r,\Omega)$"
    variant="warning"
    :enable-latex="true"
    :items="[
      'Radiation intensity: $I(r,\\Omega)$',
      'Total cross section: $\\mu_t(r)$',
      'Scattering cross section: $\\mu_s(r)$',
      'Phase function: $p(\\Omega,\\Omega^*)$'
    ]"
    size="lg"
  />

  <GlassCard
    title="Neural Network Notation"
    subtitle="Deep learning with $\mathbb{R}^n$ spaces"
    variant="gradient-primary"
    icon="i-ph:dog-duotone"
    :enable-latex="true"
    :items="[
      'Input layer: $x \\in \\mathbb{R}^{d_{\\text{in}}}$',
      'Hidden layers: $h_i = \\sigma(W_i h_{i-1} + b_i)$',
      'Output layer: $y \\in \\mathbb{R}^{d_\\text{out}}$',
      'Loss function: $\\mathcal{L}(\\theta)$'
    ]"
    size="lg"
  />
</div>

<div class="mt-6 text-center text-sm text-on-surface-variant">
  Use <code>:enable-latex="true"</code> prop to render LaTeX in titles, subtitles, and list items
</div>

---
glow: left
---

# Component Gallery

This template includes several powerful components for presentations

<div grid="~ cols-2 gap-8" mt-8>
  <GlassCard
    title="Available Components"
    subtitle="Ready-to-use presentation elements"
    variant="primary"
    icon="i-ph-cube-transparent-duotone"
    :items="['GlassCard - Main content container', 'ProsCons - Comparison tables', 'Repo - GitHub repository links', 'Emphasis - Text highlighting', 'IconTest - Icon compatibility checker']"
    size="lg"
  />

  <GlassCard
    title="SJTU Design System"
    subtitle="University-inspired color palette"
    variant="tech"
    icon="i-ph-palette-duotone"
    :items="['SJTU Blue gradients', 'Academic Gold themes', 'Tech vibrant colors', 'Modern glassmorphism effects', 'Light & dark mode support']"
    size="lg"
  />
</div>

<div mt-6 text-center>
  <GlassCard variant="gradient-primary" size="sm" text-center>
    Let's explore each component in detail!
  </GlassCard>
</div>

---

# Typography & Text Emphasis

Modern text styling and emphasis techniques

<div class="grid grid-cols-2 gap-6 mt-6">
  <GlassCard
    title="Text Emphasis Classes"
    subtitle="Built-in styling utilities"
    variant="primary"
    icon="i-ph-text-aa-duotone"
    size="lg"
  >
    <div class="space-y-4">
      <div class="space-y-2">
        <div class="text-xl emphasis-primary">Primary Emphasis</div>
        <div class="text-sm text-on-surface-variant">SJTU Blue gradient • <code class="text-xs">.emphasis-primary</code></div>
      </div>
      <div class="space-y-2">
        <div class="text-xl emphasis-secondary">Secondary Emphasis</div>
        <div class="text-sm text-on-surface-variant">Academic Gold gradient • <code class="text-xs">.emphasis-secondary</code></div>
      </div>
      <div class="space-y-2">
        <div class="text-xl emphasis-tech">Tech Emphasis</div>
        <div class="text-sm text-on-surface-variant">Vibrant tech gradient • <code class="text-xs">.emphasis-tech</code></div>
      </div>
    </div>
  </GlassCard>

  <GlassCard
    title="Emphasis Component"
    subtitle="Inline text highlighting"
    variant="tech"
    icon="i-ph-highlighter-duotone"
    size="lg"
  >
    <div class="space-y-4">
      <div class="space-y-3 text-base">
        <p>Use the <Emphasis>Emphasis component</Emphasis> for inline highlighting.</p>
        <p>Creates a <Emphasis>modern pill-shaped</Emphasis> highlight effect.</p>
        <p>Perfect for <Emphasis>key terms</Emphasis> and <Emphasis>important concepts</Emphasis>.</p>
      </div>
      <div class="space-y-2">
        <div class="text-sm text-on-surface-variant">Component usage:</div>
        <div class="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-lg text-xs font-mono">
          &lt;Emphasis&gt;highlighted text&lt;/Emphasis&gt;
        </div>
      </div>
    </div>
  </GlassCard>
</div>

<div class="mt-6">
  <GlassCard
    title="Advanced Typography Features"
    subtitle="Professional text presentation"
    variant="gradient-primary"
    icon="i-ph-article-duotone"
    size="sm"
  >
    <div class="grid grid-cols-3 gap-4 text-center">
      <div class="space-y-2">
        <div class="text-lg font-bold text-sjtu-600 dark:text-sjtu-400">Headlines</div>
        <div class="text-sm text-on-surface-variant">Bold, clear titles</div>
      </div>
      <div class="space-y-2">
        <div class="text-lg font-medium text-academic-600 dark:text-academic-400">Subtitles</div>
        <div class="text-sm text-on-surface-variant">Supporting context</div>
      </div>
      <div class="space-y-2">
        <div class="text-lg font-normal text-on-surface">Body Text</div>
        <div class="text-sm text-on-surface-variant">Readable content</div>
      </div>
    </div>
  </GlassCard>
</div>

---

# Gradient Text Effects

Beautiful text gradients for modern presentations

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-2xl mb-6">Available Gradients</h3>
    <div class="space-y-6">
      <div>
        <div class="text-3xl text-gradient-sjtu font-bold mb-2">SJTU Gradient</div>
        <div class="text-sm opacity-70 mb-1">Perfect for university presentations</div>
        <code class="text-xs">.text-gradient-sjtu</code>
      </div>
      <div>
        <div class="text-3xl text-gradient-academic font-bold mb-2">Academic Gradient</div>
        <div class="text-sm opacity-70 mb-1">Warm academic tones</div>
        <code class="text-xs">.text-gradient-academic</code>
      </div>
      <div>
        <div class="text-3xl text-gradient-tech font-bold mb-2">Tech Gradient</div>
        <div class="text-sm opacity-70 mb-1">Vibrant tech colors</div>
        <code class="text-xs">.text-gradient-tech</code>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6">Background Gradients</h3>
    <div class="space-y-4">
      <div class="bg-gradient-sjtu h-16 rounded-lg flex items-center justify-center">
        <div class="text-white font-semibold">SJTU Background</div>
      </div>
      <div class="bg-gradient-academic h-16 rounded-lg flex items-center justify-center">
        <div class="text-white font-semibold">Academic Background</div>
      </div>
      <div class="bg-gradient-tech h-16 rounded-lg flex items-center justify-center">
        <div class="text-white font-semibold">Tech Background</div>
      </div>
    </div>
    <div mt-4 text-sm opacity-60>
      Use <code>.bg-gradient-sjtu</code>, <code>.bg-gradient-academic</code>, or <code>.bg-gradient-tech</code>
    </div>
  </div>
</div>

---

# Button Styles & Interactive Elements

Professional button designs with hover effects

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-2xl mb-6">Button Variants</h3>
    <div class="space-y-4">
      <div>
        <button class="btn-primary">Primary Button</button>
        <div class="text-sm opacity-60 mt-1">Main actions</div>
      </div>
      <div>
        <button class="btn-secondary">Secondary Button</button>
        <div class="text-sm opacity-60 mt-1">Secondary actions</div>
      </div>
      <div>
        <button class="btn-outline">Outline Button</button>
        <div class="text-sm opacity-60 mt-1">Subtle actions</div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6">Interactive States</h3>
    <div class="space-y-4">
      <div class="card-hover p-4">
        <div class="font-semibold mb-2">Hover Card</div>
        <div class="text-sm opacity-70">Smooth hover transitions</div>
      </div>
      <div class="card p-4">
        <div class="font-semibold mb-2">Standard Card</div>
        <div class="text-sm opacity-70">Glassmorphism effect</div>
      </div>
    </div>
    <div mt-6 text-sm opacity-60>
      All elements support both light and dark themes automatically
    </div>
  </div>
</div>

---

# Icon System Demo

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-2xl mb-6">Phosphor Icons</h3>
    <div class="grid grid-cols-4 gap-4">
      <div class="text-center">
        <div class="i-ph-cube-transparent-duotone text-blue text-4xl mb-2" />
        <div class="text-sm">cube</div>
      </div>
      <div class="text-center">
        <div class="i-ph-circles-three-duotone text-green text-4xl mb-2" />
        <div class="text-sm">circles</div>
      </div>
      <div class="text-center">
        <div class="i-ph-chart-bar-duotone text-amber text-4xl mb-2" />
        <div class="text-sm">chart</div>
      </div>
      <div class="text-center">
        <div class="i-ph-palette-duotone text-purple text-4xl mb-2" />
        <div class="text-sm">palette</div>
      </div>
      <div class="text-center">
        <div class="i-ph-brain text-red text-4xl mb-2" />
        <div class="text-sm">brain</div>
      </div>
      <div class="text-center">
        <div class="i-ph-flask text-blue text-4xl mb-2" />
        <div class="text-sm">flask</div>
      </div>
      <div class="text-center">
        <div class="i-ph-code text-green text-4xl mb-2" />
        <div class="text-sm">code</div>
      </div>
      <div class="text-center">
        <div class="i-ph-heart text-red text-4xl mb-2" />
        <div class="text-sm">heart</div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6">Usage in Components</h3>
    <GlassCard
      title="Icon in GlassCard"
      subtitle="Icons enhance visual hierarchy"
      variant="tech"
      icon="i-ph-star-duotone"
      :items="['Easy to add with icon prop', 'Supports all Phosphor icons', 'Automatic color theming', 'Scales with component size']"
      size="lg"
    />
    <div mt-6>
      <div class="text-sm mb-2">Example usage:</div>
      <div class="code-block p-3 text-sm font-mono">
        icon="i-ph-star-duotone"
      </div>
    </div>
  </div>
</div>

---

# Repository Links

Easy GitHub repository integration

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-2xl mb-6">Repo Component</h3>
    <div class="space-y-6">
      <div>
        <div class="mb-2">Full repository name:</div>
        <Repo name="microsoft/vscode" />
      </div>
      <div>
        <div class="mb-2">Hide owner (show only repo name):</div>
        <Repo name="microsoft/vscode" :hide-owner="true" />
      </div>
      <div>
        <div class="mb-2">Multiple repositories:</div>
        <div class="space-y-2">
          <div><Repo name="slidevjs/slidev" /></div>
          <div><Repo name="unocss/unocss" /></div>
          <div><Repo name="vuejs/vue" /></div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 class="text-2xl mb-6">Usage Examples</h3>
    <div class="space-y-4">
      <div class="code-block p-4">
        <div class="text-sm font-mono mb-2">Basic usage:</div>
        <code class="text-xs">&lt;Repo name="owner/repo" /&gt;</code>
      </div>
      <div class="code-block p-4">
        <div class="text-sm font-mono mb-2">Hide owner:</div>
        <code class="text-xs">&lt;Repo name="owner/repo" :hide-owner="true" /&gt;</code>
      </div>
    </div>
    <GlassCard variant="primary" size="sm" mt-6>
      Perfect for referencing code repositories, open source projects, or related work in presentations
    </GlassCard>
  </div>
</div>

---

# ProsCons Component

Professional comparison tables

<div class="grid grid-cols-2 gap-8 mt-8">
  <div>
    <h3 class="text-2xl mb-6">Basic Usage</h3>
    <ProsCons
      :pros="[
        'Easy to implement',
        'Visually appealing',
        'Supports multiple items',
        'Responsive design'
      ]"
      :cons="[
        'Requires Vue.js',
        'Limited customization',
        'Not suitable for complex comparisons'
      ]"
    />
  </div>

  <div>
    <h3 class="text-2xl mb-6">Usage Code</h3>
    <div class="code-block p-4 text-sm font-mono">
      <div class="mb-4">
        &lt;ProsCons<br>
        &nbsp;&nbsp;:pros="[<br>
        &nbsp;&nbsp;&nbsp;&nbsp;'Easy to implement',<br>
        &nbsp;&nbsp;&nbsp;&nbsp;'Visually appealing',<br>
        &nbsp;&nbsp;&nbsp;&nbsp;'Supports multiple items'<br>
        &nbsp;&nbsp;]"<br>
        &nbsp;&nbsp;:cons="[<br>
        &nbsp;&nbsp;&nbsp;&nbsp;'Requires Vue.js',<br>
        &nbsp;&nbsp;&nbsp;&nbsp;'Limited customization'<br>
        &nbsp;&nbsp;]"<br>
        /&gt;
      </div>
    </div>
    <GlassCard variant="secondary" size="sm" mt-6>
      Perfect for decision making, feature comparisons, or presenting balanced viewpoints
    </GlassCard>
  </div>
</div>

---

# Advanced ProsCons Examples

Different use cases and scenarios

<div class="space-y-8">
  <div>
    <h3 class="text-2xl mb-4">Technology Comparison</h3>
    <div class="grid grid-cols-2 gap-8">
      <div>
        <div class="text-lg mb-3 emphasis-tech">Machine Learning Approach</div>
        <ProsCons
          :pros="[
            'Handles complex patterns',
            'Scalable to large datasets',
            'Continuous learning capability',
            'Automated feature extraction'
          ]"
          :cons="[
            'Requires large training data',
            'Black box model',
            'Computationally expensive',
            'Potential overfitting issues'
          ]"
        />
      </div>
      <div>
        <div class="text-lg mb-3 emphasis-primary">Traditional Methods</div>
        <ProsCons
          :pros="[
            'Interpretable results',
            'Fast execution',
            'Well-understood theory',
            'Lower computational cost'
          ]"
          :cons="[
            'Manual feature engineering',
            'Limited scalability',
            'Rigid assumptions',
            'Performance ceiling'
          ]"
        />
      </div>
    </div>
  </div>
</div>

---

# SJTU Color System Deep Dive

Comprehensive color palette for professional presentations

<div class="grid grid-cols-3 gap-5 mt-7">
  <GlassCard
    title="SJTU Colors"
    subtitle="University brand"
    variant="primary"
    icon="i-ph-graduation-cap-duotone"
    size="md"
  >
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-sjtu-600 rounded"></div>
        <span class="text-sm">Primary Blue</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-sjtu-400 rounded"></div>
        <span class="text-sm">Light Blue</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-sjtu-800 rounded"></div>
        <span class="text-sm">Dark Blue</span>
      </div>
    </div>
  </GlassCard>

  <GlassCard
    title="Academic Colors"
    subtitle="Warm tones"
    variant="secondary"
    icon="i-ph-book-duotone"
    size="md"
  >
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-academic-600 rounded"></div>
        <span class="text-sm">Academic Gold</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-academic-400 rounded"></div>
        <span class="text-sm">Light Gold</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-academic-800 rounded"></div>
        <span class="text-sm">Dark Gold</span>
      </div>
    </div>
  </GlassCard>

  <GlassCard
    title="Tech Colors"
    subtitle="Vibrant palette"
    variant="tech"
    icon="i-ph-cpu-duotone"
    size="md"
  >
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-tech-electric-500 rounded"></div>
        <span class="text-sm">Electric Blue</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-tech-cyber-500 rounded"></div>
        <span class="text-sm">Cyber Green</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-tech-innovation-500 rounded"></div>
        <span class="text-sm">Innovation Purple</span>
      </div>
    </div>
  </GlassCard>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <GlassCard
    title="Accent Colors"
    variant="gradient-primary"
    icon="i-ph-sparkle-duotone"
    size="sm"
  >
    <div class="space-y-2">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-accent-magenta-500 rounded"></div>
        <span class="text-sm">Accent Magenta</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-accent-aqua-500 rounded"></div>
        <span class="text-sm">Accent Aqua</span>
      </div>
    </div>
  </GlassCard>

  <GlassCard
    title="Surface Colors"
    variant="gradient-secondary"
    icon="i-ph-layers-duotone"
    size="sm"
  >
    <div class="space-y-1 text-sm">
      <div>Auto light/dark theme</div>
      <div>Glassmorphism effects</div>
      <div>Adaptive contrast</div>
    </div>
  </GlassCard>
</div>

---

# Layout & Animation Features

Built-in Slidev enhancements

<div class="grid grid-cols-2 gap-6 mt-6">
  <GlassCard
    title="Layout Options"
    subtitle="Available slide layouts"
    variant="primary"
    icon="i-ph-layout-duotone"
    :items="[
      'cover - Title slides',
      'center - Centered content',
      'default - Standard slides',
      'section - Section dividers'
    ]"
    size="md"
  />

  <GlassCard
    title="Animation Features"
    subtitle="Interactive enhancements"
    variant="tech"
    icon="i-ph-magic-wand-duotone"
    :items="[
      'v-click for step reveals',
      'Smooth fade transitions',
      'Hover animations on cards',
      'Auto theme switching'
    ]"
    size="md"
  />
</div>

<div class="mt-8">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-lg font-semibold mb-2">Pro Tip</div>
    <div>Use <code>glow: left</code> or <code>glow: right</code> in slide frontmatter to add subtle glow effects</div>
  </GlassCard>
</div>

---

# Template Customization Guide

How to adapt this template for your needs

<div class="grid grid-cols-2 gap-6 mt-6">
  <GlassCard
    title="Quick Start"
    subtitle="Get started quickly"
    variant="success"
    icon="i-ph-rocket-launch-duotone"
    :items="[
      '1. Copy template folder',
      '2. Edit slides.md content',
      '3. Replace images',
      '4. Run bun run dev'
    ]"
    size="md"
  />

  <GlassCard
    title="Customization"
    subtitle="Make it your own"
    variant="warning"
    icon="i-ph-gear-duotone"
    :items="[
      'Modify colors in preset-sjtu.ts',
      'Add custom components',
      'Update fonts in style.css'
    ]"
    size="md"
  />
</div>

<div class="mt-6">
  <GlassCard
    title="Essential Files"
    variant="gradient-primary"
    icon="i-ph-folder-duotone"
    size="sm"
  >
    <div class="grid grid-cols-3 gap-4 text-center text-sm">
      <div>
        <div class="text-sjtu-600 dark:text-sjtu-400 font-medium mb-2">Core</div>
        <div class="text-xs space-y-1">
          <div>slides.md</div>
          <div>preset-sjtu.ts</div>
        </div>
      </div>
      <div>
        <div class="text-academic-600 dark:text-academic-400 font-medium mb-2">Components</div>
        <div class="text-xs space-y-1">
          <div>GlassCard.vue</div>
          <div>ProsCons.vue</div>
        </div>
      </div>
      <div>
        <div class="text-tech-electric-600 dark:text-tech-electric-400 font-medium mb-2">Assets</div>
        <div class="text-xs space-y-1">
          <div>public/images/</div>
          <div>style.css</div>
        </div>
      </div>
    </div>
  </GlassCard>
</div>

---

# Best Practices & Tips

Making the most of this template

<div class="grid grid-cols-2 gap-6 mt-6">
  <GlassCard
    title="Design Guidelines"
    variant="primary"
    icon="i-ph-paint-brush-duotone"
    :items="[
      'Use consistent spacing',
      'Stick to the color system',
      'Maintain visual hierarchy',
      'Keep slides uncluttered'
    ]"
    size="lg"
  />

  <GlassCard
    title="Performance Tips"
    variant="tech"
    icon="i-ph-lightning-duotone"
    :items="[
      'Optimize images before adding',
      'Use web fonts for loading',
      'Test on different screens',
      'Keep slide count reasonable'
    ]"
    size="lg"
  />
</div>

<div class="grid grid-cols-3 gap-4 mt-6">
  <GlassCard
    title="Accessibility"
    variant="success"
    icon="i-ph-eye-duotone"
    size="sm"
    :items="[
      'High contrast ratios',
      'Readable font sizes',
      'Meaningful alt texts'
    ]"
  />

  <GlassCard
    title="Responsiveness"
    variant="warning"
    icon="i-ph-device-mobile-duotone"
    size="sm"
    :items="[
      'Mobile-friendly grids',
      'Flexible image sizing',
      'Touch-friendly buttons'
    ]"
  />

  <GlassCard
    title="Maintenance"
    variant="error"
    icon="i-ph-wrench-duotone"
    size="sm"
    :items="[
      'Regular updates',
      'Documentation',
      'Version control'
    ]"
  />
</div>

---
layout: center
class: "pb-5"
---

# Start Creating! {.emphasis-tech.text-4xl}

<div class="mt-8 space-y-6">
  <div class="text-xl text-on-surface-variant">
    This template provides everything you need for professional presentations
  </div>
  <div class="grid grid-cols-3 gap-6 mt-12">
    <GlassCard
      title="Components"
      variant="gradient-primary"
      icon="i-ph-puzzle-piece-duotone"
      size="sm"
      :items="['Ready to use', 'Well documented', 'Highly customizable']"
    />
    <GlassCard
      title="Design System"
      variant="gradient-secondary"
      icon="i-ph-palette-duotone"
      size="sm"
      :items="['SJTU inspired', 'Modern colors', 'Dark mode ready']"
    />
    <GlassCard
      title="Developer Experience"
      variant="tech"
      icon="i-ph-code-duotone"
      size="sm"
      :items="['TypeScript support', 'Hot reload', 'Easy deployment']"
    />
  </div>
  <div class="mt-12">
    <div class="text-lg mb-4">Get started with:</div>
    <div class="code-block p-4 font-mono text-sm inline-block">
      npm run dev
    </div>
  </div>
</div>
