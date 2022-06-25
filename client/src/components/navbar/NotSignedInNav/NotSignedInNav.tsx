import { Link } from 'react-router-dom';
import styles from './NotSignedInNav.module.css';

const NotSignedInNav = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navListItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/login">Login</Link>
      </li>
      <li className={styles.navListItem}>
        <Link to="/register">Sign up</Link>
      </li>
    </ul>
  );
};

export default NotSignedInNav;
