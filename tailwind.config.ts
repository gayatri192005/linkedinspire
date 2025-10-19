import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: {
          50: '#e6f4ff',
          100: '#cce8ff',
          200: '#99d1ff',
          300: '#66baff',
          400: '#33a3ff',
          500: '#0077B5',
          600: '#006299',
          700: '#004d7d',
          800: '#003961',
          900: '#002445',
        },
        secondary: {
          50: '#f5f5f5',
          100: '#e6e6e6',
          200: '#cccccc',
          300: '#b3b3b3',
          400: '#999999',
          500: '#313335',
          600: '#2c2e30',
          700: '#27292b',
          800: '#222426',
          900: '#1d1f21',
        },
        tertiary: {
          50: '#f8f8f9',
          100: '#f1f1f2',
          200: '#e3e3e5',
          300: '#d5d5d8',
          400: '#c7c7cb',
          500: '#86888A',
          600: '#787a7c',
          700: '#6a6c6e',
          800: '#5c5e60',
          900: '#4e5052',
        },
      },
      fontFamily: {
        sans: ['"Rethink Sans"', 'Inter', 'system-ui', 'sans-serif'],
        'rethink': ['"Rethink Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config