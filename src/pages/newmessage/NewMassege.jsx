import React, { useState } from 'react'
import './NewMassage.css'
import NewMassageCard from "./NewMassageCard"


function NewMassage() {
const [showForm,setShowForm]=useState(false)


  return (
    <div className='container'>
    <div className="newmessage-page">
      <button onClick={()=>setShowForm(p=>!p)} className='create-message-btn'>ADD NEW MESSAGE</button>
      <NewMassageCard showForm={showForm} setShowForm={setShowForm}/>

    </div>

    </div>
  )
}

export default NewMassage;