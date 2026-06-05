<script setup>
import Skeleton from '../ui/Skeleton.vue'
</script>

<template>
  <div class="about-grid">
    <div class="about-grid__heading">
      <header class="mb-5 max-w-2xl">
        <Skeleton class="h-px w-12" />
        <Skeleton class="mt-3 h-9 w-48 rounded-lg md:h-10" />
        <Skeleton class="mt-2 h-6 w-64" />
      </header>
    </div>
    <figure class="about-grid__photo">
      <div class="profile-ring">
        <div class="profile-ring__inner">
          <Skeleton class="profile-photo-skeleton rounded-[0.9rem]" />
        </div>
      </div>
    </figure>
    <div class="about-grid__body">
      <Skeleton v-for="i in 3" :key="i" class="mb-4 h-16 w-full max-w-2xl rounded-lg" />
      <Skeleton class="mt-6 h-11 w-44 rounded-full" />
    </div>
  </div>
</template>
