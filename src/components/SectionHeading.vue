<script setup>
import Reveal from './Reveal.vue'

defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <Reveal>
    <header class="max-w-2xl" :class="compact ? 'mb-5' : 'mb-12'">
      <div class="section-rule" aria-hidden="true" />
      <h2 :id="id" class="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-2 text-lg leading-snug text-muted">
        {{ subtitle }}
      </p>
    </header>
  </Reveal>
</template>
