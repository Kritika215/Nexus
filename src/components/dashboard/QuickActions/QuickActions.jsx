import "./QuickActions.css";
import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="quick-actions">

      <h2>Quick Actions</h2>

      <div className="actions">

        <Link to="/apply-loan" className="action-btn">
          Apply Loan
        </Link>

        <Link to="/upload-documents" className="action-btn">
          Upload Documents
        </Link>

        <Link to="/profile" className="action-btn">
          View Profile
        </Link>

      </div>

    </div>
  );
}

export default QuickActions;