import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';
const Home = () => {
  return (
    <>
      <div className="container pt-5">
        <Hero />
      </div>
      <section className={styles.main}>
        <div className="container">
          <h3 className="text-center">
            Use your strengths and to find your desired job market.
          </h3>
          <div className={styles.features}>
            <article className={styles.featureCard}>
              <i className="fa-light fa-rabbit-running fa-6x"></i>
              <h4>Quick & Easy</h4>
              <p>
                <em>KYNiche</em> uses automated tools and provides data fast and
                seemless.
              </p>
            </article>
            <article className={styles.featureCard}>
              <i className="fa-light fa-abacus fa-6x"></i>
              <h4>Get Statistical Data</h4>
              <p>
                Get the data of the jobs you find to get a better understanding
                of the job market.
              </p>
            </article>
            <article className={styles.featureCard}>
              <i className="fa-light fa-dumbbell fa-6x"></i>
              <h4>Use Your Strengths</h4>
              <p>
                Only include the technologies your'e strongest in and we'll find
                the best solutions quickly
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
