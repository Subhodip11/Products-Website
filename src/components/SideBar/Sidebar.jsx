import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";

const LinkTagStyles = {
  textDecoration: "none",
  letterSpacing: "1.2px",
  fontFamily: "Arial, Helvetica, sans-serif",
  fontSize: "1.2rem",
};

function Sidebar({ products, searchResults, setSearchResults }) {
  const [showNavbar, setShowNavbar] = useState(false);
  const [priceRange, setPriceRange] = useState(0);
  const [sortByPrice, setSortByPrice] = useState("");
  const [sortByRating, setSortByRating] = useState("");
  const navigate = useNavigate();

  const handleSortAndFilter = () => {
    let sortByFilter = products;
    if (sortByPrice !== "") {
      switch (sortByPrice) {
        case "ascending":
          sortByFilter = sortByFilter.sort((a, b) => a.price - b.price);
          break;
        case "descending":
          sortByFilter = sortByFilter.sort((a, b) => b.price - a.price);
          break;
        default:
          return;
      }
    }
    if (sortByRating !== "") {
      switch (sortByRating) {
        case "ascending-rating":
          sortByFilter = sortByFilter.sort(
            (a, b) => a.productRatings - b.productRatings
          );
          console.log("Entered here");
          break;
        case "descending-rating":
          sortByFilter = sortByFilter.sort(
            (a, b) => b.productRatings - a.productRatings
          );
          break;
        default:
          break;
      }
    }

    //price range

    let priceRangeSlider =
      Number(priceRange) !== 0
        ? sortByFilter.filter((currVal) => currVal.price <= Number(priceRange))
        : sortByFilter;

    setSearchResults([...priceRangeSlider]);
    console.log(sortByFilter, priceRangeSlider);

    navigate("/search", { replace: true });
  };

  return (
    <NavWrapper>
      {!showNavbar ? (
        <TopNavbar>
          <NavButton>
            <GiHamburgerMenu size={30} onClick={() => setShowNavbar(true)} />
          </NavButton>
        </TopNavbar>
      ) : (
        <div style={{ height: "33px" }}></div>
      )}
      {showNavbar && (
        <SideNavbar>
          <NavButton>
            <RxCross1 size={30} onClick={() => setShowNavbar(false)} />
          </NavButton>
          <NavItems>
            <PriceFilterWrapper>
              <label htmlFor="sort-by-price">Price Filter</label>
              <select
                id="sort-by-price"
                onClick={(e) => setSortByPrice(e.target.value)}
              >
                <option value="">--Sort by price--</option>
                <option value="ascending">lowest to highest price</option>
                <option value="descending">highest to lowest price</option>
              </select>
            </PriceFilterWrapper>
            <RatingFilterWrapper>
              <label htmlFor="sort-by-rating">Rating filter</label>
              <select
                id="sort-by-rating"
                onClick={(e) => setSortByRating(e.target.value)}
              >
                <option value="">--Sort by rating--</option>
                <option value="ascending-rating">
                  lowest to highest rating
                </option>
                <option value="descending-rating">
                  highest to lowest rating
                </option>
              </select>
            </RatingFilterWrapper>
            <PriceRangeSlider>
              <label htmlFor="filter-by-price">Select a Price Range</label>
              <input
                type="range"
                id="filter-by-price"
                min={0}
                max={products.reduce(
                  (acc, curr) => (acc = Math.max(acc, curr.price)),
                  0
                )}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
              <PriceRangeValues>
                <span>0</span>
                <span>{priceRange}</span>
              </PriceRangeValues>
            </PriceRangeSlider>
          </NavItems>
          <ApplyButtonWrapper>
            <ClearFilterButton onClick={() => navigate("/", { replace: true })}>
              Clear Filter
            </ClearFilterButton>
            <ApplyButton onClick={handleSortAndFilter}>Apply</ApplyButton>
          </ApplyButtonWrapper>
        </SideNavbar>
      )}

      <NavigationsWrapper>
        <Link to="/" style={LinkTagStyles}>
          Home
        </Link>
        <Link to="/search" style={LinkTagStyles}>
          Search
        </Link>
      </NavigationsWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.div``;

const TopNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
`;

const NavigationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 2%;
  right: 30%;
`;

const SideNavbar = styled.div`
  z-index: 2;
  height: 100%;
  padding: 1rem;
  width: fit-content;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  transition: 1s all ease-in;
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RatingFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PriceFilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PriceRangeSlider = styled.div`
  input[type="range"] {
    width: 100%;
  }
`;

const PriceRangeValues = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ApplyButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ApplyButton = styled.button`
  background-color: #57a9d6;
  color: #fff;
  border: none;
  text-align: center;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  transition: 1s all ease-in-out;
  &:active {
    background-color: rgba(87, 169, 214, 0.8);
  }
`;

const ClearFilterButton = styled(ApplyButton)``;
export default Sidebar;
