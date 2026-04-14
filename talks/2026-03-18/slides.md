---
layout: cover
highlighter: shiki
css: unocss
transition: fade
mdc: true
title: OpenClaw v1.0.0-zh
remoteAssets: true
date: 2026-03-18
export:
  dark: true
seoMeta:
  ogImage: auto
---

# 🦞 OpenClaw {.emphasis-primary.text-4xl}

<div text-2xl class="text-on-surface-variant">运行在你自己设备上的个人 AI 助手</div>

<div mt15 />

<div flex="~ col gap-2">
  <div text-left text-2xl text-on-surface>马 征</div>
  <div text-left text-sm class="text-secondary">上海交通大学</div>
  <div text-left text-sm class="text-on-surface-variant">基于 openclaw/openclaw · MIT License</div>
</div>

<!-- SJTU Official Logo -->
<div class="absolute top-8 right-6 group">
  <div class="relative bg-gradient-to-br from-white/40 to-white/25 dark:from-neutral-900/30 dark:to-neutral-800/20 backdrop-blur-lg rounded-xl px-2 py-2 border border-sjtu-200/15 dark:border-sjtu-400/8 shadow-lg shadow-sjtu-500/8 dark:shadow-sjtu-400/5 hover:bg-white/50 dark:hover:bg-neutral-900/40 hover:border-sjtu-300/20 dark:hover:border-sjtu-400/12 transition-all duration-300">
    <img src="/images/sjtu-logo-zh.png" class="h-10 object-contain transition-all duration-300 emphasis-primary-logo" alt="Shanghai Jiao Tong University" />
  </div>
</div>

<style>
.emphasis-primary-logo {
  filter: brightness(0) saturate(100%) invert(36%) sepia(93%) saturate(4151%) hue-rotate(216deg) brightness(99%) contrast(92%);
}
.dark .emphasis-primary-logo {
  filter: brightness(0) saturate(100%) invert(58%) sepia(55%) saturate(2750%) hue-rotate(190deg) brightness(102%) contrast(95%);
}
</style>

<!-- Date -->
<div class="absolute bottom-8 right-6 group">
  <div class="relative bg-gradient-to-br from-white/40 to-white/25 dark:from-neutral-900/30 dark:to-neutral-800/20 backdrop-blur-lg rounded-lg px-3 py-1.5 border border-sjtu-200/15 dark:border-sjtu-400/8 shadow-lg shadow-sjtu-500/8 dark:shadow-sjtu-400/5 hover:bg-white/50 dark:hover:bg-neutral-900/40 hover:border-sjtu-300/20 dark:hover:border-sjtu-400/12 transition-all duration-300">
    <div text-xs class="text-on-surface-muted/80">2026年3月18日</div>
  </div>
</div>

---

# 什么是 OpenClaw？

<div class="mb-4">
  <GlassCard variant="primary" size="md">
    <div class="text-center text-xl font-semibold mb-2">
      <span class="emphasis-primary">🦞 OpenClaw</span> 是一个运行在你自己设备上的<span class="emphasis-tech">个人 AI 助手</span>
    </div>
    <div class="text-center text-base text-on-surface-variant">
      它通过你已经在使用的渠道来回答你，本地优先，快速，7×24 小时在线
    </div>
  </GlassCard>
</div>

<div grid="~ cols-3 gap-4" mt-4>

<GlassCard
  title="本地优先"
  subtitle="数据自主可控"
  variant="primary"
  icon="i-ph-house-duotone"
  size="md"
  :items="[
    '运行在你自己的设备上',
    '不依赖第三方托管',
    '数据绝不离开你的掌控'
  ]"
/>

<GlassCard
  title="多渠道接入"
  subtitle="无缝融入工作流"
  variant="secondary"
  icon="i-ph-chat-circle-dots-duotone"
  size="md"
  :items="[
    'WhatsApp / Telegram / Slack',
    'Discord / iMessage / Signal',
    '20+ 主流消息平台'
  ]"
/>

<GlassCard
  title="开源社区"
  subtitle="321k ⭐ · 1238 贡献者"
  variant="tech"
  icon="i-ph-star-duotone"
  size="md"
  :items="[
    'MIT 开源协议',
    '活跃社区驱动开发',
    '支持插件技能扩展'
  ]"
/>

</div>

<!--
OpenClaw 是一个个人AI助手，最大特点是本地优先，用户完全掌控自己的数据。
它能接入20多个主流通讯平台，社区非常活跃，有321k颗星。
-->

---

# 核心架构

<div class="mb-3">
  <GlassCard variant="primary" size="sm" title="Gateway 控制平面">
    <div class="text-sm text-on-surface-variant text-center">
      所有渠道、会话、工具与事件的统一控制平面 · WebSocket: <code class="text-xs">ws://127.0.0.1:18789</code>
    </div>
  </GlassCard>
</div>

<div grid="~ cols-2 gap-4">

<div>
<GlassCard
  title="架构层次"
  subtitle="清晰的分层设计"
  variant="primary"
  icon="i-ph-stack-duotone"
  size="md"
>
  <div class="space-y-2 text-sm font-mono">
    <div class="bg-sjtu-500/10 rounded px-3 py-1.5 text-center">📱 消息渠道层</div>
    <div class="text-center text-xs text-on-surface-variant">WhatsApp · Telegram · Slack · Discord · …</div>
    <div class="bg-sjtu-500/20 rounded px-3 py-1.5 text-center">⚙️ Gateway (控制平面)</div>
    <div class="text-center text-xs text-on-surface-variant">会话管理 · 路由 · 工具 · 事件</div>
    <div class="grid grid-cols-2 gap-1">
      <div class="bg-sjtu-500/30 rounded px-2 py-1 text-center text-xs">🤖 Pi Agent</div>
      <div class="bg-sjtu-500/30 rounded px-2 py-1 text-center text-xs">🖥️ CLI</div>
      <div class="bg-sjtu-500/30 rounded px-2 py-1 text-center text-xs">🌐 WebChat</div>
      <div class="bg-sjtu-500/30 rounded px-2 py-1 text-center text-xs">📱 移动端节点</div>
    </div>
  </div>
</GlassCard>
</div>

<div>
<GlassCard
  title="核心子系统"
  subtitle="高度模块化"
  variant="secondary"
  icon="i-ph-circles-four-duotone"
  size="md"
  :items="[
    'Gateway WS 控制网络 — 统一通信总线',
    'Pi Agent 运行时 — RPC 模式工具流',
    '会话模型 — main/群组/激活模式',
    '媒体管道 — 图像/音频/视频处理',
    'Tailscale 暴露 — 安全远程访问',
    '浏览器控制 — CDP 自动化'
  ]"
/>
</div>

</div>

<!--
Gateway是整个系统的核心，是一个WebSocket控制平面。
所有的渠道连接、AI Agent、CLI工具都通过这个Gateway统一管理。
-->

---

# 多渠道支持

<div class="mb-3">
  <GlassCard variant="gradient-primary" text-center size="sm">
    <span class="font-semibold">20+ 主流消息平台，一个 Gateway 统一管理</span>
  </GlassCard>
</div>

<div grid="~ cols-3 gap-4">

<GlassCard
  title="即时通讯"
  subtitle="最常用平台"
  variant="primary"
  icon="i-ph-chat-duotone"
  size="md"
  :items="[
    '💬 WhatsApp (Baileys)',
    '✈️ Telegram (grammY)',
    '💙 Signal (signal-cli)',
    '🍎 iMessage / BlueBubbles',
    '📞 LINE · Zalo'
  ]"
/>

<GlassCard
  title="协作平台"
  subtitle="工作场景"
  variant="secondary"
  icon="i-ph-users-three-duotone"
  size="md"
  :items="[
    '🟣 Slack (Bolt)',
    '🔵 Discord (discord.js)',
    '🟢 Microsoft Teams',
    '💬 Google Chat',
    '🔷 Matrix · Mattermost'
  ]"
/>

<GlassCard
  title="其他渠道"
  subtitle="多样化接入"
  variant="tech"
  icon="i-ph-globe-duotone"
  size="md"
  :items="[
    '🌐 WebChat (内置 UI)',
    '💻 IRC',
    '🗂️ Feishu (飞书)',
    '📹 Twitch',
    '🌱 Nostr · Tlon · Nextcloud'
  ]"
/>

</div>

<div mt-3>
  <GlassCard variant="tech" text-center size="sm">
    <div class="text-sm">
      <span class="emphasis-tech font-semibold">群组路由：</span>
      支持 @提及触发、回复标签、按频道分块路由，可将不同渠道/账号路由至隔离的 Agent
    </div>
  </GlassCard>
</div>

<!--
OpenClaw最大的特点就是多渠道支持。无论用户用什么平台，AI助手都能接入。
群组路由功能还允许将不同的渠道消息路由给不同的AI Agent处理。
-->

---

# 语音与 Canvas

<div grid="~ cols-2 gap-5" mt-4>

<GlassCard
  title="语音交互"
  subtitle="Voice Wake + Talk Mode"
  variant="primary"
  icon="i-ph-microphone-duotone"
  size="lg"
>
  <div class="space-y-3 text-sm">
    <div>
      <div class="font-semibold mb-1 emphasis-primary">🍎 macOS / iOS</div>
      <div class="space-y-1 pl-2">
        <div>• 唤醒词检测 (Voice Wake)</div>
        <div>• 一键触发对话 (PTT)</div>
        <div>• Talk Mode 浮层</div>
      </div>
    </div>
    <div>
      <div class="font-semibold mb-1 emphasis-primary">🤖 Android</div>
      <div class="space-y-1 pl-2">
        <div>• 持续语音监听</div>
        <div>• ElevenLabs TTS 合成</div>
        <div>• 系统 TTS 兜底</div>
      </div>
    </div>
  </div>
</GlassCard>

<GlassCard
  title="Live Canvas"
  subtitle="Agent 驱动的可视化工作区"
  variant="secondary"
  icon="i-ph-paint-brush-duotone"
  size="lg"
>
  <div class="space-y-3 text-sm">
    <div>
      <div class="font-semibold mb-1 emphasis-secondary">A2UI 框架</div>
      <div class="space-y-1 pl-2">
        <div>• AI 实时推送/重置画布</div>
        <div>• Canvas 快照与执行</div>
        <div>• 可交互可视化组件</div>
      </div>
    </div>
    <div>
      <div class="font-semibold mb-1 emphasis-secondary">节点功能</div>
      <div class="space-y-1 pl-2">
        <div>• 摄像头拍照/录制</div>
        <div>• 屏幕录制</div>
        <div>• 实时位置获取</div>
      </div>
    </div>
  </div>
</GlassCard>

</div>

<div mt-4>
  <GlassCard variant="tech" text-center size="sm">
    <div class="text-sm">
      <span class="emphasis-tech font-semibold">多模态交互：</span>
      文字 · 语音 · 图像 · 视频 · Canvas 可视化，打造真正沉浸式的 AI 助手体验
    </div>
  </GlassCard>
</div>

<!--
OpenClaw不只是文字对话。通过Voice Wake可以用语音唤醒AI，Live Canvas则让AI能够
实时操控可视化界面。这种多模态交互体验非常独特。
-->

---

# 工具与技能系统

<div grid="~ cols-2 gap-5" mt-4>

<div>
<GlassCard
  title="内置工具"
  subtitle="开箱即用"
  variant="primary"
  icon="i-ph-wrench-duotone"
  size="md"
  :items="[
    '🌐 浏览器控制 (Chrome CDP)',
    '🎨 Canvas / A2UI 画布操作',
    '📸 摄像头拍照与视频',
    '🖥️ 屏幕录制',
    '⏰ Cron 定时任务',
    '🔗 Webhook 外部触发',
    '📧 Gmail Pub/Sub'
  ]"
/>
</div>

<div>
<GlassCard
  title="技能平台 (Skills)"
  subtitle="ClawHub 技能注册表"
  variant="secondary"
  icon="i-ph-puzzle-piece-duotone"
  size="md"
>
  <div class="space-y-3 text-sm">
    <div>
      <div class="font-semibold mb-1">技能类型</div>
      <div class="space-y-1 pl-2">
        <div>• <span class="emphasis-primary font-semibold">内置技能</span>：随系统提供</div>
        <div>• <span class="emphasis-secondary font-semibold">托管技能</span>：ClawHub 自动更新</div>
        <div>• <span class="emphasis-tech font-semibold">工作区技能</span>：自定义 SKILL.md</div>
      </div>
    </div>
    <div>
      <div class="font-semibold mb-1">技能工作区</div>
      <div class="text-xs font-mono text-on-surface-variant bg-neutral-500/10 rounded px-2 py-1">
        ~/.openclaw/workspace/skills/&lt;skill&gt;/SKILL.md
      </div>
    </div>
    <div class="text-xs text-on-surface-variant">
      注入文件: AGENTS.md · SOUL.md · TOOLS.md
    </div>
  </div>
</GlassCard>
</div>

</div>

<div mt-3>
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-sm">
      <span class="font-semibold">多 Agent 路由：</span>
      将不同渠道/账号路由至独立 Agent，每个 Agent 拥有独立会话和工作区
    </div>
  </GlassCard>
</div>

<!--
技能系统是OpenClaw的扩展机制。通过ClawHub注册表，用户可以搜索并自动拉取所需技能。
还支持自定义SKILL.md来定义专属技能。
-->

---

# 安全模型

<div grid="~ cols-2 gap-5" mt-4>

<GlassCard
  title="默认安全策略"
  subtitle="DM 配对保护"
  variant="primary"
  icon="i-ph-shield-check-duotone"
  size="md"
>
  <div class="space-y-2 text-sm">
    <div class="font-semibold mb-2">未知发件人处理</div>
    <div class="space-y-1.5">
      <div class="flex gap-2 items-start">
        <span class="emphasis-primary font-bold">pairing</span>
        <span class="text-on-surface-variant">（默认）发送配对码，不处理消息</span>
      </div>
      <div class="flex gap-2 items-start">
        <span class="emphasis-secondary font-bold">open</span>
        <span class="text-on-surface-variant">显式开放时才允许公开 DM</span>
      </div>
    </div>
    <div class="mt-2 font-semibold">审批方式</div>
    <div class="font-mono text-xs bg-neutral-500/10 rounded px-2 py-1">
      openclaw pairing approve &lt;channel&gt; &lt;code&gt;
    </div>
    <div class="text-xs text-on-surface-variant mt-1">
      通过后加入本地白名单 allowlist
    </div>
  </div>
</GlassCard>

<GlassCard
  title="沙箱与访问控制"
  subtitle="多层防护"
  variant="secondary"
  icon="i-ph-lock-duotone"
  size="md"
>
  <div class="space-y-2 text-sm">
    <div class="font-semibold mb-2">工具权限分层</div>
    <div>
      <div class="text-xs text-on-surface-variant mb-1">默认允许</div>
      <div class="text-xs font-mono bg-success-500/10 rounded px-2 py-1">
        bash · read · write · sessions_*
      </div>
    </div>
    <div>
      <div class="text-xs text-on-surface-variant mb-1">默认拒绝（非主会话）</div>
      <div class="text-xs font-mono bg-error-500/10 rounded px-2 py-1">
        browser · canvas · nodes · cron
      </div>
    </div>
    <div class="mt-2">
      <div class="font-semibold mb-1">Docker 沙箱</div>
      <div class="text-xs text-on-surface-variant">
        <code>sandbox.mode: "non-main"</code> 隔离群组/频道会话
      </div>
    </div>
    <div class="mt-1 text-xs text-on-surface-variant">
      运行 <code>openclaw doctor</code> 检查安全配置
    </div>
  </div>
</GlassCard>

</div>

<div mt-3>
  <GlassCard variant="error" text-center size="sm" icon="i-ph-warning-duotone">
    <div class="text-sm">
      <span class="font-semibold">重要提示：</span>
      OpenClaw 连接真实消息平台，入站 DM 应视为不可信输入。请仔细配置 allowlist 和 dmPolicy。
    </div>
  </GlassCard>
</div>

<!--
安全是OpenClaw设计的重中之重。默认采用配对机制：未知发件人需要通过验证码才能发消息。
同时支持Docker沙箱隔离群组会话，防止恶意指令执行。
-->

---

# 快速开始

<div grid="~ cols-2 gap-5" mt-4>

<GlassCard
  title="安装"
  subtitle="运行时：Node ≥ 22"
  variant="primary"
  icon="i-ph-download-duotone"
  size="md"
>

```bash
# 全局安装
npm install -g openclaw@latest
# 或
pnpm add -g openclaw@latest

# 引导式安装（推荐）
openclaw onboard --install-daemon
```

<div class="text-xs text-on-surface-variant mt-2">
  支持 macOS · Linux · Windows (WSL2)
</div>

</GlassCard>

<GlassCard
  title="基本使用"
  subtitle="几条命令快速上手"
  variant="secondary"
  icon="i-ph-terminal-window-duotone"
  size="md"
>

```bash
# 启动 Gateway
openclaw gateway --port 18789 --verbose

# 发送消息
openclaw message send \
  --to +1234567890 \
  --message "Hello!"

# 运行 Agent
openclaw agent \
  --message "帮我整理今日任务" \
  --thinking high

# 健康检查
openclaw doctor
```

</GlassCard>

</div>

<!--
安装非常简单，npm install -g openclaw就可以。推荐使用onboard命令进行引导式配置，
它会自动安装Gateway守护进程并完成初始化配置。
-->

---

# 配置示例（一）：基础配置

<div grid="~ cols-2 gap-4" mt-3>

<GlassCard
  title="最简配置"
  subtitle="~/.openclaw/openclaw.json"
  variant="primary"
  icon="i-ph-gear-duotone"
  size="md"
>

```json
{
  "agent": {
    "model": "anthropic/claude-opus-4-6"
  },
  "channels": {
    "telegram": { "botToken": "123456:ABCDEF" },
    "discord": { "token": "1234abcd" }
  }
}
```

</GlassCard>

<GlassCard
  title="支持的模型提供商"
  subtitle="灵活切换，随时故障转移"
  variant="secondary"
  icon="i-ph-brain-duotone"
  size="md"
  :items="[
    '🤖 OpenAI (GPT-5 / Codex)',
    '🟣 Anthropic (Claude)',
    '🌐 所有 OpenAI 兼容接口',
    'OAuth 与 API key 轮换',
    '多模型故障转移 (failover)',
    'CLI 配置 + 配置文件双支持'
  ]"
/>

</div>

<div mt-3>
  <GlassCard variant="tech" text-center size="sm">
    <div class="text-sm">
      推荐使用最新旗舰模型以获得最佳体验 · 详见 <span class="emphasis-tech font-semibold">docs.openclaw.ai/concepts/models</span>
    </div>
  </GlassCard>
</div>

<!--
配置文件是JSON格式，非常直观。最简单的配置只需要指定模型和渠道token即可。
支持OpenAI、Anthropic等主流模型提供商，还支持多模型故障转移。
-->

---

# 配置示例（二）：进阶配置

<div grid="~ cols-2 gap-4" mt-3>

<GlassCard
  title="安全 + 沙箱 + Tailscale"
  subtitle="~/.openclaw/openclaw.json"
  variant="secondary"
  icon="i-ph-sliders-duotone"
  size="md"
>

```json {maxHeight:'200px'}
{
  "gateway": {
    "bind": "loopback",
    "tailscale": { "mode": "serve" }
  },
  "agents": {
    "defaults": {
      "workspace": "~/.openclaw/workspace",
      "sandbox": { "mode": "non-main" }
    }
  },
  "channels": {
    "whatsapp": {
      "dmPolicy": "pairing",
      "allowFrom": ["contact1", "contact2"]
    }
  }
}
```

</GlassCard>

<GlassCard
  title="配置项说明"
  subtitle="关键字段解析"
  variant="primary"
  icon="i-ph-info-duotone"
  size="md"
>
  <div class="space-y-2 text-sm">
    <div>
      <div class="font-semibold emphasis-primary">gateway.bind: "loopback"</div>
      <div class="text-xs text-on-surface-variant pl-2">Gateway 绑定本机回环，配合 Tailscale 时必须设置</div>
    </div>
    <div>
      <div class="font-semibold emphasis-secondary">tailscale.mode: "serve"</div>
      <div class="text-xs text-on-surface-variant pl-2">局域网暴露；"funnel" 为公网暴露（需密码认证）</div>
    </div>
    <div>
      <div class="font-semibold emphasis-tech">sandbox.mode: "non-main"</div>
      <div class="text-xs text-on-surface-variant pl-2">群组/频道会话在 Docker 沙箱中隔离运行</div>
    </div>
    <div>
      <div class="font-semibold">dmPolicy: "pairing"</div>
      <div class="text-xs text-on-surface-variant pl-2">陌生人需通过配对码验证才能与 Bot 交互</div>
    </div>
  </div>
</GlassCard>

</div>

<!--
进阶配置支持Tailscale安全暴露、Docker沙箱等高级特性。
配置项说明帮助理解每个字段的作用。
-->

---

# 跨平台应用生态

<div grid="~ cols-3 gap-4" mt-4>

<GlassCard
  title="macOS 应用"
  subtitle="OpenClaw.app"
  variant="primary"
  icon="i-ph-apple-logo-duotone"
  size="lg"
  :items="[
    '菜单栏 Gateway 控制',
    'Voice Wake / PTT',
    'Talk Mode 悬浮窗',
    'WebChat 内置界面',
    'Debug 调试工具',
    '远程 Gateway 管理'
  ]"
/>

<GlassCard
  title="iOS 节点"
  subtitle="移动端配套"
  variant="secondary"
  icon="i-ph-device-mobile-duotone"
  size="lg"
  :items="[
    '通过 WS 配对为节点',
    'Canvas 可视化画布',
    'Voice Wake 唤醒',
    'Talk Mode 语音对话',
    '摄像头 + 屏幕录制',
    'Bonjour 设备配对'
  ]"
/>

<GlassCard
  title="Android 节点"
  subtitle="安卓完整支持"
  variant="tech"
  icon="i-ph-android-logo-duotone"
  size="lg"
  :items="[
    '设备配对连接',
    'Connect / Chat / Voice',
    'Canvas + 摄像头',
    '通知 / 位置 / SMS',
    '联系人 / 日历 / 相册',
    'App 更新控制'
  ]"
/>

</div>

<div mt-3>
  <GlassCard variant="gradient-primary" text-center size="sm">
    <div class="text-sm font-semibold">
      Gateway 单独即可提供完整体验 · 所有应用均为可选附加项
    </div>
  </GlassCard>
</div>

<!--
OpenClaw有完整的跨平台生态。macOS有原生菜单栏应用，iOS和Android都有配套节点应用。
但Gateway单独运行就已经提供了完整的功能，这些应用都是锦上添花。
-->

---

# 运维与部署

<div grid="~ cols-2 gap-5" mt-4>

<GlassCard
  title="部署方式"
  subtitle="灵活多样"
  variant="primary"
  icon="i-ph-cloud-duotone"
  size="md"
  :items="[
    '本地运行 (launchd/systemd)',
    'Docker 容器化部署',
    'Nix 声明式配置',
    '远程 Linux 服务器',
    'Tailscale Serve (局域网)',
    'Tailscale Funnel (公网)'
  ]"
/>

<GlassCard
  title="指令与监控"
  subtitle="聊天中直接控制"
  variant="secondary"
  icon="i-ph-chat-teardrop-text-duotone"
  size="md"
>
  <div class="space-y-2 text-sm">
    <div class="font-semibold mb-1">聊天命令（发送给 Bot）</div>
    <div class="space-y-1 font-mono text-xs">
      <div><span class="emphasis-primary">/status</span> — 会话状态与 Token 使用</div>
      <div><span class="emphasis-primary">/new</span> — 重置对话</div>
      <div><span class="emphasis-primary">/compact</span> — 压缩上下文</div>
      <div><span class="emphasis-primary">/think &lt;level&gt;</span> — 调整推理深度</div>
      <div><span class="emphasis-primary">/verbose on|off</span> — 详细模式</div>
      <div><span class="emphasis-primary">/usage full</span> — 查看用量</div>
      <div><span class="emphasis-primary">/restart</span> — 重启 Gateway</div>
    </div>
  </div>
</GlassCard>

</div>

<div mt-3>
  <GlassCard variant="tech" text-center size="sm">
    <div class="text-sm">
      <span class="emphasis-tech font-semibold">远程部署：</span>
      在 Linux 服务器上运行 Gateway，客户端（macOS/CLI/WebChat）通过 Tailscale 或 SSH 隧道连接
    </div>
  </GlassCard>
</div>

<!--
OpenClaw非常适合部署在小型Linux服务器上。通过Tailscale可以安全地从任何地方访问。
聊天命令让用户可以不离开对话界面就控制AI的行为。
-->

---

# 多 Agent 协作

<div grid="~ cols-2 gap-5" mt-4>

<GlassCard
  title="Agent 间通信"
  subtitle="sessions_* 工具族"
  variant="primary"
  icon="i-ph-robot-duotone"
  size="md"
>
  <div class="space-y-2 text-sm">
    <div class="font-semibold mb-2">API 工具</div>
    <div class="space-y-1.5">
      <div>
        <span class="emphasis-primary font-semibold font-mono text-xs">sessions_list</span>
        <span class="text-on-surface-variant"> — 发现活跃会话（Agent）及其元数据</span>
      </div>
      <div>
        <span class="emphasis-primary font-semibold font-mono text-xs">sessions_history</span>
        <span class="text-on-surface-variant"> — 获取会话对话记录</span>
      </div>
      <div>
        <span class="emphasis-primary font-semibold font-mono text-xs">sessions_send</span>
        <span class="text-on-surface-variant"> — 向其他会话发消息；支持 ping-pong 回复</span>
      </div>
      <div>
        <span class="emphasis-primary font-semibold font-mono text-xs">sessions_spawn</span>
        <span class="text-on-source-variant"> — 生成子 Agent 会话</span>
      </div>
    </div>
  </div>
</GlassCard>

<GlassCard
  title="会话模型"
  subtitle="灵活的路由机制"
  variant="secondary"
  icon="i-ph-arrows-split-duotone"
  size="md"
  :items="[
    'main: 主直接对话会话',
    '群组隔离: 每群独立会话',
    '激活模式: always / mention',
    '队列模式: 消息顺序保证',
    '多 Agent 路由: 按渠道/账号分发',
    '上下文压缩: /compact 指令'
  ]"
/>

</div>

<div mt-4>
  <GlassCard variant="gradient-primary" text-center size="md">
    <div class="font-semibold mb-1">
      <span class="emphasis-tech">ACP (Agent Communication Protocol)</span>
    </div>
    <div class="text-sm opacity-90">
      基于 WebSocket 的 Agent 通信协议，支持流式更新与 IDE 客户端集成 · 详见 <code class="text-xs">docs.acp.md</code>
    </div>
  </GlassCard>
</div>

<!--
OpenClaw支持多个AI Agent协同工作。Agent可以互相发消息、查看历史、派生子Agent，
实现复杂的工作流自动化。ACP协议是这一切的基础。
-->

---

# 项目生态与社区

<div grid="~ cols-3 gap-4" mt-4>

<GlassCard
  title="项目数据"
  subtitle="截至 2026 年 3 月"
  variant="primary"
  icon="i-ph-chart-bar-duotone"
  size="md"
  :items="[
    '⭐ 321k GitHub Stars',
    '🍴 61.6k Forks',
    '👥 1,238 贡献者',
    '📦 68 次版本发布',
    '🎯 5k+ Issues / PRs',
    '📜 MIT 开源协议'
  ]"
/>

<GlassCard
  title="技术栈"
  subtitle="Languages"
  variant="secondary"
  icon="i-ph-code-duotone"
  size="md"
>
  <div class="space-y-2 text-sm">
    <div class="flex justify-between items-center">
      <span>TypeScript</span>
      <div class="flex-1 mx-2 bg-neutral-500/20 rounded-full h-2">
        <div class="bg-sjtu-500 h-2 rounded-full" style="width: 87.9%"></div>
      </div>
      <span class="text-xs text-on-surface-variant">87.9%</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Swift</span>
      <div class="flex-1 mx-2 bg-neutral-500/20 rounded-full h-2">
        <div class="bg-orange-500 h-2 rounded-full" style="width: 7.7%"></div>
      </div>
      <span class="text-xs text-on-surface-variant">7.7%</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Kotlin</span>
      <div class="flex-1 mx-2 bg-neutral-500/20 rounded-full h-2">
        <div class="bg-purple-500 h-2 rounded-full" style="width: 1.8%"></div>
      </div>
      <span class="text-xs text-on-surface-variant">1.8%</span>
    </div>
    <div class="flex justify-between items-center">
      <span>Shell</span>
      <div class="flex-1 mx-2 bg-neutral-500/20 rounded-full h-2">
        <div class="bg-green-500 h-2 rounded-full" style="width: 1.1%"></div>
      </div>
      <span class="text-xs text-on-surface-variant">1.1%</span>
    </div>
  </div>
</GlassCard>

<GlassCard
  title="赞助商"
  subtitle="背后的支持"
  variant="tech"
  icon="i-ph-hand-heart-duotone"
  size="md"
  :items="[
    '🤖 OpenAI (ChatGPT/Codex)',
    '▲ Vercel',
    '🔧 Blacksmith',
    '🌐 Convex',
    '',
    '作者: Peter Steinberger (@steipete)'
  ]"
/>

</div>

<div mt-3>
  <GlassCard variant="tech" text-center size="sm">
    <div class="text-sm">
      OpenClaw 最初为 <span class="emphasis-tech font-semibold">Molty</span> 打造 — 一个太空龙虾 AI 助手 🦞 · 加入 Discord: discord.gg/clawd
    </div>
  </GlassCard>
</div>

<!--
OpenClaw有着非常活跃的社区，321k颗星说明了市场认可度。
项目主要用TypeScript编写，还有配套的Swift(iOS)和Kotlin(Android)应用。
-->

---

# 总结

<div grid="~ cols-2 gap-6" mt-6>

<GlassCard
  title="OpenClaw 的核心价值"
  variant="primary"
  icon="i-ph-sparkle-duotone"
  size="lg"
  :items="[
    '🏠 本地优先：数据完全自主可控',
    '📱 多渠道：20+ 平台一站接入',
    '🔧 可扩展：技能系统 + 插件',
    '🔒 安全：配对机制 + 沙箱隔离',
    '🌐 跨平台：macOS/iOS/Android/Linux',
    '🤖 多 Agent：协作工作流自动化'
  ]"
/>

<GlassCard
  title="适合谁使用？"
  variant="secondary"
  icon="i-ph-user-circle-duotone"
  size="lg"
  :items="[
    '重视数据隐私的个人用户',
    '需要 AI 接入多个工作平台的开发者',
    '希望自托管 AI 助手的技术团队',
    '需要自动化工作流的研究人员',
    '想要个性化定制 AI 行为的用户',
    '追求本地化部署的企业'
  ]"
/>

</div>

<!--
OpenClaw是一个非常有价值的开源项目。它解决了"如何拥有一个真正属于自己的AI助手"这个需求。
本地优先、多渠道、可扩展，这三个核心价值让它区别于其他AI助手产品。
-->

---
layout: center
---

<div class="text-center">
  <div class="text-5xl mb-4">🦞</div>
  <div class="text-3xl font-bold mb-3 emphasis-primary">github.com/openclaw/openclaw</div>
  <div class="text-xl text-on-surface-variant mb-6">
    Your own personal AI assistant. Any OS. Any Platform.
  </div>
</div>

<div max-w-2xl mx-auto>
  <GlassCard variant="gradient-primary" text-center size="md">
    <div class="text-base font-mono mb-2">
      npm install -g openclaw@latest && openclaw onboard
    </div>
    <div class="text-sm opacity-70">
      321k ⭐ · MIT License · openclaw.ai · docs.openclaw.ai · discord.gg/clawd
    </div>
  </GlassCard>
</div>

<!--
如果你对隐私和数据自主权有要求，OpenClaw是目前最好的选择之一。
运行 openclaw onboard 一条命令即可完成引导式配置。
-->
