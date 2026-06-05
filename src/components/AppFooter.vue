<script setup>
import { useLanguage } from '../composables/useLanguage'
import Reveal from './Reveal.vue'

const { cvUrl, t } = useLanguage()
const year = new Date().getFullYear()

const socials = [
  { label: 'GitHub', href: 'https://github.com/matiasmontonee' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matiasmontone/' },
  { label: 'Email', href: 'mailto:matiasmontonedev@gmail.com' },
  { label: 'WhatsApp', href: 'https://wa.me/+5491133501860' },
]
</script>

<template>
  <footer class="section-bg border-t border-line">
    <div class="section-pad mx-auto max-w-6xl">
      <Reveal :offset="8">
      <div class="card flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <p class="font-display text-sm font-medium text-ink">
          Matías Montone <span class="text-muted">© {{ year }}</span>
        </p>
        <nav class="social-links social-links--footer" :aria-label="t('Enlaces sociales', 'Social links')">
          <a
            v-for="item in socials"
            :key="item.label"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
            :class="{ 'social-link--mail': item.label === 'Email' }"
          >
            {{ item.label }}
          </a>
        </nav>
        <a
          :href="cvUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary inline-flex w-fit self-start rounded-full px-5 py-2.5 text-sm font-semibold transition md:self-auto"
        >
          {{ t('Descargar CV', 'Download resume') }}
        </a>
      </div>
      </Reveal>
    </div>
  </footer>
</template>
