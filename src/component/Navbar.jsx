import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    // const handleNavigate = () =>{
    //     navigate("/cart");
    // }
    const state = useSelector((state) => state.handleCart);
  return (
    <div style={{ display: 'flex' ,gap: "80px"}}>
        <Link to="/products" style={{fontSize: "20px"}}>Products</Link>
        <Link style={{borer : "2px solid black", fontSize: "20px"}}
        // onClick={handleNavigate}
        to="/cart"
        > Cart({state.length})</Link>
    </div>
  )
}

export default Navbar;