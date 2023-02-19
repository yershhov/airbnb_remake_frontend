import { extendTheme } from "@chakra-ui/react";
import { menuStyle } from "./menuStyle";

export const theme = extendTheme({
  colors: {
    firstLayer: "#181818",
    secondLayer: "#262626",
    borderColor: "hsla(0, 0%, 100%, 0.07)",
    primary: "#9591FF",
    bone: "",
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "white",
        fontWeight: 800,
      },
    },
    Button: {
      baseStyle: {
        border: "2px solid var(--chakra-colors-borderColor)",
        fontWeight: 500,
        _hover: {
          filter: "brightness(1.1)",
        },
        _active: {
          filter: "brightness(1.2)",
        },
      },
      variants: {
        primary: {
          bg: "primary",
          border: "none",
        },
        secondary: {
          bg: "secondLayer",
        },
        empty: {},
      },
    },
    Menu: menuStyle,
  },
});
