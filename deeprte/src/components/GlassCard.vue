<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  items?: string[]
  variant?: 'primary' | 'secondary' | 'tech' | 'neutral' | 'gradient-primary' | 'gradient-secondary' | 'gradient-tech' | 'success' | 'warning' | 'error'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'neutral',
  size: 'md',
})

const variantClasses = {
  'primary': 'border-sjtu-400/30 dark:border-sjtu-300/40',
  'secondary': 'border-academic-400/30 dark:border-academic-300/40',
  'tech': 'border-tech-electric-400/30 dark:border-tech-electric-300/40',
  'neutral': 'border-neutral-300/40 dark:border-neutral-600/50',
  'gradient-primary': 'border-sjtu-400/30 dark:border-sjtu-300/40',
  'gradient-secondary': 'border-academic-400/30 dark:border-academic-300/40',
  'gradient-tech': 'border-tech-electric-400/30 dark:border-tech-electric-300/40',
  'success': 'border-success-400/30 dark:border-success-300/40',
  'warning': 'border-warning-400/30 dark:border-warning-300/40',
  'error': 'border-error-400/30 dark:border-error-300/40',
}

const sizeClasses = {
  sm: 'p-3 text-sm',
  md: 'p-4',
  lg: 'p-6 text-lg',
}

const titleClasses = {
  'primary': 'text-gradient-sjtu',
  'secondary': 'text-gradient-academic',
  'tech': 'text-gradient-tech',
  'neutral': 'text-on-surface',
  'gradient-primary': 'text-gradient-sjtu',
  'gradient-secondary': 'text-gradient-academic',
  'gradient-tech': 'text-gradient-tech',
  'success': 'text-success-600 dark:text-success-400',
  'warning': 'text-warning-600 dark:text-warning-400',
  'error': 'text-error-600 dark:text-error-400',
}

const iconClasses = {
  'primary': 'text-sjtu-400 dark:text-sjtu-300',
  'secondary': 'text-academic-400 dark:text-academic-300',
  'tech': 'text-tech-electric-400 dark:text-tech-electric-300',
  'neutral': 'text-on-surface',
  'gradient-primary': 'text-sjtu-400 dark:text-sjtu-300',
  'gradient-secondary': 'text-academic-400 dark:text-academic-300',
  'gradient-tech': 'text-tech-electric-400 dark:text-tech-electric-300',
  'success': 'text-success-600 dark:text-success-400',
  'warning': 'text-warning-600 dark:text-warning-400',
  'error': 'text-error-600 dark:text-error-400',
}

const dotClasses = {
  'primary': 'bg-sjtu-400',
  'secondary': 'bg-academic-400',
  'tech': 'bg-tech-electric-400',
  'neutral': 'bg-neutral-400',
  'gradient-primary': 'bg-sjtu-400',
  'gradient-secondary': 'bg-academic-400',
  'gradient-tech': 'bg-tech-electric-400',
  'success': 'bg-success-400',
  'warning': 'bg-warning-400',
  'error': 'bg-error-400',
}
</script>

<template>
  <div
    class="glass-card backdrop-blur-xl rounded-xl border transition-all duration-300 hover:backdrop-blur-2xl hover:shadow-lg bg-white/10 dark:bg-white/5"
    :class="[
      variantClasses[variant],
      sizeClasses[size],
    ]"
  >
    <!-- Title with optional icon -->
    <div
      v-if="title"
      class="flex items-center font-semibold leading-tight"
      :class="[
        titleClasses[variant],
        size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-base' : 'text-xl',
        subtitle ? (size === 'lg' ? 'mb-2' : size === 'sm' ? 'mb-1' : 'mb-1.5') : (size === 'lg' ? 'mb-4' : size === 'sm' ? 'mb-2' : 'mb-3'),
      ]"
    >
      <div
        v-if="icon"
        class="mr-2.5 flex-shrink-0"
        :class="[
          `i-${icon}`,
          iconClasses[variant],
          size === 'lg' ? 'text-3xl' : size === 'sm' ? 'text-lg' : 'text-2xl',
        ]"
      />
      {{ title }}
    </div>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      class="text-on-surface-variant leading-relaxed"
      :class="[
        size === 'lg' ? 'text-base mb-4' : size === 'sm' ? 'text-xs mb-2' : 'text-sm mb-3',
      ]"
    >
      {{ subtitle }}
    </p>

    <!-- List Items -->
    <ul
      v-if="items && items.length"
      class="space-y-2 -ml-2"
      :class="[
        size === 'lg' ? 'space-y-3' : size === 'sm' ? 'space-y-1' : 'space-y-2',
      ]"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-start"
        :class="[
          size === 'sm' ? 'text-xs' : 'text-sm',
        ]"
      >
        <span
          class="inline-block w-1 h-1 rounded-full mr-3 mt-2 flex-shrink-0"
          :class="[
            dotClasses[variant],
          ]"
        />
        <span class="text-on-surface flex-1">{{ item }}</span>
      </li>
    </ul>    <!-- Default slot for custom content -->
    <div v-if="!items || !items.length">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.glass-card {
  /* Enhanced glassmorphism effect with reduced shadow */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.06),
    0 2px 8px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.dark .glass-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.2),
    0 2px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.glass-card:hover {
  transform: translateY(-1px);
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.08),
    0 3px 10px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.dark .glass-card:hover {
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.25),
    0 3px 10px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

/* Subtle animation for content */
.glass-card * {
  transition: all 0.2s ease;
}
</style>
