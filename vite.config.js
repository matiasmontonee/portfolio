import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function charsetFirst() {
  const CHARSET = '<meta charset="UTF-8">'

  const moveCharsetFirst = (html) => {
    const without = html.replace(/\s*<meta\s+charset=["']UTF-8["']\s*\/?>\s*/gi, '')
    return without.replace(/<head([^>]*)>/i, `<head$1>${CHARSET}`)
  }

  return {
    name: 'charset-first',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        return moveCharsetFirst(html)
      },
    },
    closeBundle() {
      const file = resolve(__dirname, 'dist/index.html')
      try {
        writeFileSync(file, moveCharsetFirst(readFileSync(file, 'utf8')))
      } catch {}
    },
  }
}

export default defineConfig({
  plugins: [vue(), charsetFirst()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('/sections/')) return 'sections'
        },
      },
    },
  },
})
