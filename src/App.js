import Layout from "./layout/index";
import ComfirmaEmail from "./components/confirmaEmail";
import CreateAccount from "./components/creactAccount";
import Login from "./components/login";
import PasswordReset from "./components/passwordReset";
import RegistrationComplete from "./components/registrationomplete";
import Dashboard from "./components/dashboard";
import MainDashboardHeading from "./components/mainDashboardHeding";
import Orders from "./components/orders";
import DeleteItem from "./components/deleteItem";
import Products from "./components/products";
import Header from "./components/header";
import SideBar from "./components/sideBar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
