import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				body_bg: 'rgba(241, 243, 245, 1)',
				nav_lang_border: 'rgba(24, 165, 167, 0.2)',
				header_h1_color: "#F1F3F5",
				headerBlock: '#8de699',
				headerBlock1: '#18A5A7',
				headerBlock2: '#D69F5A',
				headerBlock3: '#383838',
				nav_button: 'rgba(24, 165, 167, 1)',
				nav_link: 'rgba(65, 64, 62, 1)',
				textRgb: 'rgba(255, 255, 255, 0.79)',
				mainBoxRgb: '#FFFFFF',
				main_h2_color: "#41403E",
				main_button_color: "#47546780",
				mainP: 'rgba(71, 84, 103, 1)',
				cardsBgPrimary: 'rgba(127, 86, 217, 1)',
				cardsBgSuccess: 'rgba(7, 148, 85, 1)',
				cardsBgBlue: 'rgba(21, 112, 239, 1)',
				cardsMainBg: 'rgba(245, 247, 250, 1)',
				cardBg: 'rgba(255, 255, 255, 1)',
				selectBg: 'rgba(234, 236, 240, 1)',
				footerBorder: '#EAECF0',
				footer_text_color: "#475467",
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
};
export default config;
