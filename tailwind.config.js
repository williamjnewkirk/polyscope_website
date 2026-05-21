/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ps: {
          black:   '#0A0A0C',
          surface: '#111115',
          card:    '#17171C',
          border:  '#252530',
          green:   '#18B974',
          'green-dim': '#0E6B44',
          orange:  '#D4612E',
          text:    '#EFEFF2',
          muted:   '#7C7C92',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        marquee:        'marquee 32s linear infinite',
        float:          'float 6s ease-in-out infinite',
        'float-slow':   'float 8s ease-in-out infinite',
        'scroll-up':    'scroll-up 22s linear infinite',
        'pulse-dot':    'pulse-dot 2s ease-in-out infinite',
        'fade-in-up':   'fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        'scroll-up': {
          '0%':   { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.8)' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
