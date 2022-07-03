import NotSignedInNav from './NotSignedInNav/NotSignedInNav';

const Navbar = () => {
  return (
    <nav className="navbar border-bottom">
      <div className="container">
        <h1 className="navbar-brand">Know Your Niche</h1>
        <NotSignedInNav />
      </div>
    </nav>
  );
};

export default Navbar;
