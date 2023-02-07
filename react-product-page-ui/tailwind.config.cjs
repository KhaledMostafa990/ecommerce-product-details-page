/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    extend: {
      fontFamily: {
        'primary-sans': `Kumbh Sans, sans-serif`,
      },

      fontSize: {
        sm: [
          '15px',
          {
            fontWeight: '400',
            lineHeight: '25px',
          },
        ],
        subtitle: [
          '12px',
          {
            fontWeight: '700',
          },
        ],
        base: [
          '16px',
          {
            fontWeight: '400',
          },
        ],
        lg: [
          '18px',
          {
            fontWeight: '700',
            lineHeight: '26px',
          },
        ],
        xl: [
          '28px',
          {
            fontWeight: '700',
            lineHeight: '28px',
          },
        ],
        '2xl': [
          '44px',
          {
            fontWeight: '700',
            lineHeight: '48px',
          },
        ],
      },

      colors: {
        primary: {
          default: '#FF7E1B',
        },
        bodytext: {
          base: '#69707D', // body color and primary color
        },
        heading: {
          base: '#2D314D', // primary heading color
        },
        background: {
          default: '#FFFFFF', // body background color
        },
      },
    },
  },
  plugins: [],
};
