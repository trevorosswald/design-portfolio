import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media', // System preference detection
  theme: {
    extend: {
      colors: {
        // Text colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-disabled': 'var(--text-disabled)',
        // Gray scale
        'gray-1': 'var(--gray-1)',
        'gray-3': 'var(--gray-3)',
        'gray-4': 'var(--gray-4)',
        'gray-8': 'var(--gray-8)',
        // Brown scale
        'brown-4': 'var(--brown-4)',
        // Button colors
        'button-secondary': 'var(--button-secondary)',
        'button-secondary-hover': 'var(--button-secondary-hover)',
        'button-ghost': 'var(--button-ghost)',
        'button-ghost-hover': 'var(--button-ghost-hover)',
        'button-disabled': 'var(--button-disabled)',
        // Icon colors
        'icon-primary': 'var(--icon-primary)',
        // Border colors
        'border-primary': 'var(--border-primary)',
        // Focus ring
        'purple-7': 'var(--purple-7)',
      },
      spacing: {
        // Design system tokens (extending Tailwind defaults)
        'ds-0': 'var(--spacing-0)',
        'ds-4': 'var(--spacing-4)',
        'ds-6': 'var(--spacing-6)',
        'ds-8': 'var(--spacing-8)',
        'ds-12': 'var(--spacing-12)',
        'ds-16': 'var(--spacing-16)',
        'ds-24': 'var(--spacing-24)',
        'ds-32': 'var(--spacing-32)',
        'ds-48': 'var(--spacing-48)',
        'ds-64': 'var(--spacing-64)',
        'ds-192': 'var(--spacing-192)',
        // Keep commonly used numeric values for convenience
        '192': '192px',
      },
      borderRadius: {
        '0': 'var(--radius-0)',
        '4': 'var(--radius-4)',
        '6': 'var(--radius-6)',
        '8': 'var(--radius-8)',
        '16': 'var(--radius-16)',
        '64': 'var(--radius-64)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
