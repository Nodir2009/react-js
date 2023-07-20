import { nanoid } from 'nanoid';
import React from 'react'
import { BASE_URL } from '../../constants'
import axios from 'axios';

function NewMassageCard({showForm,setShowForm}) {


  const addMessageHandler = (e) =>{
    e.preventDefault();
    const forma=new FormData(e.target)
    const {name,phone,ariza}=Object.fromEntries(forma.entries())
    const id=nanoid();

    
    const newAriza={name,phone,ariza,id};
    axios.post(`${BASE_URL}/messages`,newAriza)
    .then(res=>{
      alert("new message add")
     setShowForm(false)
    })
  }
  return (

    <form onSubmit={addMessageHandler} style={{display:showForm ? "flex" :"none"}} className="create-message-form">
    <input required  name='name' type="text" placeholder='name' />
    <input required name='phone' type="text" placeholder='phone' />
    <input required name='ariza' type="text" placeholder='ariza' />
    <button type='sumbit'>ARIZA QOSHISH</button>
    </form>

  )
}

export default NewMassageCard