import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/pages/frontend/Welcome";
import Order from "./components/pages/frontend/Order";
import Advertisement from "./components/pages/backend/advertisement/Advertisement";
import { StoreProvider } from "./components/store/storeContext";
import Food from "./components/pages/backend/food/Food";
import Categories from "./components/pages/backend/categories/Categories";
import Dashboard from "./components/pages/backend/dashboard/Dashboard";
import Login from "./components/pages/backend/access/Login";
import SetPassword from "./components/pages/backend/access/SetPassword";
import ForgotPassword from "./components/pages/backend/access/ForgotPassword";

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/advertisement" element={<Advertisement />} />
          <Route path="/admin/food" element={<Food />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/set-password" element={<SetPassword />} />
          <Route path="/admin/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
};

export default App;
