<script setup>
import Skeleton from '../ui/Skeleton.vue'
</script>

<template>
  <div class="hero-content">
    <Skeleton class="h-4 w-40" rounded="rounded" />
    <Skeleton class="mt-6 h-12 w-3/4 max-w-md" rounded="rounded-lg" />
    <Skeleton class="mt-4 h-7 w-2/3 max-w-sm" rounded="rounded" />
    <Skeleton class="mt-4 h-20 w-full max-w-2xl" rounded="rounded-lg" />
    <div class="mt-10 flex gap-3">
      <Skeleton class="h-10 w-36" rounded="rounded-full" />
      <Skeleton class="h-10 w-28" rounded="rounded-full" />
    </div>
    <div class="mt-10 flex flex-wrap gap-3 sm:gap-6">
      <Skeleton class="h-4 w-16" rounded="rounded" />
      <Skeleton class="h-4 w-20" rounded="rounded" />
      <Skeleton class="h-4 w-44" rounded="rounded" />
    </div>
  </div>
</template>
