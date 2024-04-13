import LearningSpark from "../../assets/img/projects/LearningSpark.png";
import PortfolioEuge from "../../assets/img/projects/PortfolioEuge.png";
import SmallTribesShop from "../../assets/img/projects/smalltribes.png";
//icons
import react from "../../assets/img/projects/icons/react.png";
import tailwind from "../../assets/img/projects/icons/tailwind.png";
import wordpress from "../../assets/img/projects/icons/wordpress.png";
import woocommerce from "../../assets/img/projects/icons/woocommerce.png";



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
    image: PortfolioEuge,
    name: "Portfolio Designer",
    textKey: "thirdProject",
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
    link: "https://euge-sorgetti.vercel.app/",
  },
];

export default projectsData;
