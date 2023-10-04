import React from "react";
import styles from "./Learning.module.scss";

import LearningSparks from "../../../assets/img/Learning.png";

import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";


const Learning = () => {
  return (
    <a
      href="https://tomassorgetti.github.io/La-Casa-Del-Luthier/index.html"
      className={styles.proyect}
      target="blank"
    >
      <div className={styles.imageCont}>
        <img src={LearningSparks} alt="proyect" />
      </div>
      <div className={styles.textCont}>
        <h4>Learning Sparks</h4>
        <div className={styles.tecnology}>
          <FaReact color="#FE0072" size="1.8rem" />
          <SiJavascript color="#FE0072" size="1.8rem" />
          <SiTailwindcss color="#FE0072" size="1.8rem" />
        </div>
      </div>
    </a>
  );
};

export default Learning;
