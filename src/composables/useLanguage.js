import { ref, computed, provide, inject, watch } from 'vue'

const LanguageKey = Symbol('language')

export function provideLanguage() {
  const locale = ref('es')

  const isEnglish = computed(() => locale.value === 'en')
  const cvUrl = computed(() =>
    isEnglish.value ? '/EN-MATIAS-MONTONE.pdf' : '/ES-MATIAS-MONTONE.pdf'
  )

  const toggleLanguage = () => {
    locale.value = locale.value === 'es' ? 'en' : 'es'
  }

  const t = (es, en) => (isEnglish.value ? en : es)

  watch(
    locale,
    (value) => {
      if (typeof document !== 'undefined') {
        document.documentElement.lang = value === 'en' ? 'en' : 'es'
      }
    },
    { immediate: true }
  )

  provide(LanguageKey, { isEnglish, cvUrl, toggleLanguage, t })
}

export function useLanguage() {
  const ctx = inject(LanguageKey)
  if (!ctx) throw new Error('useLanguage must be used within provideLanguage')
  return ctx
}
