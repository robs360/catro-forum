import React, { useContext } from "react";
import login from '../assets/images/login-logo.png'
import '../App.css'
import { FaEnvelope, FaGithub, FaGithubAlt, FaGoogle, FaKey, FaUser, FaVoicemail } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authprovider";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
    const {signIn,googleSignin,gitSignin}=useContext(AuthContext)
   
    const location = useLocation()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const Email = e.target.email.value;
        const Password = e.target.pass.value;
        signIn(Email, Password)
            .then(res => {
                console.log(res.user)
                Swal.fire("You are in here");
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error.message}`,
                  });
            })
    }
    const handleclicked=()=>{
        
        googleSignin()
        .then(res=>{
            const userInfo={
                name:res.user.displayName,
                email:res.user.email,
                image:res.user.photoURL,
            }
            axios.post('https://catro-server.vercel.app/users',userInfo)
            .then(res=>console.log(res.data))
            Swal.fire("You are in here");
        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
              });
        })
    }
    const handlegit=()=>{
        gitSignin()
        .then(res=>{
            const userInfo={
                name:res.user.displayName,
                email:res.user.email,
                image:res.user.photoURL,
            }
            axios.post('https://catro-server.vercel.app/users',userInfo)
            .then(res=>console.log(res.data))
            Swal.fire("You are in here");
        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.message}`,
              });
        })
    }
    return (
        <div className="w-[96%] mx-auto min-h-[86vh] mt-8 rounded-md
        bg-gradient-to-b from-blue-400 to-blue-700 flex items-center justify-center">
            <div className="md:w-[570px] bg-gradient-to-b from-blue-400 to-blue-700 
             w-[355px] min-h-[500px] shadow-2xl rounded-md border-white border-l-[1px]
             border-r-[1px] border-t-[1px] border-b-2 p-2">
                <FaUser className="w-[84px] h-[84px] mx-auto
                  mt-3 text-white border-[3px] border-white rounded-[50%] p-2" ></FaUser>
                <form action="" onSubmit={handleSubmit} className="w-full mt-7 text-opacity-75">
                    <div className="w-[335px] mx-auto">
                        <div className="relative">
                            <input type="email" name="email" className="bg-transparent w-full pl-8 h-[50px]
                            border-b-2 border-white focus:outline-none
                            custom-placeholder placeholder-opacity-75 placeholder-white" placeholder="User Email" />
                            <FaEnvelope className="text-white text-[26px] absolute
                            top-4 left-0"></FaEnvelope>
                        </div>

                    </div>
                    <div className="w-[335px] mx-auto mt-5">
                        <div className="relative">
                            <input type="password" name="pass" className="bg-transparent w-full 
                           h-[50px] border-b-2 border-white focus:outline-none pl-8
                           placeholder-white custom-placeholder placeholder-opacity-70"
                                placeholder="User Password" />
                            <FaKey className="text-white text-[26px] absolute
                            top-4 left-0"></FaKey>
                        </div>
                    </div>
                    <div className="w-[100px] mx-auto mt-7">
                        <button type="submit" className="py-2 px-4 text-xl text-white font-medium
                    border-2 border-white rounded-md text-opacity-70">Login</button>
                    </div>
                </form>
                 <div className="mt-5">
                      <h1 className="hr-lines text-center text-white text-xl font-semibold">
                        ------Login With------</h1>
                        <button onClick={handleclicked} className="w-full h-[48px] rounded-md
                        border-2 border-white mt-5 flex justify-center items-center
                        space-x-3 bg-orange-400">
                            <FaGoogle className="text-2xl text-white"></FaGoogle>
                             <span className="text-2xl text-white font-semibold">Google</span>
                        </button>
                        <button onClick={handlegit} className="w-full h-[48px] rounded-md
                        border-2 border-white mt-5 flex justify-center items-center
                        space-x-3 bg-orange-400">
                            <FaGithub className="text-2xl text-white"></FaGithub>
                             <span className="text-2xl text-white font-semibold">Github</span>
                        </button>
                 </div>
                <Link to={'/reg'}>
                    <p className="text-center text-white mt-7">Have not account?</p>
                </Link>
            </div>

        </div>
    )
}
export default Login