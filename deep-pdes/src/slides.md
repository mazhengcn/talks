---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: 深度学习与偏微分方程
remoteAssets: true
---

# 深度学习与偏微分方程 {.font-600!}

从入门到`精通`

<br>

<div flex="~ col gap-2">
  <div text-left text-2xl op75>马 征</div>
  <div text-left text-sm op50>上海交通大学</div>
</div>

<div abs-br mx-10 my-11 flex="~ col items-end" text-center>
  <div text-sm op50>2025年7月24日</div>
</div>

---

# 简介

你将了解如下内容：

<div grid="~ cols-3 gap-2">
  <div flex="~ col gap-1" items-center>
    <div text-xl>Neutron transport</div>
    <img src="/reactor.png" border="~ violet/50" rounded-lg h-55 />
    <div>Fission reactor</div>
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl>Radiative transfer</div>
    <img src="/icf.png" border="~ violet/50" rounded-lg h-55 />
    <div>ICF</div>
  </div>
  <div flex="~ col gap-1" items-center>
    <div text-xl>Rarefied gas</div>
    <img src="/reentry.png" border="~ violet/50" rounded-lg shadow-l h-55 />
    <div>Reentry</div>
  </div>
</div>

<br>

<div rounded-lg bg-violet:10 p4 mx8>
  <div text-center text-2xl>

  Key problem: numerical simulation of <Emphasis>kinetic equations</Emphasis>

  </div>
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

<div flex="~ col gap-2" border="~ orange/50" rounded-lg items-center bg-orange:10>
  <div bg-orange:10 rounded w-full py-2 px-3 mt0>
    <div>Neutron transport equation</div>
  </div>
  <div text-base text-orange1>

  $$
  \varepsilon \partial_t f + v \cdot \nabla_x f + \Sigma_t f= \frac{1}{\varepsilon} \int \Sigma_s(v,v') f \, \mathrm{d} v' + q
  $$

  </div>
</div>

<div flex="~ col gap-2" border="~ lime/50" rounded-lg items-center bg-lime:10>
  <div bg-lime:10 rounded w-full py-2 px-3>
    <div>BGK equation</div>
  </div>
  <div text-base text-lime1>

  $$
  \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left(M_{\text{eq}}[f]  - f \right)
  $$

  </div>
</div>
</div>

<div v-click rounded-lg mt-4 p1 bg-violet:10>
  <div text-xl text-center>

  Multiscale problem: $\varepsilon$ can vary from $O(1)$ <Emphasis>kinetic regime</Emphasis> to $0$ <Emphasis>hydrodynamic regime</Emphasis>

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

Original "PINNs"

<div v-click border="~ 2 pink7" rounded-lg h10 w44 absolute z-10 left-148.5 top-47.5></div>

<img src='/pinns-origin.png' alt="original pinn paper" rounded-2xl border="~ violet:50" shadow-lg />

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
src: /pages/apnn.md
---

---
layout: center
class: "text-center pb-5"
---

# Thank You!

Slides can be found [here](https://zheng-talks.netlify.app/2025/hksiam)
