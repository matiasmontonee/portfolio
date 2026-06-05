<script setup>
import { computed } from 'vue'
import SkillIcon from './SkillIcon.vue'
import { useTheme } from '../composables/useTheme'

const props = defineProps({
  name: { type: String, required: true },
  icon: {
    type: Object,
    required: true,
  },
})

const { isDark } = useTheme()

function isDarkBrandHex(hex) {
  const h = hex.replace('#', '')
  if (h.length !== 6) return false
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance < 0.35
}

function skillIconColors(hex, dark) {
  const brand = `#${hex.replace('#', '')}`
  if (dark && isDarkBrandHex(hex)) {
    return { default: 'var(--c-muted)', hover: 'var(--c-ink)' }
  }
  return { default: brand, hover: brand }
}

const colors = computed(() =>
  props.icon.src ? { default: 'inherit', hover: 'inherit' } : skillIconColors(props.icon.hex, isDark.value)
)
</script>

<template>
  <div
    class="skill-chip"
    :style="{
      '--icon-brand': colors.default,
      '--icon-brand-hover': colors.hover,
    }"
  >
    <div class="skill-chip__icon-wrap">
      <SkillIcon :icon="icon" />
    </div>
    <span class="text-sm font-medium text-ink">{{ name }}</span>
  </div>
</template>
