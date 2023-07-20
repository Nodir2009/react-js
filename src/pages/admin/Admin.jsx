import React, { useContext } from 'react'
import "./Admin.css"
import { StateContext } from '../../context/context'
function Admin() {
   const {name,setName}=useContext(StateContext) 
  return (
    <div>
        <h1>{name}</h1>
    </div>
  )
}

export default Admin