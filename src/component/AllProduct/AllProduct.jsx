import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { ProductDetails } from "../ProductDetails";

import "./AllProduct.css";

export default function AllProduct(props) {
  const [products, setProducts] = useState([]);
  // const [buttonDisable, setButtonDisable] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  // let cartProducts=JSON.parse(localStorage.getItem("cartProducts"));
  //get Product from localStorage

  const productFromLocalStorage = () => {
    let info = localStorage.getItem("products");
    if (info === null) {
      return [];
    }
    return JSON.parse(info);
  };

  //get Product from localStorage

  const cartProductFromLocalStorage = () => {
    let info = localStorage.getItem("cartProducts");
    if (info === null) {
      return [];
    }
    return JSON.parse(info);
  };
  useEffect(() => {
    setProducts(productFromLocalStorage());
    setCartProducts(cartProductFromLocalStorage());
  }, []);

  // localStorage.clear()
  const addToCart = (id) => {
    products.map((product) => {
      if (product.id === id) {
        // setButtonDisable(true);
        let tempCartProduct = [...cartProducts];
        tempCartProduct.push(product);
        localStorage.setItem("cartProducts", JSON.stringify(tempCartProduct));
        setCartProducts(tempCartProduct);
        if (props.showDot) {
          props.showDot();
        }
      }
    });
  };

  return (
    <>
      <div className="all-product-container">
        {products.map((product) => {
          return (
            <ProductCard
              img={product.img}
              name={product.name}
              price={product.price}
              key={product.id}
              id={product.id}
              addToCart={addToCart}
              productId={product.id}
              cartProductsArr={cartProducts}
            />
          );
        })}
      </div>
    </>
  );
}
