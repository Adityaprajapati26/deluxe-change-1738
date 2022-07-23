import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup, Grid, GridItem, Flex, Box, Spacer } from '@chakra-ui/react';
import { addCart, delCart } from '../Redux/CartReduce';
import "./Cart.css";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handlePlusButton = (item) => {
        dispatch(addCart(item));
    };
    const handleMinusButton = (item) => {
        dispatch(delCart(item));
    }

    const cartItems = (cartItem) => {

        return (
            <div>
                <div>
                    <Grid className="grid_block" templateColumns="2fr 1fr 1fr" gap={6}>

                        <GridItem width="200px" height="100px" className='grid_cart_left'  >
                            <Flex gap={6}>
                                <Box w='70px' h='10'> <img width="200px" height="100px" src={cartItem.image} /></Box>
                                <Spacer />
                                <Box w='170px' h='10'  >
                                    <div>{cartItem.title.substring(0, 20)}</div>
                                    {cartItem.price}</Box>
                                <Spacer />
                            </Flex>


                        </GridItem>
                        <GridItem w='30%' h='10' className='grid_cart_mid'  ><ButtonGroup gap='3'>
                            <Button colorScheme='teal' size='md' onClick={() => handleMinusButton(cartItem)}>
                                -
                            </Button>
                            <h1>{cartItem.qty}</h1>
                            <Button colorScheme='teal' size='md' onClick={() => handlePlusButton(cartItem)}>+</Button>
                        </ButtonGroup></GridItem>
                        <GridItem w='100%' h='10' className='grid_cart_right' ><p>{cartItem.qty} * ${cartItem.price} = ${cartItem.qty * cartItem.price}</p></GridItem>

                    </Grid>
                </div>
            </div>
        )
    }

    const lastPortion = () => {
        return (
            <>
            <div style={{ border: "1px solid black", width: "100%" }}></div>
                <Grid templateColumns='2fr 1fr' m={6}>
                    <GridItem></GridItem>
                    <GridItem>
                <div>SubTotal ${120}</div>
                <p>or 4 interest-free payments of $31.25 with</p>
                <p>Taxes and shipping calculated at checkout</p>
                    <Button className="button" colorScheme='teal' size='md' >
                        Add to Cart
                    </Button>
                        <Button className="button" colorScheme='teal' size='md' >
                            Add to Cart
                        </Button>
                        <Button className="button" colorScheme='teal' size='md' >
                            Add to Cart
                        </Button>
                        <Button className="button" colorScheme='teal' size='md' >
                            Add to Cart
                        </Button></GridItem>
                </Grid>
            </>
        )
    };

    const emptyCart = () => {
        return (
            <p style={{ color: "white" }}>
                Cart is Empty Now !!!
            </p>
        )
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            <div>
                <Grid className="grid_block" templateColumns='repeat(2, 1fr)' gap={6}>
                    <GridItem w='100%' h='10' className='grid_left'  >Your cart</GridItem>
                    <GridItem w='100%' h='10' className='grid_right'   >Continue shopping</GridItem>
                </Grid>
            </div>

            <div>
                <Grid className="grid_block" templateColumns="2fr 1fr 1fr" gap={6}>
                    <GridItem w='100%' h='10' className='grid_pro_left'  >Product</GridItem>
                    <GridItem w='100%' h='10' className='grid_pro_mid'  >Quantity</GridItem>
                    <GridItem w='100%' h='10' className='grid_pro_right' >Total</GridItem>
                </Grid>
            </div>
            {state.length !== 0 && state.map(cartItems)}
            {lastPortion()}
        </>
    )
}

export default Cart;