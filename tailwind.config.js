/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none',  /* IE 10+ */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          width: '0px',
          background: 'transparent', /* Chrome/Safari/Webkit */
        }
      }
      addUtilities(newUtilities)
    }
  ]
}