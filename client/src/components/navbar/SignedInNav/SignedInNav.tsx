import { Link } from 'react-router-dom';
import styles from './SignedInNav.module.css';

const SignedInNav = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/indeed">Indeed</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/upwork">Upwork</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/search">Search</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>
  );
};

export default SignedInNav;
