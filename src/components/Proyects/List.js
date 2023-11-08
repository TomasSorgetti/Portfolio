import LearningSpark from "../../assets/img/projects/LearningSpark.png"
import wordGame from "../../assets/img/projects/wordGame.png"
import LaCasadelLuthier from "../../assets/img/projects/LaCasadelLuthier.png";
import VideoGames from "../../assets/img/projects/VideoGames.png";
import TodoList from "../../assets/img/projects/TodoList.png";
import PortfolioEuge from "../../assets/img/projects/PortfolioEuge.png";
//icons
import react from "../../assets/img/projects/icons/react.png"
import redux from "../../assets/img/projects/icons/redux.png"
import css from "../../assets/img/projects/icons/css.png"
import sass from "../../assets/img/projects/icons/sass.png"
import html from "../../assets/img/projects/icons/html.png";
import tailwind from "../../assets/img/projects/icons/tailwind.png";
import sequelize from "../../assets/img/projects/icons/sequelize.png";
import express from "../../assets/img/projects/icons/express.png";
import node from "../../assets/img/projects/icons/node.png"
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
    image: wordGame,
    name: "Día de la Soberanía Nacional",
    text: "Juego de palabras para una actividad escolar con la temática del día de la soberanía nacional. (en desarrollo)",
    tecnologys: [
      {
        tecnology: "React",
        icon: react,
      },
      {
        tecnology: "CSS",
        icon: css,
      },
    ],
    link: "https://dia-de-la-memoria-juego.vercel.app/",
  },
  {
    image: LaCasadelLuthier,
    name: "La Casa del Luthier",
    text: "La Casa del Luthier, un sitio web ficticio que utilicé para introducirme en el desarrollo web",
    tecnologys: [
      {
        tecnology: "HTML",
        icon: html,
      },
      {
        tecnology: "CSS",
        icon: css,
      },
      {
        tecnology: "Sass",
        icon: sass,
      },
    ],
    link: "https://tomassorgetti.github.io/La-Casa-Del-Luthier",
  },
  {
    image: VideoGames,
    name: "Videogames",
    text: "Proyecto Individual de Henry donde interactue con la API de videogames para obtener juegos y mostrarlos en cards, también cree una base de datos donde poder crear tu propio videojuego.",
    tecnologys: [
      {
        tecnology: "React",
        icon: react,
      },
      {
        tecnology: "Redux",
        icon: redux,
      },
      {
        tecnology: "Node",
        icon: node,
      },
      {
        tecnology: "Express",
        icon: express,
      },
      {
        tecnology: "Sequelize",
        icon: sequelize,
      },
    ],
    link: "https://github.com/TomasSorgetti/Videogames",
  },
  {
    image: TodoList,
    name: "Todo List App",
    text: "Proyecto donde podes agregar a una lista una tarea, eliminarla o checkearla como finalizada. Al checkearla se agrega a otra lista de las finalizadas, la cual podes eliminar. Lo utilizé para introducirme en Tailwind.",
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
    link: "https://to-do-list-pied-six.vercel.app/",
  },
  {
    image: PortfolioEuge,
    name: "Portfolio",
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



export default projects