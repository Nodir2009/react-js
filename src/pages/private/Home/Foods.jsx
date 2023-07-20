import React from 'react'
import "./Home.css"
import FoodsCard from './FoodsCard'
import { foods } from '../../../datas/foods'

function Foods({basket,setBasket}) {
  return (
    <div className='foods'>
        <h1>foods List</h1>
        <div className="foods-container">
            {foods.map((item,index) =><FoodsCard key={index} item={item} {...item} foods={foods} basket={basket} setBasket={setBasket}/>

             )}

        </div>
    </div>
  )
}

export default Foods