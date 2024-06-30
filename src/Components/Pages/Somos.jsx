import "./../styles/Somos.css";
import { NavLink } from "react-router-dom";
import Img2 from "./../../assets/RaulEtiqueta.jpg";

const Somos = () => {
  return (
    <main>
      <div className="container__general">
        <div className="cards">
          <div>
            <img className="imagen_raul" src={Img2} alt="" />
          </div>

          <h5 className="name">Raúl Romero Herrera</h5>
          <p className="status">Diseñador</p>

          <p className="texto_p">
            Soy diseñador con años de Experiencia. <br />
            <br />
            Trabaje en el mundo de las Artes Graficas por masde 30 años,
            desempeñandome en el área de creación y diseño publicitario.
          </p>
        </div>

        <section className="section__text">
          <div className="container__pq">
            <h2 className="titulo__pq">¿ Porque Diseño Web ?</h2>
            <p className="texto_p">
              Con los cambios tecnologicos vi la proyección del diseño grafico
              plasmado en el DISEÑO FRONTEND y me incursione en este aprendizaje
              y practica del DESARROLLO WED.
            </p>
          </div>

          <div className="botones">
            <NavLink
              to="/diseños"
              className="boton_enlace boton__enlace__somos"
            >
              Mis Diseños
            </NavLink>
            <NavLink to="/" className="boton_enlace boton__enlace__somos">
              Inicio
            </NavLink>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Somos;
