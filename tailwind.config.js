/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", // Light Blue
        secondary: "#50E3C2", // Soft Green
        background: "#F5F7FA", // Very Light Gray
        text: "#333333", // Dark Gray
        accent: "#FF6F61", // Coral
      },
    },
  },
  plugins: [],
};
