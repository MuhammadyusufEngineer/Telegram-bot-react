/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2026',
        secondary: '#1f202620',
        lowlight: '#ECEEF2'
      },
      fontFamily: {
        tr: ["tr"],
        tm: ["tm"],
        tsb: ["tsb"],
        tb: ["tb"],
        ir: ["ir"],
        isb: ["isb"],
      },
    },
  },
  plugins: [],
}