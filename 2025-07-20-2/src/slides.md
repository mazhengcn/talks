---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
title: Diffusion Models for PDE Inverse Problems
remoteAssets: true
---

# Solve PDE Inverse Problems with Generative Models and Their Applications {.font-600!}

<div flex="~ col gap-2">
  <div text-left text-2xl op75>Zheng Ma</div>
  <div text-left text-sm op50>Shanghai Jiao Tong University</div>
  <div text-left text-sm op50>Joint work with Xiongbin Yan, Enze Jiang and Jishen Peng</div>
</div>

<div abs-br mx-10 my-11 flex="~ col items-end" text-center>
  <img src="/logo.png" alt="csian-bdai-2025" border="~ main" rounded-lg w-23 mb1 op60 />
  <div text-sm op50>July 20, 2025</div>
</div>

---

# Introduction

Deep Generative Models

<div mt5/>

<div grid="~ cols-[1.5fr_1fr] gap-4">

<div flex="~ col gap-4">

<div flex="~ col" border="~ blue/50" bg-blue:10 rounded-lg>
  <div text-xl px4 pt4 text-blue1>Goal</div>
  <div ml2 p2 op75>

  Learn a representation of `intractable` probability distribution $p(x)$ defined over $x\in\mathbb{R}^n$

  </div>
</div>

<div flex="~ col" border="~ blue/50" bg-blue:10 rounded-lg>
  <div text-xl px4 pt4 text-blue1>Implementation: define a generator</div>
  <div ml2 p2 op75>

  $$
  g_{\theta}:z\in \mathbb{R}^d\sim p(z) \to x,
  $$

  where $p(z)$ is a `tractable` probability distribution (such as Gaussian), $\theta$ is trainable parameters.
  </div>
</div>
</div>

<div flex="~ col gap-2" border="~ blue/50" bg-blue:10 rounded-lg m0>
  <img src="/figure_1/generate.png" alt="generate" rounded-lg op75 />
  <div px4 op75 p4>

  Train $g_{\theta}$ to map from `simple` $\mathcal{Z}\sim p(z)$ to `complicated` $\mathcal{X}\sim p(x)$

  </div>
</div>

</div>

---

# Generative Models

Examples

<div flex="~ col gap-2" mt--5>

  - Variational Auto-Encoder (VAE) (Kingma et al., ICLR, 2013)

  - Generative adversarial networks (GAN) (Goodfellow et al., NeurIPS)

  - Normalizing flows (NF, Danilo et al., PMLR, 2015)

  - Diffusion model (Ho et al., NeurIPS, 2020)

  <div ml-6>
    <img src="/figure_1/generate2.png" alt='generative models' rounded-lg op75 h-55 />
  </div>

</div>

---

# Diffusion Process

As SDE

- Construct a **diffusion process**

$$
\{\mathbf{x}(t)\}_{t=0}^{T}
$$
where $\mathbf{x}(0)\sim p_0$ is `data distribution` and $\mathbf{x}(T)\sim p_{T}$ is `tractable form to generate sample`.

- Then, we can model the diffusion process as a **SDE**

$$
d\mathbf{x}=-\frac{\beta(t)}{2}\mathbf{x}dt+\sqrt{\beta(t)}d\mathbf{\omega}.
$$

<div bg-purple:10 rounded-lg px4 py2>

  Denote $p(\mathbf{x}(t))$ is the probability density of $\mathbf{x}(t)$, and use $p(\mathbf{x}(t)|\mathbf{x}(s))$ to denote the transition kernel from $\mathbf{x}(s)$ to $\mathbf{x}(t)$,  where $0 \le s < t \le \hat{T}$.

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
  <div flex="~ gap-2 items-center" bg-red:10 px4 py1 rounded>
    <div>Constraints</div>
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
  <div flex="~ gap-2" items-center bg-green:10 rounded px4 py1>
    <div>Architecture</div>
    <div>build a deep neural network (function class) as the trial function</div>
  </div>
  <div ml2 px2 text-green1>

  - Approximate solution: PINNs, DeepRitz, DeepGalerkin, etc.
  - Approximate solution operator: DeepONet, FNO, etc.
  - Mapping from equations (as a computational graph) to solutions (PDEFormer)

  </div>
</div>

<div v-click flex="~ col" border="~ orange/50 rounded-lg" bg-orange:10>
  <div flex="~ gap-2" items-center bg-orange:10 rounded px4 py1>
    <div>Optimization</div>
  </div>
  <div ml2 px2 text-orange1>

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
