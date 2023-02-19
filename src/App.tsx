import { Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/layouts/Header";
import HomePage from "./pages/Home";

import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import { createContext, useEffect, useState } from "react";
import { dataArray } from "./data";

export const ActiveCategoryContext = createContext({} as any);

function App() {
  const [searchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState<number>(
    // invalid id provided in url to handle
    searchParams.get("category_id")
      ? Number(searchParams.get("category_id"))
      : dataArray[0].category_id
  );

  return (
    <ActiveCategoryContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </ActiveCategoryContext.Provider>
  );
}

export default App;
