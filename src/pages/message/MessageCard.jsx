import React, { useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants'
import {BsFillTrashFill} from "react-icons/bs"

function MessageCard({index,id,name,phone,ariza,setMessages,messages}) {
  const deleteFromClients=()=>{
    axios.delete(`${BASE_URL}/messages/${id}`)
      .then(res => {
        const filtered = messages.filter(item => item.id !== id)
        setMessages(filtered)
      })
  }

  return (
    <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{ariza}</td>
            <td>
              <button onClick={deleteFromClients}>
              <BsFillTrashFill/>
              </button>
            </td>
          </tr>
  )
}

export default MessageCard