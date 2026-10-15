
import "./ApplyLoan.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ApplyLoan() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Store Step 1 details
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhaar: "",
  });

  // Store validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the error for the field being edited
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validate all fields in Step 1
  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    const aadhaarDigits = formData.aadhaar.replace(/\s/g, "");

    if (!aadhaarDigits) {
      newErrors.aadhaar = "Aadhaar number is required";
    } else if (!/^\d{12}$/.test(aadhaarDigits)) {
      newErrors.aadhaar = "Enter a valid 12-digit Aadhaar number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Move to Step 2 only if Step 1 is valid
  const handleNext = () => {
    if (step === 1) {
      if (!validateStep1()) {
        return;
      }
    }

    setStep((prev) => Math.min(prev + 1, 4));
  };

  return (
    <div className="loan-page">
      <div className="loan-card">
        <h1>Apply for Loan</h1>

        <p className="subtitle">Step {step} of 4</p>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
            noValidate
          >
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                />

                {errors.fullName && (
                  <p id="fullName-error" className="error-message">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "email-error" : undefined
                  }
                />

                {errors.email && (
                  <p id="email-error" className="error-message">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone ? "phone-error" : undefined
                  }
                />

                {errors.phone && (
                  <p id="phone-error" className="error-message">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="aadhaar">Aadhaar Number</label>

                <input
                  id="aadhaar"
                  name="aadhaar"
                  type="password"
                  placeholder="Enter 12-digit Aadhaar number"
                  value={formData.aadhaar}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={12}
                  autoComplete="off"
                  aria-invalid={Boolean(errors.aadhaar)}
                  aria-describedby={
                    errors.aadhaar ? "aadhaar-error" : undefined
                  }
                />

                {errors.aadhaar && (
                  <p id="aadhaar-error" className="error-message">
                    {errors.aadhaar}
                  </p>
                )}
              </div>
            </div>

            <button type="submit" className="next-btn">
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

                <select defaultValue="Salaried">
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
                  min="1"
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
                  maxLength={10}
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
                onClick={handleNext}
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
                  min="1"
                  placeholder="500000"
                />
              </div>

              <div className="form-group">
                <label>Loan Purpose</label>

                <select defaultValue="Education">
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

                <select defaultValue="12 Months">
                  <option>12 Months</option>
                  <option>24 Months</option>
                  <option>36 Months</option>
                  <option>48 Months</option>
                  <option>60 Months</option>
                </select>
              </div>

              <div className="form-group">
                <label>Existing Loan</label>

                <select defaultValue="No">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>

              <div className="form-group">
                <label>Monthly EMI</label>

                <input
                  type="number"
                  min="0"
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
                onClick={handleNext}
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
