import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope, FaChartBar } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Anmol Sharma | All Rights Reserved</p>
      <div className="footer-icons">
        <a
          href="mailto:anmolsharma14003@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/anmol-sharma-6b8552226"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Anmolsharma20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://public.tableau.com/app/profile/anmol.sharma1795"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaChartBar />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
