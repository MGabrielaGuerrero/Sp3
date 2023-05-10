
import './App.css';
import Gifs from './components/gifs/Gifs';
import Header from './components/header/Header';
import Search from './components/search/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Gifs/>
    </div>
  );
}

export default App;
