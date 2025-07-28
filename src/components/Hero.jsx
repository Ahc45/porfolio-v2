import React, { useState, useEffect } from "react";
import "./Hero.css";
import myAvatar from "../assets/myAvatar.png";

const Hero = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [text, setText] = useState("");
  const [nameGlitch, setNameGlitch] = useState(false);
  const fullText = "DAVE MARK CANDAR";

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setText(fullText); // Ensure full text is displayed
        setTimeout(() => setIsGlitching(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  // Periodic name glitch effect every 2 seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setNameGlitch(true);
      setTimeout(() => setNameGlitch(false), 400);
    }, 2000); // Changed from 5000 to 2000 milliseconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-background tactical-grid"></div>
      <div className="hero-background-text">DAVE</div>

      <div className="hero-content">
        <div className="agent-selector">
          <div className="agent-icon geometric-clip">
            <div className="agent-avatar">
              <img src={myAvatar} alt="Dave Mark Candar" className="avatar-image" />
              <div className="avatar-border"></div>
              <div className="status-indicator"></div>
            </div>
          </div>
          <div className="agent-info">
            <h3>FULL STACK ENGINEER</h3>
            <p>STATUS: AVAILABLE FOR HIRE</p>
          </div>
        </div>

        <div className="hero-main">
          <h1
            className={`hero-title ${
              isGlitching || nameGlitch ? "glitch" : ""
            }`}
          >
            {text || fullText}
            <span className="cursor">|</span>
          </h1>
          <div className="hero-subtitle">
            <span className="skill-tag corner-clip">FULLSTACK ENGINEER</span>
          </div>
          <p className="hero-description">
            Senior Full-Stack Engineer with 6+ years delivering high-impact web
            applications. Proven track record leading teams, optimizing
            databases, and architecting scalable solutions that drive business
            growth.
          </p>
          <div className="hero-actions">
            <div className="hero-callout">
              <div className="callout-arrow">↑</div>
            </div>
          </div>
        </div>

        <div className="stats-panel">
          <div className="stat-item">
            <span className="stat-value">6+</span>
            <span className="stat-label">YEARS EXP</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">20+</span>
            <span className="stat-label">PROJECTS</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">SUCCESS RATE</span>
          </div>
        </div>
      </div>

      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
