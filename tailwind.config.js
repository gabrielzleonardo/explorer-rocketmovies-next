/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      backgroundImage: {
        "login": "url('/bg-login.png')",
      },
      colors: {
        primary: "#FF859B",
      },
    },
    fontFamily: {
      slab: ["var(--font-slab)", "serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
