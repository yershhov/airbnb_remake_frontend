import React from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import { AiOutlineCode } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import { dataArray } from "../../data";
import { BiSliderAlt } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import "./categories-navigation.scss";

const CategoriesNavigation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab_id") ?? dataArray[0].tab_id;

  function handleTab(event: React.MouseEvent<HTMLElement>, id: number) {
    event.preventDefault();
    setSearchParams({ tab_id: id.toString() });
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
              onClick={(event) => handleTab(event, item.tab_id)}
            >
              <VStack
                color="white"
                opacity={0.3}
                position="relative"
                className={`${
                  Number(activeTab) === item.tab_id ? "current" : "not-current"
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
