---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
glowSeed: 4
glow: bottom
lang: zh-CN
title: 深度学习与微分方程
---

# 深度学习与微分方程 {.font-600!} <span text-xl text-lime translate-y--10 bg-lime:10 px2 py2 rounded-lg inline-block>从入门到<span v-mark.orange>精通</span></span>

<br>

<div flex="~ col gap-2">
  <div>马 征</div>
  <div op75>上海交通大学</div>
  <div text-xs op75>2025.07.24</div>
</div>

<img src="/shanghai.svg" abs-br h-70 />

---
class: text-2xl
glow: right
---

# 本课程你将了解到

<div grid="~ cols-[max-content_min-content_auto] items-center gap-10" py10>
  <div text-blue>基本概念</div>
  <div i-ph-arrow-right-duotone op50 />
  <div>微分方程求解基本元素，深度学习方法应用</div>

  <div text-lime>常见算法</div>
  <div i-ph-arrow-right-duotone op50 />
  <div>差分、自动求导，物理神经嵌入方法，算子学习</div>

  <div text-amber>方法特点</div>
  <div i-ph-arrow-right-duotone op50 />
  <div>深度学习方法与传统方法相比的优缺点</div>

  <div text-orange>动手实践</div>
  <div i-ph-arrow-right-duotone op50 />
  <div>能够实现简单的深度学习求解方程的程序</div>

  <div text-purple>展望未来</div>
  <div i-ph-arrow-right-duotone op50 />
  <div>了解深度学习求解微分方程待解决的问题</div>

</div>

---

# 微分方程的应用

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:atom-duotone text-teal mb2 />
    <div>物理学</div>
    <div text-xs op50>流体动力学方程</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:circuitry-duotone text-orange mb2 />
    <div>工程学</div>
    <div text-xs op50>弹性力学方程</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph:flask-duotone text-yellow mb2 />
    <div>化学</div>
    <div text-xs op50>反应扩散方程</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:recycle-duotone text-red mb2 />
    <div>材料科学</div>
    <div text-xs op50>相场模型</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:cloud-snow-duotone text-purple mb2 />
    <div>气候科学</div>
    <div text-xs op50>大气环流模型</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:images-duotone text-blue mb2 />
    <div>图像处理</div>
    <div text-xs op50>热方程</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-green:15 text-green1>
    <div text-3xl i-ph:globe-hemisphere-east-duotone text-green mb2 />
    <div>地质科学</div>
    <div text-xs op50>地震波方程</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:currency-circle-dollar-duotone text-violet mb2 />
    <div>金融学</div>
    <div text-xs op50>Black-Sholes 方程</div>
  </div>
</div>

---
glow: top
---

# 微分方程

<div mt5 text-amber>
  绝大多数方程并不存在解析解，往往需要数值手段进行求解，而神经网络为求解提供了更多方法可能
</div>

<div mt6 />

<div flex="~ gap-10 justify-center">
  <img src="/car-simulation.png" alt="Car Simulation" border="~ lime/50" shadow-xl rounded-lg op75 />
  <img src="/fluid-simulation.png" alt="CFD" border="~ lime/50" shadow-xl rounded-lg op75 />
</div>

---

# 传统数值方法

<br>

<div flex="~ col gap-6" mt10 text-2xl>

  <div text-blue>离散网格用来表示解</div>

  <div text-amber>时间上逐步演化求解</div>

  <div text-purple>求解（非）线性方程组</div>
</div>

<ProsCons
  :pros="[
    '精度高',
    '能够保持物理量的性质'
  ]"
  :cons="[
    '复杂几何需要结构化网格',
    '存在维数灾难',
    '求解效率相对较低'
  ]"
/>

---

# 神经网络方法

<br>

<div flex="~ col gap-6" mt10 text-2xl>

  <div text-blue>神经网络表示解或解算子</div>

  <div text-amber>转化成优化问题求解</div>

  <div text-purple>通过梯度下降等方法求解参数</div>
</div>

<ProsCons
  :pros="[
    '不需要离散网格',
    '直接求解时间上全局的解',
    '更适合解决高维问题',
    '更容易将数据融入求解过程'
  ]"
  :cons="[
    '边界条件难以处理',
    '训练效率难以保证',
    '缺少理论保障'
  ]"
/>

---
glow: right
---

# 神经网络方法求解微分方程 {.mt--2}

<div flex="~ col gap-2" mt--1>

  <div v-click flex="~ col" border="~ lime/50 rounded-lg" bg-lime:10>
    <div flex="~ gap-2" items-center bg-lime:10 rounded px4 py2>
      <div text-xl text-lime3>模型</div>
      <div>神经网络用来参数化、逼近哪些函数/映射</div>
    </div>
    <div flex="~ col gap-2" ml2 px2 py2 text-lime1>
      <div>参数化解</div>
      <div>参数化解算子</div>
      <div>参数化从方程的形式到解的映射</div>
    </div>
  </div>

  <div v-click flex="~ col" border="~ orange/50 rounded-lg" bg-orange:10>
    <div flex="~ gap-2 items-center" bg-orange:10 px4 py2 rounded>
      <div text-xl text-orange3>约束</div>
      <div>即微分方程的损失函数</div>
    </div>
    <div flex="~ col gap-2" ml2 px2 py2 text-orange1>
      <div>物理信息: 方程本身或与其等价的数学、物理形式</div>
      <div>数据: 即监督学习，通常由传统数值方法产生或实验获得</div>
      <div>初值条件、边值条件等</div>
      <div>其它物理约束，如守恒性、对称性、熵条件等等</div>
    </div>
  </div>

  <div v-click flex="~ col" border="~ blue/50 rounded-lg" bg-blue:10>
    <div flex="~ gap-2" items-center bg-blue:10 rounded px4 py2>
      <div text-xl text-blue3>优化</div>
      <div>神经网络的训练通过求解化问题获得参数</div>
    </div>
    <div ml2 px2 py2 text-blue1>
      <div>使用优化方法获得参数，如SGD, Adam, LBFGS等</div>
    </div>
  </div>
</div>


---

# 神经网络方法分类

目前使用神经网络求解偏微分方按照架构大概分成两种途径

<div flex="~ col gap-4" mt5>
  <div flex="~ col gap-2" bg-red:10 rounded-lg p4>
    <div flex="~ gap-2">
      <div text-4xl i-ph:function-duotone text-red />
      <span text-2xl text-red3>神经网络学习方程的解函数</span>
    </div>
    <div flex="~ col gap-2" mt2>
      <div flex="~ gap-1 items-center">
        <div i-ph:dot-duotone text-xl text-red />
        <div text-red1>物理信息嵌入神经网络 (Physical-informed Neural Networks, PINNs)</div>
      </div>
      <div flex="~ gap-1 items-center">
        <div i-ph:dot-duotone text-xl text-red />
        <div text-red1>Deep Ritz method</div>
      </div>
      <div flex="~ gap-1 items-center">
        <div i-ph:dot-duotone text-xl text-red />
        <div text-red1>弱对抗生成网络 (Weak Adversarial Networks, WAN)</div>
      </div>
      <div flex="~ gap-1 items-center">
        <div i-ph:dot-duotone text-xl text-red />
        <div text-red1>深度倒向随机微分方程 (Backward Stochastic Differential Equation, Deep BSDE)</div>
      </div>
    </div>
  </div>
  <div flex="~ col gap-2" bg-blue:10 rounded-lg p4>
    <div flex="~ gap-2">
      <div i-ph:arrow-right-bold text-4xl text-blue />
      <span text-2xl text-blue3>神经网络学习方程的解算子</span>
    </div>
    <div flex="~ col gap-2" mt2>
      <div flex="~ gap-1 items-center">
        <div i-ph:dot-duotone text-xl text-blue />
        <div text-blue1>DeepONet</div>
      </div>
      <div flex="~ gap-1 items-center">
        <div i-ph:dot-duotone text-xl text-blue />
        <div text-blue1>傅里叶神经算子 (Fourer Neural Operator, FNO)</div>
      </div>
    </div>
  </div>
</div>

---
layout: section
---

# 神经网络逼近解函数 {.text-red1!}

---

# 一个常微分方程的例子

牛顿第二定律

<div flex="~ col gap-2">
<div v-click flex="~ col" border="~ lime/50 rounded-lg" bg-lime:10>
  <div bg-lime:10 rounded px4 py2 text-lime3 text-xl>问题描述</div>
  <div text-lime1>

  $$
  F = ma = m\frac{d^2 s}{dt^2}
  $$

  </div>
  <div pl4 text-lime1>

  其中$F(t) = t$. 初始位置为原点，初速度为零开始运动，求$s(t)$.

  </div>
</div>
<div v-click flex="~ col" border="~ amber/50 rounded-lg" bg-amber:15>
  <div bg-amber:15 rounded px4 py2 text-amber text-xl>即求如下常微分方程初值问题的解</div>
  <div text-amber1>

  $$
  m\frac{d^2 s}{dt^2} = F(t) = t, \; s(0) = 0, \; s'(0) = 0.
  $$

  </div>
  <div pl4 text-amber3>
  解析解:

  $$
  s(t) = 0.5 t^2
  $$

  </div>
</div>
</div>

---

# 如何求解？

传统思路

<div grid="~ cols-[max-content_min-content_auto] gap-6 items-center">
  <div flex="~ gap-4 items-center">
    <div i-ph:number-circle-one-duotone text-green text-4xl />
    <div flex="~ col gap-1">
      <div text-xl>模型</div>
      <div op50>
        离散/参数化方程的解
      </div>
    </div>
  </div>
  <div i-ph:arrow-right-duotone text-2xl op50 />
  <div border="~ lime/50" bg-lime:10 rounded-lg px2 text-center>

  $s(t) = c_0 + c_1 t + c_2 t^2$

  </div>

  <div flex="~ gap-4 items-center">
    <div i-ph:number-circle-two-duotone text-green text-4xl />
    <div flex="~ col gap-1">
      <div text-xl>约束</div>
      <div op50>
        方程、初值、边界值及其它物理、数学约束
      </div>
    </div>
  </div>
  <div i-ph:arrow-right-duotone text-2xl op50 />
  <div flex="~ col gap-2" border="~ orange/50" bg-orange:10 text-center rounded-lg>

  $m\dfrac{d^2(c_0 + c_1 t + c_2 t^2)}{dt^2} = t$

  $s(0) = 0, \; s'(0) = 0$

  </div>

  <div flex="~ gap-4 items-center">
    <div i-ph:number-circle-three-duotone text-green text-4xl />
    <div flex="~ col gap-1">
      <div text-xl>求解</div>
      <div op50>
        线性代数方程组、优化器、时间演化方法（龙格-库塔）
      </div>
    </div>
  </div>
  <div i-ph:arrow-right-duotone text-2xl op50 />
  <div flex="~ col items-center" border="~ blue/50" bg-blue:10 rounded-lg>

  $2m c_2 t = t, \; m c_0 = 0, \; m c_1 = 0$

  <div i-ph:arrow-down-duotone op50 />

  $c_2 = 1/m, \; c_0 = 0, \; c_1 = 0$

  </div>
</div>

---

# 更复杂的例子

牛顿第二定律

<div flex="~ col gap-2">
<div v-click flex="~ col" border="~ lime/50 rounded-lg" bg-lime:10>
  <div bg-lime:10 rounded px4 py2 text-lime3 text-xl>问题描述</div>
  <div text-pink4>

  $$
  ma = F(t) = \sin t + 1/t
  $$

  </div>
  <div pl4 text-lime1>

  初始位置为原点，初速度为零开始运动，求$s(t)$.

  </div>
</div>
<div v-click flex="~ col" border="~ amber/50 rounded-lg" bg-amber:15>
  <div bg-amber:15 rounded px4 py2 text-amber text-xl>即求如下常微分方程初值问题的解</div>
  <div text-pink4>

  $$
  m\frac{d^2 s}{dt^2} = \sin t + 1/t, \; s(0) = 0, \; s'(0) = 0.
  $$

  </div>
  <div pl4 text-amber3>
  解析解:

  $$
  s(t) = 0.5 t^2
  $$

  </div>
</div>
</div>

---

# 复杂的例子？

神经网络

<div grid="~ cols-[max-content_min-content_auto] gap-8 items-center">
  <div flex="~ gap-4 items-center">
    <div i-ph:number-circle-one-duotone text-green text-4xl />
    <div flex="~ col gap-1">
      <div text-xl>模型</div>
      <div op50>
        神经网络参数化方程的解
      </div>
    </div>
  </div>
  <div i-ph:arrow-right-duotone text-2xl op50 />
  <div border="~ lime/50" bg-lime:10 rounded-lg px2 text-center>

  $\displaystyle s_\theta(t) = \sum_i a_i\sigma(w_i t + b_i), \; \theta=\{(a_i,w_i,b_i)\}$

  </div>

  <div flex="~ gap-4 items-center">
    <div i-ph:number-circle-two-duotone text-green text-4xl />
    <div flex="~ col gap-1">
      <div text-xl>约束</div>
      <div op50>
        方程、初值转换为损失函数
      </div>
    </div>
  </div>
  <div i-ph:arrow-right-duotone text-2xl op50 />
  <div border="~ orange/50" bg-orange:10 text-center rounded-lg>

  $\displaystyle L(\theta) = \int \|\dfrac{d^2 s_\theta}{dt^2} - \sin t - 1/t\|^2\, \mathrm{d}t + \|s_\theta(0)-0\|^2 + \|s'_\theta(0)- 0\|^2$

  </div>

  <div flex="~ gap-4 items-center">
    <div i-ph:number-circle-three-duotone text-green text-4xl />
    <div flex="~ col gap-1">
      <div text-xl>求解</div>
      <div op50>
        SGD, Adam等基于<br>梯度的优化器
      </div>
    </div>
  </div>
  <div i-ph:arrow-right-duotone text-2xl op50 />
  <div flex="~ col items-center" border="~ blue/50" bg-blue:10 rounded-lg text-center>

  $\min_{\theta} L(\theta)$

  <div i-ph:arrow-down-duotone op50 />

  $\theta^{k+1} = \theta^k - \eta \nabla_\theta L(\theta)$

  </div>
</div>

---

# 物理信息嵌入神经网络 (PINNs)

核心思想：应用微分方程形式来设计神经网络的损失函数

<div flex="~ col gap-6 items-center">
<div flex="~ col" border="~ lime/50 rounded-lg" bg-lime:10 w-full>
  <div bg-lime:10 rounded px4 py2 text-lime3 text-xl>目标方程</div>
  <div text-lime1>

  $$
  \mathcal{L} u = f, \; x\in\Omega,
  $$

  $$
  \mathcal{B} u = g, \; x\in\partial\Omega.
  $$

  </div>
</div>

<div i-ph:arrow-down-duotone  text-2xl op50 />

<div v-click.hide flex="~ col" border="~ amber/50 rounded-lg" bg-amber:10 w-full>
  <div bg-amber:10 rounded px4 py2 text-amber3 text-xl>转换成如下的损失函数</div>
  <div text-amber1>

  $$
  \min_\theta L(\theta) = \int_\Omega \|\mathcal{L}u - f\|^2\,\mathrm{d}x + \int_{\partial\Omega} \|\mathcal{B}u - g\|^2\,\mathrm{d}x
  $$

  </div>
</div>

<div v-after flex="~ col" border="~ amber/50 rounded-lg" bg-amber:10 w-full mt--38.5>
  <div bg-amber:10 rounded px4 py2 text-amber3 text-xl>积分采用Monte Carlo离散进行近似</div>
  <div text-amber1>

  $$
  \min_\theta L(\theta) \approx \frac{\lambda_1}{N_1}\sum_{i=1}^{N_1} |\mathcal{L}u(x_i) - f(x_i)|^2 + \frac{\lambda_2}{N_2}\sum_{j=1}^{N_2} |\mathcal{B}u(x_j) - g(x_j)|^2
  $$

  </div>
</div>
</div>

---

# 学习方程解

PINNs的特点

<br>

<div flex="~ col gap-6" mt10 text-2xl>
  <div text-blue>神经网络参数化方程的解</div>
  <div text-amber>网络输入是时空域上的采样点，不需要网格</div>
</div>

<ProsCons
  :pros="[
    '实施简单',
    '对一般方程形式都成立'
  ]"
  :cons="[
    '网络训练比较慢',
    '边界条件难以处理',
    '对一般方程没有收敛性保证'
  ]"
/>

---

# PINNs求解流程

<div grid="~ cols-[1fr_min-content_3fr] gap-6 items-center" mt-30>
  <div text-orange1 text-base>

  $$
  \frac{\partial u}{\partial t} = \lambda^2 \frac{\partial^2 u}{\partial t^2}
  $$

  $$
  u(t, x) = g_D(x, t), \quad x\in \Gamma_D\subset\partial\Omega
  $$

  $$
  \frac{\partial u}{\partial n}(t, x) = g_R(u, x, t), \quad x\in \Gamma_R\subset\partial\Omega
  $$

  </div>
  <div i-ph:arrow-right-duotone text-2xl op50/>
  <img src="/pinns-workflow.png" alt="pinns workflow" rounded-lg op75 />
</div>

---

# 残差优化历史

原始的"PINNs"方法文章

<div border="~ lime/50" shadow-lg overflow="~ scroll" rounded-2xl h-110>
  <img src='/pinns-origin.png' alt="original pinn paper" />
</div>

<div v-click.hide border="~ 2 orange" rounded-lg h10 w44 absolute z-10 left-148.5 top-47.5></div>

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-amber2 text-5xl>Transparency</div>
  <span text-amber>信息透明</span>
</div>

---
class: p0
glow: bottom
---

<div class="grid grid-cols-2 gap-4 h-full">

  <div ma flex="~ col gap-2 items-center">
    <img src="/vite-devtools.png" w-80 />
    <div text-orange text-sm bg-orange:10 px2 rounded>Working in progress</div>
  </div>

  <div border="l main" h-full py10 flex="~ col gap-8 justify-center">
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>模块分析</div>
        <div op50>
          展示每个插件对每个文件的 load 和 transform 结果
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:check-circle text-green text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>模块依赖和分包可视化</div>
        <div op50>
          展示每个文件的依赖关系和分包的组成
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:build-circle text-orange text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>打包分析</div>
        <div op50>
          展示打包的結果，包括分包尺寸、优化建议等
        </div>
      </div>
    </div>
    <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>开发模式</div>
        <div op50>
          展示开发模式下的模块分析和依赖关系
        </div>
      </div>
    </div>
     <div flex="~ gap-2" relative v-click>
      <div i-material-symbols:lightbulb-circle text-gray text-4xl ml--4.5 />
      <div flex="~ col gap-1">
        <div text-xl>DevTools Kit</div>
        <div op50>
          可扩展的 DevTools 架构
        </div>
      </div>
    </div>
  </div>
</div>

---
layout: center
---

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-purple2 text-5xl>Extensibility</div>
  <span text-purple>可扩展性</span>
</div>

---

## clicks: 19

<DevToolsKit />

---
clicks: 2
---

<div flex="~ col gap-4 items-center justify-center" text-2xl w-full h-full>
  <img src="/devtools-kit.svg" w-60 op85 transition-all duration-500 :class="$clicks < 1 ? 'translate-y-15 scale-110' : ''"/>
  <div i-ph-arrow-down-duotone text-2xl op50 v-click="1" delay-500 />
  <img src="/vite-devtools.png" w-100 brightness-200 v-click="1" delay-500 />
</div>

---
class: text-center
---

<div text-4xl mt-20 mb-12>致谢</div>

<div flex="~ gap-18 items-center justify-center" >

  <div flex="~ col items-center" v-click>
    <img src="https://avatars.githubusercontent.com/u/49502170?v=4" rounded-full w-30 mb4 />
    <div>Yunfei He</div>
    <div font-mono text-sm op50>@hyf0</div>
  </div>

  <div flex="~ col items-center" v-click>
    <img src="https://avatars.githubusercontent.com/u/22515951?v=4" rounded-full w-30 mb4 />
    <div>Arlo</div>
    <div font-mono text-sm op50>@webfansplz</div>
  </div>

  <div flex="~ col items-center" v-click>
    <div rounded-full w-30 h-30 bg-gray:10 flex mb4>
      <div i-ph:user-duotone text-4em ma op50 />
    </div>
    <div>加入我们？</div>
    <div font-mono text-sm op50>@you?</div>
  </div>
</div>

---

layout: intro
class: text-center pb-5
glowX: 50
glowY: 120

---

<h1 font-serif important-text-5em>感 谢</h1>

幻灯片在 [antfu.me](https://antfu.me)
