/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'custom': '0px 60px 50px rgba(0, 0, 0, 0.748)',
    },
  },
  plugins: [],
}

