<script setup>
import { useLanguage } from '../composables/useLanguage'
import SectionHeading from '../components/SectionHeading.vue'
import SectionShell from '../components/SectionShell.vue'
import ExperienceSkeleton from '../components/skeletons/ExperienceSkeleton.vue'
import Reveal from '../components/Reveal.vue'
import { experienceItems, educationItem, techColorHex } from '../data/experience'

const { isEnglish, t } = useLanguage()
</script>

<template>
  <SectionShell
    id="experience"
    heading-id="experience-heading"
    :aria-label="t('Experiencia laboral', 'Work experience')"
    :min-ms="450"
  >
    <template #skeleton>
      <ExperienceSkeleton />
    </template>

    <SectionHeading
      id="experience-heading"
      :title="t('Experiencia', 'Experience')"
      :subtitle="t(
        'Trayectoria profesional y formación.',
        'Professional background and education.'
      )"
    />

    <div class="space-y-6">
      <Reveal
        v-for="(job, index) in experienceItems"
        :key="job.id"
        :delay="index * 70"
        :offset="12"
      >
        <article
          class="card card-interactive overflow-hidden p-6 md:p-8"
          :class="job.id === 'leren' ? 'ring-accent-soft' : ''"
        >
          <div class="grid gap-6 md:grid-cols-[220px_1fr] md:gap-10">
            <header class="md:border-r md:border-line md:pr-8">
              <time
                class="text-xs font-semibold uppercase tracking-wider text-accent"
                :datetime="job.period.datetime"
              >
                {{ isEnglish ? job.period.en : job.period.es }}
              </time>
              <h3 class="mt-2 font-display text-xl font-semibold">
                <template v-if="job.links?.length">
                  <template v-for="(link, linkIndex) in job.links" :key="link.href">
                    <span v-if="linkIndex > 0" class="text-muted font-normal" aria-hidden="true"> · </span>
                    <a
                      :href="link.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="exp-company-link text-ink"
                      :aria-label="`${link.label || job.company} (${t('sitio web', 'website')})`"
                    >
                      {{ link.label || job.company }}
                    </a>
                  </template>
                </template>
                <span v-else class="text-ink">{{ job.company }}</span>
              </h3>
              <p class="mt-1 text-sm text-muted">
                {{ isEnglish ? job.role.en : job.role.es }}
              </p>
            </header>
            <div>
              <p class="leading-relaxed text-muted">
                {{ isEnglish ? job.summary.en : job.summary.es }}
              </p>
              <ul class="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                <li
                  v-for="(item, idx) in (isEnglish ? job.highlights.en : job.highlights.es)"
                  :key="idx"
                  class="flex gap-3"
                >
                  <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{{ item }}</span>
                </li>
              </ul>
              <ul class="mt-5 flex flex-wrap gap-2" :aria-label="t('Tecnologías', 'Technologies')">
                <li
                  v-for="tag in job.tags"
                  :key="tag"
                  class="exp-tech-tag"
                  :style="{ '--tag-hex': `#${techColorHex(tag)}` }"
                >
                  {{ tag }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </Reveal>
    </div>

    <Reveal :delay="80">
      <article class="card card-interactive mt-8 overflow-hidden p-6 md:p-8">
        <p class="text-xs font-semibold uppercase tracking-wider text-accent">
          {{ t('Educación', 'Education') }}
        </p>
        <h3 class="mt-2 font-display text-xl font-semibold text-ink">
          {{ isEnglish ? educationItem.degree.en : educationItem.degree.es }}
        </h3>
        <p class="mt-1 text-sm text-muted">
          <a
            v-if="educationItem.href"
            :href="educationItem.href"
            target="_blank"
            rel="noopener noreferrer"
            class="exp-company-link"
            :aria-label="`${isEnglish ? educationItem.school.en : educationItem.school.es} (${t('sitio web', 'website')})`"
          >
            {{ isEnglish ? educationItem.school.en : educationItem.school.es }}
          </a>
          <span v-else>{{ isEnglish ? educationItem.school.en : educationItem.school.es }}</span>
          ·
          <time :datetime="educationItem.period.datetime">
            {{ isEnglish ? educationItem.period.en : educationItem.period.es }}
          </time>
        </p>
        <p class="mt-3 text-sm leading-relaxed text-muted">
          {{ isEnglish ? educationItem.details.en : educationItem.details.es }}
        </p>
      </article>
    </Reveal>
  </SectionShell>
</template>
