/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./hugo_stats.json'],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ['Oswald'],
        Montserrat: ['Montserrat'],
        IndexNumb: ['Antonio'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151',
          },
        },
      },
      content: {},
      height: {
        38: '9.5rem',
        120: '30rem',
        128: '32rem',
      },
      maxWidth: {
        250: '62.5rem', // 1000px
      },
      margin: {
        // '18': '4.5rem',
        22: '5.5rem',
        38: '9.5rem',
      },
      keyframes: {
        slideTop: {
          '0%': { transform: 'translateY(70px)' },
          '100%': { transform: 'translateY(0)' },
        },
        pingOnce: {
          '0%': { transform: 'scale(0.4)', opacity: 0.2 },
          '80%': { transform: 'scale(1.3)' },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        scaleInCenter: {
          '0%': {
            transform: 'scale(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
        scaleOutCenter: {
          '0%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(0)',
            opacity: 1,
          },
        },
      },
      animation: {
        slideTop: 'slideTop 0.5s linear both',
        pingOnce: 'pingOnce 0.5s ease-in-out both',
        scaleInCenter: 'scaleInCenter 0.5s linear both',
        scaleOutCenter: 'scaleOutCenter 0.5s linear both',
      },
    },
  },
  plugins: [require('flowbite-typography')],
};
