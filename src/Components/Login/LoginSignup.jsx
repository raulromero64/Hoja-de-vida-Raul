import "./../Login/LoginSignup.css";
import user_icon from "./../../assets/Login/person.png";
import email_icon from "./../../assets/Login/email.png";
import password_icon from "./../../assets/Login/password.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setaction] = useState("Código Asignado");
  return (
    <div className="container__Login">
      <div className="header__Login">
        <div className="text__Login">{action}</div>
        <div className="underline__Login"></div>
      </div>

      <div className="inputs__Login">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input__Login">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Nombre" />
          </div>
        )}

        <div className="input__Login">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input__Login">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Código Asignado" />
        </div>
      </div>

      {action === "Sing Up" ? (
        <div></div>
      ) : (
        <div className="forgot__password">
          Lost Password?<span>Click Here!</span>
        </div>
      )}

      <div className="submit__Container__Login">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setaction("Sing Up");
          }}
        >
          Sing Up
        </div>
        <div
          className={action === "Singn Up" ? "submit gray" : "submit"}
          onClick={() => {
            setaction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
//https://www.youtube.com/watch?v=8QgQKRcAUvM&t=247s
