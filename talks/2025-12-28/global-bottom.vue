<script setup lang="ts">
import { useNav } from '@slidev/client'

const { currentPage, currentLayout, total } = useNav()
</script>

<!-- an example footer for pages -->
<template>
  <footer
    v-if="currentLayout !== 'cover'"
    class="absolute top-0 right-0 p-2 text-xs opacity-30 font-mono"
  >
    {{ currentPage }}/{{ total }}
  </footer>
</template>
