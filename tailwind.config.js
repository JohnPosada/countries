/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2b3945",
        "bg-darkest-blue": "#202c37",
        "text-darkest-blue": "#111517",
        "dark-gray": "#858585",
        "light-gray": "#fafafa",
      },
    },
    screens: {
      xs: "375px",
    },
  },
  plugins: [],
};
