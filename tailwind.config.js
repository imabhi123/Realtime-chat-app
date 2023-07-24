/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD

    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
=======
      
    },
  },
  plugins: [require('@tailwindcss/forms')({strategy:'class'})],
>>>>>>> 867ff84e7efde6625a2791d8014b1535aeba7073
}
