import React from "react";
import styled from "styled-components";
import Ratings from "./Ratings";

function Product({ productDetails }) {
  return (
    <ProductWrapper>
      <ImageContainer>
        <img
          style={{ height: "100%", width: "100%" }}
          src={productDetails.image}
          alt="Image not found"
        />
      </ImageContainer>
      <ProductDetails>
        <ProductInfo>
          <ProductTitle>{productDetails.title}</ProductTitle>
          <ProductPrice> ${productDetails.price}</ProductPrice>
          <Ratings ratings={productDetails.productRatings} />
          <ProductDescription>{productDetails.description}</ProductDescription>
        </ProductInfo>
        <ActionButtonsWrapper>
          <AddToCartButton>Add to Cart</AddToCartButton>
          <ViewDetailsButton>View Details</ViewDetailsButton>
        </ActionButtonsWrapper>
      </ProductDetails>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid black; */
  gap: 10px;
  margin: 1rem;
  background-color: rgb(245, 246, 248);
  @media screen and (max-width: 840px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  width: 15rem;
  height: 10rem;
  @media screen and (max-width: 840px) {
    width: 100%;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 60%;
  @media screen and (max-width: 840px) {
    margin: 0.1rem 0.5rem;
    width: 100%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* border: 1px solid black; */
`;

const ProductTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
`;

const ProductDescription = styled.div``;

const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 0.5rem;
  /* border: 1px solid black; */
`;

const AddToCartButton = styled.div`
  background-color: #f2f200;
  color: #fff;
  text-align: center;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  @media screen and (max-width: 840px) {
    width: 40%;
  }
`;

const ViewDetailsButton = styled(AddToCartButton)`
  background-color: #57a9d6;
`;

export default Product;
