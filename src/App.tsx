import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import HomePage from "./pages/Home";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import BottomHeader from "./components/layouts/BottomHeader";

function App() {
  return (
    <>
      <Header />
      <BottomHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
