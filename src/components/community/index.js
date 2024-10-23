import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Community = () => {
  return (
    <div className={styles.community}>
      <div className={styles.c_forum}>
        <h5>Community Forum</h5>
        <p>
          Get help from community members, ask any questions and get answers
          faster.
        </p>
        <Link>Join Community</Link>
      </div>
      <div className={styles.c_forum}>
        <h5>Community Forum</h5>
        <p>
          Get help from community members, ask any questions and get answers
          faster.
        </p>
        <Link>Join Community</Link>
      </div>
    </div>
  );
};
export default Community;
