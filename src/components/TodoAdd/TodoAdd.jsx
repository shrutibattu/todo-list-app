import React from "react";
import styles from "./TodoAdd.module.scss";

const TodoAdd = () => {
  const handleSubmit = (e) => {
    // 1. What does this do? Stops the page from reloading
    e.preventDefault();

    // const requestBody = {
    //   id: e.target[0].value,
    //   task: e.target[1].value,
    // };

    const requestBody = {
      id: e.target[0].value,
      task: e.target[1].value,
    };
    console.log(requestBody);

    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    fetch("http://localhost:8080/api/todoItems", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // 4. Show some indication that it's been sent/successful
        alert("Created a new item");
      });
  };

  return (
    <div className={styles.header}>
      <form onSubmit={handleSubmit}>
        <h2>My To Do List</h2>

        <input
          className={styles.id}
          type="text"
          name="id"
          placeholder="Id..."
        ></input>

        <input
          className={styles.task}
          type="text"
          name="task"
          placeholder="Title..."
        ></input>

        <button className={styles.addBtn} type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
