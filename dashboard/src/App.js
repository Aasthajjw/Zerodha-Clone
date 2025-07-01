import {Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
