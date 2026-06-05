import { ref, onMounted, onUnmounted, provide, inject } from 'vue'

const ActiveSectionKey = Symbol('activeSection')

const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'contact']

export const NAV_LINKS_DESKTOP = [
  { id: 'about', href: '#about', es: 'Sobre mí', en: 'About' },
  { id: 'experience', href: '#experience', es: 'Experiencia', en: 'Experience' },
  { id: 'skills', href: '#skills', es: 'Habilidades', en: 'Skills' },
  { id: 'contact', href: '#contact', es: 'Contacto', en: 'Contact' },
]

export const NAV_LINKS_MOBILE = [
  { id: 'home', href: '#home', es: 'Inicio', en: 'Home' },
  ...NAV_LINKS_DESKTOP,
]

function resolveActiveSection() {
  const marker = window.scrollY + window.innerHeight * 0.32
  let current = 'home'

  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= marker) current = id
  }

  return current
}

function isSectionReached(id) {
  const el = document.getElementById(id)
  if (!el) return true
  const marker = window.scrollY + window.innerHeight * 0.32
  return el.offsetTop <= marker
}

export function provideActiveSection() {
  const activeSection = ref('home')
  let lockedTarget = null

  const setNavigationTarget = (id) => {
    if (!SECTION_IDS.includes(id)) return
    lockedTarget = id
    activeSection.value = id
  }

  const update = () => {
    if (lockedTarget) {
      if (isSectionReached(lockedTarget)) {
        lockedTarget = null
      } else {
        return
      }
    }

    activeSection.value = resolveActiveSection()
  }

  const onDocumentClick = (e) => {
    const anchor = e.target.closest('a[href^="#"]')
    if (!anchor) return
    const id = anchor.getAttribute('href')?.slice(1)
    if (id) setNavigationTarget(id)
  }

  const onHashChange = () => {
    const id = location.hash.slice(1)
    if (id) setNavigationTarget(id)
  }

  onMounted(() => {
    if (!location.hash) {
      activeSection.value = 'home'
    } else {
      const id = location.hash.slice(1)
      if (SECTION_IDS.includes(id)) setNavigationTarget(id)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    document.addEventListener('click', onDocumentClick)
    window.addEventListener('hashchange', onHashChange)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
    document.removeEventListener('click', onDocumentClick)
    window.removeEventListener('hashchange', onHashChange)
  })

  provide(ActiveSectionKey, { activeSection })
}

export function useActiveSection() {
  const ctx = inject(ActiveSectionKey)
  if (!ctx) throw new Error('useActiveSection must be used within provideActiveSection')
  return ctx
}
