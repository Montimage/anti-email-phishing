/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66aaff',
          400: '#338eff',
          500: '#0071f5', // Primary security-focused blue
          600: '#005dcc',
          700: '#0049a3',
          800: '#00357a',
          900: '#002252',
          950: '#00162e',
        },
      },
    },
  },
  plugins: [],
}