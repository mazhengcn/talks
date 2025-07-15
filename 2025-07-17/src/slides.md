---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Kinetic Machine Learning
remoteAssets: true
---

# Solve Kinetic Equations with Deep Learning {.font-600!}

<div flex="~ col gap-2">
  <div text-left text-2xl op75>Zheng Ma</div>
  <div text-left text-sm op50>Shanghai Jiao Tong University</div>
  <div text-left text-sm op50>Joint work with Shi Jin, Keke Wu, Tianai Zhang, Han Wang, Jingrun Chen</div>
</div>

<div abs-br mx-10 my-11 flex="~ col items-end" text-center>
  <img src="/hksiam2025_banner.png" alt="hksiam2025" border="~ blue/50 rounded-lg" shadow-l h10 mb1 op75 />
  <div text-sm opacity-75>July 10, 2025</div>
</div>

---

# Introduction

Kinetic equations are important in many areas

<div grid="~ cols-3 gap-2">
  <div flex="~ col gap-1" items-center>
    <div text-xl>Neutron transport</div>
    <img src="/reactor.png" border="~ amber/50" rounded-lg shadow-l h-55 />
    <div>Fission reactor</div>
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl>Radiative transfer</div>
    <img src="/icf.png" border="~ lime/50 rounded-lg" shadow-l h-55 />
    <div>ICF</div>
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl>Rarefied gas</div>
    <img src="/reentry.png" border="~ pink/50 rounded-lg" shadow-l h-55 />
    <div>Reentry</div>
  </div>
</div>

<br>

<div border="~ violet/50 rounded-lg" shadow-l bg-violet:10 p5>
  <div text-center text-2xl>Key problem: numerical simulation of <Emphasis>kinetic equations</Emphasis></div>
</div>

---

# Multiscale Kinetic Equations

<div mt10 />

<div text-2xl>

$$
\partial_t f +  v \cdot \nabla_x f = Q(f)
$$

</div>

<div mt5 />

- $f(t, x, v)$: distribution function at time $t$ in phase sapce $(x, v)$

- $Q(f)$: collision operator

- $\varepsilon$: Knudsen number (ratio between mean free path and characteristic length)

<div v-click grid="~ cols-2 gap-4" mt5>

<div flex="~ col gap-2" border="~ violet/50 rounded-lg" shadow-l items-center>
  <div bg-violet:10 rounded-b text-base w-full py-2 px-3 op75>Neutron transport equation</div>
  <div text-base>

  $$
  \varepsilon \partial_t f + v \cdot \nabla_x f + \Sigma_t f= \frac{1}{\varepsilon} \int \Sigma_s(v,v') f \, \mathrm{d} v' + q
  $$

  </div>
</div>

<div flex="~ col gap-2" border="~ violet/50 rounded-lg" shadow-l items-center>
  <div bg-violet:10 rounded-b text-base w-full py-2 px-3 op75>BGK equation</div>
  <div text-base>

  $$
  \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left(M_{\text{eq}}[f]  - f \right)
  $$

  </div>
</div>
</div>

<div v-click border="~ violet/50 rounded-lg" shadow-l mt-4>
  <div text-xl text-center>

  Multiscale problem: $\varepsilon$ can vary from $O(1)$ <Emphasis>kinetic regime</Emphasis> to $0$ <Emphasis>hydrodynamic regime</Emphasis>

  </div>
</div>

---

# Numerical Chanllenges

Curse of dimensionality

<div mt5 />

<div grid="~ gap-4 cols-3">

<div v-click flex="~ col gap-4" border="~ red/50 rounded-lg" bg-rose:10 px4 p6>
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div i-ph-cube-transparent-duotone text-red text-4xl />
    <div text-red>Dimension</div>
  </div>

  - Phase space + time: 6 + 1 = 7

  - Collision operator is a 5-fold integral

  - Need to evalute collision at every phase point

</div>

<div v-click flex="~ col gap-4" border="~ green/50 rounded-lg" bg-blue:10 p6>
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div i-ph-circles-three-duotone text-green text-4xl />
    <div text-green>Collision</div>
  </div>

  - Hard to maintain conservation at discrete level

  - Highly nonlinear for Boltzmann collision

  - Ray effect

</div>

<div v-click flex="~ col gap-4" border="~ amber/50 rounded-lg" bg-amber:10 p6>
  <div flex="~ gap-1 items-center" text-3xl ml--1>
    <div i-ph-chart-bar-duotone text-amber text-4xl />
    <div text-amber>Multiscale</div>
  </div>

  - Stability issues for small $\varepsilon$ (stiffness)

  - Consistency of the scheme with limiting model as $\varepsilon \to 0$

  - Automatically capture the transition across regimes

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
    'Do not main conservation',
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
<div v-click flex="~ col" border="~ rose/50 rounded-lg">
  <div flex="~ gap-2" items-center bg-rose:10 h10 pl4 py2>
    <div text-rose>Constraints</div>
    <div text-rose3>as the loss of minimization problem</div>
  </div>
  <div pl3 content-center>

  - Model: PDE / physical information needed (e.g., PINNs, DeepRitz, DeepGalerkin)
  - Data: pure supervised or as a priori information
  - IC (initial conditions) and BC (boundary conditions)
  - Other constraints: **conservation**, symmetry, etc.

  </div>
</div>
<div v-click flex="~ col" border="~ blue/50 rounded-lg">
  <div flex="~ gap-2" items-center bg-blue:10 h10 pl4 py2>
    <div text-blue>Architecture</div>
    <div text-blue3>build a deep neural network (function class) as the trail function</div>
  </div>
  <div pl3 content-center>

  - Approximate solution: PINNs, DeepRitz, DeepGalerkin, etc.
  - Approximate solution operator: DeepONet, FNO, etc.
  - Mapping from equations (as a computational graph) to solutions (PDEFormer)

  </div>
</div>


<div v-click flex="~ col" border="~ amber/50 rounded-lg">
  <div flex="~ gap-2" items-center bg-amber:10 h10 pl4 py2>
    <div text-amber>Optimization</div>
  </div>
  <div pl3 content-center>

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
