/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				darkblue: '#000115'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		darkTheme: 'dark',
		themes: [
			{
				dark: {
					// https://daisyui.com/docs/colors/
					'base-100': '#1d1d1d',
					'base-200': '#1b1b1b',
					'base-300': '#1a1a1a',
					'base-content': '#ffffff',

					primary: '#0184fd',
					secondary: '#005cb1',
					accent: '#ffffff',
					neutral: '#312e81',
					info: '#67e8f9',
					success: '#a3e635',
					warning: '#facc15',
					error: '#dc2626',

					fontFamily: 'Inter Variable, sans-serif'
				}
			}
		]
	}
};
