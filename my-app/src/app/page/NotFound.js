import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main className="first">
        <h1 className="Err">404</h1>
        <p className="oups">Oups! La page que vous cherchez n'existe pas.</p>
        <Link to="/" className="returnAcc">
          Retourner sur la page d'accueil
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
