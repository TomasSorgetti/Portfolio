import React from 'react'
import piProyect from "../../assets/img/piProyect.jpg"
import luthier from "../../assets/img/luthier.jpg"
import pasteleria from "../../assets/img/pastelería.jpg"
import styles from "./Proyects.module.scss"
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaSass } from "react-icons/fa";



const Proyects = () => {
  return (
    <motion.div id='proyects'
      className={styles.proyectsCont}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h3>Proyectos</h3>
      <section>
        <a
          href="https://tomassorgetti.github.io/La-Casa-Del-Luthier/index.html"
          className={styles.proyect}
          target="_blank"
        >
          <div className={styles.imageCont}>
            <img src={luthier} alt="proyect" />
          </div>
          <div className={styles.textCont}>
            <h4>La Casa del Luthier</h4>
            <div className={styles.tecnology}>
              <AiFillHtml5 color="#FE0072" size="1.8rem" />
              <DiCss3 color="#FE0072" size="1.8rem" />
              <FaSass color="#FE0072" size="1.8rem" />
            </div>
          </div>
        </a>

        <a
          href="https://github.com/TomasSorgetti"
          className={styles.proyectMiddle}
          target="_blank"
        >
          <div className={styles.imageCont}>
            <img src={piProyect} alt="proyect" />
          </div>
          <div className={styles.textCont}>
            <h4>Videogames</h4>
            <div className={styles.tecnology}>
              <FaReact color="#FE0072" size="1.8rem" />
              <SiRedux color="#FE0072" size="1.8rem" />
              <DiCss3 color="#FE0072" size="1.8rem" />
              <DiPostgresql color="#FE0072" size="1.8rem" />
              <FaNodeJs color="#FE0072" size="1.8rem" />
              <SiJavascript color="#FE0072" size="1.8rem" />
            </div>
          </div>
        </a>

        <a
          href="https://pf-front-eegvakue1-22-00.vercel.app/home"
          className={styles.proyect}
          target="_blank"
        >
          <div className={styles.imageCont}>
            <img
              src={pasteleria}
              alt="proyect"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.textCont}>
            <h4>Ohana Pastelería</h4>
            <div className={styles.tecnology}>
              <FaReact color="#FE0072" size="1.8rem" />
              <SiRedux color="#FE0072" size="1.8rem" />
              <DiCss3 color="#FE0072" size="1.8rem" />
              <DiPostgresql color="#FE0072" size="1.8rem" />
              <FaNodeJs color="#FE0072" size="1.8rem" />
              <SiJavascript color="#FE0072" size="1.8rem" />
            </div>
          </div>
        </a>
      </section>
    </motion.div>
  );
}

export default Proyects