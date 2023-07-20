import React, { useContext } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import {FcLike} from "react-icons/fc"
import { StateContext } from "../../../context/context";


function FoodsCard({ title, price, image, id ,setBasket, basket,foods, item}) {
  const navigate = useNavigate();
  const {favorite,setFavorite}=useContext(StateContext)

    const addToCart = () => {
        const check = basket.some((item) => item.id === id);
        if (check) {
            alert("bu mahsulot savatchada bor!");
            return;
        }
        
        setBasket([...basket, item]);
    };

    const addToFavorite = () => {
     const check = favorite.some((item) => item.id === id )
     if(check){
      alert("bu mahsulot sevimlilarda bor")
      return;
     }
     setFavorite([...favorite,item])
    }

    const getData = () => {
        navigate(`/productDetail/${id}`);
      };
    return (
    <div className="foods-card">
        <button onClick={addToFavorite} className="likeBtn"><FcLike/></button>
      <img onClick={getData} src={image} alt="" />
      <h2>nomi:{title}</h2>
      <h2>narxi:{price} som</h2>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default FoodsCard;



