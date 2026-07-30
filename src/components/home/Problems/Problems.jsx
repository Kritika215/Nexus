import "./Problems.css";
import { motion } from "framer-motion";
import {
  FaUserSlash,
  FaFileInvoiceDollar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const problems = [
  {
    icon: <FaUserSlash />,
    title: "No Credit History",
    desc: "Millions of freelancers and daily wage workers do not have a CIBIL score or formal banking records.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Income Verification",
    desc: "Traditional banks struggle to verify income from electricity bills, rent receipts and UPI transactions.",
  },
  {
    icon: <FaClock />,
    title: "Slow Loan Process",
    desc: "Manual verification takes several days and delays loan approval for genuine applicants.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Fraud Detection",
    desc: "Fake or manipulated documents increase the risk of approving ineligible beneficiaries.",
  },
];

function Problems() {
  return (
    <section className="problems">
      <div className="container">

        <h2 className="section-title">
          Problems in Traditional Lending
        </h2>

        <p className="section-subtitle">
          NEXUS solves the major challenges faced by beneficiaries who lack
          formal income records and credit history.
        </p>

        <div className="problem-grid">

          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="problem-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Problems;