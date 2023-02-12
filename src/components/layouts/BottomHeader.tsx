import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useCallback } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { dataArray } from "../../data";
const BottomHeader = () => {
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
      {dataArray.map((item) => {
        return (
          <Box>
            <VStack color="white">
              <AiOutlineCode size={25} />
              <Text fontSize={11} fontWeight={500}>
                {item.text}
              </Text>
            </VStack>
          </Box>
        );
      })}
    </Flex>
  );
};

export default BottomHeader;
