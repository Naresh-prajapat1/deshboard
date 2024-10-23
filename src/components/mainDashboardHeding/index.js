import React from "react";
import styles from "./style.module.css";
import GlobalSettingIcon from "../../icons/globlSetting";
import { Link } from "react-router-dom";
import PlusIcon from "../../icons/plus";
const MainDashboardHeading = ({
  title,
  icon = true,
  title1,
  title2,
  outlineBtn,
  fillBtn,
  type,
}) => {
  return (
    <>
      <div className={styles.dw_mainTitle}>
        <h4>{title}</h4>
        {outlineBtn && (
          <button type={type} className={styles.dwmt_manag}>
            {icon ? (
              <span>
                <GlobalSettingIcon />
              </span>
            ) : (
              ""
            )}
            <span>{title1}</span>
          </button>
        )}
        {fillBtn && (
          <button type={type} className={styles.dwmt_manag2}>
            <span>
              <PlusIcon />
            </span>
            <span>{title2}</span>
          </button>
        )}
      </div>
    </>
  );
};
export default MainDashboardHeading;
