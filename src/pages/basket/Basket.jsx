import React from "react";
import "./Basket.css";
import BasketCard from "./BasketCard";

function Basket({ basket,setBasket }) {
  console.log(basket)
  return (
      <div className="container">
      <h1>Basket sahifa</h1>
    <div className="basket">
      {basket.map((item) => (
        <BasketCard setBasket={setBasket} basket={basket} key={item.id} {...item} />
      ))}
      </div>
    </div>
  );
}

export default Basket;