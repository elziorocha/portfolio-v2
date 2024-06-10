/** @type {import('tailwindcss').Config} */
import textShadowPlugin from 'tailwindcss-textshadow';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ['Nunito']
      },
      textShadow: {
        'default': '-2px 2px 1px rgba(0, 0, 0, 1)',
        'md': '-4px 3px 1px rgba(0, 0, 0, 1)',
        'lg': '-5px 4px 1px rgba(0, 0, 0, 1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 1)',
        'none': 'none',
      },
    },
  },
  plugins: [
    textShadowPlugin,
  ],
}

