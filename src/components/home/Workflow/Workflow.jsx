import "./Workflow.css";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaUpload,
  FaFileInvoice,
  FaSearchDollar,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Register",
    text: "Create a secure beneficiary account."
  },
  {
    icon: <FaUpload />,
    title: "Upload Documents",
    text: "Upload salary slips, electricity bills, rent receipts or UPI records."
  },
  {
    icon: <FaFileInvoice />,
    title: "OCR Processing",
    text: "Python OCR extracts important financial information."
  },
  {
    icon: <FaSearchDollar />,
    title: "Income Verification",
    text: "Compare declared income with extracted values."
  },
  {
    icon: <FaShieldAlt />,
    title: "Fraud Detection",
    text: "Detect duplicate or manipulated documents."
  },
  {
    icon: <FaChartLine />,
    title: "Credit Score",
    text: "Generate AI-assisted credit score."
  },
  {
    icon: <FaCheckCircle />,
    title: "Loan Decision",
    text: "Approve, Reject or Manual Review."
  },
];

function Workflow() {
  return (
    <section className="workflow-section" id="workflow">

      <div className="container">

        <h2 className="section-title">
          How NEXUS Works
        </h2>

        <p className="section-subtitle">
          Every application follows a transparent and intelligent verification process.
        </p>

        <div className="timeline">

          {steps.map((step, index) => (

            <motion.div
              className="timeline-item"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="timeline-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Workflow;