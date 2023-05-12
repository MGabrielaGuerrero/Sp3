import React, { useContext, useEffect, useState } from "react";
import styles from "./Serach.module.css";
import getGifs from "../../services/getGifs";
import { AppContext } from "../../context/dataGifos";
import { DarkModeContext } from "../../context/darkMode";

function Search() {

  const [textSearch, setTextSearch] = useState("buscar Gifs");
  const { setData } = useContext(AppContext);
  const { dark } = useContext(DarkModeContext);
  
  useEffect(() => {
    const response = getGifs(textSearch);
    setData(response);
  }, [textSearch, setData]);

  return (
    <div className={styles.contenedor}>
      <h1 className={`${dark ? styles.textdark : styles.text}`}>¡Inspirate y busca los mejores GIFS!</h1>
      <img src="./img/principal.png" alt="Search" className={styles.img} />
      <div className={`${dark ? styles.searchdark :styles.search}`}>
        <input
          type="text"
          value={textSearch}
          onClick={() => setTextSearch("")}
          onChange={(e) => setTextSearch(e.target.value)}
          className={styles.input}
        />
        <div className={`${dark ? styles.imgSearchdark : styles.imgSearch}`}>
          <img src="./img/search.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Search;
