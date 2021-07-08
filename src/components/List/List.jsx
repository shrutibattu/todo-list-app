import React from "react";
import styles from "./List.module.scss";

const List = () => {
  return (
    <div>
      <h2>My To Do List</h2>
      <input type="text" id="myInput" placeholder="Title..." />
      <span onclick="newElement()" class="addBtn">
        Add
      </span>
    </div>
  );
};

export default List;
