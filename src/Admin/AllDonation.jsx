import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllDonation=()=>{
    const [info,setInfo]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
         fetch('http://localhost:5000/protected_campaign',{
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
         })
         .then(res => {
            if (!res.ok) {

                navigate('/log')
            }
            else {
                return res.json()
            }
        })
        .then(data=>{
            console.log(data)
            setInfo(data)
        })
    },[])
    return(
        <div></div>
    )
}
export default AllDonation