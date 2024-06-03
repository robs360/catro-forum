import React, { useContext } from "react";
import { Navigate ,useLocation } from "react-router-dom";
import { AuthContext } from "./Authprovider";

const Private=({children})=>{
    const location=useLocation();
    console.log(location)
    const {user,loading}=useContext(AuthContext);
     console.log(loading)
    if(loading){
        return <p className="text-[18px] flex items-center
         font-semibold justify-center">loading <span className="loading loading-dots loading-md"></span></p>
    }
    
    if(user){
        return children;
    }
    else{
        return <Navigate state={location.pathname} to={'/log'}></Navigate>
    }
    
}
export default Private