/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a365d',
        secondary: '#4a5568',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
        'button': '8px',
      },
      screens: {
        'xs': '480px',
      }
    },
  },
  plugins: [],
};