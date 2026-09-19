/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FFF5F0',
          100: '#FFE6D9',
          200: '#FFCCB3',
          300: '#FF9E80',
          400: '#FF754D',
          500: '#FF5E2B', // Vibrant Coral / Orange Accent
          600: '#E64415',
          700: '#CC330D',
          800: '#992205',
          900: '#661400',
        },
        dark: {
          bg: '#0A0C0E',
          surface: '#121519',
          card: '#181C23',
          border: '#262C38',
          hover: '#1F2530',
        },
        light: {
          bg: '#FAFAFA',
          surface: '#F3F4F6',
          card: '#FFFFFF',
          border: '#E5E7EB',
          hover: '#EDF0F5',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Space Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
