/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        f5f5f5: "#f5f5f5",
        "1c1c1c": "#1c1c1c"
      }
    }
  },
  plugins: []
  // corePlugins: {
  //   preflight: false
  // }
};
