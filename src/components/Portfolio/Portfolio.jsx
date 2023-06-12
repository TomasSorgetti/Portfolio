//imports
import React from 'react'
import { Link } from 'react-router-dom';

//imports components
import Footer from '../Footer/Footer';

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
        <h1>Desarrollador Full Stack</h1>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          inventore, optio nihil, necessitatibus quod totam ab nobis temporibus
          voluptate libero quisquam odit. Repudiandae, modi libero ipsa porro
          exercitationem excepturi praesentium. Aperiam quibusdam maxime porro
          earum? Necessitatibus voluptate qui iure autem, similique eaque nisi
          ab officia, quam reprehenderit quod debitis nemo ullam fugit magnam
          sapiente, iusto reiciendis? Alias ducimus aliquam quaerat.
        </p>
      </section>
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
      <Footer />
    </div>
  );
}

export default Portfolio