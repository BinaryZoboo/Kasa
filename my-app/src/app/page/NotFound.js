import React from "react";
import { Link } from "react-router-dom";
import styles from "../../sass/components/NotFound.module.scss";
import Footer from "../component/Footer";
import Header from "../component/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className={styles.first}>
        <h1 className={styles.Err}>404</h1>
        <p className={styles.oups}>
          Oups! La page que vous cherchez n'existe pas.
        </p>
        <Link to="/" className={styles.returnAcc}>
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
