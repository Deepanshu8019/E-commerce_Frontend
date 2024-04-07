/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: { 
        width: { 
            '600': '100px', 
            '55.75': '55.75rem', 
        }, 
        height: { 
            '21.5':'21.5rem', 
        }, 
        ml:{
          '22':'22rem'
        }
    }, 
},
  plugins: [],
}



