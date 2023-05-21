/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const customScreens = Object.assign({}, defaultTheme.screens);
// Remove last breakpoint
delete customScreens['2xl'];

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    screens: customScreens,
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          light: 'var(--primary-color-100)',
          dark: 'var(--primary-color-900)',
          hover: 'var(--primary-hover-color)',
          900: 'var(--primary-color-900)',
          800: 'var(--primary-color-800)',
          700: 'var(--primary-color-700)',
          600: 'var(--primary-color-600)',
          500: 'var(--primary-color-500)',
          400: 'var(--primary-color-400)',
          300: 'var(--primary-color-300)',
          200: 'var(--primary-color-200)',
          100: 'var(--primary-color-100)',
          50: 'var(--primary-color-50)',
        },
        light: {
          DEFAULT: 'var(--light-color)',
        },
        dark: {
          DEFAULT: 'var(--dark-color)',
          hover: 'var(--dark-hover-color)',
        },
        'light-font': {
          DEFAULT: 'var(--light-color)',
          hover: 'var(--light-font-hover-color)',
        },
        'dark-font': {
          DEFAULT: 'var(--dark-color)',
          hover: 'var(--dark-font-hover-color)',
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
