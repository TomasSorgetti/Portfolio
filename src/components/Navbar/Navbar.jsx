import React from "react";
import styles from "./Navbar.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ t, i18n }) => {
  const handleClick = (e, prop) => {
    e.preventDefault();
    localStorage.setItem("lang", prop);
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
            <Nav.Link className={styles.link} href="#buttonContact">
              {t("SobreMí")}
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
  );
};

export default NavBar;
