import { Link } from 'react-router-dom';
import styles from './NotSignedInNav.module.css';

const NotSingedInNav = () => {
  return (
    <div>
      <Link
        to={'/login'}
        className={`me-2 btn btn-pill btn-primary ${styles.btn}`}
      >
        Login
      </Link>
      <Link
        to={'/signup'}
        className={`btn btn-pill btn-outline-primary ${styles.btn}`}
      >
        Signup
      </Link>
    </div>
  );
};

export default NotSingedInNav;
