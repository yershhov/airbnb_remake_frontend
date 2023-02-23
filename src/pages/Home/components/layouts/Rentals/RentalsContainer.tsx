import { GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ActiveCategoryContext } from "../../../../../App";
import { rentals } from "../../../../../data";
import RentalCard from "../../RentalCard/RentalCard";
import { v4 as uuidv4 } from "uuid";

const RentalsContainer = () => {
  const { activeCategory } = useContext(ActiveCategoryContext);

  return (
    <SimpleGrid
      w="100%"
      pt="1.5rem"
      columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
    >
      {rentals.map((item) => {
        if (item.category_id === activeCategory) {
          return (
            <GridItem key={uuidv4()}>
              <RentalCard rental={item} />
            </GridItem>
          );
        }
      })}
    </SimpleGrid>
  );
};

export default RentalsContainer;
