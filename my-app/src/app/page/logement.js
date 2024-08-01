import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";
import data from "../data/logement.json";
import NotFound from "./NotFound";

// Si le logement n'est pas trouvé, rediriger sur la page 404

const Logement = () => {
  const { id } = useParams();

  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    title: "",
    host: { name: "", picture: "" },
    location: "",
  });

  const selectLogement = data.find((logement) => logement.id === id);
  useEffect(() => {
    if (!selectLogement) {
      return <NotFound />;
    }
    setLogement(selectLogement);
  }, [selectLogement]);

  if (!selectLogement) return null;

  return (
    <>
      <Header />
      <h1>{logement.title}</h1>
      <Footer />
    </>
  );
};

export default Logement;
