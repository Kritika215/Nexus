import "./Technology.css";
import {
  FaReact,
  FaPython,
  FaDatabase
} from "react-icons/fa";

import { SiDotnet } from "react-icons/si";

function Technology() {
  return (
    <section className="technology">

      <div className="container">

        <h2>Powered By Modern Technologies</h2>

        <div className="tech-grid">

          <div className="tech-card">
            <FaReact />
            <h3>React</h3>
          </div>

          <div className="tech-card">
            <SiDotnet />
            <h3>.NET</h3>
          </div>

          <div className="tech-card">
            <FaPython />
            <h3>Python OCR</h3>
          </div>

          <div className="tech-card">
            <FaDatabase />
            <h3>SQL Server</h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Technology;