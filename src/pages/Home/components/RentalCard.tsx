import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RentalModel } from "../../../data";

interface RentalCardProps {
  rental?: RentalModel;
}

const RentalCard = (props: RentalCardProps) => {
  const rental = props.rental;
  return (
    <Flex flexDirection="column" gap={3} fontSize={14}>
      <AspectRatio ratio={1}>
        <Box bg="borderColor" w="100%" borderRadius="20px"></Box>
      </AspectRatio>
      <Flex flexDirection="column" gap={1}>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={600}>
            {rental!.location ?? "Undefined location"}
          </Text>
          <Flex alignItems="center" gap={1}>
            <AiFillStar />
            <Text>4.4</Text>
          </Flex>
        </Flex>
        <Flex opacity={0.6} flexDirection="column">
          <Text fontWeight={300}>250 kilometers away</Text>
          <Text fontWeight={300}>Apr 25-30</Text>
        </Flex>

        <Text>
          <Text fontWeight={600} display="inline">
            {`$120 `}
          </Text>
          night
        </Text>
      </Flex>
    </Flex>
  );
};

export default RentalCard;
