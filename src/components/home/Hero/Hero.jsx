import "./Hero.css";
import { motion } from "framer-motion";
import Button from "../../common/Button/Button";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-container">

        {/* Left Side */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="hero-tag">
            AI Powered Digital Lending Platform
          </span>

          <h1>
            Inclusive Credit Scoring
            <br />
            for Every Beneficiary
          </h1>

          <p>
            NEXUS helps financial institutions verify income using OCR,
            detect fraud, evaluate financial stability, and generate
            transparent credit scores for faster and fairer loan approvals.
          </p>

          <div className="hero-buttons">

            <Button>
              Apply Now
            </Button>

            <Button variant="secondary">
              Learn More
            </Button>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="workflow-card">

            <div>📄 Upload Documents</div>

            <span>↓</span>

            <div>🤖 OCR Processing</div>

            <span>↓</span>

            <div>💰 Income Verification</div>

            <span>↓</span>

            <div>🛡 Fraud Detection</div>

            <span>↓</span>

            <div>📊 Credit Score</div>

            <span>↓</span>

            <div className="approved">

                ✅ Loan Approved

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;