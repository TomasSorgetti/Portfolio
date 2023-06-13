import './App.css';
import { useEffect, useRef } from 'react';
//import components
import Portfolio from './components/Portfolio/Portfolio';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
// import background from "./assets/img/background.png";
import gradient1 from "./assets/img/Gradient1.png";
import gradient2 from "./assets/img/Gradient2.png";
import gradient3 from "./assets/img/Gradient3.png";
import background_vector from "./assets/img/background_vector.png";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
function App() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 1.5, 1.5])
  
  return (
    <div ref={ref} className="App" id="app" style={{overflow:"hidden"}}>
      <Navbar />
      <img className="gradient1" src={gradient1} alt="" />
      <img className="gradient2" src={gradient2} alt="" />
      <img className="gradient3" src={gradient3} alt="" />
      <motion.img
        className="vector"
        src={background_vector}
        alt=""
        style={{ scale ,position:'absolute',objectFit:'cover'}}
      />
      <div>
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
