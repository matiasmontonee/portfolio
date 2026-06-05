import { ref, computed, watch, provide, inject, onMounted, onUnmounted } from 'vue'

const ThemeKey = Symbol('theme')

const STORAGE_KEY = 'portfolio-theme'

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {}
  return null
}

function applyThemeClass(theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme

  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#0b1120' : '#fafafa')
  }
}

export function provideTheme() {
  const theme = ref(readStoredTheme() ?? getSystemTheme())

  const isDark = computed(() => theme.value === 'dark')

  const setTheme = (value) => {
    theme.value = value === 'dark' ? 'dark' : 'light'
  }

  const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  watch(
    theme,
    (value) => {
      applyThemeClass(value)
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch {}
    },
    { immediate: true }
  )

  let mq = null
  let onSystemThemeChange = null

  onMounted(() => {
    mq = window.matchMedia('(prefers-color-scheme: dark)')
    onSystemThemeChange = () => {
      if (!readStoredTheme()) setTheme(mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener('change', onSystemThemeChange)
  })

  onUnmounted(() => {
    if (mq && onSystemThemeChange) {
      mq.removeEventListener('change', onSystemThemeChange)
    }
  })

  provide(ThemeKey, { isDark, toggleTheme })
}

export function useTheme() {
  const ctx = inject(ThemeKey)
  if (!ctx) throw new Error('useTheme must be used within provideTheme')
  return ctx
}
