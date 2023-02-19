import { Box, Grid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ActiveCategoryContext } from "../App";

const HomePage = () => {
  const { activeCategory } = useContext(ActiveCategoryContext);

  return (
    <Grid
      placeItems="center"
      fontWeight={800}
      h="100vh"
      w="100%"
      bg="firstLayer"
    >
      {activeCategory.toString()}
    </Grid>
  );
};

export default HomePage;
