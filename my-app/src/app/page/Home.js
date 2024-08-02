import Card from "../component/Card";
import Footer from "../component/Footer";
import Header from "../component/Header";
import data from "../data/logement.json";

const Home = () => {
  return (
    <>
      <Header />
      <section className="sectionhome">
        <Card logement={data} />
      </section>
      <Footer />
    </>
  );
};

export default Home;
