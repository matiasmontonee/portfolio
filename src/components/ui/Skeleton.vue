<script setup>
defineProps({
  rounded: { type: String, default: 'rounded-md' },
})
</script>

<template>
  <div
    class="skeleton-shimmer bg-skeleton"
    :class="rounded"
    aria-hidden="true"
    v-bind="$attrs"
  />
</template>
