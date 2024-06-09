import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/Authprovider";
import Swal from "sweetalert2";

const AdoptionREQ=()=>{
    const navigate=useNavigate('/log')
    const [info,setInfo]=useState([])
    const [info2,setInfo2]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
         fetch('https://catro-server.vercel.app/adoption_data',{
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
         })
         .then(res=>{
            if(!res.ok){
                
                navigate('/log')
            }
            else{
                return res.json()
            }
        })
        .then(data=>{
            console.log(data)
            const filterData=data.filter(item=>item.author===user?.email)
            setInfo(filterData)
        })
    },[])
    const handleClick=(id)=>{
       fetch(`https://catro-server.vercel.app/adoption_data/${id}`,{
           headers:{
              'content-type': 'application/json',
           }
       })
       .then(res=>res.json())
       .then(data=>{
         console.log(data)
         if(data.petId){
            fetch(`https://catro-server.vercel.app/update/status/${data.petId}`,{
                method:'PATCH',
                headers:{
                    'content-type': 'application/json',
                }
            })
            .then(res=>res.json())
            .then(data=>{
                Swal.fire("Adpotion Rewuest Accepted")
                console.log(data)})
         }
       })
    }

    const handleDelete=(id)=>{

        fetch(`https://catro-server.vercel.app/adoption_data/${id}`,{
            method:'DELETE',
            headers:{
                'content-type': 'application/json',
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            fetch('https://catro-server.vercel.app/adoption_data',{
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                }
             })
             .then(res=>{
                if(!res.ok){
                    
                    navigate('/log')
                }
                else{
                    return res.json()
                }
            })
            .then(data=>{
                console.log(data)
                const filterData=data.filter(item=>item.author===user?.email)
                setInfo(filterData)
            })
            Swal.fire("Adoption is rejected")
        })
    }
    return(
        <div className="w-full">
            <div className="shadow-xl rounded-md mt-4">
            <h1 className="text-2xl md:text-3xl
                     font-medium text-center">See All Adoption Data</h1>
                <p className="text-center text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
            </div>
            <div className="mt-4 w-full">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="">Name</th>
                            <th className="">Email</th>
                            <th className="">Phone</th>
                            <th className="">Reject</th>
                            <th className="">Accept</th>


                        </tr>
                        {
                            info.map(item => <tr>
                                <th>{item.name} </th>
                                <th>{item.userEmail}</th>
                                <th>{item.number}</th>
                                <th><button onClick={() => handleDelete(item._id)}><FaTrash className="text-2xl block mx-auto"></FaTrash></button></th>
                                <th><button onClick={() => handleClick(item._id)}><FaCheck className="text-2xl block mx-auto"></FaCheck></button></th>
                            </tr>)
                        }
                    </thead>
                </table>
            </div>
        </div>
    )
}
export default AdoptionREQ