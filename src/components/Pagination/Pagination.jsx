import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Pagination({ paginationObj, setPaginationObj, productsDataLen }) {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(productsDataLen / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];
  const handlePagination = (type) => {
    const pageNo =
      type === "left"
        ? paginationObj.pageNumber - 1
        : paginationObj.pageNumber + 1;
    setPaginationObj({
      pageNumber: pageNo,
      left: pageNo * itemsPerPage - itemsPerPage,
      right: pageNo * itemsPerPage,
    });
    // console.log(paginationObj);
  };

  const handlePageNavigation = (currPage) => {
    setPaginationObj({
      pageNumber: currPage,
      left: currPage * itemsPerPage - itemsPerPage,
      right: currPage * itemsPerPage,
    });
  };
  return (
    <PaginationButtonWrapper>
      <PaginationButton
        disabled={paginationObj.pageNumber === 1}
        onClick={() => {
          handlePagination("left");
        }}
      >
        <AiOutlineArrowLeft />
      </PaginationButton>
      <NumberOfPages>
        {pages.map((page, index) => {
          return (
            <Pages
              className={paginationObj.pageNumber === page + 1 ? "active" : ""}
              key={index}
              onClick={() => handlePageNavigation(page + 1)}
            >
              {page + 1}
            </Pages>
          );
        })}
      </NumberOfPages>
      <PaginationButton
        disabled={
          paginationObj.pageNumber === numberOfPages || productsDataLen === 0
        }
        onClick={() => {
          handlePagination("right");
        }}
      >
        <AiOutlineArrowRight />
      </PaginationButton>
    </PaginationButtonWrapper>
  );
}

const PaginationButtonWrapper = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NumberOfPages = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid black;
`;

const Pages = styled.div`
  padding: 0.2rem 0.8rem;
  cursor: pointer;
  border-right: 1px solid black;

  &:last-child {
    border-right: none;
  }

  &.active {
    color: #f6fff6;
    background-color: #7195ea;
  }
`;

const PaginationButton = styled.button`
  border: none;
  outline: none;
  background-color: rgb(235, 236, 238);
  padding: 0.5rem 1.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default Pagination;
