const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    textColor: {
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",
        ...colors
    },
    backgroundColor: {
      "primary" : "var(--color-primary)",
      "secondary" : "var(--color-secondary)",
        ...colors
    },
    extend: {},
  },
  plugins: [],
}
