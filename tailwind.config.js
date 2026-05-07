/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f6f5f1',
          100: '#ecebe4',
          200: '#d3d1c4',
          300: '#a8a593',
          400: '#6f6d5e',
          500: '#3d3c34',
          600: '#2a2924',
          700: '#1d1c19',
          800: '#141411',
          900: '#0b0b09',
        },
        ember: {
          50: '#fdf6ef',
          100: '#f8e5cf',
          200: '#eec49a',
          300: '#e0a065',
          400: '#d07e3b',
          500: '#b5642a',
          600: '#914d22',
          700: '#6d3a1c',
          800: '#4a2714',
          900: '#2c170c',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
