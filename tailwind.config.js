const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: [
      './index.html',
      './src/**/*.jsx',
      './src/**/*.js',
    ],
  },
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      black: '#000000',
      white: '#ffffff',
      gray: {
        xlight: '#E9EAE9',
        light: '#575757',
        DEFAULT: '#333333',
        dark: '#191919'
      },
      turquoise: {
        DEFAULT: '#17C3B2'
      },
      yellow: {
        DEFAULT: '#FEC004'
      },
      blue: {
        DEFAULT: '#2274A5'
      }
    },
    spacing: {
      10: '10px',
      15: '15px',
      22: '22px',
      30: '30px',
      40: '40px',
      50: '50px',
      70: '70px',
      110: '110px',
      200: '200px',
      174: '174px',
      400: '400px',
    },
    borderRadius: {
      DEFAULT: '8px',
      10: '10px',
      30: '30px',
    }
  },
  variants: {},
  plugins: []
};
