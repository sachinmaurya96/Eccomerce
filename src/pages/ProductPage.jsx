import React from "react";
import PageTop from "../component/shared/PageTop";
import styled from "styled-components";
import { selectProducts } from "../utils";
import { products } from "../data/data";
import ProductCard from "../component/shared/ProductCard";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductPage = () => {
  const result = selectProducts(products);
  return (
    <Wrapper>
      <PageTop title={"Shop"} />
      <div className="filters container">
        <div className="sort">
          <span>
            Sort <MdKeyboardArrowDown />
          </span>
        </div>
        <div className="filter">
          <div className="category">
            <span className="name"></span>
            <span className="count"></span>
            <span className="icon">
              <MdKeyboardArrowDown />
            </span>
          </div>
          <div className="color">
            <span className="name"></span>
            <span className="count"></span>
            <span className="icon">
              <MdKeyboardArrowDown />
            </span>
          </div>
          <div className="sizes">
            <span className="name"></span>
            <span className="count"></span>
            <span className="icon">
              <MdKeyboardArrowDown />
            </span>
          </div>
          <div className="brands">
            <span className="name"></span>
            <span className="count"></span>
            <span className="icon">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </div>
      </div>
      <div className="filter_review">
        <div className="container">
          <span>Filters |</span>
          <div className="filter_chips">
            <span>
              Object <RxCross2 />
            </span>
          </div>
        </div>
      </div>
      <div className="product_list container">
        {result.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product_list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 50px 0;
  }
  .filter_review {
    width: 100%;
    height: 50px;
    background-color: lightgray;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 10px 0;
    .filter {
      display: flex;
      gap: 10px;
    }
  }
`;
export default ProductPage;
