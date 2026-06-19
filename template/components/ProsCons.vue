<script setup lang="ts">
defineProps<{
  pros: string[];
  cons: string[];
}>();
</script>

<template>
  <div grid="~ cols-2 gap-x-4 items-end" my4 absolute bottom-0 left-15 right-15>
    <div v-click flex="~ col gap-1" class="pros-cons-drawer">
      <div
        flex="~ gap-1 items-center"
        font-600
        class="text-green-600 dark:text-green-400"
      >
        <div i-ph-thumbs-up-duotone />
        Pros
      </div>

      <div
        class="text-green-800 dark:text-green-200 border border-green-200/30 dark:border-green-700 rounded-lg bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-900/20 dark:to-emerald-800/15 backdrop-blur-sm"
        px3
        py3
        pb-12
        mb--10
        relative
        flex="~ col gap-2"
      >
        <div v-for="pro in pros" :key="pro" flex="~ gap-2 items-center">
          <div
            i-ph-check-circle-duotone
            class="text-green-600 dark:text-green-400"
            text-xl
          />
          {{ pro }}
        </div>
        <div
          absolute
          top--4px
          right-4px
          left-4px
          h-4px
          class="bg-green-100/70 dark:bg-green-800/30 border-t border-l border-r border-green-200/40 dark:border-green-600 rounded-t-lg backdrop-blur-sm"
        />
      </div>
    </div>

    <div v-click flex="~ col gap-1" class="pros-cons-drawer">
      <div
        flex="~ gap-1 items-center"
        class="text-red-600 dark:text-red-400"
        font-600
      >
        <div i-ph-thumbs-down-duotone />
        Cons
      </div>

      <div
        class="text-red-800 dark:text-red-200 border border-red-200/30 dark:border-red-700 rounded-lg bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-900/20 dark:to-rose-800/15 backdrop-blur-sm"
        px3
        py3
        pb-12
        mb--10
        relative
        flex="~ col gap-2"
      >
        <div v-for="con in cons" :key="con" flex="~ gap-2 items-center">
          <div
            i-ph-warning-duotone
            class="text-orange-600 dark:text-orange-400"
            text-xl
          />
          {{ con }}
        </div>
        <div
          absolute
          top--4px
          right-4px
          left-4px
          h-4px
          class="bg-red-100/70 dark:bg-red-800/30 border-t border-l border-r border-red-200/40 dark:border-red-600 rounded-t-lg backdrop-blur-sm"
        />
      </div>
    </div>
  </div>
</template>

<style>
.pros-cons-drawer {
  transition: all 0.15s ease;
}
.pros-cons-drawer.slidev-vclick-hidden {
  transform: translateY(100%);
}
</style>
