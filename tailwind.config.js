/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {

      colors: {
        customRed: 'rgba(253, 89, 86, 1)',
      },
      fontFamily:{
        poppines: "Poppins", 
      },
      
     screens:{ sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'}
     
  },
  plugins: [],
}
}



