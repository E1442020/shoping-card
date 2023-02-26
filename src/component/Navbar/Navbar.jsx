import React, { useState } from "react";
import { GoThreeBars, GoX } from "react-icons/go";
import "./Navbar.css";
import { AiFillShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="page-container">
      <div className="navbar-container">
        <div className="logo-content"><Link to="/">
        <AiFillShopping size={40} style={{ color: "#2E285A" }} />{" "}
          <h3>Shopping</h3>
        </Link>
         
        </div>

        <ul>
          <div className="cart">
            {" "}
            <Link to="/cartPage">
              <AiOutlineShoppingCart
                size={30}
                onClick={()=>props.hideDot()}
                style={{ color: "#2E285A", cursor: "pointer" }}
              />
            </Link>
         {props.showDot?<BsDot size={20} style={{ color: "red" }} />:''}   
          </div>
        </ul>
      </div>
    </div>
  );
}
