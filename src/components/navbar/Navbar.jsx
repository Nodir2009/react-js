import "./Navbar.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { StateContext } from "../../context/context";

function Navbar({ authDispatch, authState, basket }) {
  const {son}=useContext(StateContext)

  const logoutHandler = () => {
    authDispatch({ type: "LOGOUT" });
  };
  return (
    <nav>
        <h1>{son}</h1>
      <NavLink className={"nav-link"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={"nav-link"} to={"login"}>
        Login
      </NavLink>
      <NavLink className={"nav-link"} to={"main"}>
        Main
      </NavLink>
      <NavLink className={"nav-link"} to={"register"}>
        Register
      </NavLink>
      <NavLink className={"nav-link"} to={"admin"}>
        Admin
      </NavLink>
      <NavLink className={"nav-link"} to={"favorite"}>
        Favorite
      </NavLink>
      <NavLink className={"nav-link"} to={"newmassage"}>
        NewMassage
      </NavLink>
      <NavLink className={"nav-link"} to={"message"}>
        Message
      </NavLink>
      <NavLink className={"nav-link"} to={"basket"}>
        <FiShoppingCart />
        <sup>{basket.length}</sup>
      </NavLink>
      <h2>salom {authState.user.name}</h2>
      <button onClick={logoutHandler}>
        <RiLogoutBoxLine />
      </button>
    </nav>
  );
}

export default Navbar;