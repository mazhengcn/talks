---
layout: center
---

<div flex="~ col gap-5 items-center">
  <div font-600 m--2 text-center>

  # Constraints for multiscale kinetic equations

  </div>
  <div text-2xl op75 text-center>PINNs, DeepRitz, etc.</div>
</div>

---

# Linear Transport Equation

$1$-D for illustration

$$
\varepsilon \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left ( \frac{1}{2} \int_{-1}^{1} f \,\mathrm{d} v' - f \right )
$$

<div mt8 />

PINN for example:

- **Architecture**: approximate the <Emphasis>solution</Emphasis> by a deep neural network

$$
f_\theta^{\text{NN}}(t,x,v) \approx f(t,x,v)
$$

- **Model**: take the <Emphasis>least square</Emphasis> of the linear transport equation residual (strong form) as loss

$$
\mathcal{R}_{\text{PINN}}^{\varepsilon} =
\int\left( \varepsilon^2 \partial_t f^{\text{NN}}_{\theta} + \varepsilon {v} \cdot \nabla_x f^{\text{NN}}_{\theta} - \left ( \frac{1}{2} \int_{-1}^{1} f^{\text{NN}}_{\theta} \mathrm{d} v' - f^{\text{NN}}_{\theta} \right ) \right)^2 \, \mathrm{d}{{v}} \mathrm{d}{{x}} \mathrm{d}{t}
$$

<!-- Physics Informed Neural Networks(PINNs)[^footnote1] -->

<!--
[^footnote1]: Maziar Raissi, Paris Perdikaris, and George E Karniadakis.  Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. Journal of Computational Physics, 2019 -->

<!-- background: '/carton8.png'  png。format -->

<!-- <style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style> -->

---

# Result of PINN

<div mt8 />

$$
\varepsilon \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left ( \rho(t,x) - f \right )
, \quad \rho(t,x) =  \frac{1}{2} \int_{-1}^{1} f \, \mathrm{d} v'
$$

<div grid="~ cols-[1fr_max-content_1fr] gap-4" mt-4>

<div v-click flex="~ col items-center">

  Kinetic regime: $\varepsilon=1$

  <img src="/apnn/ex1_pinns.png" alt="pinn-lte-eps1" border="~ rounded-lg violet/50" shadow-l h-50 op75 />

  $$
  f_0(x, v) = [1 + \cos (4 \pi x)]e^{-\frac{v^2}{2}} / \sqrt{2\pi}
  $$

</div>

<div v-click border="l violet/20" w-1px h-full />

<div v-click flex="~ col items-center">

  Diffusive regime: $\varepsilon=10^{-8}$

  <img src="/apnn/ex2_pinns.png" alt="pinn-lte-eps-8" border="~ rounded-lg violet/50" shadow-l h-50 op75 />

  $$
  f_0(x, v) = 0
  $$

</div>

<div class="color-red text-center" >
  PINN fails!
</div>

</div>

---

# Failure of PINN Loss

PINN can not resolve small scale

<div mt8 />

$$
\mathcal{R}^{\varepsilon}_{\text{PINN}} = \int \left( \varepsilon^2 \partial_t f^{\text{NN}}_{\theta} + \varepsilon {v} \cdot \nabla_x f^{\text{NN}}_{\theta} - \left ( \frac{1}{2} \int_{-1}^{1} f^{\text{NN}}_{\theta} \mathrm{d} v' - f^{\text{NN}}_{\theta} \right ) \right)^2 \mathrm{d}{{v}} \mathrm{d}{{x}} \mathrm{d}{t}
$$

Let $\varepsilon \to 0$

$$
  \mathcal{R}_{\text{PINN}}^0 = \int \left ( \frac{1}{2} \int_{-1}^{1} f^{\text{NN}}_{\theta} \mathrm{d} v' - f^{\text{NN}}_{\theta} \right )^2 \mathrm{d}{{v}} \mathrm{d}{{x}} \mathrm{d}{t}
$$

which can be viewed as the <Emphasis>PINN loss of the steady equation</Emphasis>

$$
  f^{\text{NN}}_{\theta} = \frac{1}{2} \int_{-1}^{1} f^{\text{NN}}_{\theta} \mathrm{d} v'
$$

PINN loss is not AP (Asymptotic-preserving), i.e., it does not converge to the <Emphasis>correct macroscopic limit</Emphasis> as $\varepsilon \to 0$.

---

# Diffusion Limit

<div mt5 />

$$
\varepsilon \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left ( \rho(t,x) - f \right )
, \quad \rho(t,x) = \left \langle f \right \rangle := \frac{1}{2} \int_{-1}^{1} f \mathrm{d} v'.
$$

Decompose $f$ into the equilibrium $\rho(t,x)$ and the non-equilibrium part $g(t,x,v)$:

$$
f(t,x,v) = \rho(t,x) + \varepsilon g(t,x,v),
$$

where the non-equilibrium part $g$ clearly satisfies <span v-mark.lime><Emphasis>$\left \langle g \right \rangle = 0$</Emphasis></span>

<!-- Subsititing $f = \rho + \varepsilon g$ into the linear transport equation yields

$$
\begin{equation}
  \varepsilon \partial_t \rho + \varepsilon^2 \partial_t g + v \cdot \nabla_x \rho + \varepsilon v \cdot \nabla_x g = - g.
\end{equation}
$$

Integrating this equation with respect to $v$:

$$
\left \langle \varepsilon \partial_t \rho + \varepsilon^2 \partial_t g + v \cdot \nabla_x \rho + \varepsilon v \cdot \nabla_x g \right \rangle = 0，
$$

i.e.,

$$
 \varepsilon \partial_t \rho + \varepsilon^2 \left \langle  \partial_t g \right \rangle + \left \langle v  \right \rangle \cdot \nabla_x \rho + \varepsilon \left \langle  v \cdot \nabla_x g  \right \rangle  = 0,
$$

i.e.,

$$
 \varepsilon \partial_t \rho + \varepsilon^2 \partial_t \left \langle g \right \rangle +  \varepsilon \left \langle  v \cdot \nabla_x g  \right \rangle  = 0,
$$

i.e.,

$$
 \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle  = 0.
$$

Define operator $\Pi(\cdot)(v): \left \langle \cdot \right \rangle$ and $I$ the identity operator, then apply the projection operator $I - \Pi$ to equation (1):

$$
\left ( I - \Pi \right ) \left ( \varepsilon \partial_t \rho + \varepsilon^2 \partial_t g + v \cdot \nabla_x \rho + \varepsilon v \cdot \nabla_x g \right ) =  - \left ( I - \Pi \right ) (g),
$$

i.e.,

$$
\varepsilon^2 \partial_t g + \varepsilon \left ( I - \Pi \right ) \left ( v \cdot \nabla_x g \right ) + v \cdot \nabla_x \rho  =  - g.
$$

Thus, one can get the micro-macro system for the linear trasport equation -->

Subsititing $f = \rho + \varepsilon g$ into the linear transport equation yields

$$
  \left\{
  \begin{aligned}
      & \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle = 0, \\
      \\
      & \varepsilon^2 \partial_t g + \varepsilon \left ( I - \Pi \right ) \left ( v \cdot \nabla_x g \right ) + v \cdot \nabla_x \rho  =  - g.
  \end{aligned}
  \right.
$$

where $I$ is the identity operator and $\Pi(\cdot)(v):=\left \langle \cdot \right \rangle$ is the projection operator.

<!-- Hilbert expansion:

$$
\begin{equation*}
    \begin{aligned}

        f(t,x,v) &= f_0(t,x,v) + \varepsilon f_0(t,x,v) + \varepsilon^2 f_1(t,x,v) + \cdots \\
        O(\frac{1}{\varepsilon}): & \quad  f_0 = \rho(t,x) \\
        O(1): & \quad f_1 = - v \cdot f_0 \\
        O(\varepsilon): & \quad f_2 = - (\partial_t f_0 + v \cdot \nabla_x f_1) \\
        & \vdots
    \end{aligned}
\end{equation*}
$$ -->

---

# Micro-macro System

Classical numerical schemes based on this system are usually AP schemes

The micro-macro system for the linear trasport equation

$$
  \left\{
  \begin{aligned}
      & \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle   = 0, \\
        \\
      & \varepsilon^2 \partial_t g + \varepsilon \left ( I - \Pi \right ) \left ( v \cdot \nabla_x g \right ) + v \cdot \nabla_x \rho  =  - g.
  \end{aligned}
  \right.
$$

Sending $\varepsilon \to 0$, the above system formally approaches

$$
  \left\{
  \begin{aligned}
      & \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle  = 0, \\
      & - v \cdot \nabla_x \rho = g.
  \end{aligned}
  \right.
$$

Plugging the second equation into the first equation gives the diffusion equation

$$
 \rho_t - \frac{1}{3} \rho_{xx} = 0.
$$

---
layout: center
---

<div flex="~ col gap-10 items-center">
  <div font-600 m--10 text-center>

  # What is "good" loss for multiscale kinetic equations?

  </div>
  <div text-2xl op75 text-center>Conservation, symmetry, parity, etc.</div>
</div>

---

# Asymptotic-Preserving Neural Networks

<div flex="~ justify-center">
<div flex="~ items-center justify-between" w100>
<div flex="~ col items-center justify-between" h70>
  <div border="~ lime/50 rounded-lg" shadow-l bg-lime:10 text-lime3 text-center px4>

  $\mathcal{R}(\mathcal{F}^{\varepsilon})$

  </div>
  <div ml--20 text-lime3>

  $\mathcal{R}\to 0$

  </div>
  <div border="~ lime/50 rounded-lg" shadow-l bg-lime:10 text- px8 text-center text-lime3>

  $\mathcal{F}^{\varepsilon}$

  </div>
</div>
<div flex="~ col items-end justify-between" h80 text-gray>

  $\varepsilon \to 0$

  $\varepsilon \to 0$

</div>
<div flex="~ col items-center justify-between" h70>
  <div border="~ amber/50 rounded-lg" shadow-l bg-amber:10 text-amber3 text-center px4>

  $\mathcal{R}(\mathcal{F}^0)$

  </div>
  <div mr--20 text-amber3>

  $\mathcal{R}\to 0$

  </div>
  <div border="~ amber/50 rounded-lg" shadow-l bg-amber:10 text-amber3 px8 text-center>

  $\mathcal{F}^0$

  </div>
</div>
</div>
</div>

<v-drag-arrow color="green" pos="338,176,0,158"/>
<v-drag-arrow color="orange" pos="641,176,0,158"/>
<v-drag-arrow color="gray" pos="384,146,211,0"/>
<v-drag-arrow color="gray" pos="384,365,211,0"/>

<div mt10 />

<div grid="~ cols-2 gap-4" ml-5>
<div flex="~ items-center gap-4" bg-lime:10 rounded-lg pl4 py2 text-lime3 text-center>

  $\mathcal{F}^\varepsilon, \; \mathcal{R}(\mathcal{F}^\varepsilon)$

  Microscopic models and its loss
</div>
<div flex="~ items-center gap-4" bg-amber:10 rounded-lg pl4 py2 text-amber3 text-center>

  $\mathcal{F}^0, \; \mathcal{R}(\mathcal{F}^0)$

  Macroscopic models and its loss
</div>
</div>

---

# Micro-macro System

Classical numerical schemes based on this system are usually AP schemes

The micro-macro system for the linear trasport equation

$$
  \left\{
  \begin{aligned}
      & \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle   = 0, \\
        \\
      & \varepsilon^2 \partial_t g + \varepsilon \left ( I - \Pi \right ) \left ( v \cdot \nabla_x g \right ) + v \cdot \nabla_x \rho  =  - g.
  \end{aligned}
  \right.
$$

Sending $\varepsilon \to 0$, the above system formally approaches

$$
  \left\{
  \begin{aligned}
      & \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle  = 0, \\
      & - v \cdot \nabla_x \rho = g.
  \end{aligned}
  \right.
$$

Plugging the second equation into the first equation gives the diffusion equation

$$
 \rho_t - \frac{1}{3} \rho_{xx} = 0.
$$

---

# APNN v1: based on Micro-macro decomposition

Re-design of loss

<br>

$$
\begin{aligned}
  \mathcal{R}^{\varepsilon}_{\text{APNN}} & = \int \left( \partial_t \rho^{\text{NN}}_{\theta} + \nabla_x \cdot \left \langle  {v} g^{\text{NN}}_{\theta} \right \rangle\right)^2 \mathrm{d}{{x}}  \mathrm{d}{t} \\
  & + \int | \varepsilon^2 \partial_t g^{\text{NN}}_{\theta}  + \varepsilon (I - \Pi)({v} \cdot \nabla_x g^{\text{NN}}_{\theta})
  \quad  + {v} \cdot  \nabla_{{x}} \rho^{\text{NN}}_{\theta} +  g^{\text{NN}}_{\theta}|^2 \mathrm{d}{{v}} \mathrm{d}{{x}} \mathrm{d}{t}
\end{aligned}
$$

<div mt5 />

Let $\varepsilon \to 0$, the loss converges to

<div mt5 />

$$
\mathcal{R}^{0}_{\text{APNN}}
= \int \left( \partial_t \rho^{\text{NN}}_{\theta} + \nabla_x \cdot \left \langle   {v} g^{\text{NN}}_{\theta} \right \rangle\right)^2 \mathrm{d}{{x}}  \mathrm{d}{t}
+ \int \left({v} \cdot  \nabla_{{x}} \rho^{\text{NN}}_{\theta} +  g^{\text{NN}}_{\theta} \right)^2 \mathrm{d}{{v}} \mathrm{d}{{x}} \mathrm{d}{t}.
$$

---

# APNN v1: based on Micro-macro decomposition

<img src="/apnn/APNNs.jpg" class="h-90 mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl />

<div mt5 />

<div text-center>

Mass conservation mechanism <Emphasis>$g^{\text{NN}}_{\theta} = \tilde{g}^{\text{NN}}_{\theta}-\left \langle \tilde{g}^{\text{NN}}_{\theta} \right\rangle$</Emphasis> is also important!

</div>

---

# Test examples

<div>

</div>

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

Periodic boundary condition: $\varepsilon=1$

$$
\begin{aligned}
  & f(t, x_L, v) = f(t, x_R, v), \\
  & f_0(x, v) = \frac{1 + \cos (4 \pi x)}{\sqrt{2\pi}}e^{-\frac{v^2}{2}}.
\end{aligned}
$$

<img src="/apnn/ex1_apnns.png" class="h-50 mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl />

</div>
<div>

Inflow boundary condition $\varepsilon=10^{-8}$

$$
\begin{aligned}
  f(t, x_L, v) = 1 \; & \text{for} \; v > 0 \\
  f(t, x_R, v) = 1 \; & \text{for} \; v < 0 \\
  f_0(x, v) &= 0.
\end{aligned}
$$

<img src="/apnn/ex2_apnns.png" class="h-50 mx-auto rounded-lg" border="~ violet/50" shadow-xl mt--2 />

</div>
</div>

<div text-center>

One can observed that APNN works for both $\varepsilon=1$ and <Emphasis> $\varepsilon=10^{-8}$</Emphasis>.

</div>

---

# Mass conservation mechanism

<div>

</div>

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

######
Ex 3: Inflow boundary condition ($\varepsilon=10^{-8}$)

For the constraint <Emphasis>$\left \langle g \right \rangle = 0$</Emphasis>, one way is to construct a novel neural network for $g$ such that it  exactly satisfies <Emphasis>$\left \langle g \right \rangle = 0$</Emphasis>.

The other way is to treat it as a soft constraint with parameter $\lambda_3$, we use $\hat{g}_{\theta}^{\text{NN}}$ and modifies the loss as

<div mt10 />

$$
\mathcal{R}_{\text{APNN}} +  \lambda_3 \int | \left \langle  \hat{g}^{\text{NN}}_{\theta} \right \rangle - 0|^2 \mathrm{d}{{x}}  \mathrm{d}{t}.
$$

</div>

<div>

######
Plot of density $\rho$ at $t = 0.1$: APNNs with soft constraint (marker) vs. Ref (line).

<img src="/apnn/ex2_1e-8_noexact.png" class="h-50 mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl />

</div>
</div>

<div mt5 />

<div text-center>

Mass conservation mechanism <Emphasis>$g^{\text{NN}}_{\theta} = \tilde{g}^{\text{NN}}_{\theta} -  \left \langle \tilde{g}^{\text{NN}}_{\theta} \right \rangle$</Emphasis> is important!

</div>

---

# Even and odd parity method

Alternative method for constructing AP schemes in classical numerical methods

$$
\varepsilon \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left ( \frac{1}{2} \int_{-1}^{1} f \mathrm{d} v' - f \right ), \; -1 \le v \le 1
$$

By splitting equation and define even- and odd-parities as

$$
\begin{aligned}
    r(t, x, v) & = \frac{1}{2}[f(t, x, v) + f(t, x, -v)], \; 0 \le v \le 1,  \\
    j(t, x, v) & = \frac{1}{2\varepsilon}[f(t, x, v) - f(t, x, -v)],  \; 0 \le v \le 1,
\end{aligned}
$$

one can obtain

$$
\left\{
\begin{aligned}
      & \partial_t r + v\partial_x j = \frac{1}{\varepsilon^2}(\rho - r), \\
      & \partial_t j + \frac{1}{\varepsilon^2} v \partial_x r = -\frac{1}{\varepsilon^2} j,
\end{aligned}
\right.
$$

where $\rho = \left \langle r \right \rangle := \int_0^1 r(t, x, v)  \mathrm{d} v$.

---

# Even and odd parity method
Not all traditional AP schemes work for neural networks!

$$
\begin{equation*}
    \left\{
    \begin{aligned}
         & \partial_t r + v\partial_x j = \frac{1}{\varepsilon^2}(\rho - r), \\
         & \partial_t j + \frac{1}{\varepsilon^2} v \partial_x r = -\frac{1}{\varepsilon^2} j.
    \end{aligned}
    \right.
\end{equation*}
$$

So far, we've got the even-odd system, however, it is not AP when applying neural networks for $r$ and $j$.

To make it AP, we next introduce $\rho$ into this system as a bridge between $r$ and $j$.

By integrating over $v$, the first equation gives

$$
\begin{equation*}
    \partial_t \left \langle r \right \rangle  + \int_0^1  v\partial_x j  \mathrm{d} v = \frac{1}{\varepsilon^2} (\rho - \left \langle r \right \rangle),
\end{equation*}
$$

and due to $\rho = \left \langle r \right \rangle$, one can write as follows

$$
\begin{equation*}
    \partial_t \rho + \left \langle v\partial_x j \right \rangle = 0.
\end{equation*}
$$

---

# Even and odd parity method

<br>

The even-odd parity system for the linear trasport equation

$$
\left\{
\begin{aligned}
      & \partial_t r + v\partial_x j = \frac{1}{\varepsilon^2}(\rho - r), \\
      & \partial_t j + \frac{1}{\varepsilon^2} v \partial_x r = -\frac{1}{\varepsilon^2} j, \\
      & \color{violet}{\partial_t \rho + \left \langle v\partial_x j \right \rangle = 0}.
\end{aligned}
\right.
$$

Sending $\varepsilon \to 0$, the above system formally approaches

$$
\begin{equation*}
    \left\{
    \begin{aligned}
        \rho & = r, \\
        v \partial_x r&  = - j, \\
       \color{violet}{\partial_t \rho + \left \langle v\partial_x j \right \rangle} & \color{violet}{= 0}.
    \end{aligned}
    \right.
\end{equation*}
$$

Plugging the first two equations into the third equation gives the diffusion equation $\rho_t - \frac{1}{3} \rho_{xx} = 0.$

---

# APNN v2: based on even and odd parity

More general approach

**The equation of local conservation law $\partial_t \rho +  \left \langle v \partial_x j \right \rangle = 0$ is important in constructing the APNN loss. By coupling these equations of $r, j$ and $\rho$, one can obtain the loss for the diffusion limit equation.**

For solving the linear transport equation by deep neural networks, we need to use DNN to parametrize three functions $\rho(t, x), r(t, x, v)$ and $j(t, x, v)$.

So here three networks are used:

$$
\begin{equation*}
    \rho^{\text{NN}}_{\theta}(t, x) := \exp \left( -\tilde{\rho}^{\text{NN}}_{\theta}(t, x)\right) \approx \rho(t, x),
\end{equation*}
$$

$$
\begin{equation*}
    r^{\text{NN}}_{\theta}(t, x, v) := \exp \left( -
    \frac{1}{2} (\tilde{r}^{\text{NN}}_{\theta}(t, x, v) + \tilde{r}^{\text{NN}}_{\theta}(t, x, -v) ) \right) \approx r(t, x, v),
\end{equation*}
$$

$$
\begin{equation*}
    j^{\text{NN}}_{\theta}(t, x, v) :=
    \tilde{j}^{\text{NN}}_{\theta}(t, x, v) - \tilde{j}^{\text{NN}}_{\theta}(t, x, -v)  \approx j(t, x, v).
\end{equation*}
$$

---

# APNN v2: based on even- and odd- parity

<!-- Then we propose the least square of the residual of the even-odd system as the APNN loss -->

<br>

$$
\begin{aligned}
    \mathcal{R}^{\varepsilon}_{\text{APNN}}
    &= \lambda_1 \int | \varepsilon^2 \partial_t r^{\text{NN}}_{\theta} + \varepsilon^2 v\partial_x j^{\text{NN}}_{\theta} - (\rho^{\text{NN}}_{\theta} - r^{\text{NN}}_{\theta}) |^2 \mathrm{d}{{v}} \mathrm{d}{{x}}  \mathrm{d}{t} \\
    & + \lambda_2\int |\varepsilon^2 \partial_t j^{\text{NN}}_{\theta} + v \partial_x r^{\text{NN}}_{\theta} - (-j^{\text{NN}}_{\theta}) |^2 \mathrm{d}{{v}} \mathrm{d}{{x}}  \mathrm{d}{t}                                        \\
    & + \lambda_3\int | \partial_t \rho^{\text{NN}}_{\theta} +  \left \langle v\partial_x j^{\text{NN}}_{\theta} \right \rangle |^2   \mathrm{d}{{x}}  \mathrm{d}{t}
    \\
    & + \lambda_4\int |\rho^{\text{NN}}_{\theta} -  \left \langle r^{\text{NN}}_{\theta} \right \rangle |^2   \mathrm{d}{{x}}  \mathrm{d}{t}
\end{aligned}
$$

<div mt10 />

<div text-center>

Notice that the constraint <Emphasis>$\rho = \left \langle r \right \rangle$</Emphasis> is also added into the APNN loss.

</div>

---

# Test examples - Case I

Inflow boundary condition ($\varepsilon=10^{-3}$)

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

$$
\begin{equation*}
\begin{aligned}
  f(t, x_L, v) &= 1 \; \text{for} \; v > 0, \\
  f(t, x_R, v) &= 0 \; \text{for} \; v < 0, \\
  \rho_0(x) &= 0, \\
  f_0(x, v) &= 0.
\end{aligned}
\end{equation*}
$$

Note that the function $f$ has a jump at $t = 0$ since $F_L(v) = 1, F_R(v) = 0$ but $f_0(x, v) = 0$.

For better numerical performance,  $\rho^{\text{NN}}_{\theta}$ can be further constructed to automatically satisfies initial condition:

$\rho^{\text{NN}}_{\theta}(t, x) := t \cdot \exp \left( -\tilde{\rho}^{\text{NN}}_{\theta}(t, x)\right) \approx \rho(t, x)$

</div>

<div class="top-1">

Plot of density $\rho$ at $t = 0, 0.05, 0.1$: APNNs (marker) vs. Ref (line).

<img src="/apnn/dirichlet10_sol.png" rounded-lg op75 />

<!-- FCNet with units $[2, 128, 128, 128, 128, 1]$ for $\rho$ and $[3, 256, 256, 256, 256, 1]$ both for $r$ and $j$. Batch size is $512$ in domain, $1024 \times 2$ on boundary and $512$ on initial, the number of quadrature points is $30$. $\lambda_1 = \lambda_2 = \lambda_3 = \lambda_4 = \lambda_6 = 1, \lambda_7 = 10$. -->

Relative $\ell^2$ error of APNNs is $9.87 \times 10^{-3}$.

</div></div>

---

<div>

The numerical performance of enforcement of initial condition and the soft constraint $\rho = \left \langle r \right \rangle$ are discussed as follows.

Plot of density $\rho$ at $t = 0, 0.05, 0.1$: APNNs (marker) vs. Ref (line).

</div>

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

##### &emsp; &emsp; Figure 1:  without the enforcement of initial condition

<img src="/apnn/dirichlet10_sol_2.png" class="h-60 mx-auto rounded-lg" shadow-xl />

Due to the poor approximate of initial and boundary layer effect, it gives wrong solution at time $t = 0, 0.05, 0.1$.

</div><div>

##### &emsp; &emsp; &emsp; &emsp; Figure 2: without the constraint $\rho = \left \langle r \right \rangle$

<img src="/apnn/dirichlet10_sol_1.png" class="h-60 mx-auto rounded-lg" shadow-xl />

The solutions are also wrong at time $t = 0, 0.05, 0.1$, therefore, we consider this constraint into our APNN loss.

</div></div>

---

# Test examples - Case II

UQ problems with inflow condition ($\varepsilon=10^{-5}$)

$$
\begin{equation*}
    \varepsilon \partial_t f + v\partial_x f = \frac{\sigma_S(\bm z)}{\varepsilon}\left ( \frac{1}{2} \int_{-1}^1 f \, dv' - f \right ), \quad x_L < x < x_R, \quad -1 \leq v \leq 1,
\end{equation*}
$$
$$
\begin{equation*}
    \sigma_S(\bm z) = 1 + \frac{1}{10} \prod_{i=1}^{20} \sin(\pi z^i), \;\bm{z} = (z^1, z^2, \cdots, z^{20}) \sim \mathcal{U}([-1, 1]^{20}),
\end{equation*}
$$

<div>

<img src="/apnn/uq_1e-5.png" class="h-60 mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl op75/>
</div>

<!-- ---

# APNN <MarkerCore />

- Linear Transport Equation:

&emsp; &emsp;
boundary and initial condition,
conservation,
symmetry,
parity,
...

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div v-click>

###### Micro-macro decomposition

$$
\begin{equation*}
    \left\{
    \begin{aligned}
        \partial_t \rho  +  \left \langle  v \cdot \nabla_x g  \right \rangle  & = 0, \\
         \\
        \varepsilon^2 \partial_t g + \varepsilon \left ( I - \Pi \right ) \left ( v \cdot \nabla_x g \right ) + v \cdot \nabla_x \rho  & =  - g.
    \end{aligned}
    \right.
\end{equation*}
$$

</div><div v-click>

###### Odd-even Parity

$$
\begin{equation*}
    \left\{
    \begin{aligned}
          \varepsilon^2 \partial_t r + \varepsilon^2 v\partial_x j &= \rho - r, \\
          \varepsilon^2 \partial_t j + v \partial_x r &= - j,                   \\
          \partial_t \rho +  \left \langle v \partial_x j \right \rangle &= 0.

    \end{aligned}
    \right.
\end{equation*}
$$

</div></div> -->

---

# Bhatnagar-Gross-Krook (BGK) equation
<br>

 $$
 \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left ( M(U) - f \right ),  \quad v \in \mathbb{R},
 $$

where $M(U)$ denotes the local Maxwellian distribution function given by
$$
\begin{equation*}
M(U) = \frac{\rho}{(2 \pi T)^{\frac{1}{2}}} \exp \left ( - \frac{|v - u|^2}{2 T}\right ),
\end{equation*}
$$

and $\rho(t, x), u(t, x)$ and $T(t, x)$ are the density, macroscopic velocity and temperature which are related with the moments of $f$:

$$
\begin{equation*}
U :=
 \begin{pmatrix}
 \rho \\
 \rho u \\
\frac{1}{2} \rho |u|^2 + \frac{1}{2} \rho T
\end{pmatrix} = \int_{\mathbb{R}} m  f \mathrm{d} v, \; m =  {\left ( 1, v, \frac{1}{2} v^2\right )}^T.
\end{equation*}
$$

Notice that the Boltzmann-BGK equation is an integro-differential equation with its nonlinear and non-local collision operator.

---

# Density, macroscopic velocity and temperature

- density
  $$
  \rho =
  \int {f}(t,x,v) \mathrm{d} v.
  $$

- velocity
  $$
  u =
  \int v \cdot \frac{f(t,x,v)}{ \int {f}(t,x,v) \mathrm{d} v} \mathrm{d} v = \frac{1}{\rho} \int v f \mathrm{d} v.
  $$

- thermodynamics energy
   $$
  \int \frac{1}{2} (v - u)^2 \cdot \frac{f(t,x,v)}{ \int {f}(t,x,v) \mathrm{d} v} \mathrm{d} v = \frac{1}{\rho} \left [ \frac{1}{2} \int v^2 f \mathrm{d} v -  \frac{1}{2} \rho u^2 \right ],
  $$
  $$
  \Rightarrow \frac{1}{2} \rho T  = \frac{1}{2}\int_{\mathbb{R}} v^2  f \mathrm{d} v - \frac{1}{2} \rho |u|^2 \; (\text{The ideal gas law}).
  $$

---

# Local conservation laws

$$
\partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon} \left ( M(U) - f \right ),  \quad v \in \mathbb{R},
$$

$$
\begin{equation*}
U :=
 \begin{pmatrix}
 \rho \\
 \rho u \\
\frac{1}{2} \rho |u|^2 + \frac{1}{2} \rho T
\end{pmatrix} = \int_{\mathbb{R}} m  f \mathrm{d} v, \; m = {\left ( 1, v, \frac{1}{2} v^2\right )}^T.
\end{equation*}
$$

Due to the properties of conserving mass, momentum and energy of collision operator, one can multiply the BGK equation by $m(v)$ and integrate with respect to $v$ to obtain the equations of local conservation laws

$$
\begin{equation*}
\partial_t \left \langle m f \right \rangle + \nabla_x \cdot \left \langle v m f \right \rangle = 0, \; \text{where} \; \left \langle g \right \rangle =  \int_{\mathbb{R}} g(v) \mathrm{d} v,
\end{equation*}
$$

i.e.,

$$
\begin{equation*}
\partial_t
\begin{pmatrix}
 \rho \\
 \rho u \\
\frac{1}{2} \rho |u|^2 + \frac{1}{2} \rho T
\end{pmatrix}
 + \nabla_x \cdot \left \langle v m f \right \rangle = 0.
\end{equation*}
$$

---

# APNN System

The systems of Boltzmann-BGK model

$$
\begin{equation*}
    \left\{
    \begin{aligned}
         & \varepsilon \left ( \partial_t f + v \partial_x f \right ) = M(U) - f, \\
         &  \partial_t
            \begin{pmatrix}
             \rho \\
             \rho u \\
            \frac{1}{2} \rho |u|^2 + \frac{1}{2} \rho T
            \end{pmatrix}
             + \nabla_x \cdot \left \langle v m f \right \rangle = 0, \\
        & \begin{pmatrix}
             \rho \\
             \rho u \\
            \frac{1}{2} \rho |u|^2 + \frac{1}{2} \rho T
            \end{pmatrix} = \int_{\mathbb{R}} m  f \mathrm{d} v.
    \end{aligned}
    \right.
\end{equation*}
$$

Sending $\varepsilon \to 0$, one have $f = M(U)$ and the local conservation laws becomes compressible Euler equation:

$$
\begin{equation*}
  \partial_t
            \begin{pmatrix}
             \rho \\
             \rho u \\
            \frac{1}{2} \rho |u|^2 + \frac{1}{2} \rho T
            \end{pmatrix}
             + \nabla_x \cdot \left \langle v m M \right \rangle = 0.
\end{equation*}
$$

---

# Boundary and initial conditions

<div mt5 />

The boundary conditions of $\rho, u, T$ are set as constants:

$$
\begin{equation*}
\begin{aligned}
& \rho(t, x_L) = \rho_L, \rho(t, x_R) = \rho_R, \\
& u(t, x_L) = u_L = 0, u(t, x_R) = u_R = 0, \\
& T(t, x_L) = T_L, T(t, x_R) = T_R.
\end{aligned}
\end{equation*}
$$

The initial condition of $f$ is computed by the initial functions $\rho_0(x), u_0(x), T_0(x)$:

$$
\begin{equation*}
f(0, x, v) = \frac{\rho_0}{(2 \pi T_0)^{\frac{1}{2}}} \exp \left ( - \frac{|v - u_0|^2}{2 T_0} \right ) := f_0 (x, v).
\end{equation*}
$$

Here, time $t \in \mathcal{T} := [0, T]$, space point $x \in \mathcal{D} := [x_L, x_R]$ and
 we restrict the range of velocity to a bounded symmetrical domain $\Omega = [-V, V]$ with $V = 10$ since this assumption might be realistic in many studies.

---

# APNN v2 for Boltzmann-BGK equation
<br>

First we parametrize four functions $f(t, x, v), \rho(t, x), u(t, x)$ and $T(t, x)$ with four networks. The time and velocity variable $t, v$ are normalized into $[0, 1]$ and $[-1, 1]$ with scaling $\bar{t} = t / T, \bar{v} = v / V$ and we construct four DNNs as follows:

$$
\begin{equation*}
f^{\text{NN}}_{\theta}(t, x, v) := \ln \left(1 + \exp (\tilde{f}^{\text{NN}}_{\theta}(\bar{t}, x, \bar{v})) \right) > 0,
\end{equation*}
$$

$$
\begin{equation*}
\begin{aligned}
& \rho ^{\text{NN}}_{\theta}(t, x) := \exp \left ( (x-x_L)(x_R - x) \cdot  \tilde{\rho}^{\text{NN}}_{\theta}(\bar{t}, x) + \log(\rho_L) \frac{x_R - x}{x_R - x_L} + \log(\rho_R) \frac{x - x_L}{x_R - x_L}\right ) > 0, \\
& u ^{\text{NN}}_{\theta}(t, x) := \sqrt{(x-x_L)(x_R - x)} \cdot \tilde{u}^{\text{NN}}_{\theta}(\bar{t}, x), \\
& T ^{\text{NN}}_{\theta}(t, x) := \exp \left ( (x-x_L)(x_R - x) \cdot  \tilde{T}^{\text{NN}}_{\theta}(\bar{t}, x) + \log(T_L) \frac{x_R - x}{x_R - x_L} + \log(T_R) \frac{x - x_L}{x_R - x_L}\right ) > 0,
\end{aligned}
\end{equation*}
$$

which $\rho ^{\text{NN}}_{\theta}, u ^{\text{NN}}_{\theta}, T ^{\text{NN}}_{\theta}$ automatically satisfy the boundary conditions. In this problem, to keep $f$ positive, $\ln (1 + \exp(\cdot))$ is applied for constructing $f^{\text{NN}}_{\theta}$. The benefit of this construction is that the values of $f^{\text{NN}}_{\theta}$ and $\tilde{f}^{\text{NN}}_{\theta}$ are at the same level.

---

# APNN loss for Boltzmann-BGK

<div class="overflow-auto h-100">

$$
\begin{aligned}
  \mathcal{R}^{\varepsilon}_{\text{APNN, BGK}}
  &= \frac{\lambda_1}{N_1^{(1)}} \sum_{i=1}^{N_1^{(1)}}
  | \varepsilon (\partial_t f^{\text{NN}}_{\theta}(t_i,x_i,v_i) +  v\nabla_x f^{\text{NN}}_{\theta}(t_i,x_i,v_i)) - \left ( M(U^{\text{NN}}_{\theta}) - f^{\text{NN}}_{\theta} \right )(t_i,x_i,v_i) |^2  \\
  & + \frac{\lambda_2}{N_1^{(2)}} \sum_{i=1}^{N_1^{(2)}} |\partial_t \rho^{\text{NN}}_{\theta}(t_i,x_i) + \nabla_x \left \langle v f^{\text{NN}}_{\theta} \right \rangle (t_i,x_i)|^2  \\
  & + \frac{\lambda_3}{N_1^{(3)}} \sum_{i=1}^{N_1^{(3)}} |\partial_t (\rho^{\text{NN}}_{\theta}(t_i,x_i) u^{\text{NN}}_{\theta}(t_i,x_i)) + \nabla_x \left \langle v^2 f^{\text{NN}}_{\theta} \right \rangle (t_i,x_i) |^2 \\
  & + \frac{\lambda_4}{N_1^{(4)}} \sum_{i=1}^{N_1^{(4)}} |\partial_t \left (\frac{1}{2} \rho^{\text{NN}}_{\theta}(t_i,x_i) (u^{\text{NN}}_{\theta}(t_i,x_i))^2 + \frac{1}{2} \rho^{\text{NN}}_{\theta}(t_i,x_i) T^{\text{NN}}_{\theta}(t_i,x_i)\right ) + \\ & \quad \quad \quad \quad \quad \quad \nabla_x \left \langle \frac{1}{2} v^3 f^{\text{NN}}_{\theta} \right \rangle (t_i,x_i) |^2 \\
  & + \frac{\lambda_5}{N_2^{(1)}} \sum_{i=1}^{N_2^{(1)}} |\rho^{\text{NN}}_{\theta}(t_i,x_i) - \left \langle f^{\text{NN}}_{\theta} \right \rangle (t_i,x_i)|^2 \\
  & + \frac{\lambda_6}{N_2^{(2)}} \sum_{i=1}^{N_2^{(2)}} |\rho^{\text{NN}}_{\theta}(t_i,x_i) u^{\text{NN}}_{\theta}(t_i,x_i) - \left \langle v f^{\text{NN}}_{\theta} \right \rangle (t_i,x_i) |^2  \\
  & + \frac{\lambda_7}{N_2^{(3)}} \sum_{i=1}^{N_2^{(3)}} |\partial_t \left (\frac{1}{2} \rho^{\text{NN}}_{\theta} (u^{\text{NN}}_{\theta})^2 + \frac{1}{2} \rho^{\text{NN}}_{\theta} T^{\text{NN}}_{\theta}\right )(t_i,x_i) - \left \langle \frac{1}{2} v^2 f^{\text{NN}}_{\theta} \right \rangle (t_i,x_i) |^2
\end{aligned}
$$

</div>

---

# Test example

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

######
Initial conditions ($\varepsilon=10^{-3}$)

$$
\begin{equation*}
\begin{aligned}
& \rho_0(x) = 1.5 + (0.625 - 1.5) \cdot \frac{\sin(\pi x) + 1}{2}, \\
& u_0(x) =0, \\
& T_0(x) = 1.5 + (0.75 - 1.5) \cdot \frac{\sin(\pi x) + 1}{2},
\end{aligned}
\end{equation*}
$$

$$
\begin{equation*}
f_0 (x, v) = \frac{\rho_0}{(2 \pi T_0)^{\frac{1}{2}}} \exp \left ( - \frac{|v - u_0|^2}{2 T_0} \right ).
\end{equation*}
$$

The reference solutions are the density, momentum and energy:

$$\rho, \rho u, \frac{1}{2} \rho u^2 + \frac{1}{2} \rho T.$$

</div><div>

######
Setting: ResNet with units $[3, 128, 128, 128, 128, 128, 128, 1]$ for $f$ and $[2, 64, 64, 64, 64, 64, 64, 1]$ both for $\rho, u$ and $T$. Batch size is $512$ in domain, and $256$ on initial, the number of quadrature points is $64$.

$\lambda_9 = 0.1, \lambda_{11} = \lambda_{13} = \lambda_{14} = 10$
and others are set to be $1$.

For $t = 0:$ mean square error of density, momentum and energy are $7.16\text{e-8}, 4.50\text{e-6}, 8.13\text{e-7}$.

For $t = 0.1:$ relative $l^2$ error of density, momentum and energy are $5.43\text{e-3}, 6.35\text{e-3}, 4.47\text{e-2}$.

</div></div>

---

<div class="grid grid-cols-2 gap-4 mt-4">

<div>

######
The integrals of approximate $f$ and approximate density, momentum and energy at time $t = 0$

<img src="/apnn/ex1_sol_f_t0.png" width="400" height="300" class="h-45 float-left ml-5" border="~ violet/50 rounded-lg" shadow-xl op75 />

<img src="/apnn/ex1_sol_macro_t0.png" width="400" height="300" class="h-45 float-left ml-5" border="~ violet/50 rounded-lg" shadow-xl op75 mt4 />

</div><div>

######
The integrals of approximate $f$ and approximate density, momentum and energy at time $t = 0.1$

<img src="/apnn/ex1_sol_f_t1.png" width="400" height="300" class="h-45 float-right ml-5" border="~ violet/50 rounded-lg" shadow-xl op75 />

<img src="/apnn/ex1_sol_macro_t1.png" width="400" height="300" class="h-45 float-right ml-5" border="~ violet/50 rounded-lg" shadow-xl op75 mt4 />

</div></div>

---
layout: center
---

<div flex="~ col gap-4 items-center">
  <div font-600 m--2 text-center>

  # APNN for More General Systems

  </div>
  <div text-2xl op75 text-center>VPFP, Gray-RTE, etc.</div>
</div>

---

# APNNs for Vlasov-Poisson-Fokker-Planck system

<br>

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

VPFP System

$$
\begin{aligned}
  & \partial_t f+v\cdot\nabla_x f-\frac{1}{\varepsilon}\nabla_x \phi \cdot \nabla_v f =\frac{1}{\varepsilon} \nabla_{v} \cdot\left[v f+\nabla_{v} f\right], \\
  & -\nabla_x \phi(t, x) =\rho(t, x)-h(x),
\end{aligned}
$$
where
$$
\rho(t, x)=\int_{\mathbb{R}^N} f(t, x, v) \mathrm{d} v
$$
</div>

<div>
  <img src="/apnn/vpfp.png" class="ml-8 rounded-lg b-1 b-1" border="~ violet/50" shadow-xl op75 />
</div>
</div>

---

# APNNs for GRTE

APNNs for Multiscale Gray Radiative Transfer Equations

<div class="grid grid-cols-2 gap-x-4 mt-4">

<div>

Original system

$$
  \left \{
    \begin{aligned}
      & \frac{\varepsilon^2}{c} \frac{\partial I}{\partial t}+\varepsilon \Omega \cdot \nabla I =\sigma \left(\frac{1}{4 \pi}acT^4-I\right),    \\
      & \varepsilon^2 C_v\frac{\partial T}{\partial t} = \sigma \left(\int_{S^2} I \mathrm{d}\Omega - a c T^4\right), \\
      & \mathcal{B} I = 0, \; \\
      & I(t=0, x, \Omega) = I_0(x, \Omega), \\
      & T(t=0, x) = T_0(x),
    \end{aligned}
  \right.
$$

</div>

<div>

APNN based on even-odd decomposition

$$
\left\{
    \begin{aligned}
         & \frac{\varepsilon^2}{c} \partial_t r + \frac{\varepsilon^2}{\sqrt{\sigma_0}} \cdot \mu \partial_x j = \sigma \left ( \frac{1}{2} a c T^4 - r \right ), \\
         & \frac{\varepsilon^2}{c \sqrt{\sigma_0}} \partial_t j + \mu \partial_x r = -\frac{\sigma}{\sqrt{\sigma_0}} j, \\
         &  \frac{1}{c} \partial_t \rho  + \frac{1}{\sqrt{\sigma_0}} \cdot \left \langle  \mu \partial_x j \right \rangle = - \frac{1}{2} C_v\frac{\partial T}{\partial t}, \\
         & \varepsilon^2 C_v\frac{\partial T}{\partial t} = \sigma \left(2 \rho -acT^4 \right), \\
         & \rho = \left \langle r \right \rangle.
    \end{aligned}
    \right.
$$
</div>
</div>

---


# APNNs for GRTE
Numerics and schema

<br>
<!-- <div class="grid grid-cols-2 gap-x-4 mt-4"> -->

<div grid="~ cols-2 gap-4">

<div>
  <img src="/apnn/grte.png" class="mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl op75 />
</div>

<img src="/apnn/apnn_grte.png" bg-white rounded-lg mt--20 p6 w-full op75  border="~ violet/50" />

</div>

---

# RT-APNNs: ResNet

With 3 key improvements to APNNs

<div mt5 />

<div flex="~ justify-center">
  <img src="/apnn/rt_apnns.png" border="~ violet:50" rounded-lg h-90 op75 />
</div>

---

# RT-APNNs: Pre-training

With 3 key improvements to APNNs

<div flex="~ justify-center">
  <img src="/apnn/pre_train.png" border="~ violet:50" rounded-lg h-85 op75 />
</div>

<div border="~ violet/50 rounded-lg" shadow-l bg-violet:10 text-center mt4 p2 mx22 text-xl>
Improve the <span text-pink7>long time</span> stability
</div>

---

# RT-APNNs: MCMC

With 3 key improvements to APNNs

<div flex="~ justify-center">
  <img src="/apnn/mcmc.png" border="~ violet:50" rounded-lg h-85 op75 />
</div>

<div border="~ violet/50 rounded-lg" shadow-l bg-violet:10 text-center mt4 p2 mx46 text-xl>
Improve the <span text-pink7>Sampling</span> efficiency
</div>

---

# RT-APNNs Result: Marshak Wave

ResNet + Pre-training + MCMC

<div flex="~ justify-center">
  <img src="/apnn/rtapnn_result.png" border="~ violet:50" rounded-lg h-85 op75 />
</div>

<div border="~ violet/50 rounded-lg" shadow-l bg-violet:10 text-center mt4 py2 px0 mx20 text-xl>
Obtain higher accuracy and efficiency, especially for long time simulation
</div>

---
layout: center
---

<div flex="~ col gap-4 items-center">
  <div font-600 m--2 text-center>

  # APNN with Different Architectures

  </div>
  <div text-2xl op75 text-center>APRFMs, APCONs, etc.</div>
</div>

---

# APCONs: Operator Learning
APNN + Modified DeepONets

<div class="grid grid-cols-2 gap-x-4 mt-4">
<div>

$$
  \left\{
      \begin{aligned}
        & \varepsilon \partial_t f + v \cdot \nabla_x f = \frac{1}{\varepsilon}\mathcal{L} f, \; (t, x, v) \in \mathcal{T} \times \mathcal{D} \times {\Omega}, \\
        & \mathcal{B} f(t, x, v) = 0,      \\
        & f(0, x, v) = f_0(x, v).
  \end{aligned}
  \right.
$$

<br>

Our goal is to learn the mapping $\mathcal{G}$ from

$$
\mathcal{G}: f_0(x, v) \to f(t, x, v)
$$

</div>
<div class="text-center">
<br>
<img src="/apnn/cons.png" class="h-80 ml-8 rounded-lg b-1 b-b" border="~ violet/50" shadow-xl p2 bg-white op75 />

Convolutional DeepONets

</div>
</div>

---

# Schematic of APCONs

<div class="grid grid-cols-2 gap-x-2 mt-4">
<div>

APCON based on Micro-macro decomposition

<img src="/apnn/apcon_mm.png" border="~ violet/50" class="h-70 mx-auto rounded-lg b-1 b-b" shadow-xl p2 bg-white op75 />

</div>

<div class="text-center">

APCON based on even-odd decomposition

<img src="/apnn/apcon_eo.png" border="~ violet/50" class="h-70 mx-auto rounded-lg b-1 b-b" shadow-xl p2 bg-white op75 />

</div>
</div>

---

# APCONs Performance

<div class="grid grid-cols-2 gap-x-4 mt-4">
<div>

Accuracy and parameters

<img src="/apnn/apcon_table.png" class="h-70 mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl>

</div>

<div class="text-center">

APCON efficiency

<img src="/apnn/apcon_e.png" class="h-70 mx-auto rounded-lg b-1 b-b" border="~ violet/50" shadow-xl op75>

</div>
</div>

<div border="~ violet/50 rounded-lg" shadow-l bg-violet:10 text-center mt4 p4 text-xl op75>
With <Emphasis>less paramers</Emphasis> than PIDON, <Emphasis><span text-2xl>100x</span> faster</Emphasis> than conventional numerical methods
</div>

---

# Conclusions

- We proposed APNNs framwork for solving multiscale kinetic equations by deep learning:
  - Based on micro-macro decomposition: APNN v1
  - Based on odd-even parity method: APNN v1
  - Based on local conservation laws: APNN v2
  - Combined with ResNet, pre-training and MCMC: RT-APNNs
  - Combined with random feature methods: APRFMs
  - Combined with <Emphasis>operator learning</Emphasis>: APCONs
- APNNs can be applied to various multiscale kinetic equations, such as:
  - Linear transport equations
  - Boltzmann-BGK equation
  - Vlasov-Poisson-Fokker-Planck system
  - Gray radiative transfer equations
  - and more: <Emphasis>full Boltzmann equations</Emphasis>

---

# References

- Keke Wu, Xizhe Xie, Wengu Chen, Han Wang and Zheng Ma, RT-APNN for Solving Gray Radiative Transfer Equations, <em>preprint</em>, 2025
- Jingru Chen, Zheng Ma and Keke Wu, A micro-macro decomposition-based asymptotic-preserving random feature method for multiscale radiative transfer equations, <em>Jounral of Computational Physics</em>, 2025
- Shi Jin, Zheng Ma and Keke Wu, Asymptotic-Preserving Neural Networks for Multiscale Kinetic Equations, <em>Communication in Computational Physics</em>, 2024
- Shi Jin, Zheng Ma and Tian-ai Zhang, Asymptotic-preserving neural networks for multiscale Vlasov-Poisson-Fokker-Planck system in the high-field, <em>Jounral of Scientific Computing</em>, 2024
- Keke Wu, Xiong-bin Yan, Shi Jin and Zheng Ma, Capturing the Diffusive Behavior of the Multiscale Linear Transport Equations by Asymptotic-Preserving Convolutional DeepONets, <em>Computer Methods in Applied Mechanics and Engineering
</em>, 2024
- Shi Jin, Zheng Ma and Keke Wu, Asymptotic-Preserving Neural Networks for Multiscale Time-Dependent Linear Transport Equations, <em>Journal of Scientific Computing</em>, 2023
