---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: DeepRTE
remoteAssets: true
---

# DeepRTE {.font-600!.text-lime}

<div text-2xl op75>Pre-trained Attention Based Neural Operator for Radiative Trasfer</div>

<div mt15 />

<div flex="~ col gap-2">
  <div text-left text-2xl op75>Zheng Ma</div>
  <div text-left text-sm op50>Shanghai Jiao Tong University</div>
  <div text-left text-sm op50>Joint work with Yekun Zhu and Min Tang</div>
</div>

<div abs-br mx-10 my-11 flex="~ col items-end" text-center>
  <div text-sm op50>August 20, 2025</div>
</div>

---
glow: left
---

# Introduction

Radiative transfer are important in many areas

<div grid="~ cols-2">
  <div flex="~ col gap-1" items-center>
    <div text-xl>ICF</div>
    <img src="/icf.png" border="2 main" rounded-lg h-65 />
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl>Radiation Therapy</div>
    <img src="/rad-therapy.jpg" border="2 main" rounded-lg shadow-l h-65 />
  </div>
</div>

<br>

<div rounded-lg bg-lime:10 p2 backdrop-blur>
  <div text-center text-2xl>

  Key problem: numerical simulation of <span text-lime3>radiative transfer equation (RTE)</span>

  </div>
</div>

---

# Radiative Transfer Equation

<div mt10 />

<div text-xl text-lime>

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

<div flex="~ col gap-2" border="2 lime/50" rounded-lg bg-lime:10 overflow-hidden>
  <div bg-lime:10 py-2 px-3>
    <div>Boundary condition</div>
  </div>
  <div flex="~ gap-2 items-center justify-center" text-lime m--2>

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
