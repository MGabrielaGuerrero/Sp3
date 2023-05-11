import "./App.css";
import Gifs from "./components/gifs/Gifs";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import { AppProvider } from "./context/dataGifos";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Search />
        <Gifs />
      </div>
    </AppProvider>
  );
}

export default App;
