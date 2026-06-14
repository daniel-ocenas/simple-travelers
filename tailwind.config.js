/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Color tokens live in the `@theme` block in src/styles/globals.css (Tailwind v4).
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
