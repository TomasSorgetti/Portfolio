import React from "react";
import styles from "./Navbar.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {


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
              Sobre Mí
            </Nav.Link>
            <Nav.Link className={styles.link} href="#proyects">
              Proyectos
            </Nav.Link>
            <Nav.Link className={styles.link} href="#contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
