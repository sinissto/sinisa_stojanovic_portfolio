import { Config } from "tailwindcss";

const config: Config = {
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "960px",
      xl: "1240px",
      "2xl": "1496px",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-jetbrainsMono)"],
      },
      colors: {
        primary: "#1c1c22",
        secondary: "#1F2937",
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
        },
      },
    },
  },
};

export default config;
