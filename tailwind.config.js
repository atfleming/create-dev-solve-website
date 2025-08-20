export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'pastel-green': '#bff7cf',
        'deep-navy': '#071020'
      },
      fontFamily: {
        press: ['"Press Start 2P"', 'monospace'],
        vt: ['VT323', 'monospace']
      }
    }
  }
};