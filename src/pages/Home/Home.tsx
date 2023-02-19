import { Box, Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ActiveCategoryContext } from "../../App";
import RentalsContainer from "./components/layouts/Rentals/RentalsContainer";

const HomePage = () => {
  return (
    <Box
      placeItems="center"
      fontWeight={800}
      w="100%"
      bg="firstLayer"
      pt="10rem"
      pb="4rem"
      px="6rem"
    >
      <RentalsContainer />
    </Box>
  );
};

export default HomePage;
