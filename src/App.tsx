import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "dark.800");
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <Box h="100vh" w="100%" bg={bg}>
              <Box h="6rem" w="100%" bg="black">
                <Box>airdnd</Box>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Box>
              <Box h="6rem" w="100%" bg="#181818"></Box>
            </Box>
          }
        />
      </Routes>
    </>
  );
}

export default App;
