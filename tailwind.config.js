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
        'lime-dk': '#64B445',
      },
      fontFamily: {
				nznMedium: ['CabinetGrotesk-Medium', 'sans-serif'],
				nznBold: ['CabinetGrotesk-Bold', 'sans-serif']
			},
      boxShadow: {
        'inner-top': 'inset 0 10px 6px -4px rgba(0, 0, 0, 0.4)',
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

