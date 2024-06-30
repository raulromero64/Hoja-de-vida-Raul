import "./../styles/Historias.css";
import { NavLink } from "react-router-dom";
import LoginSignup from "./../Login/LoginSignup";

const Historias = () => {
  return (
    <div className="container__general__historias">
      <div>
        <h3 className="title__texto">Ingrese Su Número de Asignación</h3>
      </div>
      <LoginSignup />
      <div className="botones">
        <NavLink to="/contactos" className="boton_enlace boton__enlace__somos">
          Contactos
        </NavLink>
        <NavLink to="/" className="boton_enlace boton__enlace__somos">
          Inicio
        </NavLink>
      </div>
    </div>
  );
};

export default Historias;
//https://www.youtube.com/watch?v=8QgQKRcAUvM&t=247s
