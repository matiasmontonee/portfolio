<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import SectionHeading from '../components/SectionHeading.vue'
import SectionShell from '../components/SectionShell.vue'
import AboutSkeleton from '../components/skeletons/AboutSkeleton.vue'
import LazyImage from '../components/LazyImage.vue'
import Reveal from '../components/Reveal.vue'

const PROFILE_IMG = '/profile.jpg'
const { isEnglish, cvUrl, t } = useLanguage()

const paragraphs = computed(() =>
  isEnglish.value
    ? [
        'I am a Full Stack Developer focused on building digital products for e-commerce and SaaS. I work mainly with Vue.js, React, AdonisJS and SQL, developing internal systems, web applications and tools used by thousands of users in real-world environments.',
        'I am currently involved in developing platforms for merchants, creating new features, embedded applications and experiences aimed at business growth. I work alongside design, product and operations teams, always seeking maintainable, scalable and user-centered solutions.',
        'I am especially interested in software architecture, user experience, process optimization and building products that create real impact. I enjoy continuous learning and turning complex problems into simple, efficient solutions.',
      ]
    : [
        'Soy Desarrollador Full Stack enfocado en construir productos digitales para e-commerce y SaaS. Trabajo principalmente con Vue.js, React, AdonisJS y SQL, desarrollando sistemas internos, aplicaciones web y herramientas utilizadas por miles de usuarios en entornos reales.',
        'Actualmente participo en el desarrollo de plataformas para merchants, creando nuevas funcionalidades, aplicaciones embebidas y experiencias orientadas al crecimiento del negocio. Trabajo junto a equipos de diseño, producto y operaciones, buscando siempre soluciones mantenibles, escalables y centradas en el usuario.',
        'Me interesa especialmente la arquitectura de software, la experiencia de usuario, la optimización de procesos y el desarrollo de productos que generen impacto real. Disfruto aprender constantemente y transformar problemas complejos en soluciones simples y eficientes.',
      ]
)
</script>

<template>
  <SectionShell
    id="about"
    heading-id="about-heading"
    :aria-label="t('Sobre mí', 'About me')"
    :images="[PROFILE_IMG]"
    :min-ms="400"
    elevated
  >
    <template #skeleton>
      <AboutSkeleton />
    </template>

    <div class="about-grid">
      <div class="about-grid__heading">
        <SectionHeading
          id="about-heading"
          compact
          :title="t('Sobre mí', 'About me')"
          :subtitle="t(
            'Producto, e-commerce y software que escala.',
            'Product, e-commerce and software that scales.'
          )"
        />
      </div>
      <figure class="about-grid__photo">
        <Reveal :delay="120" :offset="12">
          <div class="profile-ring">
            <div class="profile-ring__inner">
              <LazyImage
                :src="PROFILE_IMG"
                :alt="t('Foto de perfil de Matías Montone', 'Matías Montone profile photo')"
                :width="300"
                :height="400"
                loading="lazy"
                img-class="profile-photo"
                skeleton-class="profile-photo-skeleton"
              />
            </div>
          </div>
        </Reveal>
      </figure>
      <div class="about-grid__body">
        <Reveal :delay="60">
          <div>
            <p
              v-for="(text, i) in paragraphs"
              :key="i"
              class="mb-4 max-w-2xl leading-relaxed text-muted"
            >
              {{ text }}
            </p>
            <a
              :href="cvUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-cv mt-6"
            >
              {{ t('Descargar currículum', 'Download resume') }}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  </SectionShell>
</template>
