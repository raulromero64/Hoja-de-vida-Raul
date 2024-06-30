import imagen1 from "../../assets/RaulBg.jpg";
import "./../styles/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="container__general">
          <section className="img_raul">
            <img src={imagen1} className="raulBg" alt="" />
          </section>

          <section className="section__text">
            <h1>Raul Hernan Romero Herrera</h1>
            <p>
              Tengo conocimientos en <span>HTML & CSS</span> los aplico con
              <span> React </span> y me estoy preparando para entender la lógica
              de Java Script y así poder ofrecerle mis servicios de una manera
              completa en el mundo de la programación <span>FRONTEND</span>.
            </p>
            <div className="boton">
              <NavLink to="/somos" className="boton_enlace">
                Quien soy
              </NavLink>
            </div>
          </section>
        </div>
      </main>
      <div className="attribution">
        {" "}
        Challenge by,
        <a href="./Quien soy.html" target="_blank">
          Hoja de vida
        </a>
        . Coded by
        <a href="./Quien soy.html"> Raul Romero H.</a>.
      </div>
    </>
  );
};

export default Home;
