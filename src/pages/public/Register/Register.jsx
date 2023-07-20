import React from 'react'
import "./Register.css"
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'

function Register({authDispatch}) {


  const navigate=useNavigate()
  const registerHandler=(e)=>{
    e.preventDefault()
    const forma=new FormData(e.target)
    const newUser=Object.fromEntries(forma.entries())
    console.log(newUser)
    authDispatch({type:"ADD_USER",payload:newUser})
    navigate("/login")
    newUser.id=nanoid()
  }
  return (
    <div className='register'>
       <form className="createTasksForm" onSubmit={registerHandler}>
        <input name='name' type="text" placeholder="ism kiriting" />
        <input name='email' type="email" placeholder="email kiriting" />
        <input name='parol' type="password" placeholder="parol kiriting"  />
        <button>REGISTER</button>
      </form>
    </div>
  )
}

export default Register