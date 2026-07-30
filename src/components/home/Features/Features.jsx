import "./Features.css";
import { motion } from "framer-motion";
import {
  FaUserLock,
  FaFileUpload,
  FaFileAlt,
  FaSearch,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
  FaDatabase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserLock />,
    title: "Secure Authentication",
    desc: "Safe registration and login for beneficiaries and administrators.",
  },
  {
    icon: <FaFileUpload />,
    title: "Document Upload",
    desc: "Upload salary slips, bank statements, electricity bills and rent receipts.",
  },
  {
    icon: <FaFileAlt />,
    title: "OCR Extraction",
    desc: "Automatically extract financial information using Python OCR.",
  },
  {
    icon: <FaSearch />,
    title: "Income Verification",
    desc: "Verify declared income against extracted document values.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Fraud Detection",
    desc: "Identify duplicate, fake or manipulated documents.",
  },
  {
    icon: <FaChartLine />,
    title: "Credit Scoring",
    desc: "Generate an intelligent credit score based on financial behaviour.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Decision Engine",
    desc: "Approve, Reject or Manual Review based on credit score.",
  },
  {
    icon: <FaDatabase />,
    title: "Central Database",
    desc: "Store beneficiary data securely using SQL Server.",
  },
];

function Features() {
  return (
    <section className="features-section" id="features">

      <div className="container">

        <h2 className="section-title">
          Key Features
        </h2>

        <p className="section-subtitle">
          NEXUS combines AI, OCR and secure digital lending into one intelligent platform.
        </p>

        <div className="feature-grid">

          {features.map((feature, index) => (

            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;