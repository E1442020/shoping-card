import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import './CartPage.css'
import CartProduct from './CartProduct';
export default function CartPage() {
  const [cartProducts,setCartProducts] =useState([]);
  const [totalPrice,setTotalPrice] = useState('')
  //get Product from localStorage

  const cartProductFromLocalStorage = () => {
    let info = localStorage.getItem("cartProducts");
    if (info === null) {
      return [];
    }
    return JSON.parse(info);
  };

  const removeProduct=(id)=>{
    let tempCartProduct = [...cartProducts]
    tempCartProduct.map((product,index)=>{
      if(product.id === id) {
        tempCartProduct.splice(index,1)
        setCartProducts(tempCartProduct)
        localStorage.setItem("cartProducts",JSON.stringify(tempCartProduct))
      }
    })}

    const getTotalPrice=()=>{
      let tempTotalPrice =totalPrice;
      let tempCartProduct=[...cartProducts]
        tempCartProduct.map((product)=>{
          let priceNum=parseInt(product.price)
          let quantityNum = parseInt(product.quantity)
          tempTotalPrice=priceNum*quantityNum
        })
      setTotalPrice(tempTotalPrice)
    setCartProducts(tempCartProduct)}
       
const updateLocal=(quantity)=>{
  let tempCartProduct=[...cartProducts]
  tempCartProduct.map((product)=>{
    product.quantity = quantity
    localStorage.setItem("cartProducts",JSON.stringify(tempCartProduct))
    setCartProducts(tempCartProduct)
  })
}
  
  useEffect(()=>{
    
   setCartProducts(cartProductFromLocalStorage())
   
    // getTotalPrice();
  },[])
  // localStorage.clear()
  return (
    <>
    <div className="cart-page-container">
      {cartProducts.map((cartProduct)=>{
        return(
          <CartProduct name={cartProduct.name} price={cartProduct.price} quantity={cartProduct.quantity} img={cartProduct.img} key={cartProduct.id} id={cartProduct.id} setQuantity   getTotal={getTotalPrice} remove={removeProduct} updateQuantity={updateLocal}
          />

        )
      })}
      
  <div className="cart-page-footer">
    <p>Total Price:{cartProducts.length==0?0:totalPrice}</p>
    <button><Link to='/'>continue to shopping</Link></button>
  </div>
    </div>
    </>
  )
}
