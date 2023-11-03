import React from "react";
import styled from "styled-components";
import Pagination from "../components/Pagination/Pagination";
import Product from "../components/Product/Product";

function Home({ productsData, paginationObj, setPaginationObj }) {
  return (
    <div>
      <ProductContainer>
        {productsData
          .slice(paginationObj.left, paginationObj.right)
          .map((ele, index) => {
            return <Product productDetails={ele} key={index} />;
          })}
      </ProductContainer>
      <Pagination
        paginationObj={paginationObj}
        setPaginationObj={setPaginationObj}
        productsDataLen={productsData.length}
      />
    </div>
  );
}

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export default Home;
