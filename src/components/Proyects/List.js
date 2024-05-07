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
    textKey: "firstProject",
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
    textKey: "secondProject",
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
    textKey: "thirdProject",
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
