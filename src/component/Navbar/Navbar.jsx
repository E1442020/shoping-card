import React, { useState } from 'react';
import { GoThreeBars, GoX } from "react-icons/go";
import './Navbar.css';
import { AiFillShopping,AiOutlineShoppingCart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Navbar() {
    const[click,setClick]=useState(false);
    const clickHandeler=()=>{
        setClick(!click)
    }



  return (
    <div className="page-container">
    <div className="navbar-container">
        <div className='logo-container'>
           <div className='logo-content'>
             
          <AiFillShopping size={50} style={{color:'#2E285A'}}/> <span>Shopping</span>
        </div>

       
           
            <div className='menu-icon' onClick={()=>clickHandeler()}>
                {click?< GoX size={30}/>:<GoThreeBars size={30}/>} </div>
           </div>


                <ul className={click?'show':''}>
                  <Link onClick={() => clickHandeler()} to="/">Home</Link>
                    <div className='cart'> <Link onClick={() => clickHandeler()} to='/cartPage'><AiOutlineShoppingCart size={30} style={{color:'#2E285A',cursor:'pointer'}} /></Link>
                <BsDot size={20} style={{color:'red'}}/></div>
                <button>Sign In</button>
               
            </ul>
    </div></div>
  )
}