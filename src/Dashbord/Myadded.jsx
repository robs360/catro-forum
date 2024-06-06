import { useReactTable, flexRender, getCoreRowModel } from "@tanstack/react-table";
import React, { useContext, useEffect, useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios'; 
import { AuthContext } from "../Authentication/Authprovider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const MyAdded = () => {
    const {user}=useContext(AuthContext);
    const [data, setData] = useState([]);
    const [vari,setVari]=useState(false)
    const navigate=useNavigate()
    useEffect(() => {
        fetch('http://localhost:5000/pet', {
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    navigate('/log');
                } else {
                    return res.json();
                }
            })
            .then(data => {
                
                const filterData=data.filter(item=>item.email===user?.email)
                setData(filterData)
               
            });
    }, [user?.email]);


    const handleAdopted = (id) => {
        
        console.log('Adopted ID:', id);
    };
    
    const handleDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/petdelete/${id}`, {
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                    }
                })
                .then(response => {
                    fetch('http://localhost:5000/pet', {
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('jwt_token')}`
                        }
                    })
                        .then(res => {
                            if (!res.ok) {
                                navigate('/log');
                            } else {
                                return res.json();
                            }
                        })
                        .then(data => {
                            
                            const filterData=data.filter(item=>item.email===user?.email)
                            setData(filterData)
                           
                        });
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                   
                })
              
            }
          });
       
    }
    const columns = [
        {
            header: 'Serial',
            cell: (info) => info.row.index + 1,
        },
        {
            header: 'Name',
            accessorKey: 'name',
        },
        {
            header: 'Category',
            accessorKey: 'category',
        },
        {
            header: 'Status',
            accessorKey: 'status',
        },
        {
            header: 'Delete',
            accessorKey: 'delete',
            cell: ({ row }) => (
                <button className="block mx-auto" onClick={() => handleDelete(row.original._id)}>
                    <FaTrash />
                </button>
            ),
        },
        {
            header: 'Update',
            accessorKey: 'update',
            cell: ({ row }) => (
                <Link to={`/dash/update/${row.original._id}`}><button className="block mx-auto">
                <FaEdit />
            </button></Link>
            ),
        },
        {
            header: 'Adopted',
            accessorKey: 'adopted',
            cell: ({ row }) => (
                <button className="block mx-auto" onClick={() => handleAdopted(row.original._id)}>
                    <h1>Adopt It</h1>
                </button>
            ),
        }
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div className="w-full">
            <table className="w-full text-[17px] font-medium">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyAdded;
