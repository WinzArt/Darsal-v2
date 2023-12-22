/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0f172a',
        light: '#e2e8f0',
        primary: '#14b8a6',
      },
      aspectRatio: {
        '3/1': '3 / 1',
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '3/4.8': '3 / 4.8',
      },
    },
  },
  plugins: [],
}