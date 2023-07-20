import React from 'react'
import "./Home.css";
import Foods from "./Foods"


function Home({basket,setBasket}) {
  return (
    <div>
      <h1>Tabriklaymiz siz royhatdan otdingiz!</h1>

      <div className="Home">
        <Foods setBasket={setBasket} basket={basket} />
      </div>
      

    </div>
  )
}

export default Home