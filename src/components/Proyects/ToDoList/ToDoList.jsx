import React from 'react'
import styles from "./ToDoList.module.scss"

import todoList from "../../../assets/img/todo-list.jpg"

import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const ToDoList = () => {
  return (
    <a
      href="https://to-do-list-pied-six.vercel.app/"
      className={styles.proyect}
      target="blank"
    >
      <div className={styles.imageCont}>
        <img src={todoList} alt="proyect" />
      </div>
      <div className={styles.textCont}>
        <h4>ToDo List</h4>
        <div className={styles.tecnology}>
          <FaReact color="#FE0072" size="1.8rem" />
          <SiJavascript color="#FE0072" size="1.8rem" />
          <SiTailwindcss color="#FE0072" size="1.8rem" />
        </div>
      </div>
    </a>
  );
}

export default ToDoList