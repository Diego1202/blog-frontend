/** @type {import('tailwindcss').Config} */
export default {
	
	content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
	theme: {
		extend: {
			colors: {
				primary: "#E8DFCA",
				background: "#F5EFE6",
				secondary : "#AEBDCA",
				tertiary : "#7895B2",
			},
		},
	},
	plugins: [],
}

