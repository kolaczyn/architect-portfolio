module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Lato',
      serif: 'Alegreya',
    },
    extend: {
      colors: {
        white: '#efefef',
        'light-gray': '#E8E8E8',
        'medium-gray': '#A3A3A9',
        'dark-gray': '#363640',
        black: '#07070A',
        primary: '#42689C',
        'primary-dark': '#355068',
      },
      opacity: {
        85: '.85',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
