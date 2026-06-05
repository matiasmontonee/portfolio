<script setup>
import Skeleton from '../ui/Skeleton.vue'
</script>

<template>
  <div>
    <header class="mb-12 max-w-2xl">
      <Skeleton class="h-px w-12" />
      <Skeleton class="mt-3 h-9 w-40 rounded-lg md:h-10" />
      <Skeleton class="mt-2 h-7 w-full max-w-xl" />
    </header>

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" role="presentation">
      <li v-for="i in 3" :key="i">
        <Skeleton class="h-full min-h-[7.5rem] w-full rounded-2xl" />
      </li>
    </ul>
  </div>
</template>
