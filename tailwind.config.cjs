/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#70d0d8",
					secondary: "#db34ca",
					accent: "#d1d112",
					neutral: "#181E25",
					"base-100": "#3B3C44",
					info: "#81B0E9",
					success: "#3FDE89",
					warning: "#E1A014",
					error: "#E33F26",
				},
			},
		],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("daisyui"),
		require("prettier-plugin-tailwindcss"),
	],
};
