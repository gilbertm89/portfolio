/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      height: {
        h100: "100px",
        h100vh: "100vh",
        h200: "200px",
        h1px: "1px",
      },
      width: {
        w100: "100px",
        w200: "200px",
        w250: "250px",
      },
      minWidth: {
        card: "280px",
      },
      colors: {
        card: "#30363d",
        darkgreen: "#17a096",
        lightgreen: "#63e6be",
        headergray: "#eeeeee",
        bar: "#2f3d4f",
      },
    },
  },
  plugins: [],
};
