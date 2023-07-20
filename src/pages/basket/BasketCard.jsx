import React from 'react'
import "./Basket.css"
function BasketCard({image,id,title,price,basket,setBasket}) {


  console.log(title,)
    const deleteBtn=()=>{
    const filtered=basket.filter(item=>item.id!==id)
 setBasket(filtered)
    }
    console.log(basket)
  return (
    <div className='Basket-card'>
        <img src={image} alt="" />
        <h3>Nomi:{title}</h3>
        <h3>Narxi:{price}</h3>
        <button onClick={deleteBtn}>delete</button>
    </div>
  )
}

export default BasketCard