import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.scss"


const Navbar = () => {
  return (
    <div className={styles.navCont} id="header">
      <a className={styles.logo}>
        Tomás Sorgetti
      </a>
      <div className={styles.navLinks}>
        <a href="#about" className={styles.link}>
          Sobre Mí
        </a>
        <a href="#proyects" className={styles.link}>
          Proyectos
        </a>
        <a href="#contact" className={styles.link}>
          Contacto
        </a>
      </div>
    </div>
  );
}

export default Navbar