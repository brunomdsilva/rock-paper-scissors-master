/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Barlow Semi Condensed", "sans-serif"],
			},
			screens: {
				xs: "375px",
			},
			colors: {
				primary: {
					dark: "hsl(229, 25%, 31%)",
					blue: "hsl(229, 64%, 46%)",
					light: "hsl(217, 16%, 45%)",
				},
			},
		},
	},
	plugins: [],
};
