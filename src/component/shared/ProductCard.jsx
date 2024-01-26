import React from 'react'
import styled from 'styled-components'
import AddToCartBtn from './AddToCartBtn'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { calculateDiscountedPrice } from '../../utils';
const ProductCard = ({product}) => {
  return (
    <Card>
      <div className="image">
        <img src={product.thumbnail} alt={product.title} />
        <div className="cart_button">
            <AddToCartBtn/>
        </div>
      </div>
      <div className="content">
        <Link>
        <span className='name'>
            {product.title}
        </span>
        </Link>
        <div className='price'>
            <span className='real_price'>
                <s>${product.price}</s>
            </span>
            <span className='offer_price'>
                ${Math.floor(calculateDiscountedPrice(product.price,product.discountPercentage))}
            </span>
        </div>
        <div className="add_wishlist">
           <Link>
           <CiHeart size={30}/>
           </Link>
        </div>
      </div>
    </Card>
  )
}
const Card = styled.div`
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
   
    
    .image{
        position: relative;
        width: 100%;
        border-radius: 5px;
        overflow: hidden;
        .cart_button{
            position: absolute;
            width: 100%;
            bottom: -50px;
            transition: all 0.3s linear;
            
        }
        img{
        width: 100%;
        border-radius: 5px;
        background-position: center;
        object-fit: cover;
    }
        
    }
    .image:hover .cart_button{
        bottom: 0;
    }
    .image:hover img{
        transition: transform .9s ;
        transform: scale(1.1);
    }
    .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding-top: 10px;
        .price{
            .real_price{
                color: lightgray;
            }
        }
    }
`
export default ProductCard
