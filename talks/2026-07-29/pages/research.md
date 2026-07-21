---
layout: center
---

<SectionDivider badge="第三部分" heading="科学研究与应用" icon="chart-line-data" />

---

# 研究背景：动理学方程

<div class="max-w-5xl mx-auto -mt-1 space-y-3">

<div class="grid grid-cols-4 gap-4">

<div class="card px-1.5 pt-1.5 pb-0 text-center">
  <img src="/reactor.png" class="rounded-lg w-full h-64 object-cover" />
  <p class="text-xs text-muted-foreground pt-0"><span class="font-medium text-foreground-soft">中子输运</span> · 核反应堆</p>
</div>

<div class="card px-1.5 pt-1.5 pb-0 text-center">
  <img src="/icf.png" class="rounded-lg w-full h-64 object-cover" />
  <p class="text-xs text-muted-foreground"><span class="font-medium text-foreground-soft">惯性约束聚变</span> · 清洁能源</p>
</div>

<div class="card px-1.5 pt-1.5 pb-0 text-center">
  <img src="/reentry.png" class="rounded-lg w-full h-64 object-cover" />
  <p class="text-xs text-muted-foreground"><span class="font-medium text-foreground-soft">稀薄气体</span> · 再入动力学</p>
</div>

<div class="card px-1.5 pt-1.5 pb-0 text-center">
  <img src="/rad-therapy.jpg" class="rounded-lg w-full h-64 object-cover" />
  <p class="text-xs text-muted-foreground"><span class="font-medium text-foreground-soft">放射治疗</span> · 精准剂量计算</p>
</div>

</div>

<div class="text-center space-y-1.5 mt-4 rounded-xl bg-neutral-200 dark:bg-neutral-900 ring-1 ring-red-400/30 dark:ring-red-500/20 px-8 py-2.5">

  <div class="text-title-md text-foreground-soft flex justify-center">

  $\partial_t f + v \cdot \nabla_x f = Q(f)$

  <span class="text-body-md text-muted-foreground ml-2"> --- 高维相空间 · 复杂碰撞算子 · 多尺度物理</span>

  </div>
</div>

</div>

---

# 三个系列工作

<div class="grid grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">

<div class="card p-6 space-y-3">

<div class="flex items-center gap-3 mb-1">
  <div class="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/40 flex items-center justify-center shrink-0">
    <div class="i-carbon-ibm-watson-knowledge-studio text-red-500 text-lg"></div>
  </div>
  <h3 class="text-title-lg">DeepRTE</h3>
</div>

<span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-red-50/80 dark:bg-red-950/20 text-red-600 dark:text-red-300 whitespace-nowrap">神经算子结构设计</span>

<p class="text-body-sm text-muted-foreground">辐射输运的高效神经算子基础模型</p>

<div class="grid grid-cols-2 gap-2 pt-1">
  <div class="text-center bg-neutral-100/60 dark:bg-neutral-900/40 rounded-lg py-1.5">
    <p class="text-primary font-bold tabular-nums text-sm">80×</p>
    <p class="text-[11px] text-subtle">推理加速</p>
  </div>
  <div class="text-center bg-neutral-100/60 dark:bg-neutral-900/40 rounded-lg py-1.5">
    <p class="text-primary font-bold tabular-nums text-sm">零样本</p>
    <p class="text-[11px] text-subtle">泛化能力</p>
  </div>
</div>

<p class="text-xs text-subtle">数学算子结构 · Attention机制</p>

</div>

<div class="card p-6 space-y-3">

<div class="flex items-center gap-3 mb-1">
  <div class="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center shrink-0">
    <div class="i-carbon-intent-request-create text-emerald-500 text-lg"></div>
  </div>
  <h3 class="text-title-lg">APNNs</h3>
</div>

<span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-50/80 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-300 whitespace-nowrap">物理约束融合</span>

<p class="text-body-sm text-muted-foreground">渐近保持神经网络框架</p>

<div class="grid grid-cols-2 gap-2 pt-1">
  <div class="text-center bg-neutral-100/60 dark:bg-neutral-900/40 rounded-lg py-1.5">
    <p class="text-primary font-bold tabular-nums text-sm">一致</p>
    <p class="text-[11px] text-subtle">全尺度精度</p>
  </div>
  <div class="text-center bg-neutral-100/60 dark:bg-neutral-900/40 rounded-lg py-1.5">
    <p class="text-primary font-bold tabular-nums text-sm">硬约束</p>
    <p class="text-[11px] text-subtle">物理嵌入架构</p>
  </div>
</div>

<p class="text-xs text-subtle">APNN · AP-CON · RT-APNN · AP-RFM</p>

</div>

<div class="card p-6 space-y-3">

<div class="flex items-center gap-3 mb-1">
  <div class="w-10 h-10 rounded-lg bg-gold-50 dark:bg-gold-950/40 flex items-center justify-center shrink-0">
    <div class="i-carbon-in-progress text-gold-500 text-lg"></div>
  </div>
  <h3 class="text-title-lg">扩散模型反问题</h3>
</div>

<span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gold-50/80 dark:bg-gold-950/20 text-gold-600 dark:text-gold-300 whitespace-nowrap">下游反问题求解</span>

<p class="text-body-sm text-muted-foreground">扩散模型驱动的 PDE 反问题求解</p>

<div class="grid grid-cols-2 gap-2 pt-1">
  <div class="text-center bg-neutral-100/60 dark:bg-neutral-900/40 rounded-lg py-1.5">
    <p class="text-primary font-bold tabular-nums text-sm">W₂</p>
    <p class="text-[11px] text-subtle">鲁棒引导</p>
  </div>
  <div class="text-center bg-neutral-100/60 dark:bg-neutral-900/40 rounded-lg py-1.5">
    <p class="text-primary font-bold tabular-nums text-sm">SOTA</p>
    <p class="text-[11px] text-subtle">OpenFWI</p>
  </div>
</div>

<p class="text-xs text-subtle">ODE-DPS · 无监督 FWI · Wasserstein-2</p>

</div>

</div>

---

# DeepRTE：辐射输运的基础模型

<div class="max-w-5xl mx-auto mt-4 space-y-4">

<div class="card p-4 space-y-2">

<div class="w-10 h-0.5 bg-red-400/50 rounded-full"></div>

<p class="text-body-md text-foreground-soft leading-relaxed">
  针对稳态<strong>辐射输运方程</strong>（RTE），提出基于注意力机制的预训练神经算子 <strong>DeepRTE</strong>，实现高效、可复用的辐射输运求解。
</p>

<div class="text-xs text-muted-foreground">
  应用：中子输运 · 激光聚变 · 放疗 · 光学成像
</div>

</div>

<img src="/deeprte.png" class="rounded-lg w-full" />

</div>

---

# DeepRTE：性能对比

<div class="mt-5" />

目标实现在剂量计算引擎、中子输运模拟的快速替代

<div class="max-w-5xl mx-auto mt-5 space-y-4">

  <DataTable
    :headers="['', '经典 $S_N$ 求解器', 'DeepRTE']"
    :rows="[
      ['推理时间', '$10^2$–$10^3$ 秒', '~2.3 秒（$83.9\\times$ 加速）'],
      ['数学范畴', '方程离散化', '算子映射 $\\mathcal{A}: (I^{-},\\mu,p)\\to I$'],
      ['复用性', '无原生复用能力', '零样本泛化，无需重新训练'],
      ['分发方式', '专用 Fortran/C++ 库', 'HuggingFace + JAX/Flax API'],
    ]"
    :highlight-col="2"
  />

  <p class="text-body-sm text-muted-foreground">
    DeepRTE 是<strong>完全可复现的计算资产</strong> ·
    <a href="https://github.com/mazhengcn/deeprte">GitHub</a> ·
    <a href="https://huggingface.co/mazhengcn/deeprte">HuggingFace</a>
  </p>

  <p class="text-body-sm text-foreground-soft">
    Yekun Zhu, Min Tang, Zheng Ma. <strong>DeepRTE: Pre-trained Attention-based Neural Network for Radiative Transfer</strong>. <em>Comput. Methods Appl. Mech. Eng.</em>, 2026.
  </p>

</div>

---

# APNNs：渐近保持神经网络

<div class="max-w-5xl mx-auto mt-3 space-y-3">

<div class="card p-4 space-y-2">

<div class="w-8 h-0.5 bg-red-400/50 rounded-full"></div>

<div class="text-body-sm text-foreground-soft leading-relaxed">
  物理信息嵌入可<strong>减少对训练数据的依赖</strong>，但多尺度动理学方程存在<strong>刚性问题</strong>——标准 PINNs 对于小尺度严重失效。APNN 通过<strong>微观-宏观分解</strong>嵌入网络架构，保证<strong>全尺度一致精度</strong>：

  $$\mathcal{R}_{\varepsilon}(u_{\theta}) \to 0 \;\Longrightarrow\; u_{\theta} \to u_{\text{true}}, \quad \text{uniformly in } \varepsilon.$$

</div>

</div>

<div class="flex justify-center">
<img src="/apnns.png" class="rounded-lg h-64" />
</div>

</div>

---

# APNNs：发展与应用

<div class="max-w-5xl mx-auto mt-4 space-y-8">

<div class="grid grid-cols-3 gap-4">

<div class="rounded-lg bg-red-50 dark:bg-red-950/30 p-4 space-y-1.5">
  <div class="text-title-sm text-foreground-soft">线性输运方程</div>
  <div class="text-body-sm text-muted-foreground">动理学→扩散极限一致精度</div>
</div>

<div class="rounded-lg bg-gold-50 dark:bg-gold-950/30 p-4 space-y-1.5">
  <div class="text-title-sm text-foreground-soft">非线性 VPFP 系统</div>
  <div class="text-body-sm text-muted-foreground">推广至长程电磁自相互作用的 VPFP 系统</div>
</div>

<div class="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-4 space-y-1.5">
  <div class="text-title-sm text-foreground-soft">算子学习 AP-CON</div>
  <div class="text-body-sm text-muted-foreground">卷积 DeepONets，推理加速 100 倍以上</div>
</div>

<div class="rounded-lg bg-sky-50 dark:bg-sky-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">时序推广 RT-APNN</div>
  <div class="text-body-sm text-muted-foreground">预训练融合物理先验，成功模拟 Marshak 波</div>
</div>

<div class="rounded-lg bg-violet-50 dark:bg-violet-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">AP-RFM：超越神经网络</div>
  <div class="text-body-sm text-muted-foreground">随机特征方法，更高的全尺度精度</div>
</div>

<div class="rounded-lg bg-gold-50 dark:bg-gold-950/30 p-4 space-y-1.5">
  <div class="text-title-sm text-foreground-soft">Gray RTE</div>
  <div class="text-body-sm text-muted-foreground">偶奇分解 APNNs，非线性灰度辐射输运方程</div>
</div>

</div>

<div class="grid grid-cols-2 gap-x-10 gap-y-6 text-xs text-muted-foreground leading-relaxed">
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-300 mr-1.5">Commun. Comput. Phys.</span> Jin, Ma, Wu, '24 · Xie, Chen, Ma, Wang, '26</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-300 mr-1.5">J. Sci. Comput.</span> Jin, Ma, Wu, '23 · Jin, Ma, Zhang, '24</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gold-50 dark:bg-gold-950/20 text-gold-600 dark:text-gold-300 mr-1.5">Comput. Methods Appl. Mech. Eng.</span> Wu, Yan, Jin, Ma, '24</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-300 mr-1.5">J. Comput. Phys.</span> Chen, Ma, Wu, '25</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-violet-50 dark:bg-violet-950/20 text-violet-600 dark:text-violet-300 mr-1.5">CSIAM Trans. Appl. Math.</span> Wu, Xie, Chen, Wang, Ma, '26</div>
</div>

</div>

---

# 扩散模型反问题：方法

<div class="max-w-5xl mx-auto mt-10 space-y-6">

<div class="card p-6 pb-2 space-y-2">

<div class="w-10 h-0.5 bg-red-400/50 rounded-full"></div>

<div class="text-body-md text-foreground-soft leading-relaxed">
  从<strong>间接含噪观测</strong>中恢复未知场，根本困难在于<strong>不适定性</strong>——无穷多解可拟合同一观测。

  经典方法依赖手工正则化（Tikhonov、TV），无法捕捉真实物理场的复杂统计结构。

  我们采用<strong>扩散模型</strong>从高维物理场数据中学习低维流形先验，无需配对数据，提供有原则的数据驱动正则化。
</div>

</div>

<div class="grid grid-cols-3 gap-5">

<div class="rounded-lg bg-red-50 dark:bg-red-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">ODE-DPS</div>
  <div class="w-8 h-0.5 bg-red-400/40 rounded-full"></div>
  <div class="text-body-sm text-muted-foreground leading-relaxed">确定性概率流 ODE 替代随机 SDE，自适应范数修正减少边界误差，更稳定精确</div>
</div>

<div class="rounded-lg bg-gold-50 dark:bg-gold-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">无监督 FWI</div>
  <div class="w-8 h-0.5 bg-gold-400/40 rounded-full"></div>
  <div class="text-body-sm text-muted-foreground leading-relaxed">随机权重网络贝叶斯反演，无需标注训练数据，适配多种地质模型</div>
</div>

<div class="rounded-lg bg-emerald-50 dark:bg-emerald-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">BINO</div>
  <div class="w-8 h-0.5 bg-emerald-400/40 rounded-full"></div>
  <div class="text-body-sm text-muted-foreground leading-relaxed">贝叶斯反演 + 神经算子，高效求解 subdiffusion 问题，显著降低时间成本</div>
</div>

</div>

</div>

---

# 扩散模型反问题应用：FWI

<div class="max-w-5xl mx-auto mt-4 space-y-6">

<div class="card p-6 space-y-2">

<div class="w-10 h-0.5 bg-red-400/50 rounded-full"></div>

<div class="text-body-md text-foreground-soft leading-relaxed">
  全波形反演（FWI）是从地震记录恢复地下波速的典型 PDE 反问题。我们提出<strong>鲁棒物理引导扩散框架</strong>，引入 Wasserstein-2 数据一致性势函数和预条件引导逆向扩散，在 OpenFWI 全部基准上取得<strong>SOTA 重建精度</strong>。
</div>

</div>

<div class="grid grid-cols-2 gap-5">

<div class="rounded-lg bg-sky-50 dark:bg-sky-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">Wasserstein-2 引导</div>
  <div class="w-8 h-0.5 bg-sky-400/40 rounded-full"></div>
  <div class="text-body-sm text-muted-foreground leading-relaxed">逐道 1D W₂ 距离替代 ℓ₂ 失配，对相位偏移和振幅不平衡保持不变，缓解周期跳跃</div>
</div>

<div class="rounded-lg bg-violet-50 dark:bg-violet-950/30 p-5 space-y-2">
  <div class="text-title-sm text-foreground-soft">预条件逆向扩散</div>
  <div class="w-8 h-0.5 bg-violet-400/40 rounded-full"></div>
  <div class="text-body-sm text-muted-foreground leading-relaxed">对角预条件子自适应调整引导强度，早期保守、后期增强，更稳定高效</div>
</div>

</div>

<div class="mt-2 grid grid-cols-2 gap-x-10 gap-y-6 text-xs text-muted-foreground leading-relaxed">
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-300 mr-1.5">J. Sci. Comput.</span> Jiang, Peng, Ma, Yan, ODE-DPS, 2025</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-300 mr-1.5">CSIAM Trans. Appl. Math.</span> Yan, Wu, Xu, Ma, Unsup. FWI, 2025</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-gold-50 dark:bg-gold-950/20 text-gold-600 dark:text-gold-300 mr-1.5">J. Comput. Appl. Math.</span> Yan, Xu, Ma, BINO, 2025</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-300 mr-1.5">arXiv</span> Peng, Jiang, Ma, Yan, Robust FWI, 2026</div>
  <div><span class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-violet-50 dark:bg-violet-950/20 text-violet-600 dark:text-violet-300 mr-1.5">arXiv</span> Min, Ma, DLO-FWI, 2026</div>
</div>

</div>
