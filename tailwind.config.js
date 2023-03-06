/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        etml: "#0060cf",
        "bic-blue": "#284283",
      },
      fontFamily: {
        logo: ['"Bank Gothic"'],
        handwriting: ['"segoe script"'],
      },
    },
  },
  plugins: [],
}
