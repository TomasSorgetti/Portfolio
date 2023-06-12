//imports
import React from 'react'

//imports components
import Proyects from '../Proyects/Proyects';

//imports styles
import styles from "./Portfolio.module.scss"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

//import images
import background_vector from "../../assets/img/background_vector.png"
import frontImage from "../../assets/img/katy.jpg"


const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <img className={styles.vector} src={background_vector} alt="" />
      <section className={styles.headerCont}>
        <div className={styles.title}>
          <h1>Tomás Sorgetti</h1>
          <div className={styles.underTitle}>
            <h2>Desarrollador</h2>
            <h2 className={styles.coloredTitle}>Full Stack</h2>
          </div>
        </div>
        <div className={styles.header}>
          <ul className={styles.headerItemsLeft}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>
          <div className={styles.headerImageCont}>
            <img src={frontImage} alt="" />
          </div>
          <ul className={styles.headerItemsRight}>
            <li>REDUX</li>
            <li>NODE</li>
            <li>EXPRESS</li>
            <li>POSTGRESQL</li>
          </ul>
        </div>
        <div>
          <button>CONTACTAME</button>
        </div>
      </section>
      <section className={styles.about} id="about">
        <h3>Sobre Mí</h3>
        <p>
          Soy un desarrollador web full stack con un enfoque especial en el
          front-end. Mi curiosidad y deseo de perfeccionamiento me condujo a
          convertirme en un luthier y, posteriormente, a involucrarme en el
          desarrollo de sitios web. Mi objetivo es crear experiencias en línea
          excepcionales para los usuarios, centrándome en la usabilidad, el
          diseño atractivo y la optimización del rendimiento.
        </p>
      </section>
      <Proyects />
      <section className={styles.contact} id="contact">
        <div className={styles.contactLinks}>
          <div className={styles.linkCont}>
            <div className={styles.links}>
              <AiOutlineLinkedin size="24px" />
              <a className={styles.link}>Tomás Sorgetti</a>
            </div>
            <div className={styles.links}>
              <AiOutlineMail size="24px" />
              <a className={styles.link}>tomassorgetti456@gmail.com</a>
            </div>
            <div className={styles.links}>
              <BsWhatsapp size="24px" />
              <a className={styles.link}>+54 11 3632-3780</a>
            </div>
            <div className={styles.links}>
              <AiOutlineGithub size="24px" />
              <a className={styles.link}>TomasSorgetti</a>
            </div>
          </div>
          <h3>Contacto</h3>
        </div>
      </section>
    </div>
  );
}

export default Portfolio