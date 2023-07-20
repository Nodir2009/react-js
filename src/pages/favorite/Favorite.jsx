import React, { useContext } from 'react'
import { StateContext } from '../../context/context'
import FavoriteCard from './FavoriteCard'
import "./Favorite.css"

function Favorite() {
    const {favorite}=useContext(StateContext)
  return (
    <div className='container'>
        <h1>favorite list</h1>
    <div className='favorite'>
    {favorite.map((item,index) =><FavoriteCard key={index} {...item} />)}
    </div>
    </div>
  )
}

export default Favorite