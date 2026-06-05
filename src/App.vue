<script setup>
import { defineAsyncComponent } from 'vue'
import { provideLanguage } from './composables/useLanguage'
import { provideTheme } from './composables/useTheme'
import { provideActiveSection } from './composables/useActiveSection'
import SkipLink from './components/SkipLink.vue'
import AppNav from './components/AppNav.vue'
import MobileBottomNav from './components/MobileBottomNav.vue'
import AppFooter from './components/AppFooter.vue'
import HeroSection from './sections/HeroSection.vue'
import AboutSkeleton from './components/skeletons/AboutSkeleton.vue'
import ExperienceSkeleton from './components/skeletons/ExperienceSkeleton.vue'
import SkillsSection from './sections/SkillsSection.vue'
import ContactSkeleton from './components/skeletons/ContactSkeleton.vue'

provideLanguage()
provideTheme()
provideActiveSection()

const AboutSection = defineAsyncComponent(() => import('./sections/AboutSection.vue'))
const ExperienceSection = defineAsyncComponent(() => import('./sections/ExperienceSection.vue'))
const ContactSection = defineAsyncComponent(() => import('./sections/ContactSection.vue'))

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

        <Suspense>
          <AboutSection />
          <template #fallback>
            <section id="about" class="section-bg--elevated border-t border-line" aria-hidden="true" aria-busy="true">
              <div class="section-pad mx-auto max-w-6xl">
                <AboutSkeleton />
              </div>
            </section>
          </template>
        </Suspense>

        <Suspense>
          <ExperienceSection />
          <template #fallback>
            <section id="experience" class="section-bg border-t border-line" aria-hidden="true" aria-busy="true">
              <div class="section-pad mx-auto max-w-6xl">
                <ExperienceSkeleton />
              </div>
            </section>
          </template>
        </Suspense>

        <SkillsSection />

        <Suspense>
          <ContactSection />
          <template #fallback>
            <section id="contact" class="section-bg border-t border-line" aria-hidden="true" aria-busy="true">
              <div class="section-pad mx-auto max-w-6xl">
                <ContactSkeleton />
              </div>
            </section>
          </template>
        </Suspense>
      </main>

      <AppFooter />
    </div>
  </div>
</template>
