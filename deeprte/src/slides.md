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

<div text-2xl class="text-on-surface-variant">Pre-trained Attention Based Neural Operator for Radiative Trasfer</div>

<div mt15 />

<div flex="~ col gap-2">
  <div text-left text-2xl class="text-on-surface">Zheng Ma</div>
  <div text-left text-sm class="text-secondary">Shanghai Jiao Tong University</div>
  <div text-left text-sm class="text-on-surface-variant">Joint work with Yekun Zhu and Min Tang</div>
</div>

<div abs-br mx-10 my-11 flex="~ col items-end" text-center>
  <div text-sm class="text-on-surface-muted">August 20, 2025</div>
</div>

---
layout: center
---

# Modern Vibrant Palette Demo

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="card p-4">
    <div class="emphasis-primary text-lg mb-2">SJTU Blue</div>
    <div class="bg-gradient-sjtu h-10 rounded"></div>
  </div>
  <div class="card p-4">
    <div class="emphasis-secondary text-lg mb-2">Academic Gold</div>
    <div class="bg-gradient-academic h-10 rounded"></div>
  </div>
  <div class="card p-4">
    <div class="text-gradient-tech text-lg font-bold mb-2">Tech Gradient</div>
    <div class="bg-gradient-tech h-10 rounded"></div>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-8">
  <div class="card p-4">
    <div class="text-gradient-tech text-lg font-bold mb-2">Accent Magenta</div>
    <div class="bg-[var(--accent-magenta-500)] h-10 rounded"></div>
  </div>
  <div class="card p-4">
    <div class="text-gradient-tech text-lg font-bold mb-2">Accent Aqua</div>
    <div class="bg-[var(--accent-aqua-500)] h-10 rounded"></div>
  </div>
</div>

<div class="mt-10 text-center">
  <button class="btn-primary mx-2">Primary Button</button>
  <button class="btn-secondary mx-2">Secondary Button</button>
  <button class="btn-outline mx-2">Outline Button</button>
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
    icon="ph-cube-transparent-duotone"
    :items="['Forward propagation', 'Backpropagation', 'Gradient descent', 'Activation functions']"
  />

  <GlassCard
    title="Research Focus"
    subtitle="Current projects"
    variant="gradient-secondary"
    icon="ph-circles-three-duotone"
    :items="['Radiative Transfer', 'Neural Operators', 'Physics-Informed ML', 'Scientific Computing']"
  />

  <GlassCard
    title="Development"
    subtitle="Technical stack"
    variant="tech"
    icon="ph-chart-bar-duotone"
    :items="['Python/JAX', 'Neural Networks', 'Scientific Computing', 'Open Source']"
    />
</div>

<div class="grid grid-cols-4 gap-4 mt-8">
  <GlassCard
    title="Success"
    variant="success"
    icon="ph-cube-transparent-duotone"
    size="sm"
    :items="['Completed', 'Validated', 'Published']"
  />

  <GlassCard
    title="Warning"
    variant="warning"
    icon="ph-circles-three-duotone"
    size="sm"
    :items="['In Progress', 'Review Needed', 'Pending']"
  />

  <GlassCard
    title="Error"
    variant="error"
    icon="ph-chart-bar-duotone"
    size="sm"
    :items="['Failed Tests', 'Bug Reports', 'Critical Issues']"
  />

  <GlassCard
    title="Gradient Primary"
    variant="gradient-primary"
    icon="ph-cube-transparent-duotone"
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
    icon="ph-circles-three-duotone"
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

  <GlassCard variant="gradient-primary" size="lg" icon="ph:chart-bar-duotone">
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
glow: left
---

# Introduction

Radiative transfer are important in many areas

<div grid="~ cols-2">
  <div flex="~ col gap-1" items-center>
    <div text-xl class="text-on-surface">ICF</div>
    <img src="/icf.png" class="border-primary" rounded-lg h-65 />
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl class="text-on-surface">Radiation Therapy</div>
    <img src="/rad-therapy.jpg" class="border-primary" rounded-lg shadow-l h-65 />
  </div>
</div>

<br>

<div class="card bg-tech-cyber-50 dark:bg-tech-cyber-950 border-tech-cyber-200 dark:border-tech-cyber-800" p4 backdrop-blur>
  <div text-center text-2xl class="text-on-surface">

  Key problem: numerical simulation of <span class="emphasis-tech">radiative transfer equation (RTE)</span>

  </div>
</div>

---

# Radiative Transfer Equation

<div mt10 />

<div text-xl class="text-primary">

$$
\Omega \cdot \nabla I(r, \Omega) + \mu_t(r) I(r, \Omega) =
\frac{\mu_s(r)}{S_{d-1}}\int_{\mathbb{S}^{d-1}} p(\Omega, \Omega^*)
I(r, \Omega^*)\,\mathrm{d}\Omega^*,
$$

</div>

<div mt5 />

- $I(r,\Omega)$: radiation intensity at phase space $(r,\Omega)$

- $\mu_t(r)$: total cross section

- $\mu_s(r)$: scattering cross section

- $p(\Omega,\Omega^*)$: phase function or scattering function

<!-- <div v-click grid="~ cols-2 gap-4" mt5> -->

<div mt6 />

<div flex="~ col gap-2" class="card bg-tech-electric-50 dark:bg-tech-electric-950 border-tech-electric-200 dark:border-tech-electric-800" overflow-hidden>
  <div class="bg-tech-electric-100 dark:bg-tech-electric-900" py-2 px-3>
    <div class="text-primary font-medium">Boundary condition</div>
  </div>
  <div flex="~ gap-2 items-center justify-center" class="text-primary" m--2>

  $$
  I |_{\Gamma_{-}}(r,\Omega) = I_{-}(r,\Omega)
  $$

  with

  $$\Gamma_{\pm} := \{(r,\Omega) \mid r\in\partial D,\;\Omega\in\mathbb{S}^{d-1},\;\mp n(r)\cdot\Omega<0 \},
  $$

  </div>
</div>

---

# Numerical Chanllenges

Curse of dimensionality

<div flex="~ gap-4 items-center" mt-10>
  <GlassCard title="Dimension" variant="tech" :items="['Phase space + time: 6 + 1 = 7', 'Collision operator is a 5-fold integral', 'Need to evalute collision at every phase point']" size="lg" />

  <GlassCard title="Dimension" :items="['Phase space + time: 6 + 1 = 7', 'Collision operator is a 5-fold integral', 'Need to evalute collision at every phase point']" size="lg" variant="primary" />

  <GlassCard title="Dimension" :items="['Phase space + time: 6 + 1 = 7', 'Collision operator is a 5-fold integral', 'Need to evalute collision at every phase point']" size="lg" variant="secondary" />
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
