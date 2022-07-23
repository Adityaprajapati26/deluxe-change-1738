import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Checkout from "../Components/Checkout"
import Login from "./Login";
import Signup from "./Signup";
import ReqAuth from "../ReqAuth/ReqAuth";
import Homepage from "./Homepage";
import Product from "../component/Product"
const MainRoutes = () => {
  return (
    <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/New" element={< Homepage/>} />
    {/* //   <Route path="/" element={<Cart/>} /> */}
    <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<ReqAuth><Checkout/></ReqAuth>} />
      <Route path="/Product/:id" element={<Product/>} />
       {/* <Route path="/" element={< />} /> */}


    </Routes>
  );
};
export default MainRoutes;
