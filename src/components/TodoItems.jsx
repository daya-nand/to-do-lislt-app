import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-item-store";

const TodoItems = () => {
  const {todoItems,deleteItem}=useContext(TodoItemContext)
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={deleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
