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
        raleway: ['var(--font-raleway)', ...fontFamily.sans],
      },
      colors: {
        'primary-dark': '#212529',
        'primary-light': '#ffffff',
        accent: '#dc4b74',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config
