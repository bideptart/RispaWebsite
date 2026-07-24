export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rispa: {
          ink: '#0d2422',
          accent: '#21897e',
          accentDark: '#1a7268',
          mist: '#f2f3f7',
          border: '#d7e7e3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
