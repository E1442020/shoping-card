import React, { useState, useEffect } from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  const [buttonDisable, setButtonDisable] = useState(props.disable);

  const checkIsAdded = (productId) => {
    console.log(productId);
    console.log(props.cartProductsArr)
    props.cartProductsArr.map((cartProduct) => {
      if (cartProduct.id === productId) {
        setButtonDisable(!buttonDisable);
        // console.log("yes");
      } else {
        setButtonDisable(buttonDisable);
        // console.log("no");
      }
    });
  };

  useEffect(() => {
    // setProducts(productFromLocalStorage())
    // setCartProducts(cartProductFromLocalStorage());

    checkIsAdded(props.productId);
  }, []);

  return (
    <>
      <div className="product-card-container" key={props.id}>
        <div className="product-card-img">
          <img src={props.img} alt={props.name} />
        </div>
        <h2>{props.name}</h2>
        <p>Price:${props.price}</p>
        <button
          disabled={buttonDisable}
          onClick={() => {
            props.addToCart(props.id);
            setButtonDisable(!buttonDisable);
          }}
        >
          {buttonDisable ? "Already Added" : "Add To Cart"}
        </button>
      </div>
    </>
  );
}
