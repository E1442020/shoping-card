import React, { useState, useEffect } from "react";
import "./ProductCard.css";

export default function ProductCard(props) {
  const [buttonDisable, setButtonDisable] = useState(false);

  const checkIsAdded = (productId) => {
    props.cartProductsArr.map((cartProduct) => {
      if (cartProduct.id == productId) {
        setButtonDisable(true);
        console.log("yes");
      }
    });
  };

  useEffect(() => {
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
            setButtonDisable(true);
          }}
        >
          {buttonDisable ? "Already Added" : "Add To Cart"}
        </button>
      </div>
    </>
  );
}
