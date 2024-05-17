import "./App.scss";
import { useEffect, useRef } from "react";
//import components
import Portfolio from "./components/Portfolio/Portfolio";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import background from "./assets/img/background.png";
import gradient1 from "./assets/img/Gradient1.png";
import gradient2 from "./assets/img/Gradient2.png";
import gradient3 from "./assets/img/Gradient3.png";
import background_vector from "./assets/img/background_vector.png";

import { motion, useScroll, useTransform } from "framer-motion";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import AnimatedCursor from "react-animated-cursor";
import translations from "./translations";

i18n.use(initReactI18next).init({
  resources: translations,
});

function App() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 1.5, 1.5]);
  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, []);
  return (
    <div ref={ref} className="App" id="app" style={{ overflow: "hidden" }}>
      <AnimatedCursor
        innerSize={12}
        outerSize={16}
        color="157,33,103"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <NavBar/>
      <img className="gradient1" src={gradient1} alt="" />
      <img className="gradient2" src={gradient2} alt="" />
      <img className="gradient3" src={gradient3} alt="" />
      <motion.img
        className="vector"
        src={background_vector}
        alt=""
        style={{ scale, position: "absolute", objectFit: "cover" }}
      />
      <div>
        <Portfolio t={t} />
      </div>
      <Footer t={t} />
    </div>
  );
}

export default App;
