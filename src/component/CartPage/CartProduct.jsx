import React,{useState} from 'react'

export default function CartProduct(props) {
    const [quantity,setQuantity]=useState(props.quantity)
  return (
    <>
    <div className="cart-page-content" key={props.id }>
    <div className="cart-page-content-img">
          <img src={props.img} alt={props.name}/>
        </div>
        <div className="cart-page-content-price">
          <h3>Name:{props.name}</h3>
        <input type='number' value={quantity} onChange={(e)=>{setQuantity(e.target.value);props.getTotal();props.updateQuantity(quantity)} }/>
        <h3>Price:{(quantity==''||quantity==0)?0:(props.price*quantity)}</h3>
        <button onClick={()=>props.remove(props.id)}>Remove</button>
        </div>
        </div>
    </>
  )
}
