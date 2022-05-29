module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-text': '#fae5df',
        'c-bg': '#f5cac2',
        'c-action': '#ed7966',
        'c-blue': '#303179',
        'c-dark': '#141850',
        'c-l-green': '#EBF9FA',
        'c-orange': '#FF6225',
        'c-b': '#373775',
        'c-green': '#1FC4C6',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
