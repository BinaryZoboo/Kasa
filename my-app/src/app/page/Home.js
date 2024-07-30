import { Link } from "react-router-dom";
import Card from "../component/Card";
import Header from "../component/Header";
import data from "../data/logement.json";

const Home = () => {
  return (
    <>
      <Header />
      {data.map((item) => (
        // < a href='logement/L_ID_DU_LOGEMENT>
        <Link to={`/logement/${item.id}`}>
          <Card title={item.title} img={item.cover} />
        </Link>
      ))}

      <h3>TOTO</h3>
    </>
  );
};

export default Home;
