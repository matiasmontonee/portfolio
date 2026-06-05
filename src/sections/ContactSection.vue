<script setup>
import { useLanguage } from '../composables/useLanguage'
import SectionHeading from '../components/SectionHeading.vue'
import SectionShell from '../components/SectionShell.vue'
import ContactSkeleton from '../components/skeletons/ContactSkeleton.vue'
import Reveal from '../components/Reveal.vue'

const { t } = useLanguage()

const channels = [
  {
    label: 'Email',
    value: 'matiasmontonedev@gmail.com',
    href: 'mailto:matiasmontonedev@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'matiasmontone',
    href: 'https://www.linkedin.com/in/matiasmontone/',
  },
  {
    label: 'WhatsApp',
    value: '+54 9 11 3350-1860',
    href: 'https://wa.me/+5491133501860',
  },
]
</script>

<template>
  <SectionShell
    id="contact"
    heading-id="contact-heading"
    :aria-label="t('Información de contacto', 'Contact information')"
    :min-ms="380"
  >
    <template #skeleton>
      <ContactSkeleton />
    </template>

    <SectionHeading
      id="contact-heading"
      :title="t('Contacto', 'Contact')"
      :subtitle="t(
        'Si creés que mi perfil puede aportar valor a tu equipo o proyecto, no dudes en contactarme.',
        'If you think my profile could add value to your team or project, feel free to reach out.'
      )"
    />

    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(channel, index) in channels"
        :key="channel.label"
      >
        <Reveal :delay="index * 55" :offset="10">
          <a
            :href="channel.href"
            class="contact-card card card-interactive group block h-full p-6"
            :target="channel.href.startsWith('http') ? '_blank' : undefined"
            :rel="channel.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            :aria-label="`${channel.label}: ${channel.value}`"
          >
            <p class="text-xs font-semibold uppercase tracking-wider text-accent">
              {{ channel.label }}
            </p>
            <p class="contact-card__value mt-3 font-display text-lg font-medium text-ink">
              {{ channel.value }}
            </p>
          </a>
        </Reveal>
      </li>
    </ul>
  </SectionShell>
</template>
