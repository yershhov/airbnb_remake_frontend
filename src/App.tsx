import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header.component";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <Box h={"100vh"} w="100%">
              <HomePage />
            </Box>
          }
        />
      </Routes>
    </>
  );
}

export default App;
