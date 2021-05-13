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
        bedroomFirst: 'url("/images/bedroom-first.jpg")',
        bedroomFirstGarden: 'url("/images/bedroom-first-garden.jpg")',
        bedroomFirstGardenTwo: 'url("/images/bedroom-first-garden-2.jpg")',
        bedroomSecondGarden: 'url("/images/bedroom-second-garden.jpg")',
        bedroomThree: 'url("/images/bedroom-three.jpg")',
        bedroomFour: 'url("/images/bedroom-four.jpg")',
        bedroomFive: 'url("/images/bedroom-five.jpg")',
        commode: 'url("/images/commode.jpg")',
        corridor: 'url("/images/corridor.jpg")',
        frontHouse: 'url("/images/front-house.jpg")',
        kitchen: 'url("/images/kitchen.jpg")',
        livingroom: 'url("/images/livingroom.jpg")',
        livingroomTwoWindows: 'url("/images/livingroom-two-windows-front.jpg")',
        livingroomViewBack: 'url("/images/livingroom-view-back.jpg")',
        livingroomViewBackTable:
          'url("/images/livingroom-view-back-table.jpg")',
        livingroomViewCorrido: 'url("/images/livingroom-view-corridor.jpg")',
        patioBack: 'url("/images/patio-back.jpg")',
        patioFront: 'url("/images/patio-front.jpg")',
        patioFrontViewUp: 'url("/images/patio-front-view-up.jpg")',
        patioTrees: 'url("/images/patio-trees.jpg")',
        sunset: 'url("/images/sunset.jpg")',
        viewLivingroomOnPatioFront:
          'url("/images/view-livingroom-on-patio-front.jpg")',
        waves: 'url("/images/waves.jpg")',
        laSud: 'url("/images/la-sud.jpg")',
      }),
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
