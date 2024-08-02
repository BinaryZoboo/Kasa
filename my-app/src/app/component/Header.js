import React from "react";
import { Link } from "react-router-dom";
import logo from "../data/logo.png";

const Header = () => {
  return (
    <header className="headers">
      <Link to={"/"}>
        <img src={logo} alt="Logo de Kasa" />
      </Link>
      <ul className="ulHead">
        <li className="liHead">
          <Link to={"/"} className="aLiHead">
            Accueil
          </Link>
        </li>
        <li className="liHead">
          <Link to={"/"} className="aLiHead">
            A Propos
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
