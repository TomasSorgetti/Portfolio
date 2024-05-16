import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaBehanceSquare } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "./Footer.module.scss";

const Footer = ({ t }) => {
  return (
    <div className={styles.footerCont}>
      <h4>Tomás Sorgetti</h4>
      <div className={styles.footerIcons}>
        <a href="https://www.linkedin.com/in/tomas-sorgetti/" target="_blank">
          <AiOutlineLinkedin
            className={styles.icons}
            size="24px"
            color="white"
          />
        </a>
        <a href="https://www.behance.net/tomassorgetti" target="_blank">
          <FaBehanceSquare className={styles.icons} size="24px" color="white" />
        </a>
        <a href="https://wa.me/541136323780" target="_blank">
          <BsWhatsapp className={styles.icons} size="24px" color="white" />
        </a>
        <a href="https://github.com/TomasSorgetti" target="_blank">
          <AiOutlineGithub className={styles.icons} size="24px" color="white" />
        </a>
      </div>
      <div className={styles.footerLinks}>
        <a href="#about">{t("Sobre_Mí")}</a>
        <a href="#proyects">{t("Proyectos")}</a>
        <a href="#contact">{t("Contacto")}</a>
      </div>
      <p>Copyright 2023</p>
    </div>
  );
};

export default Footer;
