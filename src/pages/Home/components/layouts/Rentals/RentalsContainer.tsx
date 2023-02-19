import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import RentalCard from "../../RentalCard";

const RentalsContainer = () => {
  return (
    <SimpleGrid
      w="100%"
      pt="1.5rem"
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
    >
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
      <GridItem>
        <RentalCard />
      </GridItem>
    </SimpleGrid>
  );
};

export default RentalsContainer;
