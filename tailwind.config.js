/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        128: '28.5rem',
      },
      colors: {
        lightGreen: '#60b246',
      },
    },
  },
  plugins: [],
};
