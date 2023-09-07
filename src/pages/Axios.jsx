import React from 'react'
import axios from "axios"
import { useState } from 'react';

function Axios() {
  const [joke,setJoke] = useState("")
    const getJoke = ()=>{
        axios.get('https://official-joke-api.appspot.com/random_joke').then((data)=> 
        {
          console.log(data)
         setJoke(data.data.setup+'...'+data.data.punchline)
        }).catch(error => console.log(err));

      }
  return (
    <div>Hello Youtube 
        <button onClick={getJoke}>Get Joke </button>
        <p>{joke}</p>
    </div>
  )
}

export default Axios