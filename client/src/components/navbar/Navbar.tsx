import { Link } from 'react-router-dom';
import NotSignedInNav from './NotSignedInNav/NotSignedInNav';

const Navbar = () => {
  return (
    <nav className="navbar border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Know Your Niche
        </Link>
        <NotSignedInNav />
      </div>
    </nav>
  );
};

export default Navbar;
