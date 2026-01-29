/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#f2f2f2",
          dark: "#121212"
        },
        text: {
          light: {
            DEFAULT: "#121212",
            hover: "#545252"
          },
          dark: {
            DEFAULT: "#f2f2f2",
            hover: "#c9c6c6"
          }
        },
        primary: {
          DEFAULT: "#387780",
          darker: "#2E6169",
          darkest: "#265157",
        },
        secondary: {
          DEFAULT: "#E83151",
          darker: "#C92A45",
          darkest: "#A82237",
        },
        accent: "#A8A381",
        surface: {
          light: "#F9F9F9",
          dark: "#1B1B1B"
        },
        border: {
          light: "#C4C4C4",
          dark: "#4C4C4C"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Inria Serif", "serif"]
      },
    },
  },
  plugins: [],
}
