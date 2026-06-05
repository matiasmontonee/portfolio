<script setup>
import { ref, watch, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useActiveSection, NAV_LINKS_MOBILE } from '../composables/useActiveSection'

const { isEnglish, toggleLanguage, t } = useLanguage()
const { activeSection } = useActiveSection()
const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="mobile-nav md:hidden" :class="{ 'mobile-nav--open': menuOpen }">
    <div
      v-if="menuOpen"
      class="mobile-nav__backdrop"
      aria-hidden="true"
      @click="closeMenu"
    />

    <div
      id="mobile-bottom-menu"
      class="mobile-nav__sheet"
      :aria-hidden="!menuOpen"
    >
      <div class="mobile-nav__handle" aria-hidden="true" />
      <ul class="mobile-nav__list">
        <li v-for="link in NAV_LINKS_MOBILE" :key="link.id">
          <a
            :href="link.href"
            class="mobile-nav__link"
            :class="{ 'mobile-nav__link--active': activeSection === link.id }"
            @click="closeMenu"
          >
            {{ t(link.es, link.en) }}
          </a>
        </li>
      </ul>
      <button
        type="button"
        class="mobile-nav__lang"
        @click="toggleLanguage"
      >
        {{ isEnglish ? 'Español' : 'English' }}
      </button>
    </div>

    <div class="mobile-nav__bar">
      <button
        type="button"
        class="mobile-nav__toggle"
        :aria-expanded="menuOpen"
        aria-controls="mobile-bottom-menu"
        :aria-label="menuOpen ? t('Cerrar menú', 'Close menu') : t('Abrir menú', 'Open menu')"
        @click="toggleMenu"
      >
        <span class="mobile-nav__burger" :class="{ 'mobile-nav__burger--open': menuOpen }" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  </div>
</template>
