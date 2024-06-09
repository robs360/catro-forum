
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Patlisting = () => {
    const [info, setInfo] = useState([])
    const [drop, setDrop] = useState('cat')
   
    
        useEffect(() => {
            fetch('http://localhost:5000/pat')
                .then(res => res.json())
                .then(data => {
                    const filterData = data.filter(item => item.category === drop)
                    setInfo(filterData)
                })
        }, [drop])
    
    const handeChanged = (e) => {
        e.preventDefault()
        setDrop(e.target.value)
        console.log(drop)
       
    }
    const handleSearch = (e) => {
        e.preventDefault()
        const search = e.target.sea.value;
        console.log(search)
        fetch(`http://localhost:5000/search?q=${search}`)
        .then(res => res.json())
            .then(data => {
                setInfo(data)
            })
    }
 
    return (
        <div>
            <div className="flex w-[96%] mx-auto flex-col md:flex-row justify-center items-center gap-4 mt-10">
                <div className="w-[150px] mx-auto rounded-md ">
                    <label htmlFor="options"></label>
                    <select  onChange={handeChanged} id="options"
                     className="w-full rounded-md border-2 border-orange-400">
                        <option selected value="cat">Cat</option>
                        <option value="dog">Dog</option>
                        <option value="fish">Fish</option>
                        <option value="rabbit">Rabbit</option>
                    </select>
                    {/* {selectedOption && <p>You selected: {selectedOption}</p>} */}
                </div>
                <div className="w-[280px]">
                    <form onSubmit={handleSearch} action="">
                        <input placeholder="Search Here" name="sea" type="text" className="w-[200px] h-[45px]
                  rounded-l-2xl border-2 border-black" />
                        <button type="submit"  className="rounded-r-2xl
                   text-[18px] font-semibold p-1 bg-blue-400 
                   h-[45px] border-2 border-black">Search</button>
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-14">
                {
                    info?.map(item => <div className="flex shadow-xl 
                rounded-md p-1 flex-col md:flex-row gap-4 mx-auto  border-gray-400 border-[1px]
                w-[365px] md:w-[500px] bg-[#ffffff] justify-between items-center">
                        <div>
                            <img src={item.image} className="w-[270px] h-[240px] md:w-[230px] md:h-[200px] rounded-md" alt="" srcset="" />
                        </div>
                        
                        <div>
                            <div className="flex space-x-5">
                                <h1 className="text-[17px] font-semibold text-gray-500">Category:{item.category}</h1>
                                <h1 className="text-[17px] font-semibold text-gray-500">Name:{item.name}</h1>
                            </div>
                            <div className="flex space-x-5 my-4">
                                <h1 className="text-[17px] font-semibold text-gray-500">Age:{item.age}</h1>
                                <h1 className="text-[17px] font-semibold text-gray-500">Title: {(item?.title).slice(0, 15)}</h1>

                            </div>
                            <div className="flex space-x-4">
                                <h1 className="text-[17px] font-semibold text-gray-500">Date:{item.date}</h1>
                                <h1 className="text-[17px] font-semibold text-gray-500">{item.location}</h1>
                            </div>
                           <Link to={`/details/${item._id}`}> <button className="w-[200px] text-xl bg-black
                            px-2 py-1  rounded-lg font-medium text-white mt-5">View Details</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Patlisting