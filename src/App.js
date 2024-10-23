import Layout from "./layout/index";
import Layout2 from "./layout2/index";

import Dashboard from "./components/dashboard";
import Orders from "./components/orders";
import Products from "./components/products";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/categories";
import Customer from "./components/customer";
import CustomerInfo from "./components/customerInfo";
import Coupons from "./components/coupons";
import Report from "./components/report";
import KnowledgeBase from "./components/knowledegBase";
import IntroductionProduct from "./components/article/introductionProduct";
import AddProducts from "./components/addProducts";
import AddCustomer from "./components/addCustomer";
import CreateCoupon from "./components/createCoupon";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customerInfo" element={<CustomerInfo />} />
          <Route path="/addCustomer" element={<AddCustomer />} /> `` `
          <Route path="/report" element={<Report />} />
          <Route path="/coupons" element={<Coupons />} />
          <Route path="/createCoupon" element={<CreateCoupon />} />
          <Route path="/knowledegBase" element={<KnowledgeBase />} />
          <Route path="layout2" element={<Layout2 />}>
            <Route
              path="introductionProduct"
              element={<IntroductionProduct />}
            />
          </Route>
        </Route>
      </Routes>
      {/* <AddProducts /> */}
      {/* <AddCustomer /> */}
      {/* <CreateCoupon /> */}
    </>
  );
};

export default App;
