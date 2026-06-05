<script setup>
import Skeleton from '../ui/Skeleton.vue'
</script>

<template>
  <div>
    <header class="mb-12 max-w-2xl">
      <Skeleton class="h-px w-12" />
      <Skeleton class="mt-3 h-9 w-56 rounded-lg md:h-10" />
      <Skeleton class="mt-2 h-7 w-72" />
    </header>

    <div class="space-y-6">
      <div
        v-for="i in 3"
        :key="i"
        class="card overflow-hidden p-6 md:p-8"
      >
        <div class="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
          <div class="md:border-r md:border-line md:pr-8">
            <Skeleton class="h-4 w-32" />
            <Skeleton class="mt-2 h-7 w-28" />
            <Skeleton class="mt-2 h-4 w-40" />
          </div>
          <div>
            <Skeleton class="h-14 w-full rounded-lg" />
            <Skeleton v-for="j in 4" :key="j" class="mt-3 h-4 w-full" />
            <div class="mt-5 flex flex-wrap gap-2">
              <Skeleton v-for="k in 3" :key="k" class="h-7 w-20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mt-8 overflow-hidden p-6 md:p-8">
      <Skeleton class="h-4 w-24" />
      <Skeleton class="mt-2 h-7 w-56" />
      <Skeleton class="mt-2 h-4 w-48" />
      <Skeleton class="mt-3 h-4 w-full max-w-2xl" />
    </div>
  </div>
</template>
