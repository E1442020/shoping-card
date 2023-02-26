import AllProduct from "./component/AllProduct/AllProduct";
import Navbar from "./component/Navbar/Navbar";
import CartPage from "./component/CartPage/CartPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [showDot, setShowDot]=useState(false)
  const showDotHandler=()=>{
    setShowDot(true)
  }
  const hideDotHandler=()=>{
    setShowDot(false)
  }
  return (
   <>
   <Navbar showDot={showDot} hideDot={hideDotHandler}/>
   <Routes>
        <Route path="/" element={<AllProduct showDot={showDotHandler}/>} />
        <Route path="cartPage" element={<CartPage/>} />
       
      </Routes>
   
   </>
  );
}

export default App;
