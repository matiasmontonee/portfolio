<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  eager: { type: Boolean, default: false },
  offset: { type: Number, default: 14 },
})

const root = ref(null)
const visible = ref(false)
let observer = null

const show = () => {
  window.setTimeout(() => {
    visible.value = true
  }, props.delay)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    visible.value = true
    return
  }

  if (props.eager) {
    show()
    return
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return
      show()
      observer?.disconnect()
      observer = null
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )

  if (root.value) observer.observe(root.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div
    ref="root"
    class="reveal"
    :class="{ 'reveal--visible': visible }"
    :style="{ '--reveal-y': `${offset}px` }"
  >
    <slot />
  </div>
</template>
