import React from "react";
import styles from "./Searchbar.module.css";
const Searchbar = () => {
  return (
    <form className={styles.form}>
      <input className={`form-control ${styles.input}`} />
      <button className={`btn ${styles.btn}`}>Submit</button>
    </form>
  );
};

export default Searchbar;
