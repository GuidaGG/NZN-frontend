/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'grun-lt': '#CCE5D8',
        'grun-dk': '#6CBE99',
        'oliv-lt': '#E3E4D7',
        'oliv-dk': '#A2C748',
      },
    },
  },
  plugins: [],
}

