

// For Add Item to Cart
export const addCart = (Product) => {
    return{
        type: "ADDITEM",
        payload: Product
    }
}

// For Delete Item From Cart
export const delCart = (Product) => {
    return{
        type: "DELITEM",
        payload: Product
    }
}

// For Delete All Item of Same Produxt
export const delAllCart = (product) => {
    return{
        type: "DELALLITEM",
        payload: product
    }
}

// For handle subtotal of product
export const totalPrice = (product) => {
    return{
        type: "TOTALPRICE",
        payload: product
    }
}