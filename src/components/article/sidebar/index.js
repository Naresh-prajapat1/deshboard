import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <Link to={"introductionProduct"}>Introduction to Product</Link>
        </li>
        <li>
          <Link to={""}>Tutorials for Beginners</Link>
        </li>
        <li>
          <Link>Moving to Bolt System</Link>
        </li>
        <li>
          <Link>Accessibility</Link>
        </li>
        <li>
          <Link>Content Management</Link>
        </li>
        <li>
          <Link> Generating Reports</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
