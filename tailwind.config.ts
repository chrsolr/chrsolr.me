import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        ubuntuMono: ['var(--font-ubuntu-mono)', ...fontFamily.sans],
      },
      colors: {
        'primary-dark': '#212529',
        'primary-light': '#ffffff',
        'text-primary-light': '#555',
        'fg-light': '#333',
        'fg-light-deep': '#000',
        'fg-light-subtle': '#555',
        'fg-dark': '#eee',
        'fg-dark-deep': '#fff',
        'fg-dark-subtle': '#bbb',
        accent: '#dc4b74',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
