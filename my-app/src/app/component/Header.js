import React from "react";
import { Link } from "react-router-dom";
import styles from "../../sass/components/header.module.scss";
import logo from "../data/logo.png";

const Header = () => {
  return (
    <header className={styles.headers}>
      <Link to={"/"}>
        <img src={logo} alt="Logo de Kasa" />
      </Link>
      <ul className={styles.ulHead}>
        <li className={styles.liHead}>
          <Link to={"/"} className={styles.aLiHead}>
            Accueil
          </Link>
        </li>
        <li className={styles.liHead}>
          <Link to={"/"} className={styles.aLiHead}>
            A Propos
          </Link>
        </li>
      </ul>
    </header>
  );
};
export default Header;
