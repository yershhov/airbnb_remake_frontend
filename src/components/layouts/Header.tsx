import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Text,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      bg="firstLayer"
      boxSizing="border-box"
      borderBottom="1px solid var(--chakra-colors-borderColor)"
      h="5rem"
      w="100%"
      px="3rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Heading>
        LO
        <Text display="inline" color="primary">
          GO
        </Text>
      </Heading>

      <Menu>
        <MenuButton>
          <Flex w="100%" justifyContent="space-between" alignItems="center">
            <HamburgerIcon color="white" />
            <Avatar
              boxSize={7}
              name="Segun Adebayo"
              src="https://bit.ly/sage-adebayo"
            />
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem fontWeight={600}>Log In</MenuItem>
          <MenuItem>Sign Up</MenuItem>
          <MenuDivider />
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default Header;
