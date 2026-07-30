import "./Sidebar.css";

import {
  FaHome,
  FaFileUpload,
  FaChartLine,
  FaClipboardCheck,
  FaUser,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

return(

<div className="sidebar">

<div className="logo">

<h2>NEXUS</h2>

<p>Digital Lending</p>

</div>

<ul>

<li className="active">

<FaHome/>

Dashboard

</li>

<li>

<FaFileUpload/>

Apply Loan

</li>

<li>

<FaClipboardCheck/>

Documents

</li>

<li>

<FaChartLine/>

Credit Score

</li>

<li>

<FaUser/>

Profile

</li>

<li>

<FaCog/>

Settings

</li>

<li>

<FaSignOutAlt/>

Logout

</li>

</ul>

</div>

)

}

export default Sidebar;