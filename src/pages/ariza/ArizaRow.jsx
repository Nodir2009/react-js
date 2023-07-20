import React, { useContext } from 'react'


function ClientRow({index,id,name,phone,ariza}) {
  return (
    <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{ariza}</td>
            <td>
            </td>
          </tr>
  )
}

export default ClientRow