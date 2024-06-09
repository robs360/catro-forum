import React, { useEffect, useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllPet = () => {
    const [info, setInfo] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        fetch('https://catro-server.vercel.app/pet', {
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
    
    
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
        
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://catro-server.vercel.app/petdelete/${id}`,{
                    method:'DELETE',
                    headers:{
                        'content-type':'application/json'
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    fetch('https://catro-server.vercel.app/pet', {
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
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                })
              
            }
          });
    }
   
    return (
        <div>
            <h1 className="text-2xl md:text-3xl
                     font-medium text-center">See All Added Pet</h1>
            <div className="w-full mt-8">
                <table className="w-full">
                    <thead>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </thead>
                    {
                        info?.map(item => <tr>
                            <th className="text-[16px] font-medium">{item.category}</th>
                            <th className="text-[16px] font-medium">{item.name}</th>
                           
                            <th className="text-[15px] my-1">
                            <Link to={`/dash/admin/petupdate/${item._id}`}><button><FaPen className="block mx-auto text-2xl">
                            </FaPen></button></Link>
                                </th>
                            <th className="text-[15px] my-1">
                                <button onClick={()=>handleDelete(item._id)}><FaTrash className="block mx-auto text-2xl"></FaTrash></button>
                            </th>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    )
}
export default AllPet