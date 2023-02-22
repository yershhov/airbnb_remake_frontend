import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RentalModel } from "../../../data";
import "./rental-card.scss";

interface RentalCardProps {
  rental?: RentalModel;
}

const RentalCard = (props: RentalCardProps) => {
  const rental = props.rental;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    console.log("prev");

    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleNextClick = () => {
    console.log("next");
    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <Flex flexDirection="column" gap={3} fontSize={14}>
      <Box
        position="relative"
        width="100%"
        borderRadius="10px"
        className="carousel ratio1"
      >
        <Box h="100%">
          <Box>
            {rental?.images!.map((image, index) => (
              <Box position="absolute" width="100%" top={0} bottom={0}>
                <img className="carousel-image" src={`${image}`} alt="" />
              </Box>
            ))}
          </Box>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            h="100%"
            p="1rem"
            className="carousel-buttons"
          >
            {currentImageIndex !== 0 ? (
              <Button
                size="sm"
                className="ratio1"
                borderRadius="50%"
                variant="secondary"
                onClick={handlePrevClick}
              >
                <ChevronLeftIcon />
              </Button>
            ) : (
              <Box></Box>
            )}

            {currentImageIndex !== rental!.images!.length - 1 ? (
              <Button
                size="sm"
                className="ratio1"
                borderRadius="50%"
                variant="secondary"
                onClick={handleNextClick}
              >
                <ChevronRightIcon />
              </Button>
            ) : (
              <Box></Box>
            )}
          </Flex>

          <Flex
            justifyContent="center"
            position="absolute"
            w="100%"
            bottom="1rem"
            gap={1.5}
          >
            {rental?.images!.map((image, index) => (
              <button
                className={`carousel-indicator ratio1 ${
                  index === currentImageIndex ? "carousel-indicator-active" : ""
                }`}
              ></button>
            ))}
          </Flex>
        </Box>
      </Box>

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
