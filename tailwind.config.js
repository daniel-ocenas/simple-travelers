/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: {
          light: '#3c3c48',
          // light: '#2e3039',
          base: '#eeeeee',
          dark: '#1f2028',
        },
        dividerShadow: {
          light: '#f7f7f7',
          dark: '#1f2028',
        },
      },
      fontFamily: { nunito: 'var(--font-nunito), sans-serif' },
      textShadow: {
        custom:
          '2px 3px 3px rgba(255, 255, 255, 0.75), -3px 3px 3px rgba(255, 255, 255, 0.75), 1px -3px 3px rgba(255, 255, 255, 0.75), -3px -3px 3px rgba(255, 255, 255, 0.75)',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    },
  ],

  darkMode: 'class',
};
