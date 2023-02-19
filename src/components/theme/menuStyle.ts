import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    w: "4.4rem",
    border: "2px solid var(--chakra-colors-borderColor)",
    borderRadius: "50px",
    p: "0.3rem",
    pl: "0.6rem",
    bg: "secondLayer",
    _hover: { filter: "brightness(1.1)" },
    _active: { filter: "brightness(1.1)" },
  },
  list: {
    // this will style the MenuList component
    bg: "secondLayer",
    border: "1px solid var(--chakra-colors-borderColor)",
    borderRadius: "10px",
    color: "white",
    fontSize: 14,
    px: 1,
    boxShadow: "none",
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    bg: "secondLayer",
    fontWeight: 400,
    _hover: { filter: "brightness(1.1)" },
  },
  divider: {
    borderBottom: "1px solid var(--chakra-colors-borderColor)",
  },
});
// export the base styles in the component theme
export const menuStyle = defineMultiStyleConfig({ baseStyle });
