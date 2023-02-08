import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header.component";
import HomePage from "./pages/Home.page";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";

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
