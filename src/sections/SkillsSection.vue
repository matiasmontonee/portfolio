<script setup>
import { useLanguage } from '../composables/useLanguage'
import SectionHeading from '../components/SectionHeading.vue'
import SectionShell from '../components/SectionShell.vue'
import SkillsSkeleton from '../components/skeletons/SkillsSkeleton.vue'
import SkillChip from '../components/SkillChip.vue'
import Reveal from '../components/Reveal.vue'
import { skillGroups } from '../data/skills'

const { isEnglish, t } = useLanguage()
</script>

<template>
  <SectionShell
    id="skills"
    heading-id="skills-heading"
    :aria-label="t('Habilidades técnicas', 'Technical skills')"
    :min-ms="400"
    elevated
  >
    <template #skeleton>
      <SkillsSkeleton />
    </template>

    <SectionHeading
      id="skills-heading"
      :title="t('Habilidades', 'Skills')"
      :subtitle="t(
        'Stack con el que trabajo día a día.',
        'Technologies I use day to day.'
      )"
    />

    <div class="grid gap-6 md:grid-cols-1">
      <Reveal
        v-for="(group, index) in skillGroups"
        :key="group.id"
        :delay="index * 60"
        :offset="10"
      >
        <div class="card p-6 md:p-7">
          <h3 class="mb-5 text-xs font-semibold uppercase tracking-wider text-accent">
            {{ isEnglish ? group.label.en : group.label.es }}
          </h3>
          <ul class="flex flex-wrap gap-3">
            <li v-for="skill in group.skills" :key="skill.name">
              <SkillChip :name="skill.name" :icon="skill.icon" />
            </li>
          </ul>
        </div>
      </Reveal>
    </div>
  </SectionShell>
</template>
