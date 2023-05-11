import React from "react";
import styles from "./Header.module.css"


function Header() {
  return (
    <div className={styles.header}>
      <img 
      src="./img/logo.png" 
      alt="Imagen logo" />
      <button>MODO DARK</button>
    </div>
  );
}

export default Header;
