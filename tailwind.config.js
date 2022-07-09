/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* For colors:
        Main items:  
        > DEFAULT = text (usually)
        > surface = background (usually)
        > edge = borders or other details (usually)
        > foil = contrasting color, such as for hover effects
        Suffixes:
        > -lt = lighter variation
        > -dk = darker variation
      */

        button: {
          DEFAULT: "#f1f5f9", //slate-100
          surface: "#64748b", //slate-500
          hover: "#0369a1", //sky-700
        },
        logo: "#64748b", //slate-500
        modal: {
          DEFAULT: "#334155", //slate-700
          surface: "#cbd5e1", //slate-300
          close: "#334155", //slate-700
        },
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 550ms ease-in-out",
      },
    },
  },
  plugins: [],
};
