import React from "react";
import styles from "./style.module.css";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/search";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";
import { Link } from "react-router-dom";
import ProductIcon from "../../icons/product";
const Coupons = () => {
  return (
    <div className={styles.coupons}>
      <MainDashboardHeading
        title={"Customers"}
        fillBtn={true}
        title2={"Create"}
        icon={false}
      />
      <div className={styles.c_name}>
        <div className={styles.cn_wrapper}>
          <div className={styles.cnw_All_customers}>
            <span>All Coupons</span>
            <span>Active Coupons</span>
            <span>Expired Coupons</span>
          </div>
          <div className={styles.of_filter_search}>
            <div className={styles.offs_filter}>
              <div className={styles.offsf_filter}>
                <select>
                  <option>Filter</option>
                </select>
              </div>
              <div className={styles.offsf_search}>
                <label for={"text"}>
                  <SearchIcon />
                </label>
                <input type="text" id="text" placeholder="Search..." />
              </div>
            </div>
            <div className={styles.offs_remove}>
              <p>
                <span>
                  <EditIcon />
                </span>
                <span>
                  <RemoveIcon />
                </span>
              </p>
            </div>
          </div>
          <div className={styles.order_details}>
            <div className={styles.order_details1}>
              <table>
                <tr>
                  <th className={styles.od_head_order}>
                    <input type="checkbox" className={styles.od_check} />
                    Coupon Name
                  </th>
                  <th>Usage</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
                {/* {productItem.map((item, index) => ( */}
                <tr>
                  <td className={styles.od_tr_paid3}>
                    <div className={styles.otp_img}>
                      <input type="checkbox" />

                      <span>
                        <ProductIcon />
                      </span>
                      <h5>
                        Summer discount 10% off
                        <p>Summer2020</p>
                      </h5>
                    </div>
                  </td>
                  <td>15 times</td>
                  <td className={styles.odtrp_active}>
                    <span>Active</span>
                  </td>
                  <td className={styles.od_tr_paid1}>
                    May 5, 2020 - May 15, 2020
                  </td>
                </tr>
                {/* ))} */}
              </table>
            </div>
          </div>
          <div className={styles.od_pagination}>
            <div className={styles.odp_page}>
              <ul>
                <li>
                  <Link>1</Link>
                </li>
                <li>
                  <Link>2</Link>
                </li>{" "}
                <li>
                  <Link>3</Link>
                </li>{" "}
                <li>
                  <Link>4</Link>
                </li>{" "}
                <li>
                  <Link>... </Link>
                </li>
                <li>
                  <Link>24</Link>
                </li>
              </ul>
            </div>
            <div className={styles.odp_result}>
              <span>274 Results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coupons;
