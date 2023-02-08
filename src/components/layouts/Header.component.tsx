import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Button,
  useDisclosure,
  useColorMode,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="100%"
      px="5rem"
      py="2rem"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Heading fontWeight={"900"}>LOGO</Heading>
      </Box>
      <Box w="30%" h="4rem" bg="gray.700" borderRadius="50px"></Box>
      <Flex alignItems="center" gap={5}>
        <Button
          onClick={toggleColorMode}
          bg="none"
          borderRadius="50px"
          w="4.5rem"
          h="3.5rem"
        >
          {colorMode === "light" ? (
            <MoonIcon boxSize={6} />
          ) : (
            <SunIcon boxSize={6} />
          )}
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            bg="gray.700"
            w="6.5rem"
            h="3.5rem"
            borderRadius="50px"
            pl={4}
            pr={2}
            onClick={isOpen ? onClose : onOpen}
          >
            <Flex justifyContent="space-between" alignItems="center">
              <HamburgerIcon boxSize={6} />
              <Avatar
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
                w="2.7rem"
                h="2.7rem"
              />
            </Flex>
          </MenuButton>
          <MenuList boxShadow="none">
            <MenuItem>Log In</MenuItem>
            <MenuItem>Sign Up</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
