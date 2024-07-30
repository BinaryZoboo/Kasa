const Card = ({ title, img }) => {
  return (
    <>
      <h2>{title}</h2>
      <img src={img} alt="prévisualisation du logement" />
    </>
  );
};

export default Card;
