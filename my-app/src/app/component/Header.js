import React from "react";
import { Link } from "react-router-dom";
import logo from "../data/logo.png";

const Header = () => {
  return (
    <header className="headers">
      <Link to={"/"}>
        <img src={logo} alt="Logo de Kasa" />
      </Link>
      <ul>
        <li>
          <Link to={"/"}>Accueil</Link>
        </li>
        <li>
          <Link to={"/"}>A Propos</Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
