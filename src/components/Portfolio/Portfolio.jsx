//imports
import React from 'react'
import { useEffect, useRef } from "react";

//imports components
import Proyects from '../Proyects/Proyects';

//imports styles
import styles from "./Portfolio.module.scss"
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

//import images
import frontImage from "../../assets/img/katy.jpg"


import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [1, 0], [-distance, 0]);
}

const Portfolio = () => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  const mainControlls = useAnimation()

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 600);
  const y2 = useParallax(scrollYProgress, 100);
  
  const x = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 700])

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={styles.portfolio}>
      <section className={styles.headerCont}>
        <motion.div
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ y }}
        >
          <h1>Tomás Sorgetti</h1>
          <div className={styles.underTitle}>
            <h2>Desarrollador</h2>
            <h2 className={styles.coloredTitle}>Full Stack</h2>
          </div>
        </motion.div>
        <div className={styles.header}>
          <div className={styles.headerItemsLeft}>
            <ul>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{ x }}
              >
                <p>HTML</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.35 }}
                style={{ x, transition: { delay: 0.4 } }}
              >
                <p>CSS</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ x, transition: { delay: 0.2 } }}
              >
                <p>JAVASCRIPT</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.55 }}
                style={{ x }}
              >
                <p>REACT</p>
              </motion.li>
            </ul>
          </div>
          <motion.div className={styles.headerImageCont} style={{ y }}>
            <div className={styles.imageCont}>
              <img src={frontImage} alt="" />
            </div>
            <button>CONTACTAME</button>
          </motion.div>
          <div className={styles.headerItemsRight}>
            <ul>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.25 }}
                style={{ x: x2, y: y2, transition: { delay: 0.6 } }}
              >
                <p>REDUX</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.35 }}
                style={{ x: x2, y: y2, transition: { delay: 0.4 } }}
              >
                <p>NODE</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ x: x2, y: y2, transition: { delay: 0.2 } }}
              >
                <p>EXPRESS</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: 60 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.55 }}
                style={{ x: x2, y: y2 }}
              >
                <p>POSTGRESQL</p>
              </motion.li>
            </ul>
          </div>
        </div>
      </section>
      <motion.section
        className={styles.about}
        id="about"
        variants={{
          hidden: { opacity: 0, x: 60 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <h3>Sobre Mí</h3>
        <p>
          Soy un desarrollador web full stack con un enfoque especial en el
          front-end. Mi curiosidad y deseo de perfeccionamiento me condujo a
          convertirme en un luthier y, posteriormente, a involucrarme en el
          desarrollo de sitios web. Mi objetivo es crear experiencias en línea
          excepcionales para los usuarios, centrándome en la usabilidad, el
          diseño atractivo y la optimización del rendimiento.
        </p>
      </motion.section>
      <Proyects />
      <motion.section
        className={styles.contact}
        id="contact"
        variants={{
          hidden: { opacity: 0, x: -60 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.15 }}
      >
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
      </motion.section>
    </div>
  );
}

export default Portfolio