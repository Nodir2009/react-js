import React from 'react'
// import "./productDetail.css"
import { useParams } from 'react-router-dom'
import {foods } from '../../datas/foods'

function ProductDetail() {
    const {id}=useParams()

    const product=foods.find(item=>item.id===Number(id))
  return (
    <div className='product-detail-container'>
        <h1>Product detail sahifa:{id}</h1>
        <img width={"300px"} src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
    </div>
  )
}

export default ProductDetail