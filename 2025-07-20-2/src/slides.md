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

Construct a **diffusion process**

$$
\{\mathbf{x}(t)\}_{t=0}^{T}
$$
where $\mathbf{x}(0)\sim p_0$ is `data distribution` and $\mathbf{x}(T)\sim p_{T}$ is `tractable form to generate sample`.

<div mt8 />

Then, we can model the diffusion process as a **SDE**

$$
d\mathbf{x}=-\frac{\beta(t)}{2}\mathbf{x}dt+\sqrt{\beta(t)}d\mathbf{\omega}.
$$

<div bg-purple:10 rounded-lg px4 py2>

  - $p(\mathbf{x}(t))$: probability density of $\mathbf{x}(t)$

  - $p(\mathbf{x}(t)|\mathbf{x}(s))$: transition kernel from $\mathbf{x}(s)$ to $\mathbf{x}(t)$ with $0 \le s < t \le \hat{T}$.

</div>

---

# Diffusion Process

Generative samples from a reverse SDE

Obtain samples

$$
\mathbf{x}(0)\sim p(x(0))
$$

by starting from samples of $\mathbf{x}(\hat{T})\sim p(x(\hat{T}))$, i.e., running the reverse-time SDE:

$$
d\mathbf{x}=[-\frac{\beta(t)}{2}\mathbf{x}-\beta(t){\color{violet}\nabla_{\mathbf{x}(t)}\log p(\mathbf{x}(t))}]dt+\sqrt{\beta(t)}d\bar{\mathbf{\omega}}
$$

<div mt8 />

We can learn the score function by neural network:

<div bg-purple:10 rounded-lg px4 py2 text-lime>

  $$
  \nabla_{\mathbf{x}(t)}\log p(\mathbf{x}(t)) \approx s_{\theta^*}(\mathbf{x}(t), t)
  $$

</div>

---
layout: center
class: "text-center pb-5"
---

# Thank You!

Slides can be found [here](https://zheng-talks.netlify.app/2025/hksiam)
