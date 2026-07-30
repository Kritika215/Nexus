import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaFileUpload,
  FaClipboardList,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-circle">N</div>

        <h2>NEXUS</h2>

        <p>AI Powered Digital Lending</p>
      </div>

      <ul>

        <li>
          <NavLink to="/dashboard">
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/apply-loan">
            <FaFileUpload />
            <span>Apply Loan</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/upload-documents">
            <FaClipboardList />
            <span>Documents</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/credit-score">
            <FaChartLine />
            <span>Credit Score</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      <div className="logout">

        <NavLink to="/">
          <FaSignOutAlt />
          <span>Logout</span>
        </NavLink>

      </div>

    </aside>
  );
}

export default Sidebar;