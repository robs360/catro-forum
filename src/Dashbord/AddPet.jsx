import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/Authprovider";
import { useNavigate } from "react-router-dom";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const AddPet = () => {
    const { user } = useContext(AuthContext)
    const [select, setSelect] = useState('cat')
    const [short, setDes] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);
    const [image,setImage]=useState('');
    const [value1, setValue] = useState('');
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('http://localhost:5000/pet',{
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
        .then(data=>console.log(data))
    },[])
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.petName.value;
        const category = select;
        const age = e.target.petAge.value
        const date = e.target.date.value;
        const title = short;
      
        const email = e.target.userEmail.value;
        const location = e.target.location.value;
        
        
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
            .then(response => response.json())
            .then(data => {
                console.log("success ",data.data.url)
                
                if(data.data.url){
                    setImage(data.data.url)
                    const imageUrl=data.data.url;
                    const info = {
                     name, category, age, date, title, value1, email,
                     location,image:imageUrl
                    }
                    console.log(info)
                    
                    fetch('http://localhost:5000/addpet',{
                       method:'POST',
                       headers:{
                         'content-type':'application/json',
                       },
                       body:JSON.stringify(info)
                    })
                    .then(res=>res.json())
                    .then(data=>console.log(data))
                }
            })

    }
   
    return (
        <div className="w-full rounded-md p-2 bg-gray-400">
            <div className="w-full min-h-[70vh] rounded-md bg-white">
                <h1 className="text-2xl md:text-3xl
                     font-medium text-center">Add A Pet For Adopt</h1>
                <p className="text-center text-[17px] mt-3">The best course
                    of action may involve returning the pet to the animal
                    shelter or rescue organization <br /> that you adopted from .
                    If this isn't the case or isn't possible,
                    rehoming the pet yourself may be the best choice.</p>
                <form onSubmit={handleSubmit}>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 mt-7 p-2">
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Pet Name:</h1>
                            <input type="text" name="petName" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Email:</h1>
                            <input type="text" name="userEmail" value={`${user?.email}`} className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                       
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Pet Category:</h1>
                            <div className="w-[200px] rounded-md ">
                                <label htmlFor="options"></label>
                                <select id="options" onChange={(e) => {
                                    setSelect(e.target.value)
                                }}
                                    className="w-full rounded-md border-2 border-black">
                                    <option selected value="cat">Cat</option>
                                    <option value="dog">Dog</option>
                                    <option value="fish">Fish</option>
                                    <option value="rabbit">Rabbit</option>
                                </select>
                                {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Pet Age:</h1>
                            <input type="text" name="petAge" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Date:</h1>
                            <input type="text" name="date" placeholder="Format YYYY-MM-DD" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Location:</h1>
                            <input type="text" name="location" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Short Description:</h1>
                            <input type="text" onChange={(e) => {
                                setDes(e.target.value)
                            }} name="shortDes" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>
                        
                        <div>
                            <h1 className="text-[18px] font-medium mr-2">Upload Image:</h1>
                            <input onChange={(e) => {
                                setSelectedFile(e.target.files[0]);
                                
                            }} type="file" name="image" className="w-[200px] h-[40px] rounded-md border-2 border-black" />
                        </div>

                    </div>
                    <div>
                    <h1 className="text-[18px] font-medium mr-2">Description:</h1>
                    <ReactQuill  theme="snow" name='try' value={value1} onChange={setValue} />
                    </div>
                    <div className="w-[230px] mx-auto mt-8">
                        <button className="text-xl p-2 rounded-md
                       font-medium text-white bg-black w-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddPet