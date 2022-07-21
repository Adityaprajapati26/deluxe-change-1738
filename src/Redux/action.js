import * as types from "./actionTypes";
import axios from "axios";
const getProductsData = () => (dispatch) => {
    dispatch({type: types.GET_PRODUCTS_REQUEST});
    axios.get("http://localhost:8080/data")
    .then((res)=>dispatch({type: types.GET_PRODUCTS_SUCCESS, payload:res.data}))
    .catch((err)=>dispatch({type:types.GET_PRODUCTS_FAILURE,payload:err}));
};

// Sorting

const  getSortData = (res) => (dispatch) => {
    dispatch({type: types.GET_PRODUCTS_SUCCESS, payload: res})
};

export {getProductsData, getSortData};
