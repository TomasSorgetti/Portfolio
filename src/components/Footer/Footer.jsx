import React from 'react'
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footerCont}>
      <h4>Tomás Sorgetti</h4>
      <div className={styles.footerIcons}>
        <a href="https://www.linkedin.com/in/tomas-sorgetti/" target="_blank">
          <AiOutlineLinkedin size="24px" color="white" />
        </a>
        <a href="#" target="_blank">
          <AiOutlineMail size="24px" color="white" />
        </a>
        <a href="#" target="_blank">
          <BsWhatsapp size="24px" color="white" />
        </a>
        <a href="https://github.com/TomasSorgetti" target="_blank">
          <AiOutlineGithub size="24px" color="white" />
        </a>
      </div>
      <div className={styles.footerLinks}>
        <a href="#about">Sobre Mí</a>
        <a href="#app">Portfolio</a>
        <a href="#contact">Contacto</a>
      </div>
      <p>Copyright 2023</p>
    </div>
  );
}

export default Footer