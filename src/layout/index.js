import React from "react";
import styles from "./style.module.css";
import Header from "../components/header";
import SideBar from "../components/sideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.l_side_bar}>
        <div className={styles.lsb_side}>
          <SideBar />
        </div>
        <div className={styles.lsb_outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Layout;
