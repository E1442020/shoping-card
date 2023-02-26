import React,{useState} from 'react'

export default function CartProduct(props) {
    const [quantity,setQuantity]=useState(props.quantity);
    
    const onChangeHandler=(e)=>{
      const tempQuantity = e.target.value
      setQuantity(tempQuantity);
      if(props.getTotal){props.getTotal();}
      if(props.updateQuantity){props.updateQuantity(tempQuantity)}
      setQuantity(tempQuantity)
      }

    
  return (
    <>
    <div className="cart-page-content" key={props.id }>
    <div className="cart-page-content-img">
          <img src={props.img} alt={props.name}/>
        </div>
        <div className="cart-page-content-price">
          <h3>Name:{props.name}</h3>
        <input type='number' value={quantity} onChange={onChangeHandler}/>
        <h3>Price:{(quantity==''||quantity==0)?0:(props.price*quantity)}</h3>
        <button onClick={()=>props.remove(props.id)}>Remove</button>
        </div>
        </div>
    </>
  )
}
