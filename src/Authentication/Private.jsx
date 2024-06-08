import React, { useContext } from "react";
import { Navigate ,useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Private=({children})=>{
    const location=useLocation();
    
    const {user,loading}=useContext(AuthContext);
    
    if(loading){
       return <Skeleton count={5} />
    }
    
    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/log'}></Navigate>
    }
    
}
export default Private




// return <p className="text-[18px] flex items-center
// font-semibold justify-center">loading <span className="loading loading-dots loading-md"></span></p>