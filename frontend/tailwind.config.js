/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'bebasNeue': ['Bebas Neue', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#9F294A",  // Custom Primary Color
        secondary: "#B69507", // Custom Secondary Color
        white: "#fff",       // White Color
        dark: "#333333",     // Dark Color
        transparent: "transparent", // Transparent Color
      },
      animation: {
        'slide': 'scroll 15s linear infinite', // Custom Scroll Animation
        'pulse': 'pulse 1.5s ease-in-out infinite', // Custom Pulse Animation
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulse: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.7 },
          '100%': { opacity: 1 },
        },
      },
      spacing: {
        '128': '32rem', // Custom Spacing (32rem)
        '144': '36rem', // Custom Spacing (36rem)
      },
      screens: {
        'xs': '480px',   // Custom XS screen size
        'sm': '640px',   // Default SM screen size (640px)
        'md': '768px',   // Default MD screen size (768px)
        'lg': '1024px',  // Default LG screen size (1024px)
        'xl': '1280px',  // Default XL screen size (1280px)
        '2xl': '1536px', // Default 2XL screen size (1536px)
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Tailwind Scrollbar Hide Plugin
  ],
};
