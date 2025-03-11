import { NavLink } from "react-router-dom";
import "../../styles/Vehicle/Vehicle.css";

const VehicleNav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/vehicles/add/basic"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Basic
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/vehicles/add/owner"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Owner
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/vehicles/add/documents"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Documents
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default VehicleNav;
