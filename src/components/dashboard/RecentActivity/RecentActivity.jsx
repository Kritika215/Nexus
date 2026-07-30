import "./RecentActivity.css";

function RecentActivity() {
  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>

      <div className="activity-item">
        ✅ Account Registered
      </div>

      <div className="activity-item">
        📄 Loan Application Started
      </div>

      <div className="activity-item">
        📤 Documents Pending
      </div>
    </div>
  );
}

export default RecentActivity;