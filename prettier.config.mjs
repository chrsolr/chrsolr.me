/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  trailingComma: 'all',
  semi: false,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: false,
  plugins: ['prettier-plugin-tailwindcss'],
}

export default config
