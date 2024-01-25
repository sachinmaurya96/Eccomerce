import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <nav>
        <div className="logo">
          <span>V.</span>Mart
        </div>
        <div className={`nav-links ${open && "open"}`}>
          <NavLink className="link">Home</NavLink>
          <NavLink className="link">Shop</NavLink>
          <NavLink className="link">Blog</NavLink>
          <NavLink className="link">Contact</NavLink>
        </div>
        <div className="actions">
          <div className="search">
            <CiSearch size={25} />
          </div>
          <div className="wishlist">
            <CiHeart size={25} />
            <span>02</span>
          </div>
          <div className="cart">
            <CiShoppingCart size={25} />
            <span>02($250)</span>
          </div>
          <div className="menu" onClick={()=>setOpen(prev=>!prev)}>
            {open ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
position: sticky;
top: 0;
width: 100vw;
border-bottom: 1px solid lightgray;

  nav {
    width: 100%;
  background-color: #fff;
  padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 30px;
      font-weight: 800;
      span {
        color: crimson;
      }
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 30px;

      .link {
        text-transform: uppercase;
        transition: 0.3s;
        &:hover {
          color: crimson;
        }
      }
    }
    .actions {
      display: flex;
      align-items: center;
      gap: 30px;
      div {
        display: flex;
        align-items: center;
        gap: 5px;
        cursor: pointer;
      }
      .menu {
        display: none;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    nav{
      .actions{
        .menu{
          display: block;
          width: max-content;
        }

      }
      .nav-links {
        padding: 10px 100px;
        position: absolute;
        flex-direction: column;
        align-items: start;
        background-color: #fff;
        top: -200px;
        width: 100%;
        transition: all 0.3s linear;
       left: 0;
       z-index: -3;
       border-bottom: 1px solid lightgray;
      }
      .open{
        top: 80px;
      }
    }
  }
  @media only screen and (max-width: 768px){
    nav{
      padding: 20px 50px;

      .nav-links{
        padding: 10px 50px;
      }
    }
   
  }
  @media only screen and (max-width: 622px){
    nav{
      flex-direction: column;
      align-items: center;
      .nav-links{
        padding: 5px ;
      }
    }
  }
`;
export default Header;
