import React, { useState } from "react";

export default function CartProduct(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  const increaseQuantity = () => {
    const tempQuantity = quantity+1;

    if (props.updateQuantity) {
      props.updateQuantity(tempQuantity,props.id);
    }
    if (props.getTotal) {
      props.getTotal(props.arr);
    }
    setQuantity(tempQuantity);
  };
  const decreaseQuantity = () => {
    let tempQuantity = quantity;
    console.log(tempQuantity);
    if(tempQuantity==1){tempQuantity=1;
    }else{;
      tempQuantity=quantity-1}

    if (props.updateQuantity) {
      props.updateQuantity(tempQuantity,props.id);
    }
    if (props.getTotal) {
      props.getTotal(props.arr);
    }
    setQuantity(tempQuantity);
  };

  return (
    <>
      <div className="cart-page-content" key={props.id}>
        <div className="cart-page-content-img">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="cart-page-content-price">
          <h3>{props.name}</h3>
         <div className="quantity-container"> <button className="increase" onClick={increaseQuantity}>+</button><span className="quantity">{quantity}</span><button className="decrease" onClick={decreaseQuantity} >-</button></div>
          <h3><span>{quantity == "" || quantity == 0 ? `$0` :<>${props.price}<sub className="price">(x{quantity})</sub>=${props.price*quantity}</>}</span>
          </h3>
          <button className="removeBtn" onClick={() => props.remove(props.id)}>Remove</button>
        </div>
      </div>
    </>
  );
}
