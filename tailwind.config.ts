import { nextui } from "@nextui-org/theme";
import { withTV } from "tailwind-variants/transformer";

const config = withTV({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#47b647",
          },
        },
      },
    }),
  ],
});

export default config;
