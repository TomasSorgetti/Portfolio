import LearningSpark from "../../assets/img/projects/LearningSpark.png";
import wordGame from "../../assets/img/projects/wordGame.png";
import LaCasadelLuthier from "../../assets/img/projects/LaCasadelLuthier.png";
import VideoGames from "../../assets/img/projects/VideoGames.png";
import TodoList from "../../assets/img/projects/TodoList.png";
import PortfolioEuge from "../../assets/img/projects/PortfolioEuge.png";
import Arnaldo from "../../assets/img/projects/Arnaldo.png";
//icons
import react from "../../assets/img/projects/icons/react.png";
import redux from "../../assets/img/projects/icons/redux.png";
import css from "../../assets/img/projects/icons/css.png";
import sass from "../../assets/img/projects/icons/sass.png";
import html from "../../assets/img/projects/icons/html.png";
import tailwind from "../../assets/img/projects/icons/tailwind.png";
import sequelize from "../../assets/img/projects/icons/sequelize.png";
import express from "../../assets/img/projects/icons/express.png";
import node from "../../assets/img/projects/icons/node.png";
import postgresql from "../../assets/img/projects/icons/postgresql.png";

const projects = [
  {
    image: LearningSpark,
    name: "Learning Spark",
    text: "Learning Spark, una pequeña empresa de tutores para exámenes internacionales. Trabajé a la par de una diseñadora para hacer, inicialmente, una landing page para captar clientes totalmente responsive.",
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
    image: Arnaldo,
    name: "Arnaldo Heladería",
    text: "Hernaldo Heladería, un sitio web que desarrollé junto con un grupo, utilizando metodologías ágiles, que inició como un proyecto ficticio con la finalidad de agradar y poder ser vendido al cliente real.(en desarrollo)",
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
    link: "https://arnaldo.vercel.app/",
  },
  {
    image: PortfolioEuge,
    name: "Portfolio Designer",
    text: "Portfolio de Diseñadora UX/UI. Lo utilicé para practicar Tailwind aplicando Mobile First.",
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

export default projects;
