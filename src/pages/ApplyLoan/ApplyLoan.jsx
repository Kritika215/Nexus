import "./ApplyLoan.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplyLoan() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="loan-page">
      <div className="loan-card">

        <h1>Apply for Loan</h1>

        <p className="subtitle">
          Step {step} of 4
        </p>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <form>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <label>Aadhaar Number</label>
                <input
                  type="text"
                  placeholder="XXXX XXXX XXXX"
                />
              </div>

            </div>

            <button
              type="button"
              className="next-btn"
              onClick={() => setStep(2)}
            >
              Next →
            </button>

          </form>
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <form>

            <div className="form-grid">

              <div className="form-group">
                <label>Employment Type</label>

                <select>
                  <option>Salaried</option>
                  <option>Self Employed</option>
                  <option>Freelancer</option>
                  <option>Business Owner</option>
                </select>
              </div>

              <div className="form-group">
                <label>Company / Business Name</label>

                <input
                  type="text"
                  placeholder="Company Name"
                />
              </div>

              <div className="form-group">
                <label>Monthly Income</label>

                <input
                  type="number"
                  placeholder="₹30000"
                />
              </div>

              <div className="form-group">
                <label>Work Experience</label>

                <input
                  type="text"
                  placeholder="3 Years"
                />
              </div>

              <div className="form-group">
                <label>PAN Number</label>

                <input
                  type="text"
                  placeholder="ABCDE1234F"
                />
              </div>

            </div>

            <div className="button-group">

              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>

              <button
                type="button"
                className="next-btn"
                onClick={() => setStep(3)}
              >
                Next →
              </button>

            </div>

          </form>
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <form>

            <div className="form-grid">

              <div className="form-group">
                <label>Loan Amount</label>

                <input
                  type="number"
                  placeholder="500000"
                />
              </div>

              <div className="form-group">
                <label>Loan Purpose</label>

                <select>
                  <option>Education</option>
                  <option>Home</option>
                  <option>Business</option>
                  <option>Medical</option>
                  <option>Personal</option>
                  <option>Vehicle</option>
                </select>
              </div>

              <div className="form-group">
                <label>Loan Duration</label>

                <select>
                  <option>12 Months</option>
                  <option>24 Months</option>
                  <option>36 Months</option>
                  <option>48 Months</option>
                  <option>60 Months</option>
                </select>
              </div>

              <div className="form-group">
                <label>Existing Loan</label>

                <select>
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Monthly EMI</label>

                <input
                  type="number"
                  placeholder="₹0"
                />
              </div>

            </div>

            <div className="button-group">

              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>

              <button
                type="button"
                className="next-btn"
                onClick={() => setStep(4)}
              >
                Next →
              </button>

            </div>

          </form>
        )}

        {/* ================= STEP 4 ================= */}

        {step === 4 && (
          <div>

            <h2 className="review-title">
              Review Your Application
            </h2>

            <div className="review-box">

              <p>✅ Personal Information Completed</p>

              <p>✅ Employment Details Completed</p>

              <p>✅ Loan Details Completed</p>

            </div>

            <div className="button-group">

              <button
                type="button"
                className="back-btn"
                onClick={() => setStep(3)}
              >
                ← Back
              </button>

              <button
                type="button"
                className="next-btn"
                onClick={() => navigate("/upload-documents")}
              >
                Submit Application
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default ApplyLoan;