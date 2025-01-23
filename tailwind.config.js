/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_1: '#D9C5A6',
        primary_2: '#0E0E0E',
        secondary: {
          100: '#22211E',
          200: '#7F7366'
        },
      },
      fontFamily: {
        comfortaa: ['comfortaa'],
        fra: ['Days One']
      },
      width: {
        new: '48rem',
      },
      lineHeight: {
        leading15: '4rem',
        leading20: '6rem',
      },
      fontSize: {
        text4_5xl: '2.75rem',
      },
      screens: {
        screen3xl: '1920px',
        screen4xl: '2560px',
      },
      height: {
        height102: '26rem',
        height108: '30rem',
        height120: '40rem',
      },
      width: {
        w108: '30rem',
        w120: '40rem',
        w135: '50rem',
        w150: '60rem',
      },
      maxWidth: {
        w108: '30rem',
        w120: '40rem',
        w135: '50rem',
        w150: '60rem',
      }
    },
  },
  plugins: [],
};
