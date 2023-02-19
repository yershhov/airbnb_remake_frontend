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
  VStack,
} from "@chakra-ui/react";
import { AiOutlineCode } from "react-icons/ai";
import { Link } from "react-router-dom";
import CategoriesNavigation from "./CategoriesNavigation";

const Header = () => {
  return (
    <VStack spacing={0} position="fixed" w="100%">
      <Flex
        bg="firstLayer"
        boxSizing="border-box"
        borderBottom="1px solid var(--chakra-colors-borderColor)"
        h="5rem"
        w="100%"
        px="6rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link to="/">
          <Heading fontSize={22}>
            <Flex alignItems="center" gap={2}>
              <AiOutlineCode size={30} />
              <Box display={{ base: "none", lg: "block" }}>
                LO
                <Text display="inline" color="primary">
                  GO
                </Text>
              </Box>
            </Flex>
          </Heading>
        </Link>

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
      <CategoriesNavigation />
    </VStack>
  );
};

export default Header;
