import styles from "./Proyects.module.scss";
import { motion } from "framer-motion";
import projects from "./List";




const Proyects = ({ t }) => {
  return (
    <div id="proyects" className={styles.projectsCont}>
      <h3>{t("Proyectos")}</h3>
      <article className={styles.projects}>
        {projects?.map(({ image, name, text, tecnologys, link }, index) => (
          <motion.a
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.45 }}
            href={link}
            target="blank"
            className={styles.project}
            key={index}
          >
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
          </motion.a>
        ))}
      </article>
    </div>
  );
};

export default Proyects;
