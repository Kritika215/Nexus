import "./Dashboard.css";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";
import WelcomeCard from "../../components/dashboard/WelcomeCard/WelcomeCard";

function Dashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <WelcomeCard />

      </div>

    </div>

  );

}

export default Dashboard;