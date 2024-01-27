import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { GoPlus, } from "react-icons/go";
import { HiMinusSmall } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

const AddToCartPage = () => {
  return (
    <Wrapper>
     <div className="title">
      <h1>Shoping Cart</h1>
     </div>
     <div className="cart_detail">
      <div className="left">
        <div className="cart_product">
          <div className="image">
            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg" alt="" />
          </div>
          <div className="content">
            <div className="top">
              <div className="product_info"></div>
              <div className="quntity">
                <div className="counter">
                  <span><HiMinusSmall/></span>
                  <span>1</span>
                  <span><GoPlus/></span>
                </div>
              </div>
              <div className="action">
                <RxCross2/>
              </div>
            </div>
            <div className="bottom">
              <IoCheckmark/><span>In Stock</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Order Summary</h2>
        <div className="summary">
          <div className="subtotal"></div>
          <div className="shiping"></div>
          <div className="tax"></div>
          <div className="apply_coupen"></div>
          <div className="checkout">
            <button>Checkout</button>
          </div>
        </div>
      </div>
     </div>
     <h2>You may also Like...</h2>
     <div className="similar_product">
      
     </div>
    </Wrapper>
  )
}

export default AddToCartPage
