const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html"],
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
