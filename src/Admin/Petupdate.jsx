import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PetUpdate = () => {
    const singleData = useLoaderData()
    console.log(singleData)
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const petName=e.target.petName.value;
        const petCategory=e.target.category.value;
        const email=e.target.userEmail.value;
        const location=e.target.location.value;
        const date=e.target.date.value;
        const shortDes=e.target.shortDes.value;
        const description=e.target.des.value;
        const petAge=e.target.petAge.value;
        const image=e.target.image.value;
        const info={
            petName,petAge,petCategory,location,date,email,shortDes,
            description,image
        }
        fetch(`http://localhost:5000/updatepet/${singleData._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            },
            body:JSON.stringify(info)
        })
        .then(res=>{
            if(!res.ok){
                navigate('/log')
                return
            }
            res.json()})
        .then(data=>{
            Swal.fire("Updated Successfully");
        })
    }
    return (
        <div className="w-full">
            <div className="rounded-md shadow-xl">    <h1 className="text-2xl md:text-3xl
                     font-medium text-center">Add A Pet For Adopt</h1>
                <p className="text-center text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p></div>
                    
                    <form onSubmit={handleSubmit} className="border-2 border-green-500 w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7 p-2">
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Pet Name:</h1>
                    <input type="text" name="petName" defaultValue={`${singleData.name}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Email:</h1>
                    <input type="text" name="userEmail" defaultValue={`${singleData.email}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Category:</h1>
                    <input type="text" name="category" defaultValue={`${singleData.category}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Pet Age:</h1>
                    <input type="text" name="petAge" defaultValue={`${singleData.age}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Date:</h1>
                    <input type="text" name="date"  placeholder="Format YYYY-MM-DD" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Location:</h1>
                    <input type="text" name="location" defaultValue={`${singleData.location}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Short Description:</h1>
                    <input type="text" onChange={(e) => {
                        setDes(e.target.value)
                    }} name="shortDes" defaultValue={`${singleData.title}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Description:</h1>
                    <input type="text" name="des" defaultValue={`${singleData.description}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div>
                    <h1 className="text-[18px] font-medium mr-2">Upload Image:</h1>
                    <input type="text" name="image" defaultValue={`${singleData.image}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                </div>
                <div className="w-full mt-8">
                    <button type="submit" className="text-xl p-2 rounded-md
                       font-medium text-white bg-black w-full">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default PetUpdate