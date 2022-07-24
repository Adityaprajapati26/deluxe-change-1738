import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "../Components/Checkout"
import Login from "./Login";
import Signup from "./Signup";
import ReqAuth from "../ReqAuth/ReqAuth";
import Homepage from "./Homepage";
import Product from "../Components/Product"
import Cart from "../component/Cart";
const MainRoutes = () => {
  return (
    <Routes>
     
      <Route path="/" element={<ReqAuth><Home/></ReqAuth>} />
      <Route path="/New" element={ < Homepage/>} />
    {/* //   <Route path="/" element={<Cart/>} /> */}
    
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/Product/:id" element={<Product/>} />
       <Route path="/cart" element={<Cart/>} />


    </Routes>
  );
};
export default MainRoutes;
