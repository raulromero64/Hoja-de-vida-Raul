import "./../styles/Somos.css";
import "./../styles/Contactos.css";
import { NavLink } from "react-router-dom";
import Img2 from "./../../assets/RaulEtiqueta.jpg";

const Contactos = () => {
  return (
    <div className="container__Tco">
      <div className="cards">
        <img className="imagen_raul" src={Img2} alt="" />

        <h2 className="name__contacto">Raúl Romero Herrera</h2>
        <span className="status__contacto">Diseñador</span>
        <p className="texto_p_contactos">
          Celular: 315 927 11 98 <br />
          <br />
          Correo Electonico: rhcmjr@gmail.com
        </p>
      </div>

      <div className="boton">
        <NavLink to="/" className="boton_enlace">
          Inicio
        </NavLink>
      </div>
    </div>
  );
};

export default Contactos;
