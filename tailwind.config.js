module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px' 
    },
    extend: {
      width: {
        '100': '25rem',
      },
      fontFamily: {
        'manrope': "'Manrope', sans-serif",
      },
      colors: {
        primary: '#0094FF',
        primaryHover: '#008EF5',
        secondary: '#cfebff',
        secondaryHover: '#cfebff',
        secondaryLight: '#e6f4ff',
        error: '#F7F7F7',
        attention: '#FFA938',
        success: '#53B9D0',
        gray: {
          '100': '#F9F9F9',
          '200': '#EDEDEE',
          '300': '#E0E1E3',
          '400': '#737D82',
          '500': '#626270',
          '600': '#16262E',
        },
      },
    },
  },
  plugins: [],
}
