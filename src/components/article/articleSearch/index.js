import React from "react";
import styles from "./style.module.css";
import SearchIcon from "../../../icons/search";

const ArticleSearch = () => {
  return (
    <>
      <div className={styles.offsf_search}>
        <label for={"text"}>
          <SearchIcon />
        </label>
        <input type="text" id="text" placeholder="Search..." />
      </div>
    </>
  );
};
export default ArticleSearch;
