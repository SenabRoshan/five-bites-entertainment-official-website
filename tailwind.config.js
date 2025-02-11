/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8bc43f",
        secondary: "#000000"
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2.5rem",
          lg: "3rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },

      spacing: {
        '7.5': '30rem', // Add a custom spacing value
      }

    },
  },
  plugins: [],
}
