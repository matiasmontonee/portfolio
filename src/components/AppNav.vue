<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useActiveSection, NAV_LINKS_DESKTOP } from '../composables/useActiveSection'
import ThemeToggle from './ThemeToggle.vue'

const { isEnglish, toggleLanguage, t } = useLanguage()
const { activeSection } = useActiveSection()
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const isActive = (id) => activeSection.value === id
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'py-2' : 'py-0'"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-8"
      :aria-label="t('Navegación principal', 'Main navigation')"
    >
      <div
        class="flex h-14 w-full items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:px-6"
        :class="scrolled
          ? 'border-line bg-elevated-glass shadow-[var(--shadow-card)] backdrop-blur-xl'
          : 'border-transparent bg-transparent'"
      >
        <a
          href="#home"
          class="font-display text-sm font-semibold tracking-tight text-ink"
          :class="{ 'nav-logo--active': isActive('home') }"
        >
          MM<span class="text-accent" aria-hidden="true">.</span>
          <span class="sr-only"> — {{ t('Inicio', 'Home') }}</span>
        </a>

        <div class="hidden items-center gap-8 md:flex">
          <ul class="flex items-center gap-7">
            <li v-for="link in NAV_LINKS_DESKTOP" :key="link.id">
              <a
                :href="link.href"
                class="nav-link"
                :class="{ 'nav-link--active': isActive(link.id) }"
              >
                {{ t(link.es, link.en) }}
              </a>
            </li>
          </ul>
          <div class="flex items-center gap-2 border-l border-line pl-6">
            <ThemeToggle />
            <button
              type="button"
              class="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-accent"
              :aria-label="t('Cambiar idioma', 'Change language')"
              @click="toggleLanguage"
            >
              {{ isEnglish ? 'ES' : 'EN' }}
            </button>
          </div>
        </div>

        <div class="flex items-center md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  </header>
</template>
