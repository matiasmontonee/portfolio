import { ref, onMounted } from 'vue'

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
  const { minMs = 380, images = [] } = options

  let started = false

  const resolveReady = async () => {
    if (started) return
    started = true

    await Promise.all([
      delay(minMs),
      ...images.map((src) => preloadImage(src)),
    ])
    ready.value = true
  }

  onMounted(() => {
    if (sectionRef.value) resolveReady()
  })

  return { ready }
}
