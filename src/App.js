import AllProduct from "./component/AllProduct/AllProduct";
import Navbar from "./component/Navbar/Navbar";
import CartPage from "./component/CartPage/CartPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
   <>
   <Navbar />
   <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="cartPage" element={<CartPage/>} />
       
      </Routes>
   
   </>
  );
}

export default App;
