import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavList from './NavList';
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container border-bottom ${styles.navbarContainer}`}>
          <Link to="/" className="navbar-brand">
            Know Your Niche
          </Link>
          <NavList />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
