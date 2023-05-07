/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "360px",
        "xs": "480px",
        "xl": "1300px"
      },
      fontFamily: {
        primary: ["'Cormorant Upright'", "serif"],
        sans: ["'Open Sans'", "sans-serif"]
      },
      colors: {
        "golden": "#DCCA87",
        "golden-dim": "#cfbd7f",
        "black": "#0C0C0C",
        "grey": "#AAAAAA"
      },
      animation: {
        "slide-top": "slide-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-bottom": "slide-bottom 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
      },
      keyframes: {
        "slide-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-40%)", opacity: 0 }
        },
        "slide-bottom": {
          "0%": { transform: "translateY(-25%)", opacity: 0.92 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      },
      backgroundImage: {
        "divider":
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(0,0,0,0) 100%)",
        "pattern": "url(./src/assets/images/bg.webp)",
        "symbol-g": "url(./src/assets/images/G.webp)"
      }
    }
  },
  plugins: []
};
