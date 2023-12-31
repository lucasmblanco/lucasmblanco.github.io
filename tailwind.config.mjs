/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	 
		extend: {
			backgroundImage: {
				'conic-gradient': 'repeating-conic-gradient(from 0deg, hsl(150, 7%, 6%) 0% 25%, transparent 25% 50%, hsl(150, 7%, 6%) 50% 75%, transparent 75% 100%) 1px 0.5px / 2px 2px',
			},
			dropShadow: {
				light: '0 25px 25px hsl(54, 100%, 94% / 25%)',
				dark: '0 25px 25px hsl(150, 7%, 6% / 25%)'
			}, 

			fontSize: {
				smoll: '0.45rem', 
				xxs: '0.6rem'
			}, 
			boxShadow: {
				'footer': '0 -30px 20px 0px hsl(150, 7%, 6%)',
				'footer-light': '0 -30px 20px 0px hsl(54, 100%, 94%)',
				'wrapper': '5px 5px 1px 0px hsl(150, 7%, 6%)',
				'wrapper-light': '5px 5px 1px 0px hsl(54, 100%, 94%)', 
				// 'footer-light': '0 -30px 60px 20px rgba(231,231,231,255)' ---> apple grey
				// 'footer-light': '0 -30px 60px 20px #f5f5f4',
				
				
			}, 
			spacing: {
				'base-width': "min(100% - 3rem, 60ch)", 
				'icon-margin': 'var(--icon-margin)', 
			}, 
			colors: {
				karasubaido: 'hsl(313, 60%, 6%)', 
				'ume-nezu': 'hsl(349, 24%, 68%)',
				'toki-nezu': 'hsl(340, 25%, 86%)',
				'pure-black': 'hsl(150, 7%, 6%)', 
				'pure-white': 'hsl(54, 100%, 94%)',
				// 'pure-white': '#fffffe',
				// 'pure-white': 'rgba(231,231,231,255)', ---> grey apple
				// 'pure-white': '#fafafa',
				al: 'hsl(158, 12%, 62%)',
				'dark-grey': 'rgba(153,155,158,255)'
			},
			fontFamily: {
				oi: ['oi', ...defaultTheme.fontFamily.sans], 
				inconsolata: ['inconsolata', ...defaultTheme.fontFamily.serif],
				
				
			},
			objectPosition: {
				'm-position': '55% 50%'
			}
		},
	},
	plugins: [],
	darkMode: ['class','[data-theme="dark"]'],
}
