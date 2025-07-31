/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/UI/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f6f3',
        title: '#0d0d0d',
        primary: '#88ab8e',
        'primary-dark': '#6c8872',
        'primary-light': '#b0ccb5',
        secondary: '#d5e4f6',
        'secondary-dark': '#f6bc7a',
        'secondary-light': '#fce8d5',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        default: '3px',
      },
    },
  },
  plugins: [],
};
