/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}','node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    fontFamily:{
      'roboto':['Poppins', 'sans-serif']
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

