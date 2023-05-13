import React, {useContext} from "react";
import styles from "./CardGif.module.css"
import { DarkModeContext } from "../../context/darkMode";
import { AppContext } from "../../context/dataGifos";

function CardGif({dataGif}) {

  const {dark} = useContext(DarkModeContext)
  const {data} = useContext(AppContext)

  const find =  (id) =>{

    const dataresponse = data.find((datagifs) => datagifs.id === id)
    return window.location.href = `${dataresponse.url}`

  }
  

  return (
    <div className={`${dark ? styles.carddark : styles.card}`}>
      <img onClick={(e) => find(e.target.id)} 
      src={dataGif.images.fixed_height.url}
      alt=""
      id={dataGif.id}
      />
    </div>
  );
}

export default CardGif;
