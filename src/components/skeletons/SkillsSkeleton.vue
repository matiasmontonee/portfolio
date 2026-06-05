<script setup>
import Skeleton from '../ui/Skeleton.vue'
</script>

<template>
  <div>
    <header class="mb-12 max-w-2xl">
      <Skeleton class="h-px w-12" />
      <Skeleton class="mt-3 h-9 w-48 rounded-lg md:h-10" />
      <Skeleton class="mt-2 h-7 w-56" />
    </header>

    <div class="grid gap-6 md:grid-cols-1">
      <div
        v-for="g in 3"
        :key="g"
        class="card p-6 md:p-7"
      >
        <Skeleton class="mb-5 h-4 w-24" />
        <div class="flex flex-wrap gap-3">
          <Skeleton
            v-for="i in 6"
            :key="i"
            class="h-11 w-28 rounded-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>
