import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#ce2949",
        "secondary": "#0097e6",
        "background": "#1b1b1f",
        "lightgray": "#32363f",
        'lightlightgray': "#555c6b",
        "card": "#202127"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
