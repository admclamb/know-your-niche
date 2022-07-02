import React from 'react';

import styles from './NoMatch.module.css';
import taken from './taken.svg';
const NoMatch = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.imgContainer}>
            <img
              src={taken}
              alt="Error page not found image"
              className={styles.img}
            />
          </div>
          <h4>404</h4>
          <p>Page Not Found</p>
        </div>
      </div>
    </main>
  );
};

export default NoMatch;
