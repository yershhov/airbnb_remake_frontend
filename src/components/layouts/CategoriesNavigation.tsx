import { Box, Button, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { dataArray } from "../../data";
import { BiSliderAlt } from "react-icons/bi";

import "./categories-navigation.scss";

const CategoriesNavigation = () => {
  return (
    <Flex
      h="5rem"
      w="100%"
      px="6rem"
      bg="firstLayer"
      boxSizing="border-box"
      borderBottom="1px solid var(--chakra-colors-borderColor)"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex gap={10}>
        {dataArray.map((item) => {
          return (
            <NavLink to={`/${item.category}`} className="category-navlink">
              {({ isActive }) => (
                <VStack
                  color="white"
                  opacity={0.3}
                  position="relative"
                  className={`
                ${!isActive ? "category" : undefined} 
                ${isActive ? "current" : undefined}`}
                >
                  <AiOutlineCode size={25} />
                  <Text fontSize={11} fontWeight={500}>
                    {item.text}
                  </Text>
                </VStack>
              )}
            </NavLink>
          );
        })}
      </Flex>
      <Box>
        <Button
          h="3rem"
          borderRadius="10px"
          leftIcon={<BiSliderAlt />}
          variant="empty"
        >
          <Text fontSize={10}>Filters</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default CategoriesNavigation;
