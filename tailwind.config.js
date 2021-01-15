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
      backgroundImage: (theme) => ({
        bedroom: "url('/images/bedroom.jpeg')",
        beachView: 'url("/images/beach-view.jpeg")',
        houses: 'url("/images/houses.jpeg")',
        livingroom: 'url("/images/livingroom.jpeg")',
        ocean: 'url("/images/ocean.jpeg")',
        stairs: 'url("/images/stairs.jpeg")',
        first: 'url("/images/first-floor.jpeg")',
        second: 'url("/images/second-floor.jpeg")',
        ground: 'url("/images/ground-floor.jpeg")',
        fullHouse: 'url("/images/les-pieds-rouges.jpeg")',
      }),
      height: {
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
        menu: "185px",
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
