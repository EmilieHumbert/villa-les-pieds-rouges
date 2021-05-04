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
        planFirst: 'url("/images/plan-first-floor.jpg")',
        planSecond: 'url("/images/plan-second-floor.jpg")',
        planGround: 'url("/images/plan-ground-floor.jpg")',
        fullHouse: 'url("/images/les-pieds-rouges.jpeg")',
        frontHouse: 'url("/images/front-house.jpg")',
        backHouse: 'url("/images/back-house.jpg")',
        laSud: 'url("/images/la-sud.jpg")',
        kitchen: 'url("/images/cuisine.jpg")',
        livingroom: 'url("/images/salon.jpg")',
        livingroomSunset: 'url("/images/salon-couche-soleil.jpg")',
        bedroomFirstFloorBeachSide:
          'url("/images/bedroom-first-floor-beach-side.jpeg")',
        bedroomFirstFloorPatio: 'url("/images/bedroom-first-floor-patio.jpeg")',
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
