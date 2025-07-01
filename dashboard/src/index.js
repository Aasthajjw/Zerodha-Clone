import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import HomePage from "./components/HomePage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

