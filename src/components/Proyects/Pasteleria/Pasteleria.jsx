import React from 'react'
import styles from "./Pasteleria.module.scss"
import pasteleria from "../../../assets/img/pastelería.png"

import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

const Pasteleria = () => {
  return (
    <a
      href="https://pf-front-eegvakue1-22-00.vercel.app/home"
      className={styles.proyect}
      target="blank"
    >
      <div className={styles.imageCont}>
        <img src={pasteleria} alt="proyect" style={{ objectFit: "contain" }} />
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
  );
}

export default Pasteleria