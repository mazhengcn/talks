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
title: Deep Learning and Differential Equations
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

# 神经网络方法求解微分方程

主要组成部分

<div flex="~ col gap-2">

  <div v-click flex="~ col" border="~ lime/50 rounded-lg" bg-lime:10>
    <div flex="~ gap-2" items-center bg-lime:10 rounded px4 py2>
      <div text-xl text-lime3>架构</div>
      <div>神经网络用来参数化、逼近哪些函数/映射</div>
    </div>
    <div flex="~ col gap-1" ml2 px2 py1 text-lime1>
      <div>参数化解</div>
      <div>参数化解算子</div>
      <div>参数化从方程的形式到解的映射</div>
    </div>
  </div>

  <div v-click flex="~ col" border="~ amber/50 rounded-lg" bg-amber:10>
    <div flex="~ gap-2 items-center" bg-amber:10 px4 py2 rounded>
      <div text-xl text-amber3>约束</div>
      <div>即微分方程的损失函数</div>
    </div>
    <div flex="~ col gap-1" ml2 px2 py1 text-amber1>
      <div>模型: 方程本身或与其等价的数学、物理形式</div>
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
    <div ml2 px2 py1 text-blue1>
      <div>使用优化方法获得参数，如SGD, Adam, LBFGS等</div>
    </div>
  </div>
</div>

---

# 神经网络方法求解偏微分方程

原始的"PINNs"方法文章

<img src='/pinns-origin.png' alt="original pinn paper" rounded-2xl border="~ lime/50" shadow-lg />

<div v-click border="~ 2 pink7" rounded-lg h10 w44 absolute z-10 left-148.5 top-47.5></div>

---

# 神经网络方法分类

目前使用神经网络求解偏微分方按照架构大概分成两种途径

<div grid="~ cols-2 gap-10" mt10 h-85>
  <div flex="~ col gap-6 items-center" bg-red:10 rounded-lg p4>
    <div text-3xl text-red3>使用网络直接学习方程的解</div>
    <div flex="~ col gap-4 justify-end" px4 text-red1 text-xl>
      <div>PINN (Physical-informed NN)</div>
      <div>Deep Ritz method</div>
      <div>WAN (Weak Adversarial Networks)</div>
      <div>Deep BSDE (Backward Stochastic Differential Equation) method</div>
    </div>
  </div>
  <div flex="~ col gap-6 items-center" bg-blue:10 rounded-lg p4>
    <div text-3xl text-blue3>使用网络学习解算子</div>
    <div flex="~ col gap-4 justify-end" px4 text-blue1 text-xl>
      <div>DeepONet</div>
      <div>FNO</div>
    </div>
  </div>
</div>

---

layout: center
glowOpacity: 0.1

---

<img src="/voidzero-nuxtlabs.png" w-150>

---

layout: center
glowOpacity: 0.1

---

<div flex="~ col gap-2 items-center">
  <img src="/vercel-nuxtlabs.jpg" w-150>
  <div text-2xl mt1>NuxtLabs is joining Vercel</div>
</div>

---

layout: center
glowOpacity: 0.1

---

<div flex="~ col gap-2 items-center">
  <img src="/voidzero-vercel.png" w-140>
</div>

---

layout: center
glowOpacity: 0

---

<img src="/vite-plus.png" w-280 mix-blend-lighten>

---

## layout: center

<h1 important-text-5xl>为什么需要 DevTools？</h1>

---

layout: none
class: h-full

---

<div h-full grid="~ rows-2">

<div p14>

  <h2 text-4xl mb-2 v-click="1">广义的 Developer Tools</h2>

  <div text-2xl ml--3 text-amber v-click="3">「给开发者使用的工具」</div>

  <div mt-6 v-click="4">
    <div flex="~ gap-2 items-center" text-2xl>
      <div i-logos-vitejs w-8 />
      <div i-logos-vitest w-8 />
      <div i-logos-vue w-8 />
      <div i-logos-nuxt-icon w-8 />
      <div i-logos-react w-8 />
      <div i-logos-eslint w-8 />
      <div i-logos-unocss w-8 />
      <div op50>...</div>
    </div>
    <div mt3 op75>
      Vite 本身就是一种开发者工具
    </div>
  </div>

</div>

<div p13 border="t main">

  <h2 text-4xl mb-2 v-click="2">狭义的 DevTools</h2>

  <div text-2xl ml--3 text-lime v-click="5">「为更好的使用工具而提供的工具」</div>

  <div v-click="6" mt-6 flex="~ gap-2 wrap">
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-chrome/> Chrome DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-nuxt-icon w-5 /> Nuxt DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vue w-5 /> Vue DevTools</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-carbon-ibm-watson-discovery/> Vite Plugin Inspect</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-unocss/> UnoCSS Inspector</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-eslint/> ESLint Config Inspector</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><div i-logos-vitest/> Vitest UI</div>
    <div px2 bg-hex-8882 rounded flex="~ gap-1 items-center"><img src="/node-modules-inspector.svg" w-5/> Node Modules Inspector</div>
    <div op50>...</div>
  </div>
</div>
</div>

---

class: text-2xl
glow: right

---

# 好工具原则

<div grid="~ cols-[max-content_min-content_auto] items-center gap-10" py10>
  <div flex="~ gap-2 items-center" text-blue relative v-click>
    <div i-ph-stairs-duotone text-2xl />
    <span>入门门槛</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>容易上手，简单配置，一句话讲明白在做什么</div>

  <div flex="~ gap-2 items-center" text-lime relative v-click>
    <div i-ph-book-bookmark-duotone text-2xl />
    <span>直觉设计</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>符合用户期待和直觉，优秀的用户体验</div>

  <div flex="~ gap-2 items-center" text-amber relative v-click>
    <div i-ph-magnifying-glass-duotone text-2xl />
    <span>信息透明</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>信息透明，可以看到内部的状态和过程，便于调试和优化</div>

  <div flex="~ gap-2 items-center" text-orange relative v-click>
    <div i-ph-puzzle-piece-duotone text-2xl />
    <span>可组合性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>模块互相解耦，易于组合和扩展</div>

  <div flex="~ gap-2 items-center" text-purple relative v-click>
    <div i-ph-plugs-duotone text-2xl />
    <span>可扩展性</span>
  </div>
  <div i-ph-arrow-right-duotone op50 v-click />
  <div v-after>灵活的插件和配置系统</div>
</div>

<div absolute top-66 left-9 w-220 h-17 border="2 amber rounded-xl" bg-amber:10 z--1 v-click />

<!--
除了好
-->

---

## layout: center

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-amber2 text-5xl>Transparency</div>
  <span text-amber>信息透明</span>
</div>

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-unocss />
  UnoCSS Inspector
</h3>

<img src="/devtools/uno-inspector.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect-graph.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-carbon-ibm-watson-discovery  />
  Vite Plugin Inspect
</h3>

<img src="/devtools/vite-inspect-plugin-time.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-vitest />
  Vitest UI
</h3>

<img src="/devtools/vitest-ui.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-components-graph.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-nuxt-icon />
  Nuxt DevTools
</h3>

<img src="/devtools/nuxt-imports.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-files.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-overview.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <div i-logos-eslint />
  ESLint Config Inspector
</h3>

<img src="/devtools/eslint-plugins.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-overview.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-graph.png" w-250 />

---

<h3 flex="~ gap-2 items-center" text-2xl>
  <img src="/node-modules-inspector.svg" w-9 />
  Node Modules Inspector
</h3>

<img src="/devtools/node-inspector-sunbrust.png" w-250 />

---

layout: center
glow: bottom
class: text-center

---

<img src="/vite-devtools.png" w-120 />

---

# 目标愿景

<div grid="~ cols-3 gap-3" py4>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-ph:chart-donut-duotone text-teal mb2 />
    <div>可视化</div>
    <div text-xs op50>展示 Vite/Rolldown 内部状态和过程</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-ph:package-duotone text-orange mb2 />
    <div>构建分析</div>
    <div text-xs op50>提供建议和优化方案</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-ph:plugs-duotone text-yellow mb2 />
    <div>插件分析</div>
    <div text-xs op50>帮助插件作者遵循最佳实践</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-red:15 text-red1>
    <div text-3xl i-ph:bug-beetle-duotone text-red mb2 />
    <div>构建快照</div>
    <div text-xs op50>记录构建过程，可分享和分析的重现</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-purple:15 text-purple1>
    <div text-3xl i-ph:stack-plus-duotone text-purple mb2 />
    <div>Vite Plus</div>
    <div text-xs op50>集成 Vitest UI、Oxlint 可视化等等</div>
  </div>

  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-ph:circles-three-plus-duotone text-blue mb2 />
    <div>DevTools Kit</div>
    <div text-xs op50>统一的 DevTools 架构，让上层框架提供扩展</div>
  </div>
</div>

<!--
分包优化
Tree-shaking 可视化
Barrel-file 检测
CJS/ESM 可视化
-->

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

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/overview.png" w-120 />
<div flex="~ col gap-2 justify-center">

# 构建总览

目前的 Vite DevTools 通过<br>消费 Rolldown 的产物来可视化构建过程和信息<br>

</div>
</div>

---

## class: important-p0

<div flex="~ gap-2 items-center">
<img src="/vd/modules.png" w-140 />
<div flex="~ col gap-2 justify-center">

# 打包文件列表

展示所有参与打包的文件，<br>提供筛选搜索功能。

</div>
</div>

---

## class: important-p0

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/folders.png" w-180 />
<div flex="~ col gap-2 justify-center">

# 打包文件树

</div>
</div>

---

## class: important-p0

<div flex="~ gap-2 items-center" h-full>
<img src="/vd/graph.png" w-180 />
<div flex="~ col gap-2 justify-center">

# 模块关系图

</div>
</div>

---

## class: important-p0

<div flex="~ gap-2 items-center">
<img src="/vd/flow.png" w-100 />
<div flex="~ col gap-2 justify-center">

# 模块转换流程

从文件解析，模块加载，转换，打包，到最后的输出<br>
可以追踪整个流程，找到瓶颈和优化点

</div>
</div>

---

## class: text-center

# 代码转换对比

<img src="/vd/transform.png" w-240 mt--5 />

---

## class: text-center

# 分包信息

<img src="/vd/chunk.png" w-210 mt--5 />

---

## class: text-center !pt15

# 模块依赖关系图

<img src="/vd/imports.png" w-250 />

---

# 性能消耗图表 <span text-lime font-mono bg-lime:10 px2 py1 rounded text-xs translate-y--6 inline-block>WIP</span>

<img src="/vd/chart.png" w-200 />

---

## layout: center

<div flex="~ col gap-2 items-center" relative text-6xl>
  <div text-purple2 text-5xl>Extensibility</div>
  <span text-purple>可扩展性</span>
</div>

---

## clicks: 19

<DevToolsKit />

---

## clicks: 2

<div flex="~ col gap-4 items-center justify-center" text-2xl w-full h-full>
  <img src="/devtools-kit.svg" w-60 op85 transition-all duration-500 :class="$clicks < 1 ? 'translate-y-15 scale-110' : ''"/>
  <div i-ph-arrow-down-duotone text-2xl op50 v-click="1" delay-500 />
  <img src="/vite-devtools.png" w-100 brightness-200 v-click="1" delay-500 />
</div>

---

## layout: center

<div scale-200>
  <Repo name="vitejs/devtools"  />
</div>

---

## class: text-center

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
