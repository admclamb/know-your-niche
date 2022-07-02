import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row border-bottom d-flex">
          <p>Learn More About Us</p>
          <p>Github</p>
        </div>
        <div className="row d-flex">
          <p>&copy 2022</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
