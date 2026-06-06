<script setup>
import { provideLanguage } from './composables/useLanguage'
import { provideTheme } from './composables/useTheme'
import { provideActiveSection } from './composables/useActiveSection'
import SkipLink from './components/SkipLink.vue'
import AppNav from './components/AppNav.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSection from './sections/AboutSection.vue'
import ExperienceSection from './sections/ExperienceSection.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ContactSection from './sections/ContactSection.vue'

provideLanguage()
provideTheme()
provideActiveSection()

</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <div class="page-aurora" aria-hidden="true" />
    <div class="page-backdrop" aria-hidden="true" />
    <div class="page-grid" aria-hidden="true" />

    <div class="content-layer">
      <SkipLink />
      <AppNav />
      <MobileBottomNav />

      <main id="main-content" class="main-with-mobile-nav" tabindex="-1">
        <HeroSection />

        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <AppFooter />
    </div>
  </div>
</template>
