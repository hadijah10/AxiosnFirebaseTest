import { useEffect, useState } from 'react'
import '../App.css'
import {db,collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "../firebase-config"


function Crud() {
 const [users,setUsers] = useState([])
 const [fname,setName] = useState("")
 const [lname,setLname] = useState("")
 const [age,setAge] = useState("")
 const userCollectionRef = collection(db, "users")
useEffect(()=>{
const getUser = async() => {
    const data = await getDocs(userCollectionRef)
    setUsers(data.docs.map((doc) => (
      {...doc.data(),id:doc.id}
    )))
}
getUser()
},[])
const updateUser = async(id,age)=> {
const userDoc = doc(db,"users",id)
const userField = {age : parseInt(age)+1}
    await updateDoc(userDoc,userField)

}
const deleteUser = async(id) => {
const user = doc(db,"users",id)
await deleteDoc(user)
}
const docToAdd = async()=>{
  await addDoc(userCollectionRef,{firstname: fname,age:age,lastname:lname})
}
  return (
    <>
    <div >
      <div id='form'>
       <form action="POST" onSubmit={docToAdd}>
       <input type="text" name="fname" placeholder='Enter your fname' onChange={e => {setName(e.target.value)}} />
        <input type="text" name="lname" placeholder='Enter your lname' onChange={e => {setLname(e.target.value)}} />
        <input type="number" placeholder='Enter your age' onChange={e => {setAge(e.target.value)}} />
       </form>
        
        <button onClick={docToAdd}>submit</button>
      </div>
    {users.map((users,k) => {
      return (
        <div  key = {k}>
          <h3 >Name: {users.firstname} {users.lastname}</h3>
        <h4 >Age : {users.age}</h4>
        <button onClick={() => {updateUser(users.id,users.age)}}>Increase Age</button>
        <button onClick={() => {deleteUser(users.id)}}>Delete Me</button>
        </div>
      )
    })}  
    </div>
    </>
  )
}

export default Crud

