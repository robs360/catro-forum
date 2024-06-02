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