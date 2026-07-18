---
layout: cover
highlighter: shiki
css: unocss
colorSchema: auto
transition: none
mdc: true
title: DeepRTE
remoteAssets: true
date: 2026-09-19
---

<div class="space-y-10">
  <div class="space-y-4">
    <div class="w-16 h-1 bg-primary rounded-full mb-6"></div>
    <h1 class="text-display-lg">
      DeepRTE
    </h1>
    <p class="text-xl text-muted-foreground max-w-2xl">
      基于注意力机制的辐射输运预训练神经算子
    </p>
  </div>

  <div class="space-y-1.5">
    <p class="text-2xl font-semibold text-foreground-soft">马 征</p>
    <p class="text-base text-muted-foreground">上海交通大学</p>
    <p class="text-sm text-subtle">唐敏、竺烨锟</p>
  </div>
</div>

<!-- SJTU Official Logo -->
<div class="absolute top-8 right-6">
  <div class="bg-white/80 dark:bg-warm-950/60 backdrop-blur-lg rounded-xl px-2 py-2 border border-warm-300/20 dark:border-warm-700/20 shadow-lg">
    <img src="/images/sjtu-logo-zh.png" class="h-10 object-contain" alt="Shanghai Jiao Tong University" />
  </div>
</div>

<!-- Date -->
<div class="absolute bottom-8 right-6">
  <div class="bg-white/60 dark:bg-warm-950/40 backdrop-blur-lg rounded-lg px-3 py-1.5 border border-warm-300/15 dark:border-warm-700/15">
    <span class="text-xs text-subtle">2026年7月19日</span>
  </div>
</div>

---
layout: center
---

<div class="text-center space-y-6">
  <h2 class="text-display-lg">背景</h2>
  <div class="w-20 h-0.5 bg-coral-400/40 rounded-full mx-auto"></div>
  <p class="text-body-lg text-muted-foreground max-w-2xl mx-auto">
    辐射输运是描述粒子（光子、中子）在介质中传输与相互作用的数学模型
  </p>
</div>

---

# 辐射输运的应用

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="card p-4 space-y-3">
  <div class="w-8 h-0.5 bg-coral-400/50 rounded-full"></div>
  <h3 class="text-title-md">惯性约束聚变</h3>
  <p class="text-body-sm text-muted-foreground">清洁能源产生</p>
  <div class="flex flex-col items-center gap-2">
    <img src="/icf.png" class="rounded-lg shadow h-42 object-contain" />
    <p class="text-xs text-subtle text-center">辐射输运驱动聚变靶丸的内爆动力学</p>
  </div>
</div>

<div class="card p-4 space-y-3">
  <div class="w-8 h-0.5 bg-coral-400/50 rounded-full"></div>
  <h3 class="text-title-md">放射治疗</h3>
  <p class="text-body-sm text-muted-foreground">精准癌症治疗</p>
  <div class="flex flex-col items-center gap-2">
    <img src="/rad-therapy.jpg" class="rounded-lg shadow h-42 object-contain" />
    <p class="text-xs text-subtle text-center">精确的剂量计算以实现有效治疗</p>
  </div>
</div>

</div>

<div class="mt-4">
  <div class="callout-accent text-center">
    <div class="mb-2">
      <span class="text-accent font-semibold">核心挑战：</span>
      <span class="text-primary font-semibold">辐射输运方程</span>的数值模拟
    </div>
    <div class="text-body-sm text-muted-foreground">
      高维相空间 · 复杂碰撞算子 · 多尺度物理
    </div>
  </div>
</div>

---

# 辐射输运方程

<Card variant="callout" size="md" title="控制方程">
  <div class="text-center mb-2 equation-block">

$$
\Omega \cdot \nabla I(r, \Omega) + \mu_t(r) I(r, \Omega) = \frac{\mu_s(r)}{S_{d-1}}\int_{\mathbb{S}^{d-1}} p(\Omega, \Omega^*) I(r, \Omega^*)\,\mathrm{d}\Omega^*
$$

  </div>
  <div class="flex justify-around items-center gap-6 text-body-sm">

  - $I(r,\Omega)$: 相空间 $(r,\Omega)$ 处的辐射强度
  - $\mu_t(r)$: 总截面
  - $\mu_s(r)$: 散射截面
  - $p(\Omega,\Omega^*)$: 散射核

  </div>
</Card>

<Card title="边界条件" variant="default" size="md" class="mt-4 bg-amber-50 dark:bg-amber-950/30">
<div class="text-center equation-block">

$$
I |_{\Gamma_{-}}(r,\Omega) = I_{-}(r,\Omega)
$$

</div>
<div class="text-center text-body-sm text-muted-foreground mt-2">

$$
\Gamma_{\pm} := \{(r,\Omega) \mid r\in\partial D,\;\Omega\in\mathbb{S}^{d-1},\;\mp n(r)\cdot\Omega<0 \}
$$

</div>
</Card>

---

# 数值挑战

<div class="grid grid-cols-3 gap-4 mt-6">

<div class="rounded-lg bg-coral-50 dark:bg-coral-950/30 p-5 space-y-2">
  <h3 class="text-title-md text-foreground-soft">高维</h3>
  <p class="text-body-sm text-muted-foreground">维数灾难</p>
  <ul class="text-body-sm text-muted-foreground space-y-1">
    <li>6维相空间: $(x,y,z,\Omega_x,\Omega_y,\Omega_z)$</li>
    <li>网格点数呈指数增长 $N^6$</li>
    <li>难以承受的内存和存储需求</li>
  </ul>
</div>

<div class="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-5 space-y-2">
  <h3 class="text-title-md text-foreground-soft">复杂碰撞</h3>
  <p class="text-body-sm text-muted-foreground">非线性相互作用</p>
  <ul class="text-body-sm text-muted-foreground space-y-1">
    <li>在离散层面保持守恒律</li>
    <li>处理非线性玻尔兹曼型算子</li>
    <li>避免虚假射线效应和扩散</li>
  </ul>
</div>

<div class="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-5 space-y-2">
  <h3 class="text-title-md text-foreground-soft">多尺度物理</h3>
  <p class="text-body-sm text-muted-foreground">区域耦合</p>
  <ul class="text-body-sm text-muted-foreground space-y-1">
    <li>刚性参数: $\varepsilon = \ell/L \ll 1$</li>
    <li>设计渐近保持格式</li>
    <li>耦合输运 ↔ 扩散转变</li>
  </ul>
</div>

</div>

<div class="mt-4">
  <Card variant="callout" text-center size="lg">
    <div class="font-semibold mb-1">
      <span class="text-accent">为什么使用深度学习？</span>
    </div>
    <div class="text-body-sm text-muted-foreground">
      神经网络有望克服维数灾难并学习复杂的多尺度行为
    </div>
  </Card>
</div>

---

# 传统方法

<div class="grid grid-cols-2 gap-6 mt-6">

<div>
  <Card title="概率方法" subtitle="统计采样" size="md" variant="callout">
    <div class="space-y-3 text-body-sm">
      <div>
        <div class="font-semibold mb-1">蒙特卡洛输运:</div>
        <div class="space-y-0.5 pl-2 text-muted-foreground">
          <div>· MCNP, COG (LLNL), Mercury</div>
        </div>
      </div>
      <div>
        <div class="font-semibold mb-1">直接模拟:</div>
        <div class="space-y-0.5 pl-2 text-muted-foreground">
          <div>· DSMC (Bird, Nanbu), Sparta (ORNL)</div>
        </div>
      </div>
    </div>
  </Card>
</div>

<div>
  <Card title="确定性方法" subtitle="基于网格的离散化" size="md" variant="elevated">
    <div class="space-y-3 text-body-sm">
      <div>
        <div class="font-semibold mb-1">离散纵标法:</div>
        <div class="space-y-0.5 pl-2 text-muted-foreground">
          <div>· Ardra (LLNL), NEWT (ORNL), DORT</div>
        </div>
      </div>
      <div>
        <div class="font-semibold mb-1">谱方法:</div>
        <div class="space-y-0.5 pl-2 text-muted-foreground">
          <div>· 高阶精度，光滑重构</div>
        </div>
      </div>
    </div>
  </Card>
</div>

</div>

<div class="mt-6">
  <div class="grid grid-cols-2 gap-6">
    <div class="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-4 space-y-1">
      <h4 class="text-title-sm text-foreground-soft">优势</h4>
      <List variant="success" :items="['蒙特卡洛：易于并行', '确定性方法：精确守恒', '两者：理论成熟']" />
    </div>
    <div class="rounded-lg bg-coral-50 dark:bg-coral-950/30 p-4 space-y-1">
      <h4 class="text-title-sm text-foreground-soft">局限</h4>
      <List variant="error" :items="['蒙特卡洛：收敛慢 $\\sqrt{N}$', '确定性方法：指数级增长', '两者：难以处理高维问题']" enable-latex="true" />
    </div>
  </div>
</div>

---
layout: center
---

<div class="text-center space-y-6">
  <h2 class="text-display-lg">深度学习方法可能成为新途径</h2>
  <div class="w-20 h-0.5 bg-coral-400/40 rounded-full mx-auto"></div>
  <p class="text-body-lg text-muted-foreground">克服维数灾难</p>
</div>

---

# 用深度学习求解 PDEs

<div class="space-y-3">

<Card title="架构：假设空间" size="md" variant="callout">
  <List variant="primary" :items="['近似解: PINNs, DeepRitz 等', '近似解算子: DeepONet, FNO 等', '近似 PDE (从方程到解): PDEFormer-1/2']" />
</Card>

<Card title="约束：最小化问题的损失函数" size="md" variant="callout">
  <List variant="error" :items="['数据：纯监督或作为先验信息', '模型：需要物理信息 (PDE) (如 PINNs, DeepRitz, DeepGalerkin)', '其他：初值、边界、守恒、对称性等']" />
</Card>

<Card title="优化" size="md" variant="callout-accent">
  <List variant="warning" :items="['在参数空间上最小化损失，通常使用 SGD, Adams, LBFGS 等']" />
</Card>

</div>

---

# DeepRTE

<div class="mt-6"></div>

<div class="grid grid-cols-[1fr_min-content_1fr] items-center gap-12 mt-5 w-full">

<div>
  <Card title="神经算子" subtitle="学习到解的映射" size="lg" variant="callout">
    <div class="space-y-4">
      <div class="text-center equation-block text-sm">

$$
\mathcal{A}_\theta: (I_-; \mu_t, \mu_s, p) \mapsto I
$$

      </div>
      <List variant="primary" :items="['基于注意力的 Transformer', '分辨率无关', '参数到解的映射']" />
    </div>
  </Card>
</div>

<div class="text-5xl text-subtle font-light text-center">+</div>

<div>
  <Card title="预训练" subtitle="为 RTE 定制的数据集" size="lg" variant="callout-accent">
    <div class="space-y-4">
      <div class="text-center">
        <div class="grid grid-cols-3 gap-2 text-body-sm">
          <div class="bg-coral-50 dark:bg-coral-950/30 rounded-lg p-3 text-foreground-soft">生成<br/>数据</div>
          <div class="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-3 text-foreground-soft">训练<br/>算子</div>
          <div class="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-3 text-foreground-soft">迁移<br/>学习</div>
        </div>
      </div>
      <List variant="primary" :items="['Delta 函数数据', '端到端预训练', '零样本泛化']" />
    </div>
  </Card>
</div>

</div>

<div class="mt-6">
  <Card variant="callout" text-center size="lg">
    <div class="font-semibold text-lg">
      <span class="text-accent">关键优势：</span>
      一次训练，解决各类 RTE 问题
    </div>
  </Card>
</div>

---

# 为什么不用 DeepONet?

<p class="text-body-md text-muted-foreground mb-4">DeepONet 在辐射输运问题上存在根本局限</p>

<div class="grid grid-cols-2 gap-6 items-stretch">

<div>
  <Card title="DeepONet 的局限性" size="lg" variant="default" class="h-full bg-coral-50 dark:bg-coral-950/30">
    <div class="space-y-4 mt-8">
      <div>
        <div class="font-semibold mb-0.5 text-primary">固定离散化：</div>
        <div class="text-body-sm text-muted-foreground">需要固定网格点，限制了灵活性</div>
      </div>
      <div>
        <div class="font-semibold mb-0.5 text-primary">参数缩放：</div>
        <div class="text-body-sm text-muted-foreground">网络规模随输入维度增长</div>
      </div>
      <div>
        <div class="font-semibold mb-0.5 text-primary">多输入挑战：</div>
        <div class="text-body-sm text-muted-foreground">难以处理多个输入函数</div>
      </div>
    </div>
  </Card>
</div>

<div>
  <Card title="DeepONet 结构" size="lg" variant="default" class="h-full bg-amber-50 dark:bg-amber-950/30">
    <div class="text-center">
      <img src="/deeponet.png" class="rounded-lg mx-auto" alt="DeepONet"/>
      <div class="text-body-sm text-muted-foreground py-3">Branch + Trunk 架构</div>
    </div>
  </Card>
</div>

</div>

---

# 为什么不用 FNO?

<p class="text-body-md text-muted-foreground mb-4">傅里叶神经算子在辐射输运问题上存在结构局限</p>

<div class="grid grid-cols-2 gap-6 items-stretch">

<div>
  <Card title="FNO 的局限性" size="lg" variant="default" class="h-full bg-coral-50 dark:bg-coral-950/30">
    <div class="space-y-2">
      <div>
        <div class="font-semibold mb-0.5 text-primary">均匀网格要求：</div>
        <div class="text-body-sm text-muted-foreground">输入函数必须在均匀网格上，限制了几何灵活性</div>
      </div>
      <div>
        <div class="font-semibold mb-0.5 text-primary">FFT 计算成本：</div>
        <div class="text-body-sm text-muted-foreground">随着函数维度增加，FFT 运算变慢</div>
      </div>
      <div>
        <div class="font-semibold mb-0.5 text-primary">频域假设：</div>
        <div class="text-body-sm text-muted-foreground">依赖谱衰减，这对 RTE 可能不成立</div>
      </div>
    </div>
  </Card>
</div>

<div>
  <Card title="FNO 结构" size="lg" variant="default" class="h-full bg-amber-50 dark:bg-amber-950/30">
    <div class="text-center space-y-4">
      <img src="/fno.png" class="rounded-lg mx-auto" alt="FNO Architecture"/>
      <div class="text-body-sm text-muted-foreground py-3">基于傅里叶层的神经算子</div>
      <div class="bg-amber-100 dark:bg-amber-900/40 rounded-lg p-2">
        <div class="text-body-sm font-semibold text-accent">RTE 挑战：不规则几何和高维性</div>
      </div>
    </div>
  </Card>
</div>

</div>

---

# 我们的目标

<p class="text-body-md text-muted-foreground mb-4">端到端方式</p>

<Card title="学习解算子" variant="callout">
  <div class="equation-block">

$$
\mathcal{A}: (I_-; \mu_t, \mu_s, p) \mapsto I
$$

  </div>
</Card>

<div class="grid grid-cols-[2fr_auto_1.3fr] items-center gap-12 mt-5">

<Card title="输入" size="md" variant="callout-accent">
  <List variant="warning" enable-latex="true" :items="['$I_{-}(r,\\Omega)$: 入射边界函数', '$\\mu_t(r)$: 总截面', '$\\mu_s(r)$: 散射截面', '$p(\\Omega,\\Omega^*)$: 散射核函数']" />
</Card>

<div class="text-4xl text-subtle font-light text-center">→</div>

<Card title="输出" size="md" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
  <div class="equation-block py-6 mt-9 mb-4 mx-4">

$$
I(r, \Omega)
$$

  </div>
</Card>

</div>

---

# 想法

<p class="text-body-md text-muted-foreground mb-4">格林函数：</p>

<Card title="用神经网络近似解的积分核" size="md" class="definition">
  <div class="equation-block">

$$
I(r, \Omega)\approx \int_{\Gamma_-} G^{\text{NN}}(r, r', \Omega, \Omega'; \mu_t, \mu_s, p) I_-(r',\Omega') \, \mathrm{d}r' \mathrm{d}\Omega'
$$

  </div>

  <div class="text-muted-foreground space-y-2 mt-4">
    <div class="flex gap-4 items-center">
      <span class="w-2 h-2 rounded-full bg-coral-400/70 inline-block"></span>
      <span class="text-body-sm">解 $I$ 关于边界 $I_{-}$ 是<span class="text-primary font-semibold">线性</span>的</span>
    </div>
    <div class="flex gap-4 items-center">
      <span class="w-2 h-2 rounded-full bg-coral-400/70 inline-block"></span>
      <span class="text-body-sm">格林函数 $G^{\text{NN}}$ 关于 $\mu_t$, $\mu_s$ 和 $p$ 是<span class="text-primary font-semibold">非线性</span>的</span>
    </div>
    <div class="flex gap-4 items-center">
      <span class="w-2 h-2 rounded-full bg-coral-400/70 inline-block"></span>
      <span class="text-body-sm">格林函数 $G^{\text{NN}}$ 对 $\mu_t$ 和 $\mu_s$ 的依赖是<span class="text-primary font-semibold">非局部</span>的</span>
    </div>
  </div>
</Card>

<Card variant="callout" class="mt-4 text-center" size="md">
  <span class="text-body-lg font-semibold text-foreground-soft">从格林函数/解算子的"解析"结构入手</span>
</Card>

---

# 解算子的结构

<div class="space-y-2">
  <Card title="稳态 RTE" variant="callout" size="md">
    <div class="flex justify-center items-center">
      <div class="equation-block px-32">

$$
\begin{aligned}
\Omega \cdot \nabla I + \mu_t I & = \mu_s\mathcal{S}I, \\
I|_{\Gamma_{-}} & = I_{-},
\end{aligned}
\quad \text{where} \quad
\mathcal{S}I:=\frac{1}{S_{d-1}}\int_{\mathbb{S}^{d-1}} p(\Omega, \Omega^*) I(r, \Omega^*)\,\mathrm{d}\Omega^*
$$

      </div>
    </div>
  </Card>

  <div class="text-3xl text-subtle text-center my-2">↓</div>

  <div class="grid grid-cols-[1fr_auto_1fr] items-center gap-8">

  <Card title="衰减" size="md" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
    <div class="equation-block">

$$
\begin{aligned}
\Omega \cdot \nabla I + \mu_t I & = 0, \\
I|_{\Gamma_{-}} & = I_{-}.
\end{aligned}
$$

    </div>
  </Card>

  <div class="text-3xl text-subtle font-light text-center">+</div>

  <Card title="散射" size="md" variant="callout-accent">
    <div class="equation-block">

$$
\begin{aligned}
\Omega \cdot \nabla I + \mu_t I & = \mu_s\mathcal{S}I, \\
I|_{\Gamma_{-}} & = 0.
\end{aligned}
$$

    </div>
  </Card>
  </div>
</div>

---

# 解算子的结构

<div class="mt-2"></div>

<div class="grid grid-cols-[max-content_min-content_auto] gap-3 items-center w-full">

<Card title="衰减" size="sm" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
  <div class="equation-block">

$$
\Omega \cdot \nabla I + \mu_t I = 0, \; I|_{\Gamma_{-}} = I_{-}.
$$

  </div>
</Card>

<div class="text-3xl text-subtle font-light text-center">→</div>

<Card title="$\mathcal{J}$ 算子" size="sm" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30" enable-latex="true">
  <div class="equation-block">

$$
I(r,\Omega) = \mathcal{J}I_{-}:=e^{-{\color{#cc785c}\tau(0,s_{-})}}I_{-}(r-s_{-}\Omega,\Omega).
$$

  </div>
</Card>

<Card title="散射" size="sm" variant="callout-accent" enable-latex="true">
  <div class="equation-block">

$$
\Omega \cdot \nabla I + \mu_t I = \mu_s\mathcal{S}I, \; I|_{\Gamma_{-}} = 0.
$$

  </div>
</Card>

<div class="text-3xl text-subtle font-light text-center">→</div>

<Card title="$\mathcal{L}$ 和 $\mathcal{S}$ 算子" size="sm" variant="callout-accent" enable-latex="true">
  <div class="equation-block">

$$
I(r,\Omega) = \mathcal{L}\mathcal{S}I:=\int_0^{s_{-}}e^{-{\color{#cc785c}\tau(0,s)}}\mu_s(r-s\Omega)\mathcal{S}I(r-s\Omega,\Omega)\,\mathrm{d}s
$$

  </div>
</Card>
</div>

<Card title="稳态 RTE 的积分形式" variant="default" size="sm" class="mt-4 bg-coral-50 dark:bg-coral-950/30">
  <div class="flex gap-2 items-center justify-center">
    <div class="equation-block text-base px-4">

$$
I = \mathcal{L}\mathcal{S}I + \mathcal{J}I_{-}
$$

    </div>
    其中 <span class="text-primary font-semibold">光学深度</span> 定义为：
    <div class="equation-block text-primary px-4">

$$
\tau(s_1,s_2):=\int_{s_1}^{s_2}\mu_t(r-s\Omega)\,\mathrm{d}s
$$

    </div>
  </div>
</Card>

---

# DeepRTE: 架构

<p class="text-body-md text-muted-foreground mb-4">概览</p>

<Card title="格林函数也满足" variant="callout" size="md">
  <div class="equation-block text-base">

$$
G(r,r',\Omega,\Omega') = \mathcal{L}\mathcal{S}G(r,r',\Omega,\Omega') + \mathcal{J}\left(\delta_{\{r'\}}(r)\delta(\Omega-\Omega')\right)
$$

  </div>
</Card>

<Card variant="elevated" title="迭代作为神经网络的模块组合" subtitle="受源迭代法启发" size="md" class="mt-5">
  <div class="flex gap-4 items-center justify-center text-base">
    <div>第 $\ell$ 个模块：</div>
    <div class="equation-block">

$$
G^{\ell+1} = \mathcal{L}\mathcal{S}G^{\ell} + G^0
$$

    </div>
    <div>其中</div>
    <div class="equation-block">

$$
G^0 = \mathcal{J}\left(\delta_{\{r'\}}(r)\delta(\Omega-\Omega')\right).
$$

    </div>
  </div>

  <div class="text-base mt-4">
    <List variant="secondary" :items="['$\\mathcal{J}$, $\\mathcal{L}$: 衰减模块（沿特征线的注意力）', '$\\mathcal{S}$: 散射模块']" enable-latex="true" />
  </div>
</Card>

---

# 衰减模块

<p class="text-body-md text-muted-foreground mb-4">$\mathcal{J}$ 和 $\mathcal{L}$</p>

<div class="space-y-4">
  <Card title="$\mathcal{J}$ 算子为例" size="md" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30" enable-latex="true">
    <div class="equation-block">

$$
G^0(r,r',\Omega,\Omega';\mu_t)= \mathcal{J}\left(\delta_{\{r'\}}(r)\delta(\Omega-\Omega')\right)=e^{-{\color{#cc785c}\tau(0,s_{-})}}\left(\delta_{\{r'\}}(r)\delta(\Omega-\Omega')\right)\approx \text{MLP}(r,r,\Omega,\Omega';\tau^{\text{NN}})
$$

    </div>
  </Card>

  <div class="text-3xl text-subtle text-center">↓</div>

  <Card title="光学深度网络" size="md" variant="callout" enable-latex="true">
    <div class="equation-block">

$$
\tau^{\text{NN}}(r,\Omega)\approx\tau(0,s_{-})=\int_0^{s_{-}(r,\Omega)}\mu_t(r-s\Omega)\,\mathrm{d}s
$$

    </div>
  </Card>
</div>

---

# 光学深度网络

<Card title="沿特征线的注意力" variant="callout">
  <div class="space-y-2">
    <div class="equation-block">

$$
\tau^\text{NN} = \text{OpticalDepthNet}\left(r,\Omega; \{r^\text{mesh}_i\}, \{(\mu_t^{\text{mesh}})_i\}\right) = \text{MultiHead}(Q, K, V)
$$

    </div>
    <div class="text-xs flex gap-2 items-center ml-28 text-muted-foreground">
      <div>其中</div>
      <div>

$$
Q = (r, \Omega)\in \mathbb{R}^{1\times 2d}, \quad
K =
\begin{pmatrix}
  \vdots \\
  {(r^\text{mesh}_{\text{local}})}_i \\
  \vdots
\end{pmatrix}\in\mathbb{R}^{N_\text{mesh} \times 2},
\quad
V =
\begin{pmatrix}
  \vdots \\
  {(\mu_t^{\text{mesh}})}_i \\
  \vdots
\end{pmatrix}\in\mathbb{R}^{N_\text{mesh}\times 1}.
$$

      </div>
    </div>
  </div>
</Card>

<Card variant="elevated" title="相对位置编码" class="mt-4">
  <div class="equation-block">

$$
{(r^\text{mesh}_{\text{local}})}_i = \left({(r^\text{mesh}_\text{local})}_i, {(\theta^\text{mesh}_\text{local})}_i\right)
= \left((r-r^{\text{mesh}}_i)\cdot\Omega, \frac{(r-r^{\text{mesh}}_i)}{
\| r-r^{\text{mesh}}_i\|}\cdot \Omega\right)
$$

  </div>
</Card>

---

# 光学深度网络

<div class="space-y-4">
  <div class="flex gap-4 items-center">
    <div class="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-4">
      <div class="equation-block px-4">

$$
\tau(r,\Omega) \approx  \sum_{j}^{N\left(s_{-}(r,\Omega)\right)} w(r, \Omega;s_j)\mu_t(r-s_j \Omega),
$$

      </div>
    </div>
    <div class="text-2xl text-subtle">←</div>
    <div class="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-4">
      <div class="equation-block px-4">

$$
\mu_t(r-s_j \Omega)\approx  \sum_{i}^{N_\text{mesh}} \bm{1}_{\mathcal{C}_{r,\Omega}}(r_i^{\text{mesh}}) c(r-s_j\Omega, r^{\text{mesh}}_i){(\mu_t^\text{mesh})}_i,
$$

      </div>
    </div>
  </div>

  <div class="text-3xl text-subtle text-center">↓</div>

  <div class="rounded-lg bg-coral-50 dark:bg-coral-950/30 p-5">
    <div class="equation-block text-xs px-4">

$$
\begin{aligned}
\tau(r,\Omega) & \approx \sum_j^{N\left(s_{-}(r,\Omega)\right)} w(r,\Omega;s_j)\sum_{i}^{N_\text{mesh}} \bm{1}_\mathcal{C}(r_i^{\text{mesh}})c\left(s_j; (r^\text{mesh}_\text{local})_i, (\theta^\text{mesh}_\text{local})_i\right)(\mu_t^\text{mesh})_i \\
& =\sum_{i}^{N_\text{mesh}} \bm{1}_\mathcal{C}(r^{\text{mesh}}_i)\left(\sum_{j}^{N\left(s_{-}(r,\Omega)\right)} w(r,\Omega;s_j)c\left(s_j; (r^\text{mesh}_\text{local})_i, (\theta^\text{mesh}_\text{local})_i\right)\right)(\mu_t^\text{mesh})_i \\
& =\sum_{i}^{N_\text{mesh}} \underbrace{\bm{1}_\mathcal{C}(r^{\text{mesh}}_i)W(r,\Omega; (r^\text{mesh}_\text{local})_i, (\theta^\text{mesh}_\text{local})_i)}_{\text{attention weights}}\underbrace{(\mu_t^\text{mesh})_i}_{\text{values}},
\end{aligned}
$$

    </div>
  </div>
</div>

---

# 光学深度网络

<Card title="沿特征线的注意力" variant="callout">
  <div class="equation-block">

$$
W\left(r,\Omega; {\left(r^\text{mesh}_\text{local}\right)}_i, {\left(\theta^\text{mesh}_\text{local}\right)}_i\right) \approx \sum_{m}^{d_k} \underbrace{q_m(r,\Omega)}_{\text{query}:\;QW^Q_h}\underbrace{k_m({(r^\text{mesh}_\text{local})}_i, {(\theta^\text{mesh}_\text{local})}_i)}_{\text{keys}:\;KW^K_h},
$$

  </div>
  <div class="flex justify-center mt-5">
    <img src="/figs/mask.png" class="h-55 dark:invert" />
  </div>
</Card>

---

# 衰减模块

<p class="text-body-md text-muted-foreground mb-4">总结</p>

<Card title="衰减模块示意图" variant="elevated" size="lg">
  <div class="bg-white/90 dark:bg-warm-900/60 rounded-xl p-4 mt-5">
    <img src="/figs/attenuation_module.png" class="w-full" />
  </div>
</Card>

---

# 散射模块

<Card title="散射作为迭代" size="md" variant="callout">
  <div class="equation-block">

$$
\begin{aligned}
  & G^{0} = G^{\text{NN}}(r,\Omega,r^{\prime},\Omega^{\prime}), \\
  & G^{\ell}  = \text{ScatteringBlock}_s(G^{\ell-1}) + G^{0}, \quad \ell = 1,\dots,N_{\ell},
\end{aligned}
$$

  </div>
  <div class="bg-white/90 dark:bg-warm-900/60 rounded-xl p-2 mt-4 flex justify-center">
    <img src="/figs/scattering_module.png" class="h-55" />
  </div>
</Card>

---

# 散射块

<Card variant="callout" size="md">
  <div class="equation-block">

$$
\text{ScatteringBlock}_\ell(G) = \text{LayerNorm}\Big(\sigma\Big(W^{\ell} S^{\top} G + b^{\ell}\Big)\Big).
$$

  </div>

  <div class="flex gap-4 items-center justify-center text-base text-muted-foreground">

  $$
  \mathcal{S} G^\ell(r-s' \Omega, \Omega) \approx \sum_{i=1}^{d_{\text{quad}}} w_i p(\Omega, \Omega_i^*) G^{\ell}(r-s' \Omega, \Omega_i^*),
  $$

  $$
  \mathcal{L}\mathcal{S} G^{\ell}(r, \Omega) \approx \sum_{j=1}^{d_{\text{model}}} \tilde{w}_j^{r, \Omega} \mu_s e^{-\tau(0,s'_j)} \mathcal{S} G^\ell(r-s'_j \Omega, \Omega).
  $$

  </div>
  <div class="bg-white/90 dark:bg-warm-900/60 rounded-xl p-2 mt-4 flex justify-center">
    <img src="/figs/scattering_block.png" class="h-40" />
  </div>
</Card>

---

# DeepRTE 架构

<p class="text-body-md text-muted-foreground mb-4">回顾</p>

<div class="grid grid-cols-2 gap-6 mt-4">

<div>
  <Card title="衰减模块" subtitle="输运编码" size="md" variant="callout">
    <List variant="primary" enable-latex="true" :items="['将 $\\mu_t(r)$ 和 $\\mu_s(r)$ 编码为光学深度网络', '沿特征线的注意力']" />
  </Card>
</div>

<div>
  <Card title="散射模块" subtitle="散射编码" size="md" variant="elevated">
    <List variant="secondary" enable-latex="true" :items="['编码 $p(\\Omega,\\Omega^*)$', '捕捉各向异性散射']" />
  </Card>
</div>

</div>

<div class="bg-white/90 dark:bg-warm-900/60 rounded-xl p-2 mt-4 flex justify-center">
  <img src="/figs/architecture.png" class="h-50" />
</div>

---

# 训练策略

<p class="text-body-md text-muted-foreground mb-4">使用类 Delta 函数训练</p>

<Card title="数据集" subtitle="为了具备零样本能力" size="lg" variant="callout-accent">

  <div class="space-y-2">
    <List variant="secondary" :items="['我们构建由 Delta 函数组成的训练数据集']" />
    <div class="text-foreground-soft">

$$
I^\sigma_{-}(r, \Omega; r', \Omega') =
\delta_{\{r'\}}(r)\delta(\Omega-\Omega'), \quad (r,\Omega) \in \Gamma_{-}.
$$

    </div>
    <List variant="secondary" :items="['实际上，我们使用 Delta 函数的平滑版本作为边界函数']" />
    <div class="text-foreground-soft">

$$
\delta_{\{r'\}}^{\sigma}(r) = \frac{1}{\sigma \sqrt{\pi}} \exp\left( -\frac{(r-r')^2}{\sigma^2} \right), \quad
\delta^{\sigma}(\Omega-\Omega') = \frac{1}{\sigma \sqrt{\pi}} \exp\left( -\frac{(\Omega-\Omega')^2}{\sigma^2} \right),
$$

    </div>
  </div>
</Card>

---

# 训练策略

<Card title="定理" size="lg" class="theorem">
  <div class="text-foreground-soft">

  设 $\mathcal{A}$ 和 $\mathcal{A}^{\text{NN}}_{\theta^*}$ 分别为 RTE 和<span class="text-primary font-semibold">学习到的</span> DeepRTE 算子。对于任意 $I_-\in L^2(\Gamma_-)$ 以及其近似 $I_{-, h}^\sigma$。如果存在神经网络参数集 $\theta^*$ 使得：

  </div>
  <div class="equation-block">

$$
\|\mathcal{A}^{\text{NN}}_{\theta^*}I^\sigma_{-,h} - \mathcal{A}I^\sigma_{-,h}\|\leq \varepsilon, \quad \forall I^\sigma_{-,h} \in \text{Delta 函数{\color{#cc785c}测试数据集}},
$$

  </div>

  那么我们有：

  <div class="equation-block">

$$
\begin{aligned}
  \|\mathcal{A}^{\text{NN}}_{\theta^*} I_- - \mathcal{A} I_-\|_{L^2(D\times\mathbb{S}^{d-1})}\leq C\left\{ \sigma^k \|I_-\|_{H^k(\Gamma_-)} + \left(\frac{h}{\sigma}\right)^m \|I_-\|_{H^m(\Gamma_-)} + \varepsilon\right\}.
\end{aligned}
$$

  </div>
</Card>

---

# 训练设置

<div class="grid grid-cols-[max-content_auto] gap-4">

<Card title="RTE 特征" size="md" variant="callout-accent">

<div class="text-body-sm text-foreground-soft overflow-hidden">
<table>
<tr><th class="text-left">特征与形状</th><th class="text-left">描述</th></tr>
<tr><td>phase_coords: $[N_{\text{coords}}, 2d]$</td><td>相空间坐标 $(r,\Omega)$</td></tr>
<tr><td>boundary_coords: $[N_{\text{bc}}, 2d]$</td><td>边界坐标 $(r',\Omega')$</td></tr>
<tr><td>position_coords: $[N_{\text{mesh}}, 2d]$</td><td>网格点 $(r^{\text{mesh}})$</td></tr>
<tr><td>velocity_coords: $[N_{\text{quad}}, 2d]$</td><td>角度求积点 $\Omega^*$</td></tr>
<tr><td>boundary: $[N_{\text{bc}}]$</td><td>边界 $I(r',\Omega')$</td></tr>
<tr><td>mu: $[N_{\text{mesh}}, 2]$</td><td>截面 $\mu_t$ 和 $\mu_s$</td></tr>
<tr><td>scattering_kernel: $[N_{\text{quad}}]$</td><td>散射核 $p(\Omega,\Omega^*)$</td></tr>
</table>
</div>
</Card>

<Card title="训练设置" size="md" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">

  <div class="space-y-2 mt-3">
    <List variant="success" :items="['Adam 优化器', '余弦退火学习率调度']" />
    <List variant="success" :items="['MSE 损失']" />
    <div class="text-foreground-soft ml-2">
      <div class="equation-block">

$$
\mathcal{L}(\theta) = \frac{1}{N}\sum_{n=1}^N \ell(I^\text{NN}_{\theta,n}, I_n),
$$

      </div>

      <div class="equation-block mt-3">

$$
\ell(I^\text{NN}_{\theta}, I)= \frac{1}{N_\text{col}}\sum_{i=1}^{N_{\text{col}}} \left| I^{\text{NN}}_{\theta}(r_i,\Omega_i) - I(r_i, \Omega_i) \right|^2
$$

      </div>
    </div>
  </div>
</Card>
</div>

---

# 实验设置

<div class="mt-2"></div>

令
$$
\Omega=(c,s,\zeta), \quad c =
{\left(1-\zeta^{2}\right)}^{\frac{1}{2}} \cos\theta, \quad s =
{\left(1-\zeta^{2}\right)}^{\frac{1}{2}} \sin\theta, \quad \text{for }|\zeta| \leq 1.
$$

<Card title="降维 2-D RTE" variant="callout" size="md">
  <div class="equation-block">

$$
\left(c\partial_x \tilde{I}(x,y,\zeta,\theta)+s\partial_y
\tilde{I}(x,y,\zeta,\theta)\right)+\mu_t \tilde{I}(x,y,\zeta,\theta)=\frac{\mu_s}{2\pi}\int_{0}^{1}
\int_0^{2\pi} \tilde{p}(\zeta, \theta, \zeta^*,\theta^*) \tilde{I}(x,y,\zeta^*,\theta^*) \mathrm{d}\theta^*\mathrm{d}{\zeta^*},
$$

  </div>
</Card>

<Card title="Henyey-Greenstein (H-G) 散射核" variant="elevated" size="sm" class="mt-4">
  <div class="equation-block">

$$
p(\Omega,\Omega^*) = p(\Omega\cdot\Omega^*) = \frac{1-g^2}{\Bigl(1+g^2-2g\,(cc^*+ss^*+\zeta\zeta^*)\Bigr)^{\frac{3}{2}}}.
$$

  </div>
</Card>

---

# 实验设置

<Card title="训练边界条件" variant="callout" size="sm" class="mt-4">
  <div class="equation-block">

$$
\left \{
\begin{aligned}
  & I_-(x=0,y,c>0,s;x_l^{\prime}=0,
  y_l^{\prime},c_l^{\prime},s_l^{\prime})
  =\delta_{\{y_l^{\prime}\}}^{\sigma_{r}}(y)\delta^{\sigma_{\Omega}}(c - c_l')\delta^{\sigma_{\Omega}}(s - s_l'),
  \\
  & I_-(x=1,y,c<0,s;x_r^{\prime}=1,
  y_r^{\prime},c_r^{\prime},s_r^{\prime})
  =\delta_{\{y_r^{\prime}\}}^{\sigma_{r}}(y)\delta^{\sigma_{\Omega}}(c - c_r')\delta^{\sigma_{\Omega}}(s - s_r'),
  \\
  & I_-(x,y=0,c,s>0;x_b^{\prime},y_b^{\prime}=0, c_b^{\prime},
  s_b^{\prime})
  =\delta_{\{x_b^{\prime}\}}^{\sigma_{r}}(x)\delta^{\sigma_{\Omega}}(c - c_b')\delta^{\sigma_{\Omega}}(s - s_b'),
  \\
  & I_-(x,y=1,c,s<0;x_t^{\prime},y_t^{\prime}=1,c_t^{\prime},
  s_t^{\prime})
  =\delta_{\{x_t^{\prime}\}}^{\sigma_{r}}(x)\delta^{\sigma_{\Omega}}(c - c_t')\delta^{\sigma_{\Omega}}(s - s_t'),
\end{aligned}
\right.
$$

  </div>
</Card>

<div class="grid grid-cols-2 gap-4 items-stretch mt-4">
  <Card title="截面" size="sm" variant="elevated">
    <div class="equation-block">

$$
\begin{aligned}
\mu_t(x,y) &=
\begin{cases}
U_t, \quad \text{其中 } U_t \sim \mathcal{U}(5,7) & \text{若 } (x,y) \in D_\mu \\
10 & \text{若 } (x,y) \notin D_\mu
\end{cases} \\
\mu_s(x,y) &=
\begin{cases}
U_s, \quad \text{其中 } U_s \sim \mathcal{U}(2,4) & \text{若 } (x,y) \in D_\mu \\
5 & \text{若 } (x,y) \notin D_\mu
\end{cases}
\end{aligned}
$$

    </div>
  </Card>

  <Card title="散射核" size="sm" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
    <div class="equation-block">
      <div class="py-3 text-base">

$$
g \sim
\begin{cases}
\mathcal{U}(0,0.2),  & \quad \text{近各向同性} \\
\mathcal{U}(0.4,0.6), & \quad \text{中等各向异性} \\
\mathcal{U}(0.7,0.9), & \quad \text{强各向异性} \\
\end{cases}
$$

      </div>
    </div>
  </Card>
</div>

---

# 数据集参数

<div class="card text-body-sm text-foreground-soft overflow-hidden mt--2">
<table>
<tr><th>类别</th><th>参数</th><th>符号</th><th>值/范围</th></tr>
<tr><td>空间域</td><td>域<br/>子域</td><td>$D$<br/>$D_\mu$</td><td>${[0,1]}^2$<br/>${[0.4,0.6]}^2$</td></tr>
<tr><td>截面</td><td>总<br/>散射</td><td>$\mu_t$<br/>$\mu_s$</td><td>$\mathcal{U}(5,7)$ in $D_\mu$ and $10$ in $D\backslash D_\mu$<br/>$\mathcal{U}(2,4)$ in $D_\mu$ and $5$ in $D\backslash D_\mu$</td></tr>
<tr><td>离散化</td><td>网格点数<br/>角度求积点数</td><td>$N_{\text{mesh}}$<br/>$N_\text{quad}$</td><td>$40$<br/>$24$</td></tr>
<tr><td>边界条件</td><td>波束空间中心坐标<br/>波束角度求积点<br/>波束空间标准差<br/>波束角度标准差</td><td>$y_l', y_r', x_b', x_t'$<br/>$c_l', c_r', c_b', c_t'$<br/>$s_l', s_r', s_b', s_t'$<br/>$\sigma_{r}$<br/>$\sigma_{\Omega}$</td><td>从网格点采样<br/>从求积点采样<br/>$\sqrt{2}\,\mathcal{U}(0.005, 0.02)$<br/>$\sqrt{2}\,\mathcal{U}(0.005, 0.01)$</td></tr>
<tr><td>散射</td><td>不对称参数</td><td>$g$</td><td>$\mathcal{U}(0,0.2)$<br/>$\mathcal{U}(0.4,0.6)$<br/>$\mathcal{U}(0.7,0.9)$</td></tr>
</table>
</div>

---
class: pt-4
---

# 超参数

<div class="grid grid-cols-2 gap-6 mt--2">

<Card title="神经网络" size="md" variant="callout-accent">
  <div class="text-body-sm text-foreground-soft overflow-hidden mt-16">
    <table>
    <tr><th>模块名称</th><th>超参数</th><th>值</th></tr>
    <tr><td>衰减</td><td>$\texttt{num\_layer}$: $N_{\text{mlp}}$<br/>$\texttt{hidden\_dim}$: $d_{\text{mlp}}$<br/>$\texttt{output\_dim}$: $d_{\text{model}}$<br/>$\texttt{num\_head}$: $N_{\text{head}}$<br/>$\texttt{key\_dim}$: $d_k$<br/>$\texttt{value\_dim}$: $d_v$<br/>$\texttt{output\_dim}$: $d_{\tau}$</td><td>$4$<br/>$128$<br/>$16$<br/>$2$<br/>$32$<br/>$32$<br/>$2$</td></tr>
    <tr><td>散射</td><td>$\texttt{num\_block}$: $N_{\ell}$<br/>$\texttt{latent\_dim}$: $d_{\text{model}}$</td><td>$2$<br/>$16$</td></tr>
    </table>
  </div>
</Card>

<Card title="训练" size="md" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
  <div class="text-body-sm text-foreground-soft overflow-hidden">
    <table>
    <tr><th>超参数</th><th>值</th></tr>
    <tr><td>优化器</td><td>Adam</td></tr>
    <tr><td>学习率调度</td><td>Cosine annealing</td></tr>
    <tr><td>初始学习率</td><td>$1\times 10^{-3}$</td></tr>
    <tr><td>批次大小</td><td>$8$</td></tr>
    <tr><td>Epochs</td><td>$5000$</td></tr>
    <tr><td>训练数据数量</td><td>$800$</td></tr>
    <tr><td>验证数据数量</td><td>$200$</td></tr>
    <tr><td>配点数量</td><td>$128$</td></tr>
    </table>
  </div>
</Card>
</div>

---

# 结果：精度

<p class="text-body-md text-muted-foreground mb-4">与训练数据集同分布</p>

<Card title="精度验证" subtitle="类 Delta 函数" size="lg" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30 mt-10">
  <div class="text-foreground-soft overflow-hidden text-body-md">
    <table>
    <tr><th>模型</th><th>参数量</th><th>散射区域</th><th>$g$ 范围</th><th>MSE($\times 10^{-10}$)</th><th>RMSPE($\%$)</th></tr>
    <tr><td>DeepRTE</td><td>$37954$</td><td>近各向同性<br/>中等各向异性<br/>强各向异性</td><td>$(0, 0.2)$<br/>$(0.4,0.6)$<br/>$(0.7,0.9)$</td><td>$5.630$<br/>$5.453$<br/>$7.223$</td><td>$2.827$<br/>$2.759$<br/>$3.181$</td></tr>
    </table>
  </div>
</Card>

---

# 结果

<div class="rounded-xl flex justify-center mt--1">
  <img src="/figs/accuracy.png" class="h-110 rounded-lg bg-white/90 dark:bg-warm-900/60 p-2" />
</div>

---

# 泛化能力

<div class="mb-2 text-center">
  <div class="text-xl text-foreground-soft mb-2">
    超越训练分布的<span class="text-primary font-bold">零样本泛化</span>
  </div>
</div>

<div class="grid grid-cols-2 gap-6 mt-4">

<Card title="分布外测试" subtitle="挑战性场景" size="md" variant="callout-accent">
  <List variant="primary" :items="['不同的边界条件', '不同的截面和散射核']" />
</Card>

<Card title="迁移学习" subtitle="零样本适应" size="md" variant="elevated">
  <List variant="secondary" :items="['在 Delta 边界上预训练', '高精度 (< 5% 误差)']" />
</Card>

</div>

<div class="mt-4">
  <Card title="3 个案例" variant="callout" size="md">
    <div class="flex flex-col items-center gap-2">
      <div class="equation-block">
        <div class="grid grid-cols-3 gap-3 text-body-sm text-center">
          <div>
            <div class="font-semibold mb-1">案例 I</div>
            <div>常数边界条件</div>
          </div>
          <div>
            <div class="font-semibold mb-1">案例 II</div>
            <div>三角函数边界条件</div>
          </div>
          <div>
            <div class="font-semibold mb-1">案例 III</div>
            <div>速度依赖边界条件</div>
          </div>
        </div>
      </div>
      <div class="text-2xl text-subtle text-center my-1">—</div>
      <div class="equation-block text-sm py-0 px-3">

$$
g \sim (0, 0.2), (0.4, 0.6), (0.7, 0.9)
$$

      </div>
    </div>
  </Card>
</div>

---

# 案例 I: 常数边界条件

<p class="text-body-md text-muted-foreground mb-4">无需进一步训练</p>

<Card title="常数边界条件" variant="callout" size="sm">
  <div class="equation-block">

$$
\left \{
  \begin{aligned}
    & I_-(x=0,y,c>0,s) =1,  \\
    & I_-(x=1,y,c<0,s) = 0, \\
    & I_-(x,y=0,c,s>0) =0,  \\
    & I_-(x,y=1,c,s<0) =0,
  \end{aligned}
  \right.
$$

  </div>
</Card>

<div class="rounded-xl flex justify-center h-50 mt-2 bg-warm-100 dark:bg-warm-900">
  <img src="/figs/case-1.png" class="object-contain h-full p-1" />
</div>

---

# 案例 II: 三角函数边界条件

<p class="text-body-md text-muted-foreground mb-4">无需进一步训练</p>

<Card title="三角函数边界条件" variant="elevated" size="sm">
  <div class="flex gap-6 items-center justify-center text-foreground-soft">
    <div class="equation-block">

$$
\left \{
  \begin{aligned}
    & I_-(x=0,y,c>0,s) =a_L\sin{k_L y}+5,   \\
    & I_-(x=1,y,c<0, s) = a_R\sin{k_R y}+5, \\
    & I_-(x,y=0,c,s>0) =a_B\sin{k_B x}+5,   \\
    & I_-(x,y=1,c,s<0) =a_T\sin{k_T x}+5,
  \end{aligned}
  \right.
$$

    </div>
    其中
    <div class="equation-block">

$$
a_L, a_R, a_B, a_T \sim \mathcal{U}(-5,5), \quad
k_L, k_R, k_B, k_T \sim\mathcal{U}(-10, 10).
$$

    </div>
  </div>
</Card>

<div class="rounded-xl flex justify-center h-50 mt-2 bg-warm-100 dark:bg-warm-900">
  <img src="/figs/case-2.png" class="object-contain h-full p-1" />
</div>

---

# 案例 III: 速度依赖边界条件

<p class="text-body-md text-muted-foreground mb-4">无需进一步训练</p>

<Card title="速度依赖边界条件" variant="default" size="sm" class="bg-emerald-50 dark:bg-emerald-950/30">
  <div class="flex gap-6 items-center justify-center text-foreground-soft">
    <div class="equation-block">

$$
\left \{
  \begin{aligned}
    & I_-(x=0,y,c>0,s) =(a_{Lr}\sin{k_{Lr} y}+5)(a_{Lv}\sin{k_{Lv} c}+1)(a_{Lv}\sin{k_{Lv} s}+1), \\
    & I_-(x=1,y,c<0,s) = (a_{Rr}\sin{k_{Rr} y}+5)(a_{Rv}\sin{k_{Rv} c}+1)(a_{Rv}\sin{k_{Rv} s}+1),
    \\
    & I_-(x,y=0,c,s>0) =(a_{Br}\sin{k_{Br} x}+5)(a_{Bv}\sin{k_{Bv} c}+1)(a_{Bv}\sin{k_{Bv} s}+1),
    \\
    & I_-(x,y=1,c,s<0) =(a_{Tr}\sin{k_{Tr} x}+5)(a_{Tv}\sin{k_{Tv} c}+1)(a_{Tv}\sin{k_{Tv} s}+1),
  \end{aligned}
  \right.
$$

    </div>
    其中
    <div class="equation-block">

$$
\begin{aligned}
a_{Lr}, a_{Rr}, a_{Br}, a_{Tr} &\sim \mathcal{U}(-5,5), \\
a_{Lv}, a_{Rv}, a_{Bv}, a_{Tv} &\sim \mathcal{U}(-1,1), \\
k_{Lr}, k_{Rr}, k_{Br}, k_{Tr} &\sim\mathcal{U}(-10, 10),\\
k_{Lv}, k_{Rv}, k_{Bv}, k_{Tv} &\sim\mathcal{U}(-6, 6).
\end{aligned}
$$

    </div>
  </div>
</Card>

<div class="rounded-xl flex justify-center h-50 mt-2 bg-warm-100 dark:bg-warm-900">
  <img src="/figs/case-3.png" class="object-contain h-full p-1" />
</div>

---

# 结果：总结

<div class="grid grid-cols-[1fr_1.2fr] gap-4 mt--2">

<Card title="零样本性能" size="sm" variant="callout-accent">
  <div class="text-body-sm text-foreground-soft overflow-hidden mt-10">
    <table>
    <tr><th></th><th>测试数据集</th><th>MSE</th><th>RMSPE($\%$)</th></tr>
    <tr><td>案例 I</td><td>$g\in(0,0.2)$<br/>$g\in(0.4,0.6)$<br/>$g\in(0.7,0.9)$</td><td>$4.390 \times 10^{-6}$<br/>$5.184 \times 10^{-6}$<br/>$1.474 \times 10^{-5}$</td><td>$1.833$<br/>$1.994$<br/>$3.193$</td></tr>
    <tr><td>案例 II</td><td>$g\in(0,0.2)$<br/>$g\in(0.4,0.6)$<br/>$g\in(0.7,0.9)$</td><td>$4.931 \times 10^{-4}$<br/>$5.798 \times 10^{-4}$<br/>$2.870 \times 10^{-3}$</td><td>$1.653$<br/>$1.827$<br/>$3.572$</td></tr>
    <tr><td>案例 III</td><td>$g\in(0,0.2)$<br/>$g\in(0.4,0.6)$<br/>$g\in(0.7,0.9)$</td><td>$1.065 \times 10^{-3}$<br/>$1.127 \times 10^{-3}$<br/>$1.853 \times 10^{-3}$</td><td>$2.383$<br/>$2.452$<br/>$3.069$</td></tr>
    </table>
  </div>
</Card>

<Card title="网格依赖性" size="sm" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
  <div class="text-body-sm text-foreground-soft overflow-hidden">
    <table>
    <tr><th>测试数据集</th><th>网格分辨率</th><th>MSE</th><th>RMSPE($\%$)</th></tr>
    <tr><td>验证集</td><td>$40\times 40$<br/>$20\times 20$<br/>$10\times 10$</td><td>$5.453\times 10^{-10}$<br/>$8.235\times 10^{-9}$<br/>$9.476\times 10^{-8}$</td><td>$2.759$<br/>$10.006$<br/>$34.346$</td></tr>
    <tr><td>案例 I</td><td>$40\times 40$<br/>$20\times 20$<br/>$10\times 10$</td><td>$4.390 \times 10^{-6}$<br/>$1.876 \times 10^{-5}$<br/>$1.243 \times 10^{-4}$</td><td>$1.833$<br/>$3.758$<br/>$9.276$</td></tr>
    <tr><td>案例 II</td><td>$40\times 40$<br/>$20\times 20$<br/>$10\times 10$</td><td>$4.931 \times 10^{-4}$<br/>$1.792 \times 10^{-2}$<br/>$3.687 \times 10^{-2}$</td><td>$1.653$<br/>$9.952$<br/>$13.798$</td></tr>
    <tr><td>案例 III</td><td>$40\times 40$<br/>$20\times 20$<br/>$10\times 10$</td><td>$1.065 \times 10^{-3}$<br/>$1.175 \times 10^{-2}$<br/>$4.511 \times 10^{-2}$</td><td>$2.383$<br/>$8.132$<br/>$15.477$</td></tr>
    </table>
  </div>
</Card>
</div>

---

# 效率

<div class="mt-6"></div>

<Card title="与经典方法的比较" size="lg" variant="callout-accent">
  <div class="text-body-sm text-foreground-soft overflow-hidden">
    <img src="/figs/efficiency.png" class="w-full" />
  </div>
  <div class="text-center mt-4 text-xl text-foreground-soft">
    即使在多 <span class="text-primary text-2xl font-semibold">GPUs</span> 上也比经典方法快 <span class="text-primary text-2xl font-semibold">10倍</span>
  </div>
</Card>

---

# 与 MIO 的比较

<Card title="与 MIO 的比较" size="lg" variant="callout-accent">
  <div class="text-body-sm text-foreground-soft overflow-hidden">
    <img src="/figs/vs-mio.png" class="w-full" />
  </div>
  <div class="text-center mt-4 text-xl text-foreground-soft">
    参数<span class="text-primary text-2xl font-semibold">更少</span>但泛化<span class="text-primary text-2xl font-semibold">更好</span>
  </div>
</Card>

---

# 结论

<div class="grid grid-cols-2 gap-6 mt-4">

<Card title="当前局限" subtitle="待改进领域" size="lg" variant="callout">
  <List variant="error" :items="['无能量(频率)依赖', '稳态解', '大量预训练数据', '内存限制']" />
</Card>

<Card title="未来方向" subtitle="研究机遇" size="lg" variant="default" class="bg-emerald-50 dark:bg-emerald-950/30">
  <List variant="success" :items="['3D 扩展', '时间依赖问题', '多物理场耦合', '不确定性量化']" />
</Card>

</div>

<div class="mt-4">
  <Card title="广泛影响" variant="callout-accent" size="lg">
    <div class="text-center">
      <div class="mb-1">
        <strong>应用：</strong> ICF 设计、医学成像、天体物理
      </div>
      <div>
        <strong>影响：</strong> 实时模拟与优化
      </div>
    </div>
  </Card>
</div>

---
layout: center
---

<div class="text-center space-y-10">
  <div class="w-16 h-1 bg-primary rounded-full mx-auto mb-6"></div>
  <h1 class="text-display-xl">谢谢！</h1>

  <div class="mt-8 space-y-6">
    <div class="text-xl text-muted-foreground">
      提问与讨论
    </div>

    <div class="grid grid-cols-3 gap-4 mt-12">
      <Card title="论文" variant="callout" size="md" class="text-center">
        <div class="text-body-sm mt-6">
          DeepRTE: Pre-trained attention-based neural network for radiative transfer, <em>Comput. Methods Appl. Mech. Eng.</em>, 2026
        </div>
      </Card>
      <Card title="代码" variant="callout-accent" size="md" class="text-center">
        <div class="text-body-sm mt-6">
          GitHub 上可用<br/>
          <a href="https://github.com/mazhengcn/deeprte" class="text-primary">github.com/mazhengcn/deeprte</a>
        </div>
      </Card>
      <Card title="联系方式" variant="elevated" size="md" class="text-center">
        <div class="text-body-sm mt-6">
          马征<br/>
          上海交通大学
        </div>
      </Card>
    </div>
  </div>

  <div class="mt-10 text-body-md text-muted-foreground">
    可以访问 <a href="https://zheng-home.netlify.app/talks">zheng-home.netlify.app/talks</a> 获取幻灯片
  </div>
</div>
