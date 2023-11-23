/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
// const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	 
		extend: {
			fontSize: {
				smoll: '0.5rem', 
				xxs: '0.6rem'
			}, 
			boxShadow: {
				'footer': '0 -30px 60px 20px hsl(150, 7%, 6%)',
				'footer-light': '0 -30px 60px 20px hsl(54, 100%, 94%)'
			}, 
			spacing: {
				'base-width': "min(100% - 3rem, 65ch)"
			}, 
			colors: {
				karasubaido: 'hsl(313, 60%, 6%)', 
				'ume-nezu': 'hsl(349, 24%, 68%)',
				'toki-nezu': 'hsl(340, 25%, 86%)',
				'pure-black': 'hsl(150, 7%, 6%)', 
				'pure-white': 'hsl(54, 100%, 94%)'
			},
			fontFamily: {
				sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
				'roboto-mono': ['Roboto Mono', ...defaultTheme.fontFamily.sans],
				lora: ["Lora Variable", ...defaultTheme.fontFamily.serif]
			},
			
		},
	},
	plugins: [],
	darkMode: ['class','[data-theme="dark"]'],
}
