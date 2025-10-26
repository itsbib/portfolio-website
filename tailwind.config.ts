module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",
        "scroll-reverse": "scroll-reverse 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-1 * var(--scroll-width)))" },
        },
        "scroll-reverse": {
          "0%": { transform: "translateX(calc(-1 * var(--scroll-width)))" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
