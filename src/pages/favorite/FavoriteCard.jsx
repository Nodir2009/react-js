import React, { useContext } from 'react'
import { StateContext } from '../../context/context'

function FavoriteCard({image,price,title,id}) {
    const {favorite,setFavorite}=useContext(StateContext)
    const deleteBtn=()=>{
        const filtered=favorite.filter(item=>item.id!==id)
     setFavorite(filtered)
        }
  return (
    
    <div className='Favorite-card'> 
     <img src={image} alt="" />
     <h1> nomi:{title}</h1>
     <h1> narxi:{price}</h1>
     <button onClick={deleteBtn}>delete</button>
    </div>
  )
}

export default FavoriteCard