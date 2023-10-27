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
      fontFamily: {
				medium: ['CabinetGrotesk-Medium', 'sans-serif'],
				bold: ['CabinetGrotesk-Bold', 'sans-serif']
			},
    },
    fontSize: {
			'2xl': ['var(--nzn-text-2xl)', 'var(--nzn-line-2xl)'],
			xl: ['var(--nzn-text-xl)', 'var(--nzn-line-xl)'],
			base: ['var(--nzn-text-base)', 'var(--nzn-line-base)'],
			sm: ['var(--nzn-text-sm)', 'var(--nzn-line-sm)'],
			xs: ['var(--nzn-text-xs)', 'var(--nzn-line-sm)']
		},
  },
  plugins: [],
}

