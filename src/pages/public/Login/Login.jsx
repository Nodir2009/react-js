import React,{useState} from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login({ authDispatch, authState }) {
  const [email,setEmail]=useState("")
  const [parol,setParol]=useState("")
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    const user = authState.allUsers.find((item) => item.email===email && item.parol===parol);
    if (user) {
      authDispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } else {
      alert("email yoki parol xato");
    }
  };

  return (
    <div className="login">
      <form className="createTasksForm" onSubmit={loginHandler}>
        <input required onChange={e =>setEmail(e.target.value)} type="email" placeholder="email kiriting" />
        <input required onChange={e =>setParol(e.target.value)} type="password" placeholder="password" />
        <button>Login</button>
      </form>
      <p>
        Hali ruyhatdan otmaganmisiz? Unda{" "}
        <Link className="link" to={"/register"}>
          Ro'yhatdan o'tish
        </Link>
      </p>
    </div>
  );
}

export default Login;