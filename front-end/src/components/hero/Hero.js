import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import working from './working.svg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>
            Find Your Work <span className={styles.headerSub}>Niche</span>
          </h1>
        </div>
        <div className={styles.main}>
          <p className="text-gray-dark">
            We use tools to gather information about your desired job. Quickly.
            Easily.
          </p>
          <div className={styles.buttons}>
            <Link to="/" className="btn btn-pill btn-primary">
              Start Searching
            </Link>
            <Link
              to="/"
              className="btn btn-pill ms-1 ms-sm-5 btn-outline-primary"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className={`d-none d-lg-block ${styles.right}`}>
        <img src={working} alt="Working at desk" className={styles.img} />
      </div>
    </section>
  );
};

export default Hero;
