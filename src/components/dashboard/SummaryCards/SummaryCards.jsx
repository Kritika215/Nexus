import "./SummaryCards.css";

import {
  FaFileAlt,
  FaUpload,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";

function SummaryCards() {
  return (

    <div className="summary-grid">

      <div className="summary-card">

        <div className="card-icon">
          <FaFileAlt />
        </div>

        <div>

          <h4>Loan Status</h4>

          <p>Pending</p>

        </div>

      </div>

      <div className="summary-card">

        <div className="card-icon">
          <FaUpload />
        </div>

        <div>

          <h4>Documents</h4>

          <p>0 / 6 Uploaded</p>

        </div>

      </div>

      <div className="summary-card">

        <div className="card-icon">
          <FaChartLine />
        </div>

        <div>

          <h4>Credit Score</h4>

          <p>Not Generated</p>

        </div>

      </div>

      <div className="summary-card">

        <div className="card-icon">
          <FaCheckCircle />
        </div>

        <div>

          <h4>Eligibility</h4>

          <p>Pending Review</p>

        </div>

      </div>

    </div>

  );
}

export default SummaryCards;