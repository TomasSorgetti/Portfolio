import './App.css';
import Portfolio from './components/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';

// import background from "./assets/img/background.png";
import gradient1 from "./assets/img/Gradient1.png";
import gradient2 from "./assets/img/Gradient2.png";
import gradient3 from "./assets/img/Gradient3.png";
function App() {
  return (
    <div className="App" id='app'>
      <Navbar />
      <img className="gradient1" src={gradient1} alt="" />
      <img className="gradient2" src={gradient2} alt="" />
      <img className="gradient3" src={gradient3} alt="" />
      <Portfolio />
    </div>
  );
}

export default App;
