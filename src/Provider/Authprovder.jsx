import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase.config';


export const Authcontext = createContext(null);


const Authprovder = ({ children }) => {
 const [loading , setLoading] = useState(true);
 
    const auth = getAuth(app);

    const [user, setUser] = useState([]);
    const createuser = (email,password) =>{
       
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);

    }
    //This is for login section....
    const login = (email,password) =>{

          setLoading(true);
        // return signInWithEmailAndPassword(auth,email,password);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut =() =>{
        
        setLoading(true);
        return signOut(auth);
    }
    
useEffect(()=>{

const unsubscribe =    onAuthStateChanged(auth,loggeduser =>{

     console.log("logged in user inside auth state",loggeduser);
     setUser(loggeduser);
     setLoading(false);
    })
    return () =>{

        return unsubscribe();
    }
},[])



    
    const authInfo = {

        user,
        loading,
        createuser,
        login,
        logOut
    }

    return (
        <Authcontext.Provider value={authInfo}>

            {children}
        </Authcontext.Provider>
    );
};

export default Authprovder;