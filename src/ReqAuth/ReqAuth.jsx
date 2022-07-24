import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router'

const ReqAuth = ({children}) => {
    const isAuth=useSelector((state)=>state.AuthReducer.isAuth)
    const location =useLocation();
    
 if(!isAuth)
 {
    return <Navigate to="/signup" state={{from:location}} />
  }
   return children
}

export default ReqAuth