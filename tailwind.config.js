const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        height: {
          '70': '20rem'
        },
        colors: {
          green: {
            ...defaultTheme.colors.green,
            '200': '#5F7F4E',
            '800': '#375541'
          }
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }