import React from "react";
import styled from "styled-components";
import Product from "../components/Product/Product";
import Pagination from "../components/Pagination/Pagination";

function Sort_Filters({ searchResults, paginationObj, setPaginationObj }) {
  // console.log(searchResults);
  return (
    <SortFilterWrapper>
      <ProductContainer>
        {searchResults.length !== 0 ? (
          searchResults
            .slice(paginationObj.left, paginationObj.right)
            .map((ele, index) => {
              return <Product productDetails={ele} key={index} />;
            })
        ) : (
          <Message>No sorting or filters applied</Message>
        )}
      </ProductContainer>
      <Pagination
        paginationObj={paginationObj}
        setPaginationObj={setPaginationObj}
        productsDataLen={searchResults.length}
      />
    </SortFilterWrapper>
  );
}

const SortFilterWrapper = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Message = styled.div`
  width: 100%;
  grid-column: span 2;
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
`;

export default Sort_Filters;
