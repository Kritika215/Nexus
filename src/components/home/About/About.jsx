import "./About.css";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaHandshake } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About NEXUS</h2>

          <p>
            NEXUS is an AI-powered Beneficiary Credit Scoring Platform
            designed to make digital lending more inclusive. It helps
            financial institutions evaluate applicants using both
            traditional and alternative income proofs, ensuring that
            freelancers, small vendors, and daily wage workers receive
            fair access to credit.
          </p>
        </motion.div>

        <div className="about-grid">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FaBullseye />

            <h3>Our Mission</h3>

            <p>
              To provide transparent, secure and accessible digital lending
              for beneficiaries who lack formal credit history.
            </p>

          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FaLightbulb />

            <h3>Our Vision</h3>

            <p>
              To bridge the financial inclusion gap by combining OCR,
              intelligent verification and digital credit scoring.
            </p>

          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <FaHandshake />

            <h3>Who We Help</h3>

            <p>
              Freelancers, daily wage workers, street vendors, self-employed
              individuals and beneficiaries of government lending schemes.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;