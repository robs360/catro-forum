import React, { useContext, useState } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import Swal from "sweetalert2";

const Createcampaign = () => {
    const { user } = useContext(AuthContext)
    const [selectedFile, setSelectedFile] = useState(null);
    const [image,setImage]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const category = e.target.category.value;
        const email = e.target.userEmail.value;
        const maximum_donation = e.target.max.value;
        const last_date_of_donation = e.target.last_date.value;
        const short_description = e.target.short_des.value
        const long_description = e.target.des.value;
        const date = e.target.date.value
        const status="unpause";
        console.log("it is there")
        if (!selectedFile) {
            alert("Please select a file");
            return;
        }
        const form = new FormData(e.target)
        const image2=form.get('image')
        const data=new FormData()
        data.append("image",image2)
        fetch('https://api.imgbb.com/1/upload?key=63bcc1cbef7e3410aabf3d5dca95a368', {
            method: 'POST',
            body:data,
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("success ",data.data.url)  
            if (data.data.url){
                setImage(data.data.url)
                const imageUrl=data.data.url
            const info={
                email,category,maximum_donation,last_date_of_donation,
                short_description,long_description,date,status,image:imageUrl
            }
            console.log(info)
            fetch('https://catro-server.vercel.app/createcamp',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(info)
            })
            .then(res=>res.json())
            .then(data=>{
                Swal.fire("Campaign Created Successfully");
                console.log(data)})
            }
            
        })
    }
    return (
        <div className="w-full rounded-md p-2 bg-gray-400">
            <div className="w-full min-h-[80vh] rounded-md bg-white">
                <h1 className="text-2xl md:text-3xl
                     font-medium text-center">Create Donation For Pet</h1>
                <p className="text-center text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
                <form onSubmit={handleSubmit} action="">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7 p-2">
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Email:</h1>
                            <input type="text" name="userEmail" value={`${user?.email}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Category:</h1>
                            <input type="text" name="category" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Maximum Donation:</h1>
                            <input type="number" name="max" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Last Date:</h1>
                            <input type="" placeholder="format:2024-6-23" name="last_date" className="w-[200px] p-1 h-[40px]
                            placeholder:text-[18px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Today Date:</h1>
                            <input type="" name="date" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Short Description:</h1>
                            <input type="text" name="short_des" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Long Description:</h1>
                            <input type="text" name="des" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Upload Image:</h1>
                            <input onChange={(e) => {
                                setSelectedFile(e.target.files[0]);

                            }} type="file" name="image" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                    </div>
                    <div className="w-[220px] mx-auto mt-6">
                        <button className="rounded-md bg-black h-[42px]
                    text-white text-xl font-medium w-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Createcampaign