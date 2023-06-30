/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: false,
  trailingComma: "all",
  singleQuote: true,
}

module.exports = config
