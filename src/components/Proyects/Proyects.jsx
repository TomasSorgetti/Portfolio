import React from 'react'
import piProyect from "../../assets/img/piProyect.jpg"
import styles from "./Proyects.module.scss"


const Proyects = () => {
  return (
    <div className={styles.proyectsCont}>
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
    </div>
  );
}

export default Proyects