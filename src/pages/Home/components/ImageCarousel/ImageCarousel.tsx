import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Button, Box } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = (props: ImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slidesContainer = useRef<HTMLDivElement>(null);

  const handleWindowResize = () => {
    setSlideWidth(
      slidesContainer.current?.children[0].getBoundingClientRect().width!
    );
  };

  const distanceToMovePrev = `${slideWidth * (currentImageIndex - 1)}px`;
  const distanceToMoveNext = `${slideWidth * (currentImageIndex + 1)}px`;

  const handlePrevClick = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  useEffect(() => {
    setSlideWidth(
      slidesContainer.current?.children[0].getBoundingClientRect().width!
    );
    window.addEventListener("resize", handleWindowResize, false);
  }, []);

  return (
    <Box
      position="relative"
      width="100%"
      borderRadius="10px"
      className="carousel ratio1"
    >
      <Box h="100%">
        <Box ref={slidesContainer} bg="pink" position={"relative"}>
          {props.images.map((image, index) => (
            <Box
              key={uuidv4()}
              position="absolute"
              zIndex={1000 + props.images.length - index}
              width="100%"
              left={index === 0 ? 0 : `${slideWidth * index}px`}
              top={0}
              bottom={0}
            >
              <img
                className="carousel-image"
                src={`${image}`}
                alt={`image-${index}`}
              />
            </Box>
          ))}
        </Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          h="100%"
          p="1rem"
          className="carousel-buttons"
          position="relative"
          zIndex={6000}
        >
          {currentImageIndex !== 0 ? (
            <Button
              size="sm"
              className="ratio1"
              borderRadius="50%"
              variant="secondary"
              onClick={() => {
                handlePrevClick();
                slidesContainer.current!.style.transform = `translateX(${distanceToMovePrev})`;
              }}
            >
              <ChevronLeftIcon />
            </Button>
          ) : (
            <Box></Box>
          )}

          {currentImageIndex !== props.images.length - 1 && (
            <Button
              size="sm"
              className="ratio1"
              borderRadius="50%"
              variant="secondary"
              onClick={() => {
                handleNextClick();
                slidesContainer.current!.style.transform = `translateX(-${distanceToMoveNext})`;
              }}
            >
              <ChevronRightIcon />
            </Button>
          )}
        </Flex>

        <Flex
          justifyContent="center"
          position="absolute"
          w="100%"
          bottom="1rem"
          gap={1.5}
          zIndex={6000}
        >
          {props.images.map((image, index) => (
            <button
              key={uuidv4()}
              className={`carousel-indicator ratio1 ${
                index === currentImageIndex ? "carousel-indicator-active" : ""
              }`}
            ></button>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ImageCarousel;
