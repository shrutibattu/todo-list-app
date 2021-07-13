import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.scss";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = () => {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/todoItems")
      .then((res) => res.json())
      .then((res) => {
        setTodoItems(res);
      });
  }, []);
  // ---------------------------------------------------------

  const deleteTodoFromDatabase = (id) => {
    fetch("http://localhost:8080//api/todoItem/" + id, {
      method: "DELETE",
    })
      .then((response) => console.log(response))
      .then((res) => console.log(res));
  };

  const handleDelete = (id) => {
    const removeItem = todoItems.filter((todoItem) => {
      return todoItem.id !== id;
    });
    setTodoItems(removeItem);
  };

  return (
    <ul className={styles.ul}>
      {todoItems.map((todoItem) => (
        <div>
          <li className={styles.li}>{todoItem.task}</li>

          <button
            className={styles.delete}
            onClick={() => {
              handleDelete(todoItem.id);
              deleteTodoFromDatabase(todoItem.id);
            }}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </ul>
  );
};

export default TodoItem;
