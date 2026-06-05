<script setup>
import { ref } from 'vue'
import Skeleton from './ui/Skeleton.vue'

defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
  width: { type: [Number, String], default: undefined },
  height: { type: [Number, String], default: undefined },
  loading: { type: String, default: 'lazy' },
  imgClass: { type: String, default: '' },
  skeletonClass: { type: String, default: 'h-full w-full' },
})

const loaded = ref(false)

const onLoad = () => {
  loaded.value = true
}
</script>

<template>
  <div class="relative overflow-hidden" :class="skeletonClass.includes('h-') ? '' : 'inline-block'">
    <Skeleton
      v-if="!loaded"
      :class="skeletonClass"
      rounded="rounded-2xl"
    />
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      decoding="async"
      class="transition-opacity duration-300 motion-reduce:transition-none"
      :class="[imgClass, loaded ? 'opacity-100' : 'absolute inset-0 opacity-0']"
      @load="onLoad"
    />
  </div>
</template>
