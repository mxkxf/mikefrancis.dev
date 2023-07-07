module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-work-sans)'],
      },
      screens: {
        print: {
          raw: 'print',
        },
      },
    },
  },
  plugins: [],
};
