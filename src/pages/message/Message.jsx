import React, {useEffect,useState} from 'react'
import axios from 'axios'
import "./Message.css"
import { BASE_URL } from '../../constants'
import Massages from './Massages';

function Message() {
  const [messages,setMessages]=useState([]);
  
  useEffect(()=>{
    axios.get(`${BASE_URL}/messages`).then((res)=>setMessages(res.data))
  },[])
  return (
    <div className='messages'>
      <Massages messages={messages}/>
    </div>
  )
}

export default Message