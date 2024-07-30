import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../component/Header";
import data from "../data/logement.json";

// USESTATE & USEEFFECT à utiliser dans cette page !

// Si le logement n'est pas trouvé, rediriger sur la page 404

const Logement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectLogement = data.find((logement) => logement.id === id);
  useEffect(() => {
    if (!selectLogement) {
      navigate("/Erreur404");
    }
  }, [selectLogement, navigate]);
  if (!selectLogement) return null;

  return (
    <>
      <Header />
      <h1>{selectLogement.title}</h1>
    </>
  );
};

export default Logement;
