/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e5e5e0',
        DarkLava: '#393632',
        SageGray: '#8b8b73',
        gold: '#cfa355',
      },
      fontFamily: {
        amiamie: ['Amiamie', 'sans-serif'],
        'amiamie-round': ['Amiamie-Round', 'sans-serif'],
      },
      lineHeight: {
        '16': '4rem',
        '20': '5rem',
      },
      animation: {
        marquee: 'marquee 40s infinite linear',
        'marquee-reverse': 'marquee-reverse 40s infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};