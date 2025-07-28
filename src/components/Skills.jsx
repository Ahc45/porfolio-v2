import React, { useState } from "react";
import "./Skills.css";
import TimelineItem from "./TimelineItem";

// Import custom ability icons
import FrontendIcon from "../assets/icons/ability-frontend.svg";
import BackendIcon from "../assets/icons/ability-backend.svg";
import DevOpsIcon from "../assets/icons/ability-devops.svg";
import ArchitectIcon from "../assets/icons/ability-architect.svg";

// Import custom skill icons for architect section
import TeamLeadershipIcon from "../assets/icons/skill-team-leadership.svg";
import SystemDesignIcon from "../assets/icons/skill-system-design.svg";
import ApiDesignIcon from "../assets/icons/skill-api-design.svg";
import DatabaseDesignIcon from "../assets/icons/skill-database-design.svg";
import PerformanceIcon from "../assets/icons/skill-performance.svg";
import MentoringIcon from "../assets/icons/skill-mentoring.svg";

// Timeline data
const timelineData = [
  {
    id: 1,
    company: "Casting App",
    title: "Software Engineer",
    date: "2024 - Present",
    description:
      "At Casting App, I contributed to a highly collaborative development environment focused on agility and scalability. My key role involved backend infrastructure optimization, building AWS Step Function pipelines, and implementing advanced ETL processes across Lambda, S3, and PostgreSQL. I also fine-tuned React components for performance and seamless user experience.",
  },
  {
    id: 2,
    company: "Mosaic Solutions",
    title: "Software Engineer",
    date: "2023 - 2024",
    description:
      "At Mosaic, I focused on backend engineering and data flow optimization. I engineered performant database schemas, resolved platform-level bugs, and introduced advanced caching strategies to boost system responsiveness. My work also included implementing ETL workarounds and supporting engineering decisions that streamlined system performance.",
  },
  {
    id: 3,
    company: "Partsman PH",
    title: "CTO & Full Stack Developer",
    date: "2022 - 2023",
    description:
      "At Partsman PH, I led the architecture and end-to-end development of a modern e-commerce platform. From translating business requirements into robust solutions to managing both frontend and backend implementations, I was instrumental in transforming platform goals into tangible features. I also oversaw deployment pipelines, database architecture, and developer operations. As CTO, I mentored a team of senior and junior developers to uphold clean code standards, consistency, and delivery timelines.",
  },
  {
    id: 4,
    company: "Nuworks",
    title: "Full Stack Developer",
    date: "2021 - 2023",
    description:
      "At Nuworks, I contributed to multiple high-impact projects in both product innovation and enterprise systems. I led backend services and server ops for stable deployments, and created feature-rich applications like an analytics dashboard and an advanced music-mixing web app. Working with a modern stack, I emphasized system performance, scalability, and user engagement.",
  },

  {
    id: 5,
    company: "KURIN PH",
    title: "Full Stack Developer - (Part-time)",
    date: "2020 - 2021",
    description:
      "I joined Kurin PH as a full-stack consultant to elevate their platform's reliability and scalability. I integrated Xendit for seamless payment processing, streamlined data handling with optimized DB architecture, and led QA testing to ensure reliability across user journeys. Additionally, I provided automation strategy consultation and helped unify marketing tools with the platform.",
  },
  {
    id: 6,
    company: "KYNA TECH",
    title: "Full Stack Developer - (Part-time)",
    date: "2020 - 2021",
    description:
      "At Kyna Technologies, I focused on optimizing backend architecture and spearheaded mobile-first initiatives. My work included designing RESTful APIs, refining database systems, and implementing system-wide performance improvements. I also led the development of cross-platform mobile apps using React Native, helping the company reach new customer touchpoints.",
  },
  {
    id: 7,
    company: "DAY 1 TECH",
    title: "Full Stack Developer",
    date: "2019 - 2021",
    description:
      "At Day 1 Tech Inc, I played a pivotal role in maintaining and scaling the platform as the sole full-stack developer. I transformed technical requirements into robust, scalable features while ensuring code quality and system performance through diligent debugging and proactive maintenance. I led the UX/UI overhaul of key modules, developed a custom-built CMS, and built advanced tools like a Form Builder and Reports Builder to empower data-driven decisions.",
  },
];

const Skills = () => {
  const [selectedAbility, setSelectedAbility] = useState(0);

  // Helper function to get hue rotation for different colors
  const getHueRotation = (colorVar) => {
    const hueMap = {
      "--tech-blue": 200, // Blue (Frontend)
      "--tech-red": 0, // Red (Backend) - baseline
      "--tech-orange": 30, // Orange (DevOps)
      "--tech-gold": 45, // Gold (Architect)
    };
    return hueMap[colorVar] || 0;
  };

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

  const abilities = [
    {
      id: "F",
      name: "FRONTEND ARSENAL",
      type: "Core",
      description:
        "Build lightning-fast, responsive interfaces that increase user engagement by 45%. 6+ years mastering modern frameworks.",
      icon: <img src={FrontendIcon} alt="Frontend" width="40" height="40" />,
      color: "--tech-blue",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          years: 6,
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          years: 4,
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          years: 6,
        },
        {
          name: "HTML/CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          years: 6,
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
          years: 3,
        },
        {
          name: "SASS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          years: 5,
        },
      ],
    },
    {
      id: "B",
      name: "BACKEND FORTRESS",
      type: "Expert",
      description:
        "Architect scalable backend systems handling millions of requests. Master of Laravel, PHP, and database optimization.",
      icon: <img src={BackendIcon} alt="Backend" width="40" height="40" />,
      color: "--tech-red",
      skills: [
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
          years: 4,
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          years: 5,
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          years: 4,
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          years: 3,
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          years: 5,
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          years: 3,
        },
        {
          name: "Serverless",
          icon: "src/assets/icons/tech-serverless.svg",
          years: 3,
        },
      ],
    },
    {
      id: "D",
      name: "DEVOPS OPERATIONS",
      type: "Advanced",
      description:
        "Deploy and scale applications with 99.9% uptime using Docker, AWS services, and automated CI/CD pipelines.",
      icon: <img src={DevOpsIcon} alt="DevOps" width="40" height="40" />,
      color: "--tech-orange",
      skills: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          years: 4,
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          years: 3,
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          years: 5,
        },
        {
          name: "GitHub",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          years: 6,
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
          years: 4,
        },
      ],
    },
    {
      id: "A",
      name: "ARCHITECT MINDSET",
      type: "Leadership",
      description:
        "Deliver end-to-end solutions that exceed expectations. Lead teams, design systems, and drive business growth.",
      icon: <img src={ArchitectIcon} alt="Architect" width="40" height="40" />,
      color: "--tech-gold",
      skills: [
        { name: "Team Leadership", icon: TeamLeadershipIcon, years: 3 },
        { name: "System Design", icon: SystemDesignIcon, years: 4 },
        { name: "API Design", icon: ApiDesignIcon, years: 5 },
        { name: "Database Design", icon: DatabaseDesignIcon, years: 5 },
        { name: "Performance", icon: PerformanceIcon, years: 4 },
        { name: "Mentoring", icon: MentoringIcon, years: 2 },
      ],
    },
  ];

  return (
    <section className="skills">
      <div className="skills-background tactical-grid"></div>
      <div className="skills-background-text">ARSENAL</div>

      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">TECH ARSENAL</h2>
          <p className="section-subtitle">My weapon of choice</p>
        </div>

        <div className="abilities-grid">
          <div className="ability-selector">
            {abilities.map((ability, index) => (
              <div
                key={ability.id}
                className={`ability-card ${
                  selectedAbility === index ? "active" : ""
                } glitch-hover glow-on-hover`}
                onClick={() => {
                  playClickSound();
                  setSelectedAbility(index);
                }}
                onMouseEnter={playHoverSound}
              >
                <div className="ability-key geometric-clip">{ability.id}</div>
                <div className="ability-info">
                  <h3>{ability.name}</h3>
                  <span className="ability-type">{ability.type}</span>
                </div>
                <div
                  className="ability-icon"
                  style={{ color: `var(${ability.color})` }}
                >
                  {ability.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="ability-showcase">
            <div className="ability-preview corner-clip">
              <div className="preview-header">
                <div className="ability-name">
                  <span
                    className="key-indicator"
                    style={{
                      background: `var(${abilities[selectedAbility].color})`,
                    }}
                  >
                    {abilities[selectedAbility].id}
                  </span>
                  {abilities[selectedAbility].name}
                </div>
                <span className="ability-type-badge arrow-clip">
                  {abilities[selectedAbility].type}
                </span>
              </div>

              <div className="ability-description">
                <p>{abilities[selectedAbility].description}</p>
              </div>

              <div className="tech-arsenal-grid">
                {abilities[selectedAbility].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="tech-item geometric-clip glow-on-hover glitch-hover"
                    onMouseEnter={playHoverSound}
                    style={{
                      borderColor: `var(${abilities[selectedAbility].color})`,
                      "--glow-color": `var(${abilities[selectedAbility].color})`,
                    }}
                  >
                    <div className="tech-icon">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{
                          filter: `grayscale(100%) brightness(0.8) sepia(1) hue-rotate(${getHueRotation(
                            abilities[selectedAbility].color
                          )}deg) saturate(2)`,
                        }}
                      />
                    </div>
                    <div className="tech-info">
                      <span className="tech-name">{skill.name}</span>
                      <span className="tech-years">{skill.years}+ years</span>
                    </div>
                    <div className="tech-level">
                      <div className="level-bars">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`level-bar ${
                              i < skill.years ? "active" : ""
                            }`}
                            style={{
                              background:
                                i < skill.years
                                  ? `var(${abilities[selectedAbility].color})`
                                  : "#333",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ability-stats">
                <div className="stat-bar">
                  <span>PROFICIENCY</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{
                        width: `${80 + selectedAbility * 5}%`,
                        background: `var(${abilities[selectedAbility].color})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>EXPERIENCE</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{
                        width: `${70 + selectedAbility * 10}%`,
                        background: `var(${abilities[selectedAbility].color})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>IMPACT</span>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{
                        width: `${90 - selectedAbility * 2}%`,
                        background: `var(${abilities[selectedAbility].color})`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <h3>CAREER PROGRESSION</h3>
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.id} item={item} isFirst={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
