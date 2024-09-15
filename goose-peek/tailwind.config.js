/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#1A2940',
        secondary:'#FFFFFF',
        tertiary:'#B6FFB0',
      },
      fontFamily:{
        body:['Inter']
     }
    },
  },
  plugins: [],
}