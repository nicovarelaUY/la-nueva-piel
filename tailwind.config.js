/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js'
  ],
  theme: {

    colors: {
      primary: '#FFB400',
      secondary: '#333333',
      gris: '#686868',
    },

    extend: {
      colors: {
        'principal_1': '#FFB400',
        'principal_2': '#333333',
        'blanco': '#FFFFFF',
        'negro': '#000000',
        'gris': '#686868',
        
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
}
