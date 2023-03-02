import {
  Flex,
  Button,
  Box,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
// Here we have used react-icons package for the icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageCarouselProps {
  images: string[];
}
const animationDurationMs = 500;
// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: false,
  autoplay: false,
  speed: animationDurationMs,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ImageCarousel(props: ImageCarouselProps) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState<Slider | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = "50%";
  const side = "0.7rem";

  return (
    <Box
      position={"relative"}
      className="ratio1"
      w={"100%"}
      overflow={"hidden"}
      borderRadius="10px"
    >
      {/* Left Icon */}
      {currentImageIndex > 0 && (
        <IconButton
          aria-label="left-arrow"
          variant={"secondary"}
          size="sm"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
            setTimeout(() => {
              setCurrentImageIndex(currentImageIndex - 1);
            }, animationDurationMs);
          }}
        >
          <FiChevronLeft />
        </IconButton>
      )}
      {/* Right Icon */}
      {currentImageIndex !== props.images.length - 1 && (
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          size="sm"
          variant={"secondary"}
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickNext();
            setTimeout(() => {
              setCurrentImageIndex(currentImageIndex + 1);
            }, animationDurationMs);
          }}
        >
          <FiChevronRight />
        </IconButton>
      )}

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {props.images.map((url, index) => (
          <Box
            key={index}
            position="relative"
            className="ratio1"
            w="80%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default ImageCarousel;
