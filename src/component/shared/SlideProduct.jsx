import React from 'react'
import styled from 'styled-components'

const SlideProduct = ({product}) => {
    const screenWidth = window.innerWidth;
    console.log(screenWidth)
  return (
    <Wrapper>
      <div className="slide_product">
        <div className="image">
            <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product_info">
            <span className="title">{product.title.slice(0,25)}{product.title.length>25?"...":null}</span>
            <span className="price">${product.price}</span>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 10px;
   .image{
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 10px;
    img{
        width: 100%;
        height: 100%;
        background-position: center;
        object-fit: cover;
    }
       }
       .product_info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 5px;

        .title{
            color: black;
            font-size: 20px;
        }
        .price{
            color: #605f5f;
        }
       }

`
export default SlideProduct
