import "./Sidebar.css";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaFileUpload,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2 className="logo">NEXUS</h2>

      <ul>

        <li>
          <Link to="/dashboard">
            <FaHome />
            <span>Dashboard</span>
          </Link>
        </li>

        <li>
          <Link to="/apply-loan">
            <FaFileUpload />
            <span>Apply Loan</span>
          </Link>
        </li>

        <li>
          <Link to="/upload-documents">
            <FaFileUpload />
            <span>Upload Documents</span>
          </Link>
        </li>

        <li>
          <Link to="/credit-score">
            <FaChartLine />
            <span>Credit Score</span>
          </Link>
        </li>

        <li>
          <Link to="/profile">
            <FaUser />
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link to="/settings">
            <FaCog />
            <span>Settings</span>
          </Link>
        </li>

        <li>
          <Link to="/">
            <FaSignOutAlt />
            <span>Logout</span>
          </Link>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;