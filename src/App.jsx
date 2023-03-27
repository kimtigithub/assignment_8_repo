import logo from './logo.svg';
import './App.css';
import FavoriteSites from "./components/FavoriteSites";
import Profile from "./components/Profile";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <div className= "FavoriteSites">
        <FavoriteSites/>
    </div>
    <div className="Profile">
      <Profile/>
    </div>
    <div className= "Gallery">
      <Gallery/>
    </div>
    </div>
  );
}

export default App;
