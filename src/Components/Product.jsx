import React, { useState, useEffect } from 'react';
import { addCart } from '../Redux/reducer/action';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { Button, Box } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Product.css";
import axios from 'axios';


const Product = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [product, setProduct] = useState([]);
     const addProduct = () => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        if(product.length===0||id)
        {
       axios.get(`http://localhost:8080/products/${id}`)
       .then((res)=>setProduct(res.data))
    }
      
    }, [id]);
    console.log(product);

    return (
            <>
                <Grid templateColumns='1.5fr 1fr'
                    className="product-main"
                >
                    <GridItem className="Image-part">
                        <img src={product.image} alt={product.title} height="150px" width="500px" /></GridItem>
                    <GridItem className="content-part">
                        <h1 className="prod-title">{product.title}</h1>
                        <p >
                            <i style={{ color: "yellow" }} className="fa fa-star-o" aria-hidden="true"></i>
                            <i
                                style={{ color: "yellow" }} className="fa fa-star-o" aria-hidden="true"></i>
                            <i style={{ color: "yellow" }} className="fa fa-star-o" aria-hidden="true"></i>
                            <i style={{ color: "yellow" }} className="fa fa-star-o" aria-hidden="true"></i>
                            <i style={{ color: "yellow" }} className="fa fa-star-o" aria-hidden="true"></i>
                            Write a Review
                        </p>
                        <Box display="flex" gap="10px">
                            <p><i class="fa fa-comments" aria-hidden="true"></i>
                            </p>
                            <p>Ask a Questions</p>
                        </Box>
                        <h3>${product.price}</h3>
                        <Box style={{ display: "flex", gap: "5px" }}>
                            <img width="50px" height="20px" src="../assest/after.png" />
                            <div className="content-image" style={{ fontsize: "10px" }}>available for orders between $35 - $1,000 ⓘ </div>
                        </Box>
                        <Box style={{ display: "flex", gap: "5px" }}>
                            <div className="content-image" style={{ fontsize: "10px" }}>Pay in 4 interest-free installments for orders over $50 with </div>
                        </Box>
                        <Box>Quantity</Box>
                        <Box className="quantity" style={{ display: "flex", gap: "40px", border: "1px solid black" }}>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </Box>


                        <Link to="/cart"><Button className="button" colorScheme='teal' size='md' onClick={() => addProduct(product)}>
                            Add to Cart
                        </Button></Link>
                        <br />
                        <Button className="button" colorScheme='teal' size='md' onClick={() => addProduct(product)}>
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                            Add to Wishlist (4)
                        </Button>
                        <br />
                        <Button colorScheme='teal' className="button1"><Link to="/cart">Go to Cart</Link></Button>
                        <p>{product.description}</p>
                    </GridItem>
                </Grid>


            </>
        );
};

export default Product;