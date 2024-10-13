import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../icons/home";
import OrderIcon from "../../icons/order";
import ProductIcon from "../../icons/product";
import CategoriesIcon from "../../icons/categorie";
import CostomerIcon from "../../icons/costomer";
import ReportIcon from "../../icons/report";
import CouponsIcon from "../../icons/coupons";
import GlobalSettingIcon from "../../icons/globlSetting";
import PersnalSettingIcon from "../../icons/personalSetting";
import ProUpdetaIcon from "../../icons/proUpdeta";
import banner from "../../assets/images/banner1.png";
import KnowlegIcon from "../../icons/knowleg";
import MessageIcon from "../../icons/message";

const SideBar = () => {
  return (
    <>
      <div className={styles.dwm_siderBar}>
        <div className={styles.dwms_wrapper}>
          <div className={styles.dwmsw_tab}>
            <div className={styles.dsw_homeDashboard}>
              <Link to={"/dashboard"}>
                <span>
                  <HomeIcon />
                </span>
                <span>Dashboard</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link to={"/orders"}>
                <span>
                  <OrderIcon />
                </span>
                <span>Orders</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link to={"/products"}>
                <span>
                  <ProductIcon />
                </span>
                <span>Products</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link to={"/categories"}>
                <span>
                  <CategoriesIcon />
                </span>
                <span>Categories</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <CostomerIcon />
                </span>
                <span>Customers</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <ReportIcon />
                </span>
                <span>Reports</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <CouponsIcon />
                </span>
                <span>Coupons</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <MessageIcon />
                </span>
                <span>Inbox</span>
              </Link>
            </div>
          </div>
          <div className={styles.dwmsw_otherInfo}>
            <h6>Other Information</h6>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <KnowlegIcon />
                </span>
                <span>Knowledge Base</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <ProUpdetaIcon />
                </span>
                <span>Product Updates</span>
              </Link>
            </div>
          </div>
          <div className={styles.dwmsw_settings}>
            <h6>Settings</h6>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <PersnalSettingIcon />
                </span>
                <span>Personal Settings</span>
              </Link>
            </div>
            <div className={styles.dsw_homeDashboard}>
              <Link>
                <span>
                  <GlobalSettingIcon />
                </span>
                <span>Global Settings</span>
              </Link>
            </div>
          </div>
          <div className={styles.s_banner}>
            <img src={banner} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
