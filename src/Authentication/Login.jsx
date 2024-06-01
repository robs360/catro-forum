import React from "react";
import login from '../assets/images/login-logo.png'
import '../App.css'
import { FaEnvelope, FaKey, FaUser, FaVoicemail } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="w-[96%] mx-auto min-h-[86vh] mt-8 rounded-md
        bg-gradient-to-b from-blue-400 to-blue-700 flex items-center justify-center">
            <div className="md:w-[570px] bg-gradient-to-b from-blue-400 to-blue-700 
             w-[355px] min-h-[500px] shadow-2xl rounded-md border-white border-l-[1px]
             border-r-[1px] border-t-[1px] border-b-2 p-2">
                 <FaUser className="w-[84px] h-[84px] mx-auto
                  mt-3 text-white border-[3px] border-white rounded-[50%] p-2" ></FaUser>
                <form action="" className="w-full mt-7 text-opacity-75">
                    <div className="w-[335px] mx-auto">
                        <div className="relative">
                            <input type="email" className="bg-transparent w-full pl-8 h-[50px]
                            border-b-2 border-white focus:outline-none
                            custom-placeholder placeholder-opacity-75 placeholder-white" placeholder="User Email" />
                            <FaEnvelope className="text-white text-[26px] absolute
                            top-4 left-0"></FaEnvelope>
                        </div>

                    </div>
                    <div className="w-[335px] mx-auto mt-5">
                        <div className="relative"> 
                            <input type="password" className="bg-transparent w-full 
                           h-[50px] border-b-2 border-white focus:outline-none pl-8
                           placeholder-white custom-placeholder placeholder-opacity-70"
                            placeholder="User Password"/>
                             <FaKey className="text-white text-[26px] absolute
                            top-4 left-0"></FaKey>
                        </div>
                    </div>
                   <div className="w-[100px] mx-auto mt-7">
                   <button className="py-2 px-4 text-xl text-white font-medium
                    border-2 border-white rounded-md text-opacity-70">Login</button>
                   </div>
                </form>
                <Link to={'/reg'}>
                <p className="text-center text-white mt-7">Already have an account?</p>
            </Link>
            </div>
            
        </div>
    )
}
export default Login