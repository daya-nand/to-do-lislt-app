import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const {todoItems}=useContext(TodoItemContext)

  if (todoItems.length === 0) {
    return <p className={styles.welcome}>heyy welcome</p>;
  }
  return null;
};

export default WelcomeMessage;
