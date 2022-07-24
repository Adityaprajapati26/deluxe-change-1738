import axios from "axios";
import * as types from "./actionTypes";

export const register=(payload)=>(dispatch)=>{
  dispatch({type:types.REGISTER_REQUEST})
  return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",payload)
  .then((r)=>{dispatch({type:types.REGISTER_SUCCESS,payload:r.data});return types.REGISTER_SUCCESS})
  .catch((er)=>dispatch({type:types.REGISTER_FAILURE,payload:er}))
}
export const login=(Prams)=>(dispatch)=>{
 dispatch({type:types.LOGIN_REQUEST})
 return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",Prams)
 .then((r)=>{dispatch({type:types.LOGIN_SUCCESS,payload:r.data}); return types.LOGIN_SUCCESS})
 .catch((er)=>dispatch({type:types.LOGIN_FAILURE,payload:er}))

}
