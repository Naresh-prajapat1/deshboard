import React from "react";
import styles from "./style.module.css";
import Sidebar from "../components/article/sidebar";
import ArticleSearch from "../components/article/articleSearch";
import MainDashboardHeading from "../components/mainDashboardHeding";
import { Outlet } from "react-router-dom";
const Layout2 = () => {
  return (
    <div className={styles.layOut21}>
      <MainDashboardHeading title={"Getting Started"} />
      <div className={styles.layout2}>
        <div className={styles.l_1}>
          <Sidebar />
        </div>
        <div className={styles.l_2}>
          <ArticleSearch />
          <div className={styles.l2_main}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout2;
