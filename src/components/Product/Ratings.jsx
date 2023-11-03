import React from "react";
import styled from "styled-components";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

function Ratings({ ratings }) {
  return (
    <ProductRatingsWrapper>
      <Rating>{ratings}</Rating>
      <ProductRatings>
        {ratings >= 1.0 ? (
          <BsStarFill style={{ color: "#ecec30" }} />
        ) : ratings >= 0.5 ? (
          <BsStarHalf style={{ color: "#ecec30" }} />
        ) : (
          <BsStar style={{ color: "#ecec30" }} />
        )}
        {ratings >= 2.0 ? (
          <BsStarFill style={{ color: "#ecec30" }} />
        ) : ratings >= 1.5 ? (
          <BsStarHalf style={{ color: "#ecec30" }} />
        ) : (
          <BsStar style={{ color: "#ecec30" }} />
        )}
        {ratings >= 3.0 ? (
          <BsStarFill style={{ color: "#ecec30" }} />
        ) : ratings >= 2.5 ? (
          <BsStarHalf style={{ color: "#ecec30" }} />
        ) : (
          <BsStar style={{ color: "#ecec30" }} />
        )}
        {ratings >= 4.0 ? (
          <BsStarFill style={{ color: "#ecec30" }} />
        ) : ratings >= 3.5 ? (
          <BsStarHalf style={{ color: "#ecec30" }} />
        ) : (
          <BsStar style={{ color: "#ecec30" }} />
        )}
        {ratings >= 5.0 ? (
          <BsStarFill style={{ color: "#ecec30" }} />
        ) : ratings >= 4.5 ? (
          <BsStarHalf style={{ color: "#ecec30" }} />
        ) : (
          <BsStar style={{ color: "#ecec30" }} />
        )}
      </ProductRatings>
    </ProductRatingsWrapper>
  );
}

const ProductRatingsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Rating = styled.span`
  background-color: #66e366;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.3rem;
  border-radius: 0.3rem;
  display: inline;
  color: #fff;
  width: fit-content;
`;

const ProductRatings = styled.div`
  display: flex;
  gap: 3px;
`;

export default Ratings;
