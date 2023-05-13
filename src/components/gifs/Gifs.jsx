import React, { useContext } from "react";
import CardGif from "../cardGif/CardGif";
import styles from "./Gifs.module.css";
import { AppContext } from "../../context/dataGifos";
import { DarkModeContext } from "../../context/darkMode";

function Gifs() {
  const { data } = useContext(AppContext);
  const {dark} = useContext(DarkModeContext)
  return (
    <div>
      <h1 className={`${dark ? styles.h1dark : styles.h1}`}>Resultados de la búsqueda</h1>
      <div className={`${dark ? styles.gifsdark : styles.gifs}`}>
        {data.length > 0 ? (
          data.map((dataGif) => <CardGif key={dataGif.id} dataGif={dataGif} />)
        ) : (
          <h1>SIN RESULTADOS </h1>
        )}
      </div>
    </div>
  );
}

export default Gifs;
