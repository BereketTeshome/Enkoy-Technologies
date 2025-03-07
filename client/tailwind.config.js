/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // other plugins
    require("tailwind-scrollbar-hide"),
  ],
};
