import { useState, useEffect } from "react";
import "./Navigation.css";

// Import custom navigation icons (monochromatic red versions)
import HomeIcon from "../assets/icons/nav-home-mono.svg";
import ArsenalIcon from "../assets/icons/nav-arsenal-mono.svg";
import ExperienceIcon from "../assets/icons/nav-arsenal-mono.svg"; // Reusing arsenal icon for now
import MapsIcon from "../assets/icons/nav-maps-mono.svg";
import ContactIcon from "../assets/icons/nav-contact-mono.svg";

// Mini-game component
const SkillTargetGame = ({ isOpen, onClose, onComplete }) => {
  const [gameState, setGameState] = useState("waiting"); // waiting, playing, completed
  const [score, setScore] = useState(0);
  const [targets, setTargets] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameId, setGameId] = useState(0);

  const skills = ["React", "Node.js", "AWS", "Docker", "Laravel", "Python"];

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setTimeLeft(15);
    setGameId((prev) => prev + 1);
    generateTargets();
  };

  const generateTargets = () => {
    const newTargets = skills.map((skill, index) => ({
      id: index,
      skill,
      x: Math.random() * 70 + 10, // 10-80% of container width
      y: Math.random() * 60 + 20, // 20-80% of container height
      hit: false,
      moving: true,
    }));
    setTargets(newTargets);
  };

  const hitTarget = (targetId) => {
    setTargets((prev) =>
      prev.map((target) =>
        target.id === targetId ? { ...target, hit: true } : target
      )
    );
    setScore((prev) => prev + 1);

    if (score + 1 >= 6) {
      setGameState("completed");
      onComplete();
    }
  };

  useEffect(() => {
    if (gameState === "playing" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (gameState === "playing" && timeLeft === 0) {
      setGameState("completed");
      if (score >= 4) onComplete(); // Need at least 4/6 to unlock resume
    }
  }, [gameState, timeLeft, score, onComplete]);

  // Move targets every 2 seconds
  useEffect(() => {
    if (gameState === "playing") {
      const moveInterval = setInterval(() => {
        setTargets((prev) =>
          prev.map((target) =>
            !target.hit
              ? {
                  ...target,
                  x: Math.random() * 70 + 10,
                  y: Math.random() * 60 + 20,
                }
              : target
          )
        );
      }, 2000);
      return () => clearInterval(moveInterval);
    }
  }, [gameState, gameId]);

  if (!isOpen) return null;

  return (
    <div className="skill-target-game-overlay">
      <div className="skill-target-game">
        <div className="game-header">
          <h3>🎯 TACTICAL SKILL ASSESSMENT</h3>
          <button className="game-close" onClick={onClose}>
            ✕
          </button>
        </div>

        {gameState === "waiting" && (
          <div className="game-intro">
            <div className="game-briefing">
              <p>
                🎮 <strong>MISSION BRIEFING</strong>
              </p>
              <p>Target the skills you need for your project!</p>
              <p>Hit 4+ targets in 15 seconds to unlock resume access.</p>
            </div>
            <button className="game-start-btn" onClick={startGame}>
              START MISSION
            </button>
          </div>
        )}

        {gameState === "playing" && (
          <div className="game-arena">
            <div className="game-hud">
              <div className="hud-score">HITS: {score}/6</div>
              <div className="hud-timer">TIME: {timeLeft}s</div>
            </div>
            <div className="targets-container">
              {targets.map((target) => (
                <div
                  key={target.id}
                  className={`skill-target ${target.hit ? "hit" : ""}`}
                  style={{
                    left: `${target.x}%`,
                    top: `${target.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => !target.hit && hitTarget(target.id)}
                >
                  <div className="target-crosshair"></div>
                  <span className="target-skill">{target.skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {gameState === "completed" && (
          <div className="game-results">
            <div className="results-header">
              <h4>
                {score >= 4 ? "🎉 MISSION ACCOMPLISHED!" : "💀 MISSION FAILED"}
              </h4>
              <p>Final Score: {score}/6</p>
            </div>
            {score >= 4 ? (
              <div className="mission-success">
                <p>
                  🏆 Excellent targeting skills! You've unlocked access to my
                  tactical profile.
                </p>
                <a
                  href="https://drive.google.com/file/d/1WMO3KSXadMqDV4xz1VKkppQs5B6o-d7z/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-unlock-btn"
                >
                  📋 ACCESS RESUME
                </a>
              </div>
            ) : (
              <div className="mission-failed">
                <p>🎯 Need more practice! Try again to unlock resume access.</p>
                <button className="game-retry-btn" onClick={startGame}>
                  RETRY MISSION
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [resumeUnlocked, setResumeUnlocked] = useState(false);

  // Sound effects
  const playClickSound = () => {
    const audio = new Audio(
      "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBCOEx+/zix4FEo3b+N2QPwgWZr/0xmkfCiWS4fO8aDMGHm+668OAMwgTdcy/6HhHDh1is+OqYisJIJnZ8cZ2KAQoiNLzz3IpBSqO2/DMdysEK4fQ8tJ5KAQ"
    );
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const playHoverSound = () => {
    const audio = new Audio(
      "data:audio/wav;base64,UklGRvIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU4AAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBSi"
    );
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  const navigationItems = [
    {
      id: "home",
      label: "HOME",
      icon: <img src={HomeIcon} alt="Home" width="24" height="24" />,
      section: ".hero",
    },
    {
      id: "arsenal",
      label: "ARSENAL",
      icon: <img src={ArsenalIcon} alt="Arsenal" width="24" height="24" />,
      section: ".skills",
    },
    {
      id: "experience",
      label: "CAREER",
      icon: <img src={ExperienceIcon} alt="Experience" width="24" height="24" />,
      section: ".experience",
    },
    {
      id: "maps",
      label: "MAPS",
      icon: <img src={MapsIcon} alt="Maps" width="24" height="24" />,
      section: ".projects",
    },
    {
      id: "contact",
      label: "CONTACT",
      icon: <img src={ContactIcon} alt="Contact" width="24" height="24" />,
      section: ".contact",
    },
  ];

  const scrollToSection = (sectionSelector) => {
    const element = document.querySelector(sectionSelector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item) => {
    playClickSound();
    setActiveSection(item.id);
    scrollToSection(item.section);
  };

  // Track scroll position to update active section and sticky state
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 200;

      // Update sticky state
      setIsScrolled(window.scrollY > 100);

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const sectionId = section.className.split(" ")[0];

        if (scrollPos >= top && scrollPos < top + height) {
          switch (sectionId) {
            case "hero":
              setActiveSection("home");
              break;
            case "skills":
              setActiveSection("arsenal");
              break;
            case "experience":
              setActiveSection("experience");
              break;
            case "projects":
              setActiveSection("maps");
              break;
            case "contact":
              setActiveSection("contact");
              break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Valorant-style Horizontal Navigation */}
      <nav
        className={`valorant-nav-horizontal ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="nav-bg-overlay"></div>

        {/* Navigation Items Container */}
        <div className="nav-items-container">
          {/* Left Side Icons */}
          <div className="nav-section nav-left">
            {navigationItems.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className={`nav-item-horizontal ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => handleNavClick(item)}
                onMouseEnter={playHoverSound}
              >
                <div className="nav-icon-horizontal">{item.icon}</div>
                <div className="nav-item-glow-horizontal"></div>
              </div>
            ))}
          </div>

          {/* Center HIRE ME Button */}
          <div className="nav-center">
            <button
              className={`hire-me-btn ${resumeUnlocked ? "unlocked" : ""}`}
              onClick={() => {
                playClickSound();
                setGameOpen(true);
              }}
              onMouseEnter={playHoverSound}
            >
              <div className="hire-btn-bg"></div>
              <div className="hire-btn-content">
                <svg
                  className="hire-btn-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
                <span className="hire-btn-text">HIRE ME</span>
                {resumeUnlocked && <div className="unlock-indicator">✓</div>}
              </div>
              <div className="hire-btn-corners">
                <div className="corner corner-tl"></div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
                <div className="corner corner-br"></div>
              </div>
            </button>
          </div>

          {/* Right Side Icons */}
          <div className="nav-section nav-right">
            {navigationItems.slice(2, 5).map((item) => (
              <div
                key={item.id}
                className={`nav-item-horizontal ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={() => handleNavClick(item)}
                onMouseEnter={playHoverSound}
              >
                <div className="nav-icon-horizontal">{item.icon}</div>
                <div className="nav-item-glow-horizontal"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Tactical Scan Lines */}
        <div className="nav-scan-lines">
          <div className="scan-line scan-line-1"></div>
          <div className="scan-line scan-line-2"></div>
        </div>
      </nav>

      {/* Mini-Game Component */}
      <SkillTargetGame
        isOpen={gameOpen}
        onClose={() => setGameOpen(false)}
        onComplete={() => setResumeUnlocked(true)}
      />
    </>
  );
};

export default Navigation;
