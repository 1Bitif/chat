/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
};
