<script setup>
import { useLanguage } from '../composables/useLanguage'
import SectionShell from '../components/SectionShell.vue'
import HeroSkeleton from '../components/skeletons/HeroSkeleton.vue'
import Reveal from '../components/Reveal.vue'

const { t } = useLanguage()
</script>

<template>
  <SectionShell
    id="home"
    :aria-label="t('Inicio', 'Home')"
    :eager="true"
    :min-ms="420"
    borderless
    compact-pad
    full-viewport
  >
    <template #skeleton>
      <HeroSkeleton />
    </template>

    <div class="hero-content">
      <Reveal eager :delay="0">
        <div class="badge w-fit">
          <span class="badge-dot" aria-hidden="true" />
          {{ t('Buenos Aires, Argentina', 'Buenos Aires, Argentina') }}
        </div>
      </Reveal>

      <Reveal eager :delay="80">
        <h1 class="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-7xl">
          <span class="text-ink">Matías </span>
          <span class="text-gradient">Montone</span>
        </h1>
      </Reveal>

      <Reveal eager :delay="160">
        <p class="mt-5 max-w-2xl text-xl font-medium text-ink md:text-2xl">
          {{ t(
            'Desarrollador Full Stack orientado a producto',
            'Product-oriented Full Stack Developer'
          ) }}
        </p>
      </Reveal>

      <Reveal eager :delay="220">
        <p class="mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {{ t(
            'Desarrollo de aplicaciones web para e-commerce y herramientas SaaS - sistemas internos, apps embebidas, sincronización de datos y arquitectura escalable.',
            'Development of web applications for e-commerce and SaaS tools - internal systems, embedded apps, data synchronization and scalable architecture.'
          ) }}
        </p>
      </Reveal>

      <Reveal eager :delay="280">
        <nav class="mt-10 flex flex-wrap gap-3" aria-label="Acciones principales">
          <a href="#about" class="btn-primary rounded-full px-7 py-3 text-sm font-semibold transition">
            {{ t('Sobre mí', 'About me') }}
          </a>
          <a href="#contact" class="btn-secondary">
            {{ t('Contacto', 'Contact') }}
          </a>
        </nav>
      </Reveal>

      <Reveal eager :delay="340" :offset="10">
        <nav class="social-links mt-10" :aria-label="t('Perfiles y correo', 'Profiles and email')">
          <a
            href="https://github.com/matiasmontonee"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >GitHub</a>
          <a
            href="https://www.linkedin.com/in/matiasmontone/"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >LinkedIn</a>
          <a
            href="mailto:matiasmontonedev@gmail.com"
            class="social-link social-link--mail"
          >Email</a>
        </nav>
      </Reveal>
    </div>
  </SectionShell>
</template>
