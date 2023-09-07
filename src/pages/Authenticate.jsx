import { createUserWithEmailAndPassword, onAuthStateChanged ,signInWithEmailAndPassword,signOut} from "firebase/auth";
import React, { useEffect, useState } from "react";
import {db,collection,getDocs,addDoc,updateDoc,doc,deleteDoc,auth} from "../firebase-config"


function Authenticate(){
    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("")
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("")
    const [user,setUser] = useState({})
    const [error,setError] = useState("")
    const [errorCode,setErrorCode] = useState("")
useEffect(() => {
    onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
    })
},[])
const register = async() => {
    try{
        const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
        console.log(user);
        setError(null)
        setErrorCode(null)
    }catch(err){
       setError(err.message)
       setErrorCode(err.code)
    }

}
const logIn = async()=> {
try{
    const userSingin = await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
    setError(null)
    setErrorCode(null)
}catch(err){
    setError(err.message)
    setErrorCode(err.code)
}
}
const logOut = async() => {
try{
    await signOut(auth)
    setError(null)
    setErrorCode(null)
}catch(err){
setError(err.message)
setErrorCode(err.code)
}
}

    return(
       <>
        <div>
            <h1>Register here</h1>
            <input type="email" placeholder="Email" onChange={e => {setRegisterEmail(e.target.value)}} />
            <input type="password" placeholder="password" onChange={e => {setRegisterPassword(e.target.value)} } required minLength={6}/>
            <button onClick={register}>Create User</button>
        </div>
        <div>
            <h1>Log In</h1>
            <input type="email" placeholder="Email" onChange={e => {setLoginEmail(e.target.value)}}/>
            <input type="password" placeholder="password" onChange={e => {setLoginPassword(e.target.value)}}/>
            <button onClick={logIn}>Log in</button>
        </div>
        <h4>Error : {error?error:"None"}</h4>
        <h4>Error Code: {errorCode?errorCode:"None"}</h4>
        <h3>{user&&user.email}</h3>
        <button onClick={logOut}>Sign Out</button>
       </>
    );
}
export default Authenticate