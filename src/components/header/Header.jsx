import React, {useContext} from "react";
import styles from "./Header.module.css"
import { DarkModeContext } from "../../context/darkMode";

function Header() {
  const {dark, setDark} = useContext(DarkModeContext)

  const activeDarkMode = () =>{
    setDark(!dark)
  }

  const redirec = () =>{
    window.location.href = "https://giphy.com"
  }
  return (
    <div className={`${dark ? styles.headerdark : styles.header}`}>
      <img onClick={redirec}
      src="./img/logo.png" 
      alt="Imagen logo" />
      <button onClick={activeDarkMode}>{dark ? "LIGHT MODE" : "DARK MODE"}</button>
    </div>
  );
}

export default Header;
