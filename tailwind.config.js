/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    fontFamily: {
      nunito: '"Nunito Sans", sans-serif',
    },
    fontSize: {
      xxs: ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  plugins: [],
};
