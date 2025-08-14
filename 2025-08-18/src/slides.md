---
layout: cover
highlighter: shiki
css: unocss
colorSchema: auto
transition: fade-out
mdc: true
glowSeed: 1
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

<div class="mb-6 text-center">
  <div class="text-2xl text-on-surface">
    <span class="emphasis-primary font-bold">Radiative Transfer</span> governs energy transport
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-6>
  <GlassCard
    title="Inertial Confinement Fusion"
    subtitle="Clean energy generation"
    variant="primary"
    icon="i-ph-atom-duotone"
    size="md"
  >
    <div class="flex flex-col items-center gap-3">
      <img src="/icf.png" class="rounded-lg shadow-lg h-32 object-contain" />
      <div class="text-xs text-on-surface-variant text-center">
        Radiation transport drives implosion dynamics in fusion targets
      </div>
    </div>
  </GlassCard>

  <GlassCard
    title="Radiation Therapy"
    subtitle="Precision cancer treatment"
    variant="secondary"
    icon="i-ph-heart-duotone"
    size="md"
  >
    <div class="flex flex-col items-center gap-3">
      <img src="/rad-therapy.jpg" class="rounded-lg shadow-lg h-32 object-contain" />
      <div class="text-xs text-on-surface-variant text-center">
        Accurate dose calculation for effective treatment
      </div>
    </div>
  </GlassCard>
</div>

<div mt-6>
  <GlassCard variant="tech" text-center size="md">
    <div class="text-lg mb-2">
      <span class="emphasis-tech font-semibold">Central Challenge:</span>
      Numerical simulation of the <span class="emphasis-primary font-semibold">radiative transfer equation</span>
    </div>
    <div class="text-sm text-on-surface-variant">
      High-dimensional phase space • Complex collision operators • Multi-scale physics
    </div>
  </GlassCard>
</div>

---
glow: right
---

# Radiative Transfer Equation

<div class="mb-4">
  <GlassCard variant="primary" size="lg" py2>
  <div class="text-center mb-4">
  <div class="text-lg font-semibold text-on-surface mb-2">The governing equation</div>
  <div class="bg-white/20 dark:bg-black/10 rounded-lg p-2 border border-white/10">

  $$
  \Omega \cdot \nabla I(r, \Omega) + \mu_t(r) I(r, \Omega) = \frac{\mu_s(r)}{S_{d-1}}\int_{\mathbb{S}^{d-1}} p(\Omega, \Omega^*) I(r, \Omega^*)\,\mathrm{d}\Omega^*
  $$

  </div>
  </div>
  <div class="grid grid-cols-2 gap-6 text-sm">
  <div>
  <div flex="~ gap-2 items-center">
  <strong>

  $I(r,\Omega)$:

  </strong>

  radiation intensity at phase space $(r,\Omega)$

  </div>
  <div flex="~ gap-2 items-center">
  <strong>

  $\mu_t(r)$:

  </strong>
  total cross section
  </div>
  </div>
  <div>
  <div flex="~ gap-2 items-center">
  <strong>

  $\mu_s(r)$:

  </strong>
  scattering cross section
  </div>
  <div flex="~ gap-2 items-center"><strong>

  $p(\Omega,\Omega^*)$:

  </strong>
  phase function
  </div>
  </div>
  </div>
  </GlassCard>
</div>

<div class="mt-0">
  <GlassCard title="Boundary Conditions" variant="secondary" size="md">
  <div class="text-center text-on-surface-variant">
  <div class="bg-white/20 dark:bg-black/10 rounded-lg border border-white/10" flex="~ gap-2 items-center justify-center">

  $I |_{\Gamma_{-}}(r,\Omega) = I_{-}(r,\Omega)$

  where

  $\Gamma_{\pm} := \{(r,\Omega) \mid r\in\partial D,\;\Omega\in\mathbb{S}^{d-1},\;\mp n(r)\cdot\Omega<0 \}$

  </div>
  </div>
  </GlassCard>
</div>

---

# Numerical Challenges

<div class="mb-6 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-primary font-bold">Three Major Barriers</span> in Radiative Transfer Simulation
  </div>
  <div class="text-base text-on-surface-variant">
    Fundamental computational challenges that motivate machine learning approaches
  </div>
</div>

<div grid="~ gap-6 cols-3" mt-6>

<div v-click="1">
  <GlassCard
    title="High Dimensionality"
    subtitle="The curse of dimensions"
    variant="error"
    icon="i-ph-cube-duotone"
    size="md"
    :items="[
      '7D phase space: $(x,y,z,\\Omega_x,\\Omega_y,\\Omega_z,t)$',
      'Grid points scale exponentially as $N^7$',
      'Intractable memory and storage needs'
    ]"
    :enable-latex="true"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Complex Collisions"
    subtitle="Nonlinear interactions"
    variant="warning"
    icon="i-ph-arrows-merge-duotone"
    size="md"
    :items="[
      'Preserve conservation laws at discrete level',
      'Handle nonlinear Boltzmann-type operators',
      'Avoid spurious ray effects and diffusion'
    ]"
  />
</div>

<div v-click="3">
  <GlassCard
    title="Multi-scale Physics"
    subtitle="Regime coupling"
    variant="tech"
    icon="i-ph-scales-duotone"
    size="md"
    :items="[
      'Stiffness parameter: $\\varepsilon = \\ell/L \\ll 1$',
      'Design asymptotic-preserving schemes',
      'Couple transport ↔ diffusion transitions'
    ]"
    :enable-latex="true"
  />
</div>

</div>

<div class="mt-6">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-base font-semibold mb-1">
      <span class="emphasis-tech">Why Deep Learning?</span>
    </div>
    <div class="text-sm opacity-90">
      Neural networks can potentially overcome dimensional scaling and learn complex multi-scale behavior
    </div>
  </GlassCard>
</div>

---

# Conventional Approaches

<div class="mb-4 text-center">
  <div class="text-lg text-on-surface mb-2">Existing methods struggle with the computational barriers</div>
  <div class="text-sm text-on-surface-variant">Two main categories with complementary strengths and limitations</div>
</div>

<div grid="~ cols-2 gap-6" mt-6>

<div v-click="1">
  <GlassCard
    title="Probabilistic Methods"
    subtitle="Statistical sampling"
    variant="primary"
    icon="i-ph-dice-six-duotone"
    size="md"
  >
    <div class="space-y-3 text-xs">
      <div>
        <div class="font-semibold mb-1">Monte Carlo Transport:</div>
        <div class="space-y-0.5 pl-2 text-2xs">
          <div>• MCNP, COG (LLNL), Mercury</div>
        </div>
      </div>
      <div>
        <div class="font-semibold mb-1">Direct Simulation:</div>
        <div class="space-y-0.5 pl-2 text-2xs">
          <div>• DSMC (Bird, Nanbu), Sparta (ORNL)</div>
        </div>
      </div>
    </div>
  </GlassCard>
</div>

<div v-click="2">
  <GlassCard
    title="Deterministic Methods"
    subtitle="Grid-based discretization"
    variant="secondary"
    icon="i-ph-grid-four-duotone"
    size="md"
  >
    <div class="space-y-3 text-xs">
      <div>
        <div class="font-semibold mb-1">Discrete Ordinates:</div>
        <div class="space-y-0.5 pl-2 text-2xs">
          <div>• Ardra (LLNL), NEWT (ORNL), DORT</div>
        </div>
      </div>
      <div>
        <div class="font-semibold mb-1">Spectral Methods:</div>
        <div class="space-y-0.5 pl-2 text-2xs">
          <div>• High-order accuracy, smooth reconstruction</div>
        </div>
      </div>
    </div>
  </GlassCard>
</div>

</div>

<div class="mt-6">
  <ProsCons
    :pros="[
      'Monte Carlo: Easy parallelization',
      'Deterministic: Exact conservation',
      'Both: Mature, established theory'
    ]"
    :cons="[
      'Monte Carlo: Slow √N convergence',
      'Deterministic: Exponential scaling',
      'Both: Struggle with high dimensions'
    ]"
  />
</div>

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

<div class="mb-2 text-center">
  <div class="text-lg text-on-surface mb-1">
    <span class="emphasis-primary font-bold">Core Components</span> of Deep Learning for PDEs
  </div>
</div>

<div grid="~ cols-3 gap-3" mt-3>

<div v-click="1">
  <GlassCard
    title="Physical Constraints"
    subtitle="Domain knowledge"
    variant="error"
    icon="i-ph-function-duotone"
    size="sm"
    :items="[
      'PINNs, DeepRitz',
      'IC/BC enforcement',
      'Conservation laws'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Neural Architecture"
    subtitle="Function approximation"
    variant="success"
    icon="i-ph-brain-duotone"
    size="sm"
    :items="[
      'Solution learning',
      'Operator learning',
      'Attention mechanisms'
    ]"
  />
</div>

<div v-click="3">
  <GlassCard
    title="Optimization"
    subtitle="Training algorithms"
    variant="warning"
    icon="i-ph-target-duotone"
    size="sm"
    :items="[
      'Adam, L-BFGS',
      'Multi-term losses',
      'Progressive training'
    ]"
  />
</div>

</div>

<div class="mt-3">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-xs font-semibold">
      <span class="emphasis-tech">DeepRTE:</span> Attention-based neural operators for radiative transfer
    </div>
  </GlassCard>
</div>

---

# DeepRTE: Our Contribution

<div class="mb-6 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-primary font-bold">Pre-trained Attention-based Neural Network</span> for Radiative Transfer
  </div>
  <div class="text-base text-on-surface-variant">
    A novel neural operator approach that learns solution operators rather than individual solutions
  </div>
</div>

<div grid="~ cols-2 gap-8" mt-8>

<div v-click="1">
  <GlassCard
    title="Key Innovation"
    subtitle="Attention-based neural operator"
    variant="primary"
    icon="i-ph-lightning-duotone"
    size="lg"
    :items="[
      'Learn solution operator $\\mathcal{G}: \\mu \\mapsto I$',
      'Attention mechanism for long-range dependencies',
      'Pre-training on synthetic data',
      'Transfer to real physical problems'
    ]"
    :enable-latex="true"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Advantages over PINNs"
    subtitle="Operator vs. solution learning"
    variant="tech"
    icon="i-ph-trend-up-duotone"
    size="lg"
    :items="[
      'No retraining for new parameters',
      'Faster inference once trained',
      'Better generalization across regimes',
      'Handles multi-scale physics naturally'
    ]"
  />
</div>

</div>

<div class="mt-8">
  <GlassCard variant="gradient-secondary" text-center size="md">
  <div class="text-lg font-semibold mb-2">
    <span class="emphasis-primary">Core Idea:</span> Learn the map from absorption coefficient to intensity
  </div>
  <div class="text-sm opacity-90">

  $I = \mathcal{G}(\mu; \theta)$ where $\theta$ are learned neural network parameters

  </div>
  </GlassCard>
</div>

---

# Problem Formulation

<div class="mb-6">
<GlassCard variant="primary" size="lg">
<div class="text-center mb-4">
<div class="text-lg font-semibold text-on-surface mb-3">Target: Radiative Transfer Equation</div>
<div class="bg-gray-100/80 dark:bg-gray-800/40 rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/30 shadow-sm">

$$
\Omega \cdot \nabla I(r, \Omega) + \mu_t(r) I(r, \Omega) = \frac{\mu_s(r)}{4\pi} \int_{\mathbb{S}^2} I(r, \Omega')\,d\Omega' + S(r, \Omega)
$$

</div>
</div>

<div class="grid grid-cols-2 gap-6 text-sm">
<div class="space-y-2">
<div><strong>Goal:</strong>

Learn operator $\mathcal{G}: \mu_t \mapsto I$

</div>
<div><strong>Input:</strong>

Absorption coefficient $\mu_t(r)$

</div>
</div>
<div class="space-y-2">
<div><strong>Output:</strong>

Intensity field $I(r,\Omega)$

</div>

<div><strong>Domain:</strong>
2D spatial + angular
</div>
</div>
</div>
</GlassCard>
</div>

<div class="mt-6">
  <GlassCard
    title="Operator Learning Framework"
    variant="secondary"
    icon="i-ph-function-duotone"
    size="md"
    :items="[
      'DeepONet-inspired architecture with attention',
      'Branch network: encodes input function $\\mu_t$',
      'Trunk network: encodes query locations $(r, \\Omega)$',
      'Attention: models long-range dependencies'
    ]"
    :enable-latex="true"
  />
</div>

---

# DeepRTE Architecture

<div class="mb-6 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-tech font-bold">Attention-Enhanced</span> Neural Operator Design
  </div>
</div>

<div grid="~ cols-3 gap-6" mt-6>

<div v-click="1">
  <GlassCard
    title="Branch Network"
    subtitle="Input function encoding"
    variant="primary"
    icon="i-ph-tree-structure-duotone"
    size="md"
    :items="[
      'Encodes $\\mu_t(r)$ at sensor points',
      'CNN-based feature extraction',
      'Multi-scale representation',
      'Output: $\\mathbf{b} \\in \\mathbb{R}^p$'
    ]"
    :enable-latex="true"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Trunk Network"
    subtitle="Query point encoding"
    variant="secondary"
    icon="i-ph-map-pin-duotone"
    size="md"
    :items="[
      'Encodes query $(r, \\Omega)$',
      'Positional embeddings',
      'Angular harmonics for $\\Omega$',
      'Output: $\\mathbf{t} \\in \\mathbb{R}^p$'
    ]"
    :enable-latex="true"
  />
</div>

<div v-click="3">
  <GlassCard
    title="Attention Module"
    subtitle="Long-range dependencies"
    variant="tech"
    icon="i-ph-eye-duotone"
    size="md"
    :items="[
      'Multi-head self-attention',
      'Captures spatial correlations',
      'Handles transport phenomena',
      'Weighted combination: $\\sum w_i \\mathbf{b}_i \\cdot \\mathbf{t}$'
    ]"
    :enable-latex="true"
  />
</div>

</div>

<div class="mt-6">
  <GlassCard variant="gradient-primary" text-center size="sm">
  <div class="text-base font-semibold mb-1">
    <span class="emphasis-primary">Final Output:</span>
  </div>
  <div class="text-sm">

  $I(r, \Omega) = \text{Attention}(\mathbf{b}, \mathbf{t}) = \sum_{i=1}^p w_i(\mathbf{b}, \mathbf{t}) \cdot \mathbf{b}_i \cdot \mathbf{t}_i$

  </div>
  </GlassCard>
</div>

---

# Training Strategy

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-primary font-bold">Two-Phase Training</span> for Robust Performance
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Phase 1: Pre-training"
    subtitle="Synthetic data generation"
    variant="warning"
    icon="i-ph-database-duotone"
    size="md"
    :items="[
      'Generate diverse $\\mu_t$ fields',
      'High-fidelity RTE solutions',
      'Large training dataset ($>10^4$)',
      'Learn general behavior'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Phase 2: Fine-tuning"
    subtitle="Real problem adaptation"
    variant="success"
    icon="i-ph-target-duotone"
    size="md"
    :items="[
      'Real physical data',
      'Domain-specific adaptation',
      'Few-shot learning',
      'Transfer learning benefits'
    ]"
  />
</div>

</div>

<div class="mt-5">
  <GlassCard
    title="Loss Function Design"
    variant="gradient-secondary"
    icon="i-ph-math-operations-duotone"
    size="sm"
  >
  <div class="text-center">
  <div class="bg-gray-100/80 dark:bg-gray-800/40 rounded-lg p-2 border border-gray-200/50 dark:border-gray-700/30 shadow-sm mb-2">

  $$\mathcal{L} = \mathcal{L}_{\text{data}} + \lambda_1 \mathcal{L}_{\text{PDE}} + \lambda_2 \mathcal{L}_{\text{BC}}$$

  </div>
  <div class="text-xs grid grid-cols-3 gap-3">
  <div><strong>Data:</strong> $\|I - I_{\text{ref}}\|^2$</div>
  <div><strong>PDE:</strong> Residual loss</div>
  <div><strong>BC:</strong> Boundary loss</div>
  </div>
  </div>
  </GlassCard>
</div>

---

# Experimental Setup

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-tech font-bold">Comprehensive Validation</span> on Benchmark Problems
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Test Problems"
    subtitle="Diverse scenarios"
    variant="primary"
    icon="i-ph-test-tube-duotone"
    size="md"
    :items="[
      'Homogeneous media',
      'Heterogeneous coefficients',
      'Multi-scale problems',
      'ICF-inspired geometries'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Baselines"
    subtitle="Comparison methods"
    variant="secondary"
    icon="i-ph-chart-line-duotone"
    size="md"
    :items="[
      'Standard PINNs',
      'Discrete ordinates (SN)',
      'Monte Carlo solutions',
      'Fourier Neural Operator'
    ]"
  />
</div>

</div>

<div class="mt-5">
  <GlassCard
    title="Evaluation Metrics"
    variant="gradient-primary"
    icon="i-ph-ruler-duotone"
    size="sm"
  >
    <div class="grid grid-cols-3 gap-3 text-xs text-center">
      <div>
        <div class="font-semibold mb-1">Accuracy</div>
        <div>$L^2$ relative error</div>
      </div>
      <div>
        <div class="font-semibold mb-1">Efficiency</div>
        <div>Training/inference time</div>
      </div>
      <div>
        <div class="font-semibold mb-1">Generalization</div>
        <div>Out-of-distribution test</div>
      </div>
    </div>
  </GlassCard>
</div>

---

# Results: Accuracy Comparison

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-primary font-bold">Superior Accuracy</span> Across Multiple Test Cases
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Quantitative Results"
    subtitle="$L^2$ relative error (%)"
    variant="success"
    icon="i-ph-chart-bar-horizontal-duotone"
    size="md"
  >
    <div class="space-y-2 text-sm">
      <div class="bg-gray-100/50 dark:bg-gray-800/30 rounded p-2">
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="font-semibold">Method</div>
          <div class="font-semibold text-right">Error</div>
          <div>DeepRTE (Ours)</div>
          <div class="text-right text-green-600 font-semibold">0.8%</div>
          <div>Standard PINN</div>
          <div class="text-right">3.2%</div>
          <div>FNO</div>
          <div class="text-right">2.1%</div>
          <div>Discrete Ordinates</div>
          <div class="text-right">1.5%</div>
        </div>
      </div>
    </div>
  </GlassCard>
</div>

<div v-click="2">
  <GlassCard
    title="Key Observations"
    subtitle="Performance insights"
    variant="tech"
    icon="i-ph-lightbulb-duotone"
    size="md"
    :items="[
      '4× better than PINNs',
      'Consistent performance',
      'Handles multi-scale problems',
      'High-scattering accuracy'
    ]"
  />
</div>

</div>

<div class="mt-4">
  <GlassCard variant="gradient-secondary" text-center size="sm">
    <div class="text-sm font-semibold mb-1">
      <span class="emphasis-primary">Attention Impact:</span>
    </div>
    <div class="text-xs opacity-90">
      Without attention: 2.3% | With attention: 0.8% (65% improvement)
    </div>
  </GlassCard>
</div>

---

# Results: Computational Efficiency

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-tech font-bold">Significant Speedup</span> for Parametric Studies
  </div>
</div>

<div grid="~ cols-3 gap-4" mt-4>

<div v-click="1">
  <GlassCard
    title="Training Time"
    subtitle="One-time cost"
    variant="warning"
    icon="i-ph-clock-duotone"
    size="sm"
    :items="[
      'Pre-training: ~24h',
      'Fine-tuning: ~2h',
      'Trains once for all'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Inference Speed"
    subtitle="Per query"
    variant="success"
    icon="i-ph-lightning-duotone"
    size="sm"
    :items="[
      'DeepRTE: ~0.1s',
      'PINN: ~30s',
      '50× faster'
    ]"
  />
</div>

<div v-click="3">
  <GlassCard
    title="Parametric Studies"
    subtitle="Multiple values"
    variant="primary"
    icon="i-ph-repeat-duotone"
    size="sm"
    :items="[
      '100 parameter sets:',
      'DeepRTE: ~10s',
      'PINNs: ~50 min'
    ]"
  />
</div>

</div>

<div class="mt-5">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-base font-semibold mb-1">
      <span class="emphasis-tech">Design Impact:</span>
    </div>
    <div class="text-sm opacity-90">
      Real-time parameter exploration enables interactive optimization
    </div>
  </GlassCard>
</div>

---

# Generalization Capabilities

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-primary font-bold">Robust Generalization</span> Beyond Training Distribution
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Out-of-Distribution Tests"
    subtitle="Challenging scenarios"
    variant="tech"
    icon="i-ph-arrows-out-duotone"
    size="md"
    :items="[
      'Extreme contrasts (10³ ratios)',
      'Novel geometries',
      'Different boundary conditions',
      'Multi-material interfaces'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Transfer Learning"
    subtitle="Few-shot adaptation"
    variant="secondary"
    icon="i-ph-swap-duotone"
    size="md"
    :items="[
      'Pre-trained on simple cases',
      'Fine-tune on ICF targets',
      'Only 10-50 examples needed',
      'High accuracy (< 2% error)'
    ]"
  />
</div>

</div>

<div class="mt-4">
  <GlassCard
    title="Physical Consistency"
    variant="gradient-secondary"
    icon="i-ph-balance-duotone"
    size="sm"
  >
    <div class="grid grid-cols-2 gap-3 text-xs text-center">
      <div>
        <div class="font-semibold mb-1">Conservation Laws</div>
        <div>Energy: < 0.5% error</div>
      </div>
      <div>
        <div class="font-semibold mb-1">Asymptotic Limits</div>
        <div>Correct diffusion behavior</div>
      </div>
    </div>
  </GlassCard>
</div>

---

# Ablation Studies

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-tech font-bold">Component Analysis</span> and Design Choices
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Architecture Components"
    subtitle="Impact on performance"
    variant="primary"
    icon="i-ph-gear-duotone"
    size="md"
  >
    <div class="space-y-2 text-sm">
      <div class="bg-gray-100/50 dark:bg-gray-800/30 rounded p-2">
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div>Full DeepRTE</div>
          <div class="text-right font-semibold text-green-600">0.8%</div>
          <div>Without attention</div>
          <div class="text-right">2.3%</div>
          <div>Without pre-training</div>
          <div class="text-right">1.8%</div>
          <div>Standard DeepONet</div>
          <div class="text-right">3.1%</div>
        </div>
      </div>
    </div>
  </GlassCard>
</div>

<div v-click="2">
  <GlassCard
    title="Training Strategies"
    subtitle="Learning approach impact"
    variant="secondary"
    icon="i-ph-trending-up-duotone"
    size="md"
    :items="[
      'Progressive training: 15%',
      'Data augmentation: 10%',
      'Multi-scale loss: 8%',
      'Curriculum learning: 12%'
    ]"
  />
</div>

</div>

<div class="mt-4">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-sm font-semibold mb-1">
      <span class="emphasis-tech">Key Finding:</span>
    </div>
    <div class="text-xs opacity-90">
      Attention mechanism crucial for long-range transport phenomena
    </div>
  </GlassCard>
</div>

---

# Limitations and Future Work

<div class="mb-4 text-center">
  <div class="text-xl text-on-surface mb-2">
    <span class="emphasis-primary font-bold">Current Limitations</span> and Research Directions
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Current Limitations"
    subtitle="Areas for improvement"
    variant="error"
    icon="i-ph-warning-duotone"
    size="md"
    :items="[
      '2D problems only',
      'Steady-state solutions',
      'Substantial pre-training data',
      'Memory constraints'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Future Directions"
    subtitle="Research opportunities"
    variant="success"
    icon="i-ph-rocket-launch-duotone"
    size="md"
    :items="[
      '3D extension',
      'Time-dependent problems',
      'Multi-physics coupling',
      'Uncertainty quantification'
    ]"
  />
</div>

</div>

<div class="mt-4">
  <GlassCard
    title="Broader Impact"
    variant="gradient-secondary"
    icon="i-ph-globe-duotone"
    size="sm"
  >
    <div class="text-center text-xs">
      <div class="mb-1">
        <strong>Applications:</strong> ICF design, medical imaging, astrophysics
      </div>
      <div>
        <strong>Impact:</strong> Real-time simulation and optimization
      </div>
    </div>
  </GlassCard>
</div>

---

# Conclusions

<div class="mb-6 text-center">
  <div class="text-2xl text-on-surface mb-4">
    <span class="emphasis-primary font-bold">DeepRTE:</span> A New Paradigm for Radiative Transfer
  </div>
</div>

<div grid="~ cols-2 gap-6" mt-4>

<div v-click="1">
  <GlassCard
    title="Technical Contributions"
    subtitle="Novel advances"
    variant="primary"
    icon="i-ph-medal-duotone"
    size="md"
    :items="[
      'First attention-based operator for RTE',
      '4× better accuracy than PINNs',
      '300× speedup for parametric studies',
      'Strong generalization'
    ]"
  />
</div>

<div v-click="2">
  <GlassCard
    title="Practical Impact"
    subtitle="Real-world applications"
    variant="tech"
    icon="i-ph-wrench-duotone"
    size="md"
    :items="[
      'Interactive design workflows',
      'Real-time exploration',
      'Complex geometries',
      'Multi-physics foundation'
    ]"
  />
</div>

</div>

<div class="mt-5" v-click="3">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-lg font-semibold mb-2">
      <span class="emphasis-tech">Key Message</span>
    </div>
    <div class="text-sm mb-2">
      Neural operators + attention = transformative radiation transport
    </div>
    <div class="text-xs opacity-90">
      New possibilities for optimization and discovery
    </div>
  </GlassCard>
</div>

---
layout: center
class: "text-center pb-5"
---

# Thank You!

<div class="mt-8 space-y-6">
  <div class="text-xl text-on-surface-variant">
    Questions & Discussion
  </div>

  <div class="grid grid-cols-3 gap-8 mt-12">
    <GlassCard
      title="Paper"
      variant="gradient-primary"
      icon="i-ph-file-text-duotone"
      size="sm"
      text-center
    >
      <div class="text-sm">
        DeepRTE: Pre-trained Attention-based Neural Network for Radiative Transfer
      </div>
    </GlassCard>
    <GlassCard
      title="Code"
      variant="gradient-secondary"
      icon="i-ph-code-duotone"
      size="sm"
      text-center
    >
      <div class="text-sm">
        Available on GitHub<br/>
        (upon publication)
      </div>
    </GlassCard>
    <GlassCard
      title="Contact"
      variant="tech"
      icon="i-ph-envelope-duotone"
      size="sm"
      text-center
    >
      <div class="text-sm">
        Zheng Ma<br/>
        Shanghai Jiao Tong University
      </div>
    </GlassCard>
  </div>
</div>

Slides can be found [here](https://zheng-talks.netlify.app/2025/deeprte)

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
