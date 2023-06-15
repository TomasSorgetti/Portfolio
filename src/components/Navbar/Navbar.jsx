import React, {useEffect} from "react";
import styles from "./Navbar.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ t, i18n }) => {
  useEffect(() => {
    const lng = localStorage.getItem("lang")
    if (lng !== "es") {
      i18n.changeLanguage(lng);
    }
  }, [localStorage]);

  const handleClick = (e, prop) => {
    e.preventDefault();
    localStorage.setItem("lang",prop)
    i18n.changeLanguage(prop);
  };

  
  return (
    <Navbar className={styles.navCont} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className={styles.logo} href="#home">
          Tomás Sorgetti
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navCollapse}>
          <Nav className={styles.navLinks}>
            <Nav.Link className={styles.link} href="#about">
              {t("Sobre_Mí")}
            </Nav.Link>
            <Nav.Link className={styles.link} href="#proyects">
              {t("Proyectos")}
            </Nav.Link>
            <Nav.Link className={styles.link} href="#contact">
              {t("Contacto")}
            </Nav.Link>
            <Nav.Link className={styles.lang}>
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
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <div className={styles.navCont} id="header">
    //   <a className={styles.logo}>Tomás Sorgetti</a>
    //   <div className={styles.navLinks}>
    //     <a href="#about" className={styles.link}>
    //       {t("Sobre_Mí")}
    //     </a>
    //     <a href="#proyects" className={styles.link}>
    //       {t("Proyectos")}
    //     </a>
    //     <a href="#contact" className={styles.link}>
    //       {t("Contacto")}
    //     </a>
    //     <div className={styles.lang}>
    //       <button
    //         onClick={(e) => handleClick(e, "es")}
    //         className={i18n.language === "es" ? styles.active : ""}
    //       >
    //         ES
    //       </button>
    //       <div className={styles.langSep}></div>
    //       <button
    //         onClick={(e) => handleClick(e, "en")}
    //         className={i18n.language === "en" ? styles.active : ""}
    //       >
    //         EN
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
