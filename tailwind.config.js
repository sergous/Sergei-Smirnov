/** @type {import('tailwindcss').Config} */
    export default {
      darkMode: 'class',
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            cosmicBlack: '#0A0A1F',
            cosmicPurple: '#1E1B4B',
            neonViolet: '#7C3AED',
            neonCyan: '#06B6D4',
            neonPink: '#EC4899',
            metallicSilver: '#D1D5DB',
          },
        },
      },
      plugins: [],
    }
