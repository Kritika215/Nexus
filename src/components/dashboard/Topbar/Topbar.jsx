import "./Topbar.css";

import { FaBell, FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <header className="topbar">

      <div className="topbar-left">

        <div>

          <h2>Dashboard</h2>

          <p>
            Good Morning, Kritika 👋
          </p>

        </div>

      </div>

      <div className="topbar-right">

        <div className="search-box">

          <FaSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        <div className="notification">

          <FaBell />

          <span className="notification-dot"></span>

        </div>

        <div className="profile">

          <div className="profile-avatar">

            KG

          </div>

          <div>

            <h4>Kritika Goyal</h4>

            <span>Beneficiary</span>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;