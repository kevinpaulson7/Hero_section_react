/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "night-top": "#0A0A2A", // dark navy top
        "night-bottom": "#0D1B4C", // lighter bottom
      },
    },
  },
  plugins: [],
};
