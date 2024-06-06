/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "fondo-landing": "#fafafa",
        black: "#000",
        white: "#fff",
        gray: {
          "100": "#828282",
          "200": "#111",
          "300": "rgba(17, 17, 17, 0.5)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(17, 17, 17, 0.8)",
        },
        gainsboro: "#e0e0e0",
        "gris-title": "#222",
        orange: "#ff9000",
        "gris-ttulo": "#414141",
        darkslategray: "#333",
        "gris-texto-botn": "#f2f2f2",
      },
      spacing: {},
      fontFamily: {
        "h5-computer": "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "6xl": "25px",
        "3xs": "10px",
        mini: "15px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xl: "20px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "9xl": "28px",
      "3xl": "22px",
      "15xl": "34px",
      "8xl": "27px",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
