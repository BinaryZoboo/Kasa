import Card from "../component/Card";
import Footer from "../component/Footer";
import Header from "../component/Header";
import img from "../data/fondacc.png";
import data from "../data/logement.json";

const Home = () => {
  return (
    <>
      <Header />
      <div className="banner">
        <img src={img} alt="des falaises avec des vagues" />
        <p>Chez vous, partout et ailleurs</p>
      </div>
      <section className="sectionhome">
        <Card logement={data} />
      </section>
      <Footer />
    </>
  );
};

export default Home;
