import React from "react";
// import styles from "./Header.module.css";
const styles = require("./Header.module.css");

const Header = () => {
  return (
    <div className={styles.body}>
      <div className="firstbox"></div>
      <div className="secondbox"></div>
    </div>
  );
};

export default Header;
