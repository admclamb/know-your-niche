import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import NavList from './NavList';
import OffCanvasNav from './OffCanvasNav';
import OffCanvasNavButton from './OffCanvasNavButton';
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={`container border-bottom ${styles.navbarContainer}`}>
          <Link to="/" className="navbar-brand">
            Know Your Niche
          </Link>
          <div className="d-block d-md-none ms-auto">
            <OffCanvasNavButton />
            <OffCanvasNav />
          </div>
          <div className="d-none d-md-block ms-auto">
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
