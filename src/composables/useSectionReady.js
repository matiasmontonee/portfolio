import { ref, onMounted, onUnmounted } from 'vue'

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function preloadImage(src) {
  if (!src) return Promise.resolve()
  return new Promise((resolve) => {
    const img = new Image()
    img.decoding = 'async'
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

export function useSectionReady(sectionRef, options = {}) {
  const ready = ref(false)
  const {
    minMs = 380,
    images = [],
    eager = false,
    rootMargin = '120px 0px 80px 0px',
  } = options

  let observer = null
  let fallbackId = null

  const resolveReady = async () => {
    await Promise.all([
      delay(minMs),
      ...images.map((src) => preloadImage(src)),
    ])
    ready.value = true
  }

  const startReady = () => {
    observer?.disconnect()
    observer = null
    if (fallbackId !== null) {
      window.clearTimeout(fallbackId)
      fallbackId = null
    }
    resolveReady()
  }

  const isNearViewport = (el) => {
    const rect = el.getBoundingClientRect()
    const margin = 160
    return rect.top <= window.innerHeight + margin && rect.bottom >= -margin
  }

  onMounted(() => {
    const el = sectionRef.value
    if (!el || eager) {
      resolveReady()
      return
    }

    if (isNearViewport(el)) {
      startReady()
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        startReady()
      },
      { rootMargin, threshold: 0.01 }
    )
    observer.observe(el)

    fallbackId = window.setTimeout(() => {
      if (!ready.value) startReady()
    }, 8000)
  })

  onUnmounted(() => {
    observer?.disconnect()
    if (fallbackId !== null) window.clearTimeout(fallbackId)
  })

  return { ready }
}
