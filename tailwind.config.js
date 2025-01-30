/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        darkBlue: '#0A5E9B',
        middleGrey: '#828282',
        lightPurple: '#E3E5F8',
      }
    },
    
  plugins: [],
}
}
