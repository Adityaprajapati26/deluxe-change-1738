
import {ADDITEM,DELITEM} from "./action"
   const cart = [];

export const handleCart = (state = cart, action) => {
    const Product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            const exist = state.filter((x) => x.id === Product.id);
            if (exist) {
                return state.map((x) =>
                    x.id === Product.id ? { ...x, count: x.count + 1 } : x
                );
            } else {
                
                return {
                    ...state,
                    cart:{...state,Product}
                    }

            }
        case "DELITEM":{
                      
            const exist1 = state.find((x) => x.id === Product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                x.id === Product.id ? {...x, qty: x.qty -1} : x
                );
            }
            
        }

            
        default:
            {
                return state;
            }
    }
}
