/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const customScreens = Object.assign({}, defaultTheme.screens);
// Remove last breakpoint
delete customScreens['2xl'];

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: customScreens,
    extend: {},
  },
  plugins: [],
};
