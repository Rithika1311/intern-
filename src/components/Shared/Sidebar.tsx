import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.css";
import {
  FaThLarge,
  FaUser,
  FaTruck,
  FaWrench,
  FaGasPump,
  FaBell,
  FaFileAlt,
  FaShieldAlt,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">
      {/* Sidebar Navigation */}
      <ul className="sidebar-nav">
        <li>
          <NavLink to="/dashboard">
            <FaThLarge className="nav-icon" /> <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Driver Details */}
        <li className={`has-submenu ${activeMenu === "driver" ? "open" : ""}`}>
          <div className="submenu-toggle" onClick={() => toggleMenu("driver")}>
            <FaUser className="nav-icon" /> <span>Driver Details</span>{" "}
            <span className="arrow">▼</span>
          </div>
          <ul className="submenu">
            <li>
              <NavLink to="/drivers/list">
                <FaFileAlt className="submenu-icon" /> Driver List
              </NavLink>
            </li>
            <li>
              <NavLink to="/drivers/add">
                <FaFileAlt className="submenu-icon" /> Add Driver
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Vehicle Details */}
        <li className={`has-submenu ${activeMenu === "vehicle" ? "open" : ""}`}>
          <div className="submenu-toggle" onClick={() => toggleMenu("vehicle")}>
            <FaTruck className="nav-icon" /> <span>Vehicle Details</span>{" "}
            <span className="arrow">▼</span>
          </div>
          <ul className="submenu">
            <li>
              <NavLink to="/vehicles/list">
                <FaFileAlt className="submenu-icon" /> Vehicle List
              </NavLink>
            </li>
            <li>
              <NavLink to="/vehicles/add">
                <FaFileAlt className="submenu-icon" /> Add Vehicle
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Other Links */}
        <li>
          <NavLink to="/maintenance">
            <FaWrench className="nav-icon" /> <span>Maintenance</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/fuel">
            <FaGasPump className="nav-icon" /> <span>Fuel</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notifications">
            <FaBell className="nav-icon" /> <span>Notifications</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/security">
            <FaShieldAlt className="nav-icon" /> <span>Security</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
