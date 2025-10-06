<script setup>
const iconClass = 'i-ph-star text-yellow text-2xl'
</script>

<template>
  <div class="p-4 border rounded">
    <h3 class="mb-4">
      Icon Test
    </h3>

    <!-- Test working icons from slides -->
    <div class="mb-4">
      <p>Working icons from slides:</p>
      <div class="i-ph-cube-transparent-duotone text-red text-4xl inline-block mr-2" />
      <div class="i-ph-circles-three-duotone text-green text-4xl inline-block mr-2" />
      <div class="i-ph-chart-bar-duotone text-amber text-4xl inline-block mr-2" />
    </div>

    <!-- Test basic ph icons -->
    <div class="mb-4">
      <p>Basic ph icons:</p>
      <div class="i-ph-brain text-blue text-2xl inline-block mr-2" />
      <div class="i-ph-flask text-blue text-2xl inline-block mr-2" />
      <div class="i-ph-code text-blue text-2xl inline-block mr-2" />
      <div class="i-ph-check-circle text-blue text-2xl inline-block mr-2" />
      <div class="i-ph-warning-triangle text-blue text-2xl inline-block mr-2" />
      <div class="i-ph-x-circle text-blue text-2xl inline-block mr-2" />
    </div>

    <!-- Test dynamic class binding -->
    <div class="mb-4">
      <p>Dynamic class binding:</p>
      <div class="i-ph-heart text-red text-2xl inline-block mr-2" />
      <div :class="iconClass" class="inline-block mr-2" />
    </div>
  </div>
</template>
