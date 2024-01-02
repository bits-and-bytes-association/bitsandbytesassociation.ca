/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const customScreens = { ...defaultTheme.screens };
// Remove last breakpoint
delete customScreens['2xl'];

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: customScreens,
    extend: {
      fontFamily: {
        sans: ['var(--font-fira-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          DEFAULT: '#51aae1',
          900: '#1b6b9d',
          800: '#1f7db7',
          700: '#238fd1',
          600: '#369ddd',
          500: '#51aae1',
          400: '#6bb7e6',
          300: '#85c3ea',
          200: '#9fd0ef',
          100: '#b9ddf3',
          50: '#d3eaf8',
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
