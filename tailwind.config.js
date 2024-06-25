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
        secondary: 'rgb(27, 33, 73)',
        lowlight: '#ECEEF2',
        lowdark: 'rgba(0,0,0,.3)',
        blue: '#1649FF'
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
    animation: {
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) 1;"
    }
  },
  plugins: [],
}