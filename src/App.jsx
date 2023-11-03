import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Home from "./pages/Home";
import Sidebar from "./components/SideBar/Sidebar";
import Sort_Filters from "./pages/Sort_Filters";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [paginationObj, setPaginationObj] = useState({
    left: 0,
    right: 10,
    pageNumber: 1,
  });

  async function generateData() {
    try {
      const jsonFileData = await axios.get("./products.json");
      setProductsData(jsonFileData.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    generateData();
  }, []);

  if (productsData.length === 0) {
    return <div>Loading</div>;
  } else {
    return (
      <ParentWrapper>
        <Sidebar
          products={productsData}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                productsData={productsData}
                paginationObj={paginationObj}
                setPaginationObj={setPaginationObj}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Sort_Filters
                searchResults={searchResults}
                paginationObj={paginationObj}
                setPaginationObj={setPaginationObj}
              />
            }
          />
        </Routes>
      </ParentWrapper>
    );
  }
}

const ParentWrapper = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export default App;
