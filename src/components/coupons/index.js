import React, { useState, useEffect } from "react";
import CouponData from "../../productData/coupon.json";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import DiscountIcon from "../../icons/dicount";
import MainDashboardHeading from "../mainDashboardHeding";
import SearchIcon from "../../icons/search";
import EditIcon from "../../icons/edit";
import RemoveIcon from "../../icons/remove";

const Coupons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filteredCoupons, setFilteredCoupons] = useState(CouponData);
  const [selectedCoupons, setSelectedCoupons] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const ordersPerPage = 10;

  useEffect(() => {
    let filteredData = CouponData;

    if (statusFilter) {
      filteredData = filteredData.filter(
        (coupon) => coupon.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter((coupon) =>
        coupon.code.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCoupons(filteredData);
    setCurrentPage(1);
  }, [statusFilter, searchTerm]);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredCoupons.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredCoupons.length / ordersPerPage);
  const handlePreviousPage = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCoupons([]);
    } else {
      const allCouponIds = currentOrders.map((coupon) => coupon.id);
      setSelectedCoupons(allCouponIds);
    }
    setSelectAll(!selectAll);
  };

  const handleSelectCoupon = (id) => {
    setSelectedCoupons((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((couponId) => couponId !== id)
        : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    const remainingCoupons = filteredCoupons.filter(
      (coupon) => !selectedCoupons.includes(coupon.id)
    );
    setFilteredCoupons(remainingCoupons);
    setSelectedCoupons([]);
    setSelectAll(false);
  };

  return (
    <div className={styles.coupons_main}>
      <MainDashboardHeading
        title={"Coupons"}
        outlineBtn={false}
        icon={false}
        fillBtn={true}
        fillTitle={"Create"}
      />
      <div className={styles.order_footer}>
        <div className={styles.tabs}>
          <Link to="/">All Customers</Link>
          <Link to="/">New Customers</Link>
          <Link to="/">From Europe</Link>
          <Link to="/">Returning Customers</Link>
        </div>

        <div className={styles.offs_filter}>
          <div className={styles.offsf_filter}>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}>
              <option value={""}>Filter by Status</option>
              <option value={"Active"}>Active</option>
              <option value={"Expired"}>Expired</option>
            </select>
          </div>

          <div className={styles.offsf_search}>
            <label htmlFor={"search1"}>
              <SearchIcon />
            </label>
            <input
              type="text"
              id="search1"
              name="search"
              placeholder="Search by Code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className={styles.offs_remove}>
            <Link to={""}>
              <EditIcon />
            </Link>
            <button onClick={handleDeleteSelected}>
              <RemoveIcon />
            </button>
          </div>
        </div>

        <table className={styles.order_table}>
          <thead>
            <tr className={styles.order_data_wrapper}>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
                <span>Coupon Name</span>
              </th>
              <th>Usage</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {currentOrders.map((coupon) => (
              <tr className={styles.order_data_wrapper} key={coupon.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCoupons.includes(coupon.id)}
                    onChange={() => handleSelectCoupon(coupon.id)}
                  />
                  <div className={styles.product_info}>
                    <div className={styles.customer_name}>
                      <DiscountIcon />
                    </div>
                    <div className={styles.product_name}>
                      <div className={styles.coupon_name}>{coupon.name}</div>
                      <span>{coupon.code}</span>
                    </div>
                  </div>
                </td>
                <td>{coupon.usage} items</td>
                <td>{coupon.status}</td>
                <td>
                  <span>{coupon.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.pagination}>
          <button
            onClick={handlePreviousPage}
            className={currentPage > 1 ? styles.active : ""}>
            &#8592;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? styles.active : ""}>
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className={currentPage < totalPages ? styles.active : ""}>
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
