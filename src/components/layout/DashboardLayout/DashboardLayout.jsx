import "./DashboardLayout.css";

import Sidebar from "../../dashboard/Sidebar/Sidebar";
import Topbar from "../../dashboard/Topbar/Topbar";

function DashboardLayout({children}){

return(

<div className="dashboard-layout">

<Sidebar/>

<div className="main-content">

<Topbar/>

<div className="page-content">

{children}

</div>

</div>

</div>

)

}

export default DashboardLayout;