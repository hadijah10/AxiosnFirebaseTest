import { useEffect, useState } from 'react'
import {Routes,Route} from "react-router-dom"
import Crud from "./pages/Crud.jsx"
import Authenticate from './pages/Authenticate.jsx'
import GoogleSignIn from './pages/GoogleSignIn.jsx'
import Axios from './pages/Axios.jsx'
import Upload from './pages/Upload.jsx'
import Material from './pages/Material.jsx'

function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<Crud/>}></Route>
    <Route path="/authenticate" element={<Authenticate/>}></Route>
    <Route path="/signin" element={<GoogleSignIn/>}/>
    <Route path="/axios" element={<Axios/>}/>
    <Route path="/img" element={<Upload/>}/>
   < Route path="/mui" element={<Material/>}/>
  </Routes>
    </>
  )
}

export default App

