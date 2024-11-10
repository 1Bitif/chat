/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,jsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8000FF", // Light Blue
        secondary: "#D1B3FF", // Soft Green
        background: "#F5F7FA", // Very Light Gray
        text: "#333333", // Dark Gray
        accent: "#FF6F61", // Coral
      },
    },
  },
  plugins: [],
});
