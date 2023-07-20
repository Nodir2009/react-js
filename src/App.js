import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/private/Home/Home";
import Login from "./pages/public/Login/Login";
import Register from "./pages/public/Register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./pages/admin/Admin"
import { useContext, useEffect, useReducer } from "react";
import { authReducer, initialValue } from "./reducer/authReducer";
import Basket from "./pages/basket/Basket";
import { useState } from "react";
import ProductDetail from "./pages/productDetail/ProductDetail";
import { StateContext } from "./context/context";
import Main from "./components/Main/Main";
import Favorite from "./pages/favorite/Favorite";
import Message from "./pages/message/Message";
import NewMassege from "./pages/newmessage/NewMassege";

function App() {
  const [name, setName]=useState('Nodir')
  const [son,setSon]=useState(1)
  const [authState, authDispatch] = useReducer(authReducer, initialValue);
  console.log(authState);
  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(authState.allUsers));
    localStorage.setItem("loggedIn", JSON.stringify(authState.loggedIn));
    localStorage.setItem("user", JSON.stringify(authState.user));
  }, [authState.allUsers, authState.loggedIn, authState.user]);

  const [basket, setBasket] = useState([]);
  const [favorite,setFavorite]=useState([])

  return (
    <StateContext.Provider value={{name,setName,son,setSon,favorite,setFavorite}}>

    <div className="App">
      <Navbar
        authDispatch={authDispatch}
        authState={authState}
        basket={basket}
        />
      <Routes>
        <Route element={<ProtectedRoute authState={authState} />}>
          <Route
            path="/"
            element={<Home setBasket={setBasket} basket={basket} />}
          />
        </Route>
        <Route
          path="login"
          element={<Login authDispatch={authDispatch} authState={authState} />}
        />
        <Route
          path="register"
          element={
            <Register authDispatch={authDispatch} authState={authState} />
          }
          />
        <Route
          path="basket"
          element={<Basket basket={basket} setBasket={setBasket} />} />
        <Route
          path="admin"
          element={<Admin />}
          />
        <Route
          path="main"
          element={<Main />}
          />
        <Route
          path="favorite"
          element={<Favorite />}
          />
        <Route
          path="newmassage"
          element={<NewMassege />}
          />
        <Route
          path="message"
          element={<Message />}
          />

        <Route path="productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </div>
          </StateContext.Provider>
  );
}

export default App;