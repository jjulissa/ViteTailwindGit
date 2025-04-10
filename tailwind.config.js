/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: { 
      fontFamily: {
          'fontFam': ['Outfit', 'cursive', 'Monoton', 'sans-serif'],
        },  
        
      extend: { 
  
        colors: {
        'gris': '#515051', 

        } 
  
      },
    },
    plugins: [],
  }