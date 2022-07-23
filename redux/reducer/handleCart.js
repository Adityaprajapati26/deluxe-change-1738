


   const cart = [];

const handleCart = (state = cart, action) => {
    const Product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === Product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === Product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const Product = action.payload;
                return [
                    ...state,
                    {
                        ...Product,
                        qty: 1,
                    }
                ]

            }
        case "DELITEM":

            const exist1 = state.find((x) => x.id === Product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                x.id === Product.id ? {...x, qty: x.qty -1} : x
                );
            }

          
            
        default:
            {
                return state;
            }
    }
}
export default handleCart;