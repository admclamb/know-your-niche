import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import Searchbar from "../../components/Searchbar/Searchbar";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <section className={`container pt-3 ${styles.main}`}>
        <div className="row gx-5">
          <section className="col-12 col-lg-8">
            <Card margin={"mb-4"}>
              <h3>HEllo</h3>
              <WelcomeCard />
            </Card>
            <Card>
              <Searchbar />
            </Card>
          </section>
          <section className="d-none d-lg-block col-4 border bg-primary"></section>
        </div>
      </section>
    </>
  );
};

export default Home;
