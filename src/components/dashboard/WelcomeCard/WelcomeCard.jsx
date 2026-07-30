import "./WelcomeCard.css";
import { FaHandSparkles } from "react-icons/fa6";

function WelcomeCard() {
  return (
    <section className="welcome-card">

      <div className="welcome-left">

        <span className="badge">
          <FaHandSparkles />
          Welcome to NEXUS
        </span>

        <h1>
          Welcome Back, Kritika 👋
        </h1>

        <p>
          Complete your loan application, upload your income documents,
          and let our AI-powered credit scoring engine evaluate your
          eligibility for faster and fairer loan approval.
        </p>

      </div>

      <div className="welcome-right">

        <div className="progress-circle">

          <h2>0%</h2>

          <p>Profile Completed</p>

        </div>

      </div>

    </section>
  );
}

export default WelcomeCard;