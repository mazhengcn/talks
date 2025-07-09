<script setup lang="ts">
const props = defineProps<{
  color: string
  title: string
}>()
</script>

<template>
  <div flex="~ col gap-4" border="~ {{ color }}/50 rounded-lg" p6>
    <div flex="~ gap-1 items-center" text-3xl ml--1>
      <div i-gg-size text-4xl />
      <div :text="color">
        {{ title }}
      </div>
    </div>
    <slot />
  </div>
</template>
