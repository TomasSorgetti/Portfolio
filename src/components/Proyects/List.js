import LearningSpark from "../../assets/img/projects/LearningSpark.png";
import challenge from "../../assets/img/projects/challenge.png";
import SmallTribesShop from "../../assets/img/projects/smalltribes.png";
//icons
import react from "../../assets/img/projects/icons/react.png";
import tailwind from "../../assets/img/projects/icons/tailwind.png";
import wordpress from "../../assets/img/projects/icons/wordpress.png";
import woocommerce from "../../assets/img/projects/icons/woocommerce.png";
import node from "../../assets/img/projects/icons/node.png";
import postgresql from "../../assets/img/projects/icons/postgresql.png";
import sequelize from "../../assets/img/projects/icons/sequelize.png";

const projectsData = [
  {
    image: LearningSpark,
    name: "Learning Spark",
    description:
      "Learning Spark, una pequeña empresa de tutores para exámenes internacionales. Trabajé a la par de una diseñadora para hacer, inicialmente, una landing page para captar clientes totalmente responsive.",
    tecnologys: [
      {
        tecnology: "React",
        icon: react,
      },
      {
        tecnology: "Tailwind",
        icon: tailwind,
      },
    ],
    link: "https://www.learning-spark.com/",
  },
  {
    image: SmallTribesShop,
    name: "Small Tribes Shop",
    description:
      "Small Tribes Shop es un ecommerce hecho en wordpress en el que colaboré el cual pretende ofrecer productos para un juego online llamado ARK",
    tecnologys: [
      {
        tecnology: "Wordpress",
        icon: wordpress,
      },
      {
        tecnology: "WooCommerce",
        icon: woocommerce,
      },
    ],
    link: "https://smalltribesshop.com/",
  },
  {
    image: challenge,
    name: "Node.js Challenge",
    description:
      "CRUD Challenge usando Node.js y posgresql. Aprendí a hacer descargas con excel desde el backend y progresé en mi aprendizaje sobre autenticación y autorización con jwt, manejo de errores y testing",
    tecnologys: [
      {
        tecnology: "Node.js",
        icon: node,
      },
      {
        tecnology: "PostgreSQL",
        icon: postgresql,
      },
      {
        tecnology: "Sequelize",
        icon: sequelize,
      },
    ],
    link: "https://github.com/TomasSorgetti/challenge-n365-server",
  },
];

export default projectsData;
