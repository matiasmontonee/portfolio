/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: 'var(--c-surface)',
        elevated: 'var(--c-elevated)',
        ink: 'var(--c-ink)',
        muted: 'var(--c-muted)',
        line: 'var(--c-line)',
        accent: 'var(--c-accent)',
        skeleton: 'var(--c-skeleton)',
      },
    },
  },
  plugins: [],
}
