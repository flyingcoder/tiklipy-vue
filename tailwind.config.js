/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'main-color': '#646cff'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
