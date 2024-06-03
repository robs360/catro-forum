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
      path:'/details/:id',
      element:<Private><Details></Details></Private>,
      loader:({params})=>fetch(`http://localhost:5000/pat/${params.id}`)
     }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
