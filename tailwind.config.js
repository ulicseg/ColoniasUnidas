/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            DEFAULT: '#477f32',
            light: '#eff6ec',
            border: '#c4dcbe',
            hover: '#3a6929',
            dark: '#2c501f',
          },
          amber: {
            DEFAULT: '#d97706',
            light: '#fef8ee',
            border: '#fde4b8',
            hover: '#b45309',
            dark: '#853b05',
          }
        },
        neutral: {
          50: '#f8f9f8',
          100: '#f0f2f0',
          200: '#e2e5e2',
          300: '#cbcfcb',
          400: '#9d9d9d',
          500: '#6b706c',
          600: '#515552',
          700: '#393c39',
          800: '#232623',
          900: '#121412',
          950: '#090a09',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'liberation mono', 'courier new', 'monospace'],
      }
    },
  },
  plugins: [],
}
