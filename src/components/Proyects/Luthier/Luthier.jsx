import React from 'react'
import styles from "./Luthier.module.scss"

import luthier from "../../../assets/img/luthier.png"


import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaSass } from "react-icons/fa";

const Luthier = () => {
  return (
    <a
      href="https://tomassorgetti.github.io/La-Casa-Del-Luthier/index.html"
      className={styles.proyect}
      target="blank"
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
  );
}

export default Luthier