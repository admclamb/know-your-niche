import React from 'react';
import { Link } from 'react-router-dom';
const OffCanvasNav = () => {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
          Know Your Niche
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="offcanvas-nav__other">
          <li>
            <Link to="/" data-bs-dismiss="offcanvas">
              <i className="fa-duotone fa-pen-paintbrush fa-lg"></i> Create Post
            </Link>
          </li>
          <li>
            <Link to="/" data-bs-dismiss="offcanvas">
              <i className="fa-duotone fa-gear fa-lg"></i> Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvasNav;
