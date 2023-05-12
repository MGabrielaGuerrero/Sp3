import "./App.css";
import React,{ useContext } from "react";
import Gifs from "./components/gifs/Gifs";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import { AppProvider } from "./context/dataGifos";
import { DarkModeContext } from "./context/darkMode";

function App() {

  const {dark} = useContext(DarkModeContext)

  return (
    
    <AppProvider>
      <div className={`App ${dark ? "dark" : "light"}`}>
        <Header />
        <Search />
        <Gifs />
      </div>
    </AppProvider>
    
  );
}

export default App;
