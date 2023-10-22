/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
      'dm-sans': ['DM Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
};
