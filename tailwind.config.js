const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    content: ["./pages/**/*.js", "./components/**/*.js"],
    options: {
      safelist: [/^bg-/],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        square: "calc(calc(100vw - 100px - 4rem)/3)",
        smallsquare: "calc(100vw - 50px - 2rem)",
        xs: "20rem",
        md: "30rem",
        lg: "35rem",
        xl: "40rem",
      },
      inset: {
        "1/6": "16%",
        42: "42%",
        35: "35%",
      },
      minWidth: {
        "6rem": "6rem",
      },
      spacing: {
        "7px": "7px",
      },
      width: {
        sm: "186.66px",
        md: "504px",
        menu: "184px",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
