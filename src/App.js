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

import { motion, useScroll, useTransform } from "framer-motion";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Desarrollador: "Full Stack Developer",
        Sobre_Mí: "About",
        Proyectos: "Proyects",
        Contacto: "Contact",
        Contactame: "Contact",
        TXT1: "I am a full stack web developer with a special focus on",
        TXT2: "front-end. My curiosity and desire for improvement led me to",
        TXT3: " become a luthier and, later, to get involved in the",
        TXT4: "development of websites. My goal is to create exceptional ",
        TXT5: "online experiences for users, focusing on usability,",
        TXT6: " attractive design, and performance optimization.",
      },
    },
    es: {
      translation: {
        Desarrollador: "Desarrollador Full Stack",
        Sobre_Mí: "Sobre Mí",
        Proyectos: "Proyectos",
        Contacto: "Contacto",
        Contactame: "Contactame",
        TXT1: "Soy un desarrollador web full stack con un enfoque especial en el",
        TXT2: "front-end. Mi curiosidad y deseo de perfeccionamiento me condujo a",
        TXT3: "convertirme en un luthier y, posteriormente, a involucrarme en el",
        TXT4: "desarrollo de sitios web. Mi objetivo es crear experiencias en línea",
        TXT5: "excepcionales para los usuarios, centrándome en la usabilidad, el",
        TXT6: "diseño atractivo y la optimización del rendimiento.",
      },
    },
  },
  lng: "es",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});


function App() {
  const { t } = useTranslation();
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.95], [1, 1.5, 1.5])
  
  return (
    <div ref={ref} className="App" id="app" style={{ overflow: "hidden" }}>
      <Navbar t={t} i18n={i18n} />
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
