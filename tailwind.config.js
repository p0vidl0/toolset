const production = !process.env.ROLLUP_WATCH;
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: [
      "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
}
