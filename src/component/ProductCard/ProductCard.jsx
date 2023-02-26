
import React, { useState,useEffect } from 'react'
import './ProductCard.css'

export default function ProductCard(props) {
  const [buttonDisable,setButtonDisable] = useState(props.disable)
  const [cartProducts,setCartProducts] =useState([])

  const cartProductFromLocalStorage = () => {
    let info = localStorage.getItem("cartProducts");
    if (info === null) {
      return [];
    }
    return JSON.parse(info);
  };
  


  const checkIsAdded = (productItem,hh) => {
    
    console.log(productItem)
    // const temp =[...cartProducts]
    console.log(hh)
    if (hh.includes(productItem)) {
   console.log('yes')
        setButtonDisable(!buttonDisable)
      }
      else{
        setButtonDisable(buttonDisable) ;
        console.log('no')
      }
   
  }
  

  useEffect(()=>{
    // setProducts(productFromLocalStorage())
    let hh=[...cartProducts]
    hh=cartProductFromLocalStorage();
    setCartProducts(hh)
    // setCartProducts(cartProductFromLocalStorage())
   
    checkIsAdded(props.product,hh)
   
  },[])
 
  return (
    <>
    <div className="product-card-container" key={props.id}>
        <div className="product-card-img">
            <img src={props.img} alt={props.name}/>
        </div>
        <h2>Name:{props.name}</h2>
        <p>Price:${props.price}</p>
        <button disabled={buttonDisable}  onClick={()=>{props.addToCart(props.id);setButtonDisable(!buttonDisable)}} >{buttonDisable?'Already Added':'Add To Cart'}</button>
    </div>
    </>
  )
}
