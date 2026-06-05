<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<template>
  <a href="#main-content" class="skip-link">
    {{ t('Saltar al contenido', 'Skip to content') }}
  </a>
</template>
