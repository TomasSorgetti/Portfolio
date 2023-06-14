import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = ({ t, i18n }) => {
  console.log(i18n.language);


  const handleClick = (e, prop) => {
    e.preventDefault();
    i18n.changeLanguage(prop);
  };


  return (
    <div className={styles.navCont} id="header">
      <a className={styles.logo}>Tomás Sorgetti</a>
      <div className={styles.navLinks}>
        <a href="#about" className={styles.link}>
          {t("Sobre_Mí")}
        </a>
        <a href="#proyects" className={styles.link}>
          {t("Proyectos")}
        </a>
        <a href="#contact" className={styles.link}>
          {t("Contacto")}
        </a>
        <div className={styles.lang}>
          <button
            onClick={(e) => handleClick(e, "es")}
            className={i18n.language === "es" ? styles.active : ""}
          >
            ES
          </button>
          <div className={styles.langSep}></div>
          <button
            onClick={(e) => handleClick(e, "en")}
            className={i18n.language === "en" ? styles.active : ""}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
