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

    const getTotalPrice=(price,quantity,hh)=>{
      let tempTotalPrice =totalPrice
      if(cartProducts.length==0){tempTotalPrice=0
      }else{
        tempTotalPrice=price*quantity

      // let tempTotalPrice = 0;
      // cartProducts.map((product)=>{
      //   let num =parseInt(product.price)
      //   tempTotalPrice += num
      }setTotalPrice(tempTotalPrice)
    }

  
  useEffect(()=>{
    
   
    setCartProducts(cartProductFromLocalStorage());
    let hh=[...cartProducts]
    hh=cartProductFromLocalStorage()
    setCartProducts(hh)
    console.log(hh)
    getTotalPrice(hh);
  },[])
  // localStorage.clear()
  return (
    <>
    <div className="cart-page-container">
      {cartProducts.map((cartProduct)=>{
        return(
          <CartProduct name={cartProduct.name} price={cartProduct.price} quantity={cartProduct.quantity} img={cartProduct.img} key={cartProduct.id} id={cartProduct.id} setQuantity getTotal={getTotalPrice} remove={removeProduct}/>

        )
      })}
      
  <div className="cart-page-footer">
    <p>Total Price:{totalPrice}</p>
    <button><Link to='/'>continue to shopping</Link></button>
  </div>
    </div>
    </>
  )
}
