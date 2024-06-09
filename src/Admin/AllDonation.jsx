import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pause from '../assets/images/pause.png'
import unpause from '../assets/images/unpause.png'
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
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
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",      
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/admin/campaign/${id}`,{
                    method:'DELETE',
                    headers:{
                        'content-type': 'application/json',
                    }
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    const filterData=info.filter(item=>item._id!==id)
                    setInfo(filterData)
                })
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
      
    }
    return(
        <div>
            <div className="shadow-xl rounded-md">
            <h1 className="text-2xl md:text-3xl
                     font-medium text-center">See All Donation Campaign</h1>
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

                        <th className="">Pet Name</th>
                        <th className="">Max Donation</th>
                        <th className="">Pause</th>
                        <th className="">Edit</th>
                        <th className="">Delete</th>
                       
                    </tr>
                </thead>
                {
                    info.map(item=><tr>
                        <th>{item.category}</th>
                        <th>{item.maximum_donation}</th>
                        <th>
                           <button>
                           { 
                               item.status==='unpause'?(<div>
                                  <img src={unpause} className="w-[25px] h-[25px] my-1 block mx-auto" alt="" srcset="" />
                               </div>):(<img src={pause} className="w-[30px] my-1 h-[30px] block mx-auto" alt="" srcset="" />)
                            }
                           </button>
                        </th>
                        <th><Link to={`/dash/admin/campupdate/${item._id}`}><FaEdit className="block mx-auto text-2xl"></FaEdit></Link> </th>
                        <th><button onClick={()=>handleDelete(item._id)}><FaTrash className="block mx-auto text-xl"></FaTrash></button></th>
                    </tr>)
                }
                </table>
            </div>
        </div>
    )
}
export default AllDonation