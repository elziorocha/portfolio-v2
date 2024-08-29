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
      colors: {
        'email': '#ea4335',
        'whatsapp': '#1eb455',
        'github': '#8d26e7',
        'linkedin': '#0077B5',
      },
      boxShadow: {
        'inset': 'inset 0 3px 30px 10px rgba(0, 0, 0, 1)',
        'dark-inset' : 'inset 0 3px 25px 6px rgba(0, 0, 0, 1)',
        'contact': '-5px 5px 0 1px #ea580c, -8px 8px 0px 1px black, -3px 8px 0px 1px black, -8px 2px 0px 1px black',
        'dark-contact' : '-5px 5px 0 1px #4c1d95, -8px 8px 0px 1px black, -3px 8px 0px 1px black, -8px 2px 0px 1px black',
        'portfolio': '0 0 15px 10px rgba(0, 0, 0, 1)',
        'dark-portfolio': '0 0 15px 6px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    textShadowPlugin,
  ],
  darkMode: "class",
}

