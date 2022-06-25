import NotSignedInNav from './NotSignedInNav/NotSignedInNav';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="navbar-brand">Know Your Niche</h1>
        <NotSignedInNav />
      </div>
    </nav>
  );
};

export default Navbar;
