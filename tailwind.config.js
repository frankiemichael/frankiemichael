import colors from 'tailwindcss/colors.js';

/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.amber['600'],
        secondary: colors.teal['600'],
        'dark-light': 'var(--vt-c-text-dark-2)',
      },
    },
  },
  safelist: [
    {
      pattern: /bg-(.+)/, // Matches dynamic background colors
    },
    {
      pattern: /hover:bg-(.+)/, // Matches hover states
    },
    {
      pattern: /text-(.+)/, // Matches dynamic text colors
    },
  ],
  plugins: [],
};
