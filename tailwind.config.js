/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      space: {
        px: "1px",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
      },

      padding: {
        18: "4.5rem",
      },

      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },

      lineHeight: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },

      colors: {
        white: "#FFFFFF",
        black: "#000000",

        green: {
          100: "#50B2C0",
          200: "#255D6A",
          300: "#0A313C",
        },

        purple: {
          100: "#8381D9",
          200: "#2A2879",
        },

        gray: {
          100: "#F8F9FC",
          200: "#E6E8F2",
          300: "#D1D6E4",
          400: "#8D95AF",
          500: "#303F73",
          600: "#252D4A",
          700: "#181C2A",
          800: "#0E1116",
        },
      },

      gradientColorStops: {
        start: "#7FD1CC",
        end: "#9694F5",
      },

      maxWidth: {
        sidebar: "14.5rem",
        "sidebar-md": "12rem",
        "sidebar-sm": "11rem",
        "sidebar-all": "calc(100vw - 40px)",
      },

      height: {
        sidebar: "calc(100vh - 40px)",
      },

      gridTemplateColumns: {
        books: "repeat(auto-fit, minmax(240px, 1fr))",
      },

      keyframes: {
        openContent: {
          from: { width: 0 },
          to: { width: "41.25rem" },
        },
        closeContent: {
          from: { width: "41.25rem" },
          to: { width: 0 },
        },

        openContentFull: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        closeContentFull: {
          from: { width: "100%" },
          to: { width: 0 },
        },

        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        overlayHide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        contentSignInShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "open-content": "openContent 0.25s",
        "close-content": "closeContent 0.25s",

        "open-content-full": "openContentFull 0.25s",
        "close-content-full": "closeContentFull 0.25s",

        "overlay-show": "overlayShow 0.25s",
        "overlay-hide": "overlayHide 0.25s",
        "content-sign-in-show": "contentSignInShow 0.25s",
      },
    },
  },
  plugins: [],
}
