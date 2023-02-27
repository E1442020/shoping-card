import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import CartProduct from "./CartProduct";
export default function CartPage() {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  //get Product from localStorage

  const cartProductFromLocalStorage = () => {
    let info = localStorage.getItem("cartProducts");
    if (info === null) {
      return [];
    }
    return JSON.parse(info);
  };

  const removeProduct = (id) => {
    let tempCartProduct = [...cartProducts];
    tempCartProduct.map((product, index) => {
      if (product.id === id) {
        tempCartProduct.splice(index, 1);
        setCartProducts(tempCartProduct);
        localStorage.setItem("cartProducts", JSON.stringify(tempCartProduct));
      }
    });
  };

  const getTotalPrice = (tempArr) => {
    let total;
    let sum = 0;

    if (tempArr.length == 0) {
      total = 0;
      console.log(tempArr.length);
    } else {
      tempArr.map((product) => {
        total = parseInt(product.price * product.quantity);

        sum += total;
      });

      console.log(sum);
    }
    setTotalPrice(sum);
  };

  const updateLocal = (quantity) => {
    let tempCartProduct = [...cartProducts];
    tempCartProduct.map((product) => {
      product.quantity = quantity;
      localStorage.setItem("cartProducts", JSON.stringify(tempCartProduct));
      setCartProducts(tempCartProduct);
    });
  };

  useEffect(() => {
    const tempArr = cartProductFromLocalStorage();

    setCartProducts(tempArr);
    console.log(tempArr);
    getTotalPrice(tempArr);
  }, []);
  // localStorage.clear()
  return (
    <>
      <div className="cart-page-container">
        {cartProducts.map((cartProduct) => {
          return (
            <CartProduct
              name={cartProduct.name}
              price={cartProduct.price}
              quantity={cartProduct.quantity}
              img={cartProduct.img}
              key={cartProduct.id}
              id={cartProduct.id}
              arr={cartProducts}
              getTotal={getTotalPrice}
              remove={removeProduct}
              updateQuantity={updateLocal}
            />
          );
        })}

        <div className="cart-page-footer">
          <p>Total Price:{totalPrice}</p>
          <button>
            <Link to="/">continue to shopping</Link>
          </button>
        </div>
      </div>
    </>
  );
}
