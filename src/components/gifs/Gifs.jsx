import React, { useContext } from "react";
import CardGif from "../cardGif/CardGif";
import styles from "./Gifs.module.css";
import { AppContext } from "../../context/dataGifos";

function Gifs() {
  const { data } = useContext(AppContext);
  return (
    <div>
      <h1 className={styles.h1}>Resultados de la búsqueda</h1>
      <div className={styles.gifs}>
        {data ? (
          data.map((dataGif) => <CardGif key={dataGif.id} dataGif={dataGif} />)
        ) : (
          <h1>SIN RESULTADOS </h1>
        )}
      </div>
    </div>
  );
}

export default Gifs;
