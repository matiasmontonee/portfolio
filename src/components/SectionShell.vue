<script setup>
import { ref } from 'vue'
import { useSectionReady } from '../composables/useSectionReady'

const props = defineProps({
  id: { type: String, required: true },
  headingId: { type: String, default: '' },
  ariaLabel: { type: String, required: true },
  minMs: { type: Number, default: 380 },
  images: { type: Array, default: () => [] },
  eager: { type: Boolean, default: false },
  elevated: { type: Boolean, default: false },
  borderless: { type: Boolean, default: false },
  compactPad: { type: Boolean, default: false },
  fullViewport: { type: Boolean, default: false },
})

const sectionRef = ref(null)
const { ready } = useSectionReady(sectionRef, {
  minMs: props.minMs,
  images: props.images,
  eager: props.eager,
})
</script>

<template>
  <section
    :id="id"
    ref="sectionRef"
    :aria-labelledby="headingId || undefined"
    :aria-label="ariaLabel"
    :aria-busy="!ready"
    :class="[
      borderless ? 'section-bg--clear' : elevated ? 'section-bg--elevated' : 'section-bg',
      borderless ? '' : 'border-t border-line',
      fullViewport ? 'section-viewport' : '',
    ]"
  >
    <div
      class="relative mx-auto max-w-6xl"
      :class="compactPad ? 'section-pad--hero' : 'section-pad'"
    >
      <div v-if="!ready" aria-hidden="true" role="presentation">
        <slot name="skeleton" />
      </div>
      <div v-else>
        <slot />
      </div>
    </div>
  </section>
</template>
