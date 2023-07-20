import React, { useContext, useState } from 'react'
import { StateContext } from '../../context/context'

function Main() {
  const [value,setValue]=useState()
  const {name,setName,son,setSon}=useContext(StateContext)

  const changeName=()=>{
    setName(value)
    setValue('')
  }
  
  const minusBtn=()=>{
  setSon(son-1)
  if(son<=0){
  setSon(0)
  }

  } 
  const plusBtn=()=>{
  setSon(son+1)

  } 
 return (
    <div>
   <input type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
   <button onClick={changeName}>Send</button>
   <h1>{son}</h1>
   <button onClick={minusBtn}>minus</button>
   <button onClick={plusBtn}>plus</button>

    </div>
  )
}

export default Main