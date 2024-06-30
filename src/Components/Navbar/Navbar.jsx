import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, settoggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");
    //TogglerIcon
    toggleIcon === "nav__toggler"
      ? settoggleIcon("nav__toggler toggle")
      : settoggleIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <Link to="/" className="nav__title">
        Raul-H2
      </Link>
      <ul className={active}>
        <li>
          <NavLink to="/" className="active">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/somos">Quien soy</NavLink>
        </li>
        <li>
          <NavLink to="/diseños">Mis Diseños</NavLink>
        </li>
        <li>
          <NavLink to="/historias">Textos Guías</NavLink>
        </li>
        <li>
          <NavLink to="/contactos">Contactos</NavLink>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
