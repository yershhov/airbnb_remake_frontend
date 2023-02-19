import React, { useContext } from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { AiOutlineCode } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import { BiSliderAlt } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import "./categories-navigation.scss";
import { ActiveCategoryContext } from "../../../App";
import { dataArray } from "../../../data";

const CategoriesNavigation = () => {
  const { activeCategory, setActiveCategory } = useContext(
    ActiveCategoryContext
  );
  const [searchParams, setSearchParams] = useSearchParams();

  function handleTab(event: React.MouseEvent<HTMLElement>, id: number) {
    event.preventDefault();
    setSearchParams({ category_id: id.toString() });
    setActiveCategory(id ?? dataArray[0].category_id);
  }

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
            <Link
              key={uuidv4()}
              to="/"
              className="category-navlink"
              onClick={(event) => handleTab(event, item.category_id)}
            >
              <VStack
                color="white"
                opacity={0.3}
                position="relative"
                className={`${
                  activeCategory === item.category_id
                    ? "current"
                    : "not-current"
                }`}
              >
                <AiOutlineCode size={25} />
                <Text fontSize={11} fontWeight={500}>
                  {item.text}
                </Text>
              </VStack>
            </Link>
          );
        })}
      </Flex>
      <Box>
        <Button
          variant="enpty"
          h="3rem"
          borderRadius="10px"
          leftIcon={<BiSliderAlt />}
        >
          <Text fontSize={10}>Filters</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default CategoriesNavigation;
