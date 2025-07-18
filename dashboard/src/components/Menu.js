import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-clone-backend-805t.onrender.com",
          {},
          { withCredentials: true }
        );
        if (data?.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="menu-container">
      <img src="logo.png"/>
      <div className="menus">
        <ul>
          <li><Link style={{ textDecoration: "none" }} to="/home" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/home/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/home/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/home/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/home/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link></li>
          <li><Link style={{ textDecoration: "none" }} to="/home/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>Apps</p>
            </Link></li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{user[0]}</div>
          <p className="username">{user}</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
