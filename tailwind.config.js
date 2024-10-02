/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        f5f5f5: "#f5f5f5",
        "2a2a2a": "#2a2a2a"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
