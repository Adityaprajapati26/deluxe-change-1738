import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Grid, GridItem, Flex, Box, Spacer } from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { addCart, delCart } from '../Redux/reducer/action';
import "./Cart.css";
let data=[
    {
        "id":1,
        "title":"Rays Of Light Hoops",
        "Price":16,
        "tag":"Earrings",
        "image":"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011000098-2__43894_823x.jpg?v=1645115759",
        "Count":1
      },
      {
        "id":2,
        "title":"Daisy Post Earrings",
        "Price":16,
        "tag":"Earrings",
        "image":"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101015-1_1100x.jpg?v=1646760637",
        "Count":1
      },
      {
        "id":3,
        "title":"Maryland Crab Earrings",
        "Price":15,
        "tag":"Earrings",
        "image":"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011300002-2__23761_823x.jpg?v=1645110224",
        "Count":1
      },
   
]

const Cart = () => {
    // const state = useSelector((state) => state.handleCart.cart);
    console.log(data)
    const [count,setCount]=useState(1)
    
    // const dispatch = useDispatch();

    const handlePlusButton = () => {
       setCount(count+1)
    };
    const handleMinusButton = () => {
       setCount(count-1)
    }
    // console.log(state)
    // var total = 0;
    // const cartItems = () => {
    //     total = total + cartItem.price * cartItem.qty;

        return (

            <div>
                <div>
                    {data.map((data)=>(
                             <Grid className="grid_block" templateColumns="2fr 1fr 1fr" gap={6} key={data.id}>

                             <GridItem width="200px" height="100px" className='grid_cart_left'  >
                                 <Flex gap={6}>
                                     <Box w='70px' h='10'> <img width="200px" height="100px" src={data.image} /></Box>
                                     <Spacer />
                                     <Box w='170px' h='10'  >
                                         <div>{data.title.substring(0, 20)}</div>
                                         {data.Price}</Box>
                                     <Spacer />
                                 </Flex>
     
     
                             </GridItem>
                             <GridItem w='30%' h='10' className='grid_cart_mid'  ><ButtonGroup gap='3'>
                                 <Button colorScheme='teal' size='md' onClick={ handleMinusButton}>
                                     -
                                 </Button>
                                 <h1>{count}</h1>
                                 <Button colorScheme='teal' size='md' onClick={ handlePlusButton}>+</Button>
                             </ButtonGroup></GridItem>
                             <GridItem w='100%' h='10' className='grid_cart_right' ><p>{"$"}{data.Price}</p></GridItem>
     
                         </Grid>  


                    ))}
                    <div style={{ border: "1px solid black", width: "100%" }}></div>
                 <Grid templateColumns='2fr 1fr' m={6}>
                     <GridItem></GridItem>
                    <GridItem>
                        <div>SubTotal ${50}</div>
                        <p>or 4 interest-free payments of $31.25 with</p>
                        <p>Taxes and shipping calculated at checkout</p>
                       <Button style={{backgroundColor:"black"}} className="button button1" size='md' >
                       <Link to="/checkout">Check out</Link>
                        </Button>
                        <Button style={{backgroundColor:"blue"}} className="button button2" size='md' >
                            shoppay
                        </Button>
                        <Button style={{backgroundColor:"yellow"}} className="button button3" size='md' >
                            PayPal
                        </Button>
                        <Button style={{backgroundColor:"black"}} className="button button4" size='md' >
                            GPay
                        </Button></GridItem>
                </Grid>
                    
                </div>
            </div>
        )
    // }

    // const lastPortion = () => {
    //     return (
    //         <>
    //             <div style={{ border: "1px solid black", width: "100%" }}></div>
    //             <Grid templateColumns='2fr 1fr' m={6}>
    //                 <GridItem></GridItem>
    //                 <GridItem>
    //                     <div>SubTotal ${total.toFixed(2)}</div>
    //                     <p>or 4 interest-free payments of $31.25 with</p>
    //                     <p>Taxes and shipping calculated at checkout</p>
    //                     <Button style={{backgroundColor:"black"}} className="button button1" size='md' >
    //                         Check out
    //                     </Button>
    //                     <Button style={{backgroundColor:"blue"}} className="button button2" size='md' >
    //                         shoppay
    //                     </Button>
    //                     <Button style={{backgroundColor:"yellow"}} className="button button3" size='md' >
    //                         PayPal
    //                     </Button>
    //                     <Button style={{backgroundColor:"black"}} className="button button4" size='md' >
    //                         GPay
    //                     </Button></GridItem>
    //             </Grid>
    //         </>
    //     )
    // };

    // const emptyCart = () => {
    //     return (
    //         <div style={{textAlign: "center", marginTop: "80px"}}>
    //             <p style={{ color: "black" , marginBottom: "30px" }}>
    //                 Your cart is empty
    //             </p>
    //             <Button style={{backgroundColor: "black" ,color: "white"}}><Link to="/products">Continue Shopping</Link></Button>
    //         </div>
    //     )
    // };

    // return (
    //     <div className="main">
    //         {/* {state.length === 0 && emptyCart()} */}
    //         {state.length===0 && emptyCart()}
    //         <div>
    //             <Grid className="grid_block" templateColumns='repeat(2, 1fr)' gap={6}>
    //                 <GridItem w='100%' h='10' className='grid_left'  >Your cart</GridItem>
    //                 <GridItem w='100%' h='10' className='grid_right'   >Continue shopping</GridItem>
    //             </Grid>
    //         </div>

    //         <div>
    //             <Grid className="grid_block" templateColumns="2fr 1fr 1fr" gap={6}>
    //                 <GridItem w='100%' h='10' className='grid_pro_left'  >Product</GridItem>
    //                 <GridItem w='100%' h='10' className='grid_pro_mid'  >Quantity</GridItem>
    //                 <GridItem w='100%' h='10' className='grid_pro_right' >Total</GridItem>
    //             </Grid>
    //         </div>
            // {/* {lastPortion()} */}
            // {state.length !== 0 && state.map(cartItems)}
            // {/* {lastPortion()} */}
        // </div>
    // )
}

export default Cart;