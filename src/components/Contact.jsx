import { useState } from "react";
import "./Contact.css";

// Import Valorant-themed contact icons
import EmailIcon from "../assets/icons/contact-email.svg";
import LinkedInIcon from "../assets/icons/contact-linkedin.svg";
import GitHubIcon from "../assets/icons/contact-github.svg";
import PortfolioIcon from "../assets/icons/contact-portfolio.svg";
import PhoneIcon from "../assets/icons/contact-phone.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Message sent successfully! I will respond within 12 hours.");
    }, 2000);
  };

  return (
    <section className="contact">
      <div className="contact-background tactical-grid"></div>
      <div className="contact-background-text">CONTACT</div>

      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">LET'S BUILD SOMETHING AMAZING</h2>
          <p className="section-subtitle">
            Ready to scale your business with cutting-edge technology?
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="agent-status corner-clip">
              <div className="status-header">
                <div className="status-indicator online"></div>
                <h3>AGENT STATUS</h3>
              </div>
              <div className="status-details">
                <div className="status-item">
                  <span className="status-label">AVAILABILITY:</span>
                  <span className="status-value ready">OPEN FOR PROJECTS</span>
                </div>
                <div className="status-item">
                  <span className="status-label">RESPONSE TIME:</span>
                  <span className="status-value">&lt; 12 HOURS</span>
                </div>
                <div className="status-item">
                  <span className="status-label">LOCATION:</span>
                  <span className="status-value">PHILIPPINES</span>
                </div>
              </div>
            </div>

            <div className="contact-methods">
              <a
                href="mailto:Davemarkcandar@gmail.com"
                className="contact-method corner-clip glow-on-hover"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="method-icon">
                  <img src={EmailIcon} alt="Email" width="32" height="32" />
                </div>
                <div className="method-info">
                  <h4>EMAIL PROTOCOL</h4>
                  <p>Davemarkcandar@gmail.com</p>
                </div>
                <div className="method-status">SECURE</div>
              </a>

              <a
                href="tel:+639948739589"
                className="contact-method corner-clip glow-on-hover"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="method-icon">
                  <img src={PhoneIcon} alt="Phone" width="32" height="32" />
                </div>
                <div className="method-info">
                  <h4>PHONE PROTOCOL</h4>
                  <p>+63 994 873 9589</p>
                </div>
                <div className="method-status">MOBILE</div>
              </a>

              <a
                href="https://www.linkedin.com/in/dave-mark-candar-9216717b"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method corner-clip glow-on-hover"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="method-icon">
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="method-info">
                  <h4>LINKEDIN NETWORK</h4>
                  <p>/in/dave-mark-candar-9216717b</p>
                </div>
                <div className="method-status">ACTIVE</div>
              </a>

              <a
                href="https://github.com/Ahc45"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method corner-clip glow-on-hover"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="method-icon">
                  <img src={GitHubIcon} alt="GitHub" width="32" height="32" />
                </div>
                <div className="method-info">
                  <h4>GITHUB REPOSITORY</h4>
                  <p>/Ahc45</p>
                </div>
                <div className="method-status">PUBLIC</div>
              </a>

              <a
                href="https://ahc45.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method corner-clip glow-on-hover"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="method-icon">
                  <img
                    src={PortfolioIcon}
                    alt="Portfolio"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="method-info">
                  <h4>PORTFOLIO SITE</h4>
                  <p>ahc45.github.io/Portfolio/</p>
                </div>
                <div className="method-status">LIVE</div>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-wrapper corner-clip">
              <div className="form-header">
                <h3>PROJECT INQUIRY</h3>
                <div className="encryption-status">
                  <span className="encryption-icon">🔒</span>
                  <span>ENCRYPTED</span>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input geometric-clip"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input geometric-clip"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">PROJECT TYPE</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input geometric-clip"
                    required
                  >
                    <option value="">Select Project Type</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile Application</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="collaboration">Project Collaboration</option>
                    <option value="other">Other Operations</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">PROJECT DETAILS</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-input form-textarea geometric-clip"
                    rows="6"
                    placeholder="Tell me about your project goals and requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`submit-btn arrow-clip glow-on-hover ${
                    isSubmitting ? "submitting" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
