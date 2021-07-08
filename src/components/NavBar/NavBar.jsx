import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navMenu}>
      <ul className={styles.navList}>
        {/* <li className={styles.navItem}>
          <Link to="/active" className={styles.navItem}>
            Active
          </Link>
        </li>
        <li>
          <Link to="/completed" className={styles.navItem}>
            Completed
          </Link>
        </li> */}
        <li>ToDo-List</li>
      </ul>
    </div>
  );
};

export default NavBar;
