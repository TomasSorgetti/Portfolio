import React from 'react'
import piProyect from "../../assets/img/piProyect.jpg"
import styles from "./Proyects.module.scss"
import {motion} from "framer-motion";

const Proyects = () => {
  return (
    <motion.div
      className={styles.proyectsCont}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h3>Proyectos</h3>
      <section>
        <a href="" className={styles.proyect}>
          <img src={piProyect} alt="proyect" />
        </a>

        <a href="" className={styles.proyectMiddle}>
          <img src={piProyect} alt="proyect" />
        </a>

        <a href="" className={styles.proyect}>
          <img src={piProyect} alt="proyect" />
        </a>
      </section>
    </motion.div>
  );
}

export default Proyects