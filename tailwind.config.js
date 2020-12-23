const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        bedroom: "url('/images/bedroom.jpeg')",
        beachView: 'url("/images/beach-view.jpeg")',
        houses: 'url("/images/houses.jpeg")',
        livingroom: 'url("/images/livingroom.jpeg")',
        ocean: 'url("/images/ocean.jpeg" )',
        stairs: 'url("/images/stairs.jpeg")',
      }),
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
