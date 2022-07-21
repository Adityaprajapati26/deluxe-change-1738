import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    console.log("Heloo",state);
    console.log(state);
    return (
        <>
            <img src={state[0].image} />
            <button>+</button>
            <button>-</button>
        </>
    )
}

export default Cart