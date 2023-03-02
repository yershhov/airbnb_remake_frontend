import { Box, Flex, Text } from "@chakra-ui/react";

import { AiFillStar } from "react-icons/ai";
import { RentalModel } from "../../../../data";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./rental-card.scss";

interface RentalCardProps {
  rental?: RentalModel;
}

const RentalCard = (props: RentalCardProps) => {
  return (
    <Flex flexDirection="column" gap={3} fontSize={14} borderRadius="10px">
      <ImageCarousel images={props.rental!.images!} />

      <Flex flexDirection="column" gap={1}>
        <Flex justifyContent={"space-between"}>
          <Text fontWeight={600}>
            {props.rental!.location ?? "Undefined location"}
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

        <Box fontWeight={400}>
          <Text fontWeight={600} display="inline">
            {"$120 "}
          </Text>
          night
        </Box>
      </Flex>
    </Flex>
  );
};

export default RentalCard;
