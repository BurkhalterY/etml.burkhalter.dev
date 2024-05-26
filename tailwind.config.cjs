/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        etml: "#004595",
        "bic-blue": "#284283",
      },
      fontFamily: {
        logo: ['"Bank Gothic"'],
        handwriting: ['"segoe script"'],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      lineHeight: {
        "2/3": "0.666667em",
      },
    },
  },
  plugins: [],
}
