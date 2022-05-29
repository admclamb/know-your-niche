import { Link } from 'react-router-dom';
import styles from './NavList.module.css';

const NavList = () => {
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

export default NavList;
