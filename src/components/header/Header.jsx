import React, {useContext} from "react";
import styles from "./Header.module.css"
import { DarkModeContext } from "../../context/darkMode";

function Header() {
  const {dark, setDark} = useContext(DarkModeContext)

  const activeDarkMode = () =>{
    setDark(!dark)
  }

  return (
    <div className={`${dark ? styles.headerdark : styles.header}`}>
      <img 
      src="./img/logo.png" 
      alt="Imagen logo" />
      <button onClick={activeDarkMode}>{dark ? "LIGHT MODE" : "DARK MODE"}</button>
    </div>
  );
}

export default Header;
