import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/home.jsx';
import Login from './Authentication/Login.jsx';
import Register from './Authentication/Register.jsx';
import AuthProvider from './Authentication/Authprovider.jsx';
import Patlisting from './User/patlisting.jsx';
import Private from './Authentication/Private.jsx';
import Details from './User/Details.jsx';
import Donationcamp from './User/Donatoncamp.jsx';
import Detailsdonation from './User/Detailsdonation.jsx';
import Dashboard from './Dashbord/Dashboard.jsx';
import AddPet from './Dashbord/AddPet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
         path:'/',
         element:<Home></Home>
      },
      {
        path:'/log',
        element:<Login></Login>
     },
     {
      path:'/reg',
      element:<Register></Register>
     },
     {
      path:'/patlist',
      element:<Patlisting></Patlisting>
     },
     {
      path:'/donation',
      element:<Donationcamp></Donationcamp>
     },
    
     {
      path:'/details/:id',
      element:<Private><Details></Details></Private>,
      loader:({params})=>fetch(`http://localhost:5000/pat/${params.id}`)
     },
     {
      path:'/donation/details/:id',
      element:<Private><Detailsdonation></Detailsdonation></Private>,
      loader:({params})=>fetch(`http://localhost:5000/campaign/${params.id}`)
     },
     {
      path:'/dash',
      
      element:<Private><Dashboard></Dashboard></Private>,
      children:[
         {
           index:true,
           element:<Private><AddPet></AddPet></Private>
         }
      ]
     },
    ]
  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
