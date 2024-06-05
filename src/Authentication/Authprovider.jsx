import {
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
    signInWithPopup,
    signOut,GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,GithubAuthProvider 
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "./firebase.config";



export const AuthContext = createContext(null)
const googleprovider=new GoogleAuthProvider();
const gitProvidor=new GithubAuthProvider
const auth=getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleprovider)
    }
   const gitSignin=()=>{
    setLoading(true)
    return signInWithPopup(auth,gitProvidor)
   }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const jwtUser={email:currentUser?.email}
                  console.log(jwtUser)
                   fetch('http://localhost:5000/jwt',{
                       method:'POST',
                       headers:{
                          'content-type':'application/json'
                       },
                       body:JSON.stringify(jwtUser)
                   })
                   .then(res=> res.json())
                   .then(data=>{
                    
                    if(data.token){
                        localStorage.setItem('jwt_token',data.token)
                    }
                })
             
            }
           
            else{
                localStorage.removeItem('jwt_token');
               
            }
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user, createUser, signIn,
        googleSignin, logOut, loading,gitSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    )
}
export default AuthProvider