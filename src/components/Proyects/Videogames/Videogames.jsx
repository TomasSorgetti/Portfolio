import React from "react";
import styles from "./Videogames.module.scss";

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

import piProyect1 from "../../../assets/img/piProyect1.png";
import piProyect2 from "../../../assets/img/piProyect2.png";

const Videogames = () => {
  return (
    <a
      href="https://github.com/TomasSorgetti/Videogames"
      className={styles.proyect}
      target="blank"
    >
      <div className={styles.imageContVideogames}>
        <div className={styles.videogamesCont}>
          <img className={styles.image1} src={piProyect1} alt="proyect" />
          <img className={styles.image2} src={piProyect2} alt="proyect" />
        </div>
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
  );
};

export default Videogames;
