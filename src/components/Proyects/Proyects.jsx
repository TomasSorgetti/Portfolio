import styles from "./Proyects.module.scss";
import { motion } from "framer-motion";
import projects from "./List";

const Proyects = ({ t }) => {
  return (
    <motion.div
      id="proyects"
      className={styles.projectsCont}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h3>{t("Proyectos")}</h3>
      <article className={styles.projects}>
        {projects?.map(({ image, name, text, tecnologys }, index) => (
          <div className={styles.project} key={index}>
            <img className={styles.projectImg} src={image} alt={name} />
            <div className={styles.textCont}>
              <div className={styles.text}>
                <h4>{name}</h4>
                <p>{text}</p>
              </div>
              <div className={styles.iconsCont}>
                {tecnologys?.map(({ tecnology, icon }, index) => (
                  <div className={styles.iconCont}>
                    <img src={icon} alt={tecnology} />
                    <p>{tecnology}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </article>
    </motion.div>
  );
};

export default Proyects;
