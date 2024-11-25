tailwind.config = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: "hsl(230, 29%, 20%)",
        DarkGrayishBlue: "hsl(230, 11%, 40%)",
        GrayishBlue: "hsl(231, 7%, 65%)",
        LightGrayishBlue: "hsl(207, 33%, 95%)",
        Red: "hsl(0, 100%, 68%)",
      },
      fontFamily: {
        BarlowCondensed: ["Barlow Condensed", "sans-serif"],
        Barlow: ["Barlow", "sans-serif"],
      },
      screens: {
        tsf: "375px",
        ftf: "425px",
      },
    },
  },
  plugins: [],
};
