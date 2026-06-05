<script setup>
defineProps({
  icon: {
    type: Object,
    required: true,
    validator: (v) => v && (typeof v.path === 'string' || typeof v.src === 'string'),
  },
})
</script>

<template>
  <img
    v-if="icon.src"
    class="skill-icon"
    :src="icon.src"
    :alt="icon.title"
    width="20"
    height="20"
    loading="lazy"
    decoding="async"
  />
  <svg
    v-else
    class="skill-icon"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    :aria-label="icon.title"
  >
    <path :d="icon.path" fill="currentColor" />
  </svg>
</template>

<style scoped>
.skill-icon {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--icon-brand, var(--c-muted));
  transition: color 0.2s ease;
}
</style>
