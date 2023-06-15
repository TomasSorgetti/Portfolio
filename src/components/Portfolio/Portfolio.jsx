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
import frontImage from "../../assets/img/tom5 1.png"


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

const Portfolio = ({t}) => {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  const mainControlls = useAnimation()

  




  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, -600);
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
            hidden: { opacity: 0, y: 90 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControlls}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ y }}
        >
          <h1>Tomás Sorgetti</h1>
          <div className={styles.underTitle}>
            <h2 className={styles.coloredTitle}>{t("Desarrollador")}</h2>
          </div>
        </motion.div>
        <div className={styles.header}>
          <div className={styles.headerItemsLeft}>
            <ul>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -90 },
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
                  hidden: { opacity: 0, x: -90 },
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
                  hidden: { opacity: 0, x: -90 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.45 }}
                style={{ x, transition: { delay: 0.2 } }}
              >
                <p>REACT</p>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -90 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControlls}
                transition={{ duration: 0.5, delay: 0.55 }}
                style={{ x }}
              >
                <p>JAVASCRIPT</p>
              </motion.li>
            </ul>
          </div>
          <div className={styles.headerImageCont} style={{ y }}>
            <img className={styles.imageCont} src={frontImage} alt="" />
            <button id='buttonContact'>
              {" "}
              <a href="#contact"> {t("Contactame")}</a>
            </button>
          </div>
          <div className={styles.headerItemsRight}>
            <ul>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: 90 },
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
                  hidden: { opacity: 0, x: 90 },
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
                  hidden: { opacity: 0, x: 90 },
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
                  hidden: { opacity: 0, x: 90 },
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
          hidden: { opacity: 0, x: -70 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <h3>{t("Sobre_Mí")}</h3>
        <div>

          <p>
            {t("TXT1")}
            {t("TXT2")}
            {t("TXT3")}

          </p>
          <p>
            {t("TXT4")}
            {t("TXT5")}
            {t("TXT6")}
          </p>
        </div>
      </motion.section>
      <Proyects t={t} />
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
          <h3>{t("Contacto")}</h3>
        </div>
      </motion.section>
    </div>
  );
}

export default Portfolio