import React, { useState } from "react";
import styles from "./Proyects.module.scss";
import { motion } from "framer-motion";

//components imports
import Videogames from "./Videogames/Videogames";
import Luthier from "./Luthier/Luthier";
import Pasteleria from "./Pasteleria/Pasteleria";
import ToDoList from "./ToDoList/ToDoList";

//icons imports
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const Proyects = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [<Videogames />, <Luthier />, <Pasteleria />, <ToDoList />];
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>(prevIndex - 1 + projects.length) %projects.length)
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };
  const getVisibleProjects = () => {
    const startIndex = activeIndex % projects.length;
    const visibleProjects = [];
    for (let i = 0; i < 3; i++) {
      const projectIndex = (startIndex + i) % projects.length;
      visibleProjects.push(projects[projectIndex]);
    }
    return visibleProjects;
  };
  const visibleProjects = getVisibleProjects();

  return (
    <motion.div
      id="proyects"
      className={styles.proyectsCont}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h3>{t("Proyectos")}</h3>
      <section>
        <button
          className={styles.prevButton}
          type="button"
          onClick={handlePrev}
        >
          <FcPrevious size={"3rem"} style={{ color: "red" }} />
        </button>

        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={`${styles.poyectCont} ${
              index === 1 ? styles.active : ""
            }`}
          >
            {project}
          </div>
        ))}
        <button
          className={styles.nextButton}
          type="button"
          onClick={handleNext}
        >
          <FcNext size={"3rem"} />
        </button>
      </section>
    </motion.div>
  );
};

export default Proyects;
