/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      serif: ['"Playfair Display"', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        ink: '#0A0A0A',
        fog: '#F5F5F5',
        stone: '#A3A3A3'
      }
    }
  },
  plugins: []
}