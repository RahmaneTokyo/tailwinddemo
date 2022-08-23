/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding: { "fluid-video": "56.25%" }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      adelia: ["ADELIA", "cursive"],
      fredoka: ["Fredoka One", "serif"],
      rubik: ["Silkscreen", 'serif']
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
