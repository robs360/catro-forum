import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users', {
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
            .then(data => {
                setInfo(data)
            })
    }, [])

    const handleAdmin = (id) => {
        fetch(`http://localhost:5000/make_admin/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            fetch('http://localhost:5000/users', {
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
                .then(data => {
                    setInfo(data)
                })
            console.log(data)
            Swal.fire('The user is admin now')
        })
    }
    return (
        <div>
            <div className="shadow-xl rounded-md">
                <h1 className="text-2xl md:text-3xl
                     font-medium text-center">See All User</h1>
                <p className="text-center p-2 rounded-md bg-[#ffffff80] text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
            </div>
            <div className="w-full mt-8">
                <table className="w-full">
                    <thead>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Make Admin</th>
                    </thead>
                    {
                        info?.map(item => <tr>
                            <th><img src={item.image}
                                className="w-[45px] 
                        h-[45px] my-1 rounded-[50%] block mx-auto" alt="" srcset="" /></th>
                            <th>{item.name}</th>
                            <th>{item.email}</th>
                            <th>
                                {
                                    item.role ? (<p className="text-[17px] font-medium">Admin</p>) :
                                        (<div>
                                            <button onClick={() => handleAdmin(item._id)}><FaUser className="text-2xl block mx-auto"></FaUser></button>
                                        </div>)
                                }
                            </th>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    )
}
export default AllUser