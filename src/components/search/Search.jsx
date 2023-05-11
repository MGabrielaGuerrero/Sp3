import React from "react";
import styles from "./Serach.module.css";
function Search() {
  return (
    <div>
      <h1 className={styles.text}>¡Inspirate y busca los mejores GIFS!</h1>
      <img src="./img/principal.png" alt="Search" className={styles.img} />
      <div className={styles.search}>
        <input type="text" value="Busca gifs" className={styles.input} />
        <div className={styles.imgSearch}>
          <img src="./img/search.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Search;
