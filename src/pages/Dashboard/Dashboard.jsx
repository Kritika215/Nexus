import "./Dashboard.css";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";
import WelcomeCard from "../../components/dashboard/WelcomeCard/WelcomeCard";

import SummaryCards from "../../components/dashboard/SummaryCards/SummaryCards";
import RecentActivity from "../../components/dashboard/RecentActivity/RecentActivity";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";

function Dashboard() {

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <Topbar />

        <WelcomeCard />

        <SummaryCards />

        <RecentActivity />

        <QuickActions />

      </div>

    </div>

  );

}

export default Dashboard;