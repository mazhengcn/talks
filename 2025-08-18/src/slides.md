---
layout: cover
highlighter: shiki
css: unocss
colorSchema: auto
transition: fade-out
mdc: true
glowSeed: 4
title: DeepRTE
remoteAssets: true
---

# DeepRTE {.emphasis-primary.text-4xl}

<div text-2xl class="text-on-surface-variant">Pre-trained Attention-based Neural Network for Radiative Transfer</div>

<div mt15 />

<div flex="~ col gap-2">
  <div text-left text-2xl text-on-surface>Zheng Ma</div>
  <div text-left text-sm class="text-secondary">Shanghai Jiao Tong University</div>
  <div text-left text-sm class="text-on-surface-variant">Joint work with Min Tang and Yekun Zhu</div>
</div>

<!-- SJTU Official Logo - Enhanced Glassmorphism with Theme Colors -->
<div class="absolute top-6 right-6 group">
  <div class="relative bg-gradient-to-br from-white/40 to-white/25 dark:from-neutral-900/30 dark:to-neutral-800/20 backdrop-blur-lg rounded-xl p-2.5 border border-sjtu-200/15 dark:border-sjtu-400/8 shadow-lg shadow-sjtu-500/8 dark:shadow-sjtu-400/5 hover:bg-white/50 dark:hover:bg-neutral-900/40 hover:border-sjtu-300/20 dark:hover:border-sjtu-400/12 hover:shadow-sjtu-500/12 dark:hover:shadow-sjtu-400/10 transition-all duration-300">
    <!-- Logo with official SJTU colors -->
    <div class="relative z-10">
      <!-- Logo for light theme - using SJTU theme colors -->
      <div class="h-8 w-auto dark:hidden opacity-90 group-hover:opacity-100 transition-opacity duration-300 relative overflow-hidden">
        <img
          src="/images/sjtu-logo-zh.png"
          alt="Shanghai Jiao Tong University"
          class="h-8 w-auto filter brightness-0 opacity-0"
        />
        <div class="absolute inset-0 bg-sjtu-600" style="mask: url('/images/sjtu-logo-zh.png') no-repeat center/contain; -webkit-mask: url('/images/sjtu-logo-zh.png') no-repeat center/contain;"></div>
      </div>
      <!-- Logo for dark theme - using lighter SJTU theme colors -->
      <div class="h-8 w-auto hidden dark:block opacity-85 group-hover:opacity-95 transition-all duration-300 relative overflow-hidden">
        <img
          src="/images/sjtu-logo-zh.png"
          alt="Shanghai Jiao Tong University"
          class="h-8 w-auto filter brightness-0 invert opacity-0"
        />
        <div class="absolute inset-0 bg-sjtu-400" style="mask: url('/images/sjtu-logo-zh.png') no-repeat center/contain; -webkit-mask: url('/images/sjtu-logo-zh.png') no-repeat center/contain;"></div>
      </div>
    </div>
  </div>
</div>

<!-- Date positioned at bottom right with matching glassmorphism style -->
<div class="absolute bottom-8 right-6 group">
  <div class="relative bg-gradient-to-br from-white/40 to-white/25 dark:from-neutral-900/30 dark:to-neutral-800/20 backdrop-blur-lg rounded-lg px-3 py-1.5 border border-sjtu-200/15 dark:border-sjtu-400/8 shadow-lg shadow-sjtu-500/8 dark:shadow-sjtu-400/5 hover:bg-white/50 dark:hover:bg-neutral-900/40 hover:border-sjtu-300/20 dark:hover:border-sjtu-400/12 transition-all duration-300">
    <div text-xs class="text-on-surface-muted/80 font-medium tracking-wide">August 18, 2025</div>
  </div>
</div>

---
glow: left
---

# Introduction

Radiative transfer are important in many areas

<div grid="~ cols-2">
  <div flex="~ col gap-1" items-center>
    <div text-xl text-on-surface>ICF</div>
    <img src="/icf.png" border-primary rounded-lg shadow-lg h-65 />
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl text-on-surface>Radiation Therapy</div>
    <img src="/rad-therapy.jpg" border-primary rounded-lg shadow-lg h-65 />
  </div>
</div>

<br>

<GlassCard variant="tech" text-center>
  Key problem: numerical simulation of <span emphasis-tech>radiative transfer equation (RTE)</span>
</GlassCard>

---
glow: bottom
---

# Radiative Transfer Equation

<GlassCard variant="primary" size="sm">
<GlassCard variant="secondary" text-on-surface size="sm">

$$
\Omega \cdot \nabla I(r, \Omega) + \mu_t(r) I(r, \Omega) =
\frac{\mu_s(r)}{S_{d-1}}\int_{\mathbb{S}^{d-1}} p(\Omega, \Omega^*)
I(r, \Omega^*)\,\mathrm{d}\Omega^*,
$$

</GlassCard>
<div mt5 />

- $I(r,\Omega)$: radiation intensity at phase space $(r,\Omega)$

- $\mu_t(r)$: total cross section

- $\mu_s(r)$: scattering cross section

- $p(\Omega,\Omega^*)$: phase function or scattering function

</GlassCard>

<div mt4 />

<GlassCard title="Boundary condition" variant="primary" size="sm">
  <div flex="~ gap-2 items-center justify-center">

  $I |_{\Gamma_{-}}(r,\Omega) = I_{-}(r,\Omega)$

  with

  $\Gamma_{\pm} := \{(r,\Omega) \mid r\in\partial D,\;\Omega\in\mathbb{S}^{d-1},\;\mp n(r)\cdot\Omega<0 \},$

  </div>
</GlassCard>

---

# Numerical Chanllenges

Curse of dimensionality

<div flex="~ gap-4 items-center" mt-10>
  <GlassCard title="Dimension" variant="tech" :items="['Phase space + time: 6 + 1 = 7', 'Collision operator is a 5-fold integral', 'Need to evalute collision at every phase point']" size="lg" />

  <GlassCard title="Collision" :items="['Phase space + time: 6 + 1 = 7', 'Collision operator is a 5-fold integral', 'Need to evalute collision at every phase point']" size="lg" variant="primary" />

  <GlassCard title="Multiscale" :items="['Phase space + time: 6 + 1 = 7', 'Collision operator is a 5-fold integral', 'Need to evalute collision at every phase point']" size="lg" variant="secondary" />
</div>

---

# Numerical Chanllenges

Curse of dimensionality

<div mt5 />

<div grid="~ gap-4 cols-3">

<div v-click flex="~ col gap-4" rounded-lg bg-red:15 p6>
  <div flex="~ gap-1 items-center" text-3xl>
    <div i-ph-cube-transparent-duotone text-red text-4xl />
    <div text-red>Dimension</div>
  </div>
  <div text-red2>

  - Phase space + time: 6 + 1 = 7

  - Collision operator is a 5-fold integral

  - Need to evalute collision at every phase point

  </div>
</div>

<div v-click flex="~ col gap-4" rounded-lg bg-green:15 p6>
  <div flex="~ gap-1 items-center" text-3xl>
    <div i-ph-circles-three-duotone text-green text-4xl />
    <div text-green>Collision</div>
  </div>
  <div text-green2>

  - Hard to maintain conservation at discrete level

  - Highly nonlinear for Boltzmann collision

  - Ray effect

  </div>
</div>

<div v-click flex="~ col gap-4" rounded-lg bg-amber:15 p6>
  <div flex="~ gap-1 items-center" text-3xl>
    <div i-ph-chart-bar-duotone text-amber text-4xl />
    <div text-amber>Multiscale</div>
  </div>
  <div text-amber2>

  - Stability issues for small $\varepsilon$ (stiffness)

  - Consistency of the scheme with limiting model as $\varepsilon \to 0$

  - Automatically capture the transition across regimes

  </div>
</div>
</div>

---

# Conventional Approaches

Probabilistic approaches

- Monte Carlo methods for linear transport

  - MCNP
  - [COG](http://cog.llnl.gov) (LLNL, criticality safety analysis, general radiation)
  - Mercury

- Direct simulation Monte Carlo (DSMC) methods

  - Bird, Nanbu, ...
  - Sparta (ORNL, rarefied gas dynamics)

<ProsCons
  :pros="[
    'Easy implementation',
    'Relatively efficient',
  ]"
  :cons="[
    'Only half-order accuracy',
    'Converge slow',
    'Random fluctuations',
  ]"
/>

---

# Conventional Approaches

Deterministic approaches

- Discrete velocity/ordinate methods (DVM)

  - Ardra (LLNL)
  - NEWT (ORNL)
  - DORT
  - Kit-RT

<div v-click="3">

<div mt5 />

- Spectral methods

</div>

<ProsCons v-click.hide
  :pros="[
    'Maintain conservation',
    'High accuracy',
  ]"
  :cons="[
    'Expensive',
    'First or second order accuracy'
  ]"
/>

<ProsCons
  :pros="[
    'Spectral accuracy',
    'Relatively expensive',
  ]"
  :cons="[
    'Do not maintain conservation',
  ]"
/>

---
layout: center
---

<div flex="~ col gap-5 items-center">
  <div font-600 m--2 text-center>

  # Deep learning methods may become new approach

  </div>
  <div text-2xl op75 text-center>Overcome the curse of dimensionality</div>
</div>

---

# Solve PDEs with Deep Learning

Key components

<div flex="~ col gap-2">
<div v-click flex="~ col" border="~ red/50 rounded-lg" bg-red:10>
  <div flex="~ gap-2 items-center" bg-red:10 px4 py2 rounded>
    <div text-xl text-red3>Constraints</div>
    <div>as the loss of minimization problem</div>
  </div>
  <div ml2 px2 text-red1>

  - Model: PDE / physical information needed (e.g., PINNs, DeepRitz, DeepGalerkin)
  - Data: pure supervised or as a priori information
  - IC (initial conditions) and BC (boundary conditions)
  - Other constraints: **conservation**, symmetry, etc.

  </div>
</div>
<div v-click flex="~ col" border="~ green/50 rounded-lg" bg-green:10>
  <div flex="~ gap-2" items-center bg-green:10 rounded px4 py2>
    <div text-xl>Architecture</div>
    <div>build a deep neural network (function class) as the trial function</div>
  </div>
  <div ml2 px2 text-green1>

  - Approximate solution: PINNs, DeepRitz, DeepGalerkin, etc.
  - Approximate solution operator: DeepONet, FNO, etc.
  - Mapping from equations (as a computational graph) to solutions (PDEFormer)

  </div>
</div>

<div v-click flex="~ col" border="~ amber/50 rounded-lg" bg-amber:10>
  <div flex="~ gap-2" items-center bg-amber:10 rounded px4 py2>
    <div text-xl text-amber3>Optimization</div>
  </div>
  <div ml2 px2 text-amber1>

  - Minimize loss over the parameter space, usually SGD, Adam, LBFGS, etc.

  </div>
</div>
</div>

---
layout: center
class: "text-center pb-5"
---

# Thank You!

Slides can be found [here](https://zheng-talks.netlify.app/2025/hksiam)

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

  - Icon support from Iconify

  - Better text spacing without subtitles

  - Reduced shadow for cleaner look

  - New gradient border variants

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

<div grid="~ cols-2 gap-8" mt-6>
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

<div class="grid grid-cols-2 gap-5 mt-5">
  <GlassCard
    title="Text Emphasis Classes"
    subtitle="Built-in styling utilities"
    variant="primary"
    icon="i-ph-text-aa-duotone"
    size="md"
  >
    <div class="space-y-3">
      <div>
        <div class="text-lg emphasis-primary">Primary Emphasis</div>
        <div class="text-xs opacity-70"><code class="text-xs">.emphasis-primary</code></div>
      </div>
      <div>
        <div class="text-lg emphasis-secondary">Secondary Emphasis</div>
        <div class="text-xs opacity-70"><code class="text-xs">.emphasis-secondary</code></div>
      </div>
      <div>
        <div class="text-lg emphasis-tech">Tech Emphasis</div>
        <div class="text-xs opacity-70"><code class="text-xs">.emphasis-tech</code></div>
      </div>
    </div>
  </GlassCard>

  <GlassCard
    title="Emphasis Component"
    subtitle="Inline highlighting"
    variant="tech"
    icon="i-ph-highlighter-duotone"
    size="md"
  >
    <div class="space-y-3">
      <div class="text-sm space-y-2">
        <p>Use the <Emphasis>Emphasis component</Emphasis> for highlighting.</p>
        <p>Creates <Emphasis>pill-shaped</Emphasis> highlight effects.</p>
      </div>
      <div class="code-block-simple p-2 text-xs">
        &lt;Emphasis&gt;text&lt;/Emphasis&gt;
      </div>
    </div>
  </GlassCard>
</div>

<div class="mt-4">
  <GlassCard
    title="Typography Features"
    subtitle="Professional text presentation"
    variant="gradient-primary"
    icon="i-ph-article-duotone"
    size="sm"
  >
    <div class="grid grid-cols-3 gap-3 text-center text-sm">
      <div>
        <div class="font-bold text-sjtu-600 dark:text-sjtu-400">Headlines</div>
        <div class="text-xs opacity-70">Bold titles</div>
      </div>
      <div>
        <div class="font-medium text-academic-600 dark:text-academic-400">Subtitles</div>
        <div class="text-xs opacity-70">Context</div>
      </div>
      <div>
        <div class="font-normal">Body Text</div>
        <div class="text-xs opacity-70">Content</div>
      </div>
    </div>
  </GlassCard>
</div>

---

# Gradient Text Effects

Beautiful text gradients for modern presentations

<div class="grid grid-cols-2 gap-4 mt-6">
  <div>
    <GlassCard
      title="Text Gradients"
      subtitle="Premium typography effects"
      variant="primary"
      icon="i-ph-text-aa-duotone"
      size="sm"
    >
      <div class="py-1.5">
        <div>
          <div class="text-gradient-sjtu font-bold mb-1">SJTU Gradient</div>
          <div class="text-xs opacity-70 mb-1">University presentations</div>
          <code class="code-inline">.text-gradient-sjtu</code>
        </div>
        <div>
          <div class="text-gradient-academic font-bold mb-1">Academic Gradient</div>
          <div class="text-xs opacity-70 mb-1">Warm academic tones</div>
          <code class="code-inline">.text-gradient-academic</code>
        </div>
        <div>
          <div class="text-gradient-tech font-bold mb-1">Tech Gradient</div>
          <div class="text-xs opacity-70 mb-1">Vibrant tech colors</div>
          <code class="code-inline">.text-gradient-tech</code>
        </div>
      </div>
    </GlassCard>
  </div>

  <div>
    <GlassCard
      title="Background Gradients"
      subtitle="Stunning background effects"
      variant="secondary"
      icon="i-ph-palette-duotone"
      size="sm"
    >
      <div class="space-y-3">
        <div class="bg-gradient-sjtu h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div class="text-white font-semibold text-sm">SJTU Background</div>
        </div>
        <div class="bg-gradient-academic h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div class="text-white font-semibold text-sm">Academic Background</div>
        </div>
        <div class="bg-gradient-tech h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div class="text-white font-semibold text-sm">Tech Background</div>
        </div>
        <div class="text-xs opacity-70 pt-2">
          Use <code class="code-inline">.bg-gradient-*</code> classes
        </div>
      </div>
    </GlassCard>
  </div>
</div>

<div class="mt-4">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="font-semibold mb-2">Pro Tip</div>
    <div class="text-sm opacity-90">
      Combine gradients with <code class="code-inline">backdrop-blur</code> for glassmorphism effects
    </div>
  </GlassCard>
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
      <div class="code-block-simple p-3 text-sm">
        <span class="code-syntax-attr">icon=</span><span class="code-syntax-string">"i-ph-star-duotone"</span>
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
      <div class="code-block-simple p-4">
        <div class="text-sm font-mono mb-2 code-syntax-comment">Basic usage:</div>
        <code class="text-xs code-syntax-tag">&lt;Repo name="owner/repo" /&gt;</code>
      </div>
      <div class="code-block-simple p-4">
        <div class="text-sm font-mono mb-2 code-syntax-comment">Hide owner:</div>
        <code class="text-xs code-syntax-tag">&lt;Repo name="owner/repo" :hide-owner="true" /&gt;</code>
      </div>
    </div>
    <GlassCard variant="primary" size="sm" mt-6>
      Perfect for referencing code repositories, open source projects, or related work in presentations
    </GlassCard>
  </div>
</div>

---

# ProsCons Component

Professional comparison tables with glassmorphism design

<div class="grid grid-cols-2 gap-6 mt-6">
  <div>
    <GlassCard
      title="Live Demo"
      subtitle="Interactive comparison"
      variant="primary"
      icon="i-ph-presentation-chart-duotone"
      size="sm"
    >
      <div>Glassmorphism design showcase</div>
    </GlassCard>
    <GlassCard variant="gradient-primary" size="sm" mt4>
      <div class="text-center">
        <div class="font-semibold mb-1 text-sm">Perfect For</div>
        <div class="text-xs opacity-90">
          Comparisons • Decisions • Evaluations
        </div>
      </div>
    </GlassCard>
    <ProsCons
      :pros="[
        'Beautiful glassmorphism effects',
        'Smooth animations',
        'Perfect light/dark mode support',
        'Easy Vue.js integration'
      ]"
      :cons="[
        'Requires Vue.js framework',
        'Fixed comparison format',
        'Not suitable for complex data'
      ]"
    />
  </div>

  <div>
    <GlassCard
      title="Implementation"
      subtitle="Simple Vue.js component"
      variant="secondary"
      icon="i-ph-code-duotone"
      size="sm"
    >
      <div class="code-block-simple p-2 text-sm">
        <div class="code-syntax-tag">&lt;ProsCons</div>
        <div class="ml-4 code-syntax-attr">:pros="[</div>
        <div class="ml-8 code-syntax-string">'Easy to implement',</div>
        <div class="ml-8 code-syntax-string">'Visually appealing'</div>
        <div class="ml-4 code-syntax-attr">]"</div>
        <div class="ml-4 code-syntax-attr">:cons="[<span class="code-syntax-string">'Limited scope'</span>]"</div>
        <div class="code-syntax-tag">/&gt;</div>
      </div>
    </GlassCard>
  </div>
</div>

---

# Advanced ProsCons Examples

Real-world comparison scenarios

<div class="grid grid-cols-2 gap-6">
  <div>
    <GlassCard
      title="AI vs Traditional Methods"
      subtitle="Technology comparison example"
      variant="tech"
      icon="i-ph-brain-duotone"
      size="sm"
    >
      <div class="text-sm mb-3">Modern ML approaches vs. classical algorithms</div>
    </GlassCard>
    <ProsCons
      :pros="[
        'Handles complex patterns',
        'Scales to large datasets',
        'Continuous learning',
        'Auto feature extraction'
      ]"
      :cons="[
        'Needs large training data',
        'Black box decisions',
        'High computational cost',
        'Potential overfitting'
      ]"
    />
  </div>

  <div>
    <GlassCard
      title="Cloud vs On-Premise"
      subtitle="Infrastructure decision"
      variant="secondary"
      icon="i-ph-cloud-duotone"
      size="sm"
    >
      <div class="text-sm mb-3">Deployment strategy comparison</div>
    </GlassCard>
    <ProsCons
      :pros="[
        'Infinite scalability',
        'Managed services',
        'Global distribution',
        'Cost optimization'
      ]"
      :cons="[
        'Data sovereignty concerns',
        'Network dependency',
        'Vendor lock-in risk',
        'Less direct control'
      ]"
    />
  </div>
</div>

<div class="mt-6">
  <GlassCard
    variant="gradient-secondary"
    text-center
    size="sm"
  >
    <div class="font-semibold mb-2">Component Features</div>
    <div class="text-sm opacity-90">
      Glassmorphism design • Smooth animations • v-click support • Responsive layout • Light/dark themes
    </div>
  </GlassCard>
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
    <div class="code-block-simple p-4 text-sm inline-block">
      <span class="code-syntax-tag">npm run dev</span>
    </div>
  </div>
</div>
