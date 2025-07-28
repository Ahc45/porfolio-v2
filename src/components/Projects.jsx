import React, { useState } from "react";
import "./Projects.css";

// Project Images
import adamsonImg from "../assets/projects/adamson.webp";
import day1Img from "../assets/projects/Day1.png";
import formbuilderImg from "../assets/projects/formbuilder.png";
import studentIdImg from "../assets/projects/STUDENT_ID_CASHCARD.png";
import healthcenterImg from "../assets/projects/healthcenter.png";
import maqlitImg from "../assets/projects/maqlit.png";
import vaporthority from "../assets/projects/vaporthority.png";
import genderReveal1Img from "../assets/projects/genderReveal1.png";
import genderReveal2Img from "../assets/projects/genderReveal2.png";
import portfolioImg from "../assets/projects/portfolio.png";

const Projects = () => {
  const [selectedMap, setSelectedMap] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

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

  const handleProjectClick = (index) => {
    playClickSound();
    setSelectedMap(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextProject = () => {
    playClickSound();
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, projects.length - 2));
  };

  const prevProject = () => {
    playClickSound();
    setCarouselIndex(
      (prev) =>
        (prev - 1 + Math.max(1, projects.length - 2)) %
        Math.max(1, projects.length - 2)
    );
  };

  // Helper function to get hue rotation for different colors
  const getHueRotation = (colorVar) => {
    const hueMap = {
      "--valorant-cyan": 180, // Cyan
      "--valorant-red": 0, // Red (baseline)
      "--valorant-accent": 60, // Yellow/Green accent
      "--tech-gold": 45, // Gold
    };
    return hueMap[colorVar] || 0;
  };

  const projects = [
    {
      id: "ADAMSON",
      name: "Adamson PH",
      type: "Organizational Website",
      color: "--valorant-cyan",
      description:
        "Created a comprehensive website for Adamson organization with seamen applicant management system and integrated analytics.",
      images: [adamsonImg],
      image: adamsonImg,
      thumbnail: adamsonImg,
      details:
        "Create a website for their organization that also manages new seamen applicants",
      features: [
        "Google Analytics",
        "Facebook Messenger Chat plugin",
        "Gallery",
        "Custom WordPress themes",
        "Application form for new seamen applicants",
      ],
      solved: [
        "Google Analytics provides insights on traffic",
        "Drive easy data collection and management of applicants",
      ],
      tech: [
        {
          name: "WordPress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "CodeIgniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "DAY1",
      name: "Day 1 Web App",
      type: "SME Digital Platform",
      color: "--valorant-red",
      description:
        "A comprehensive web application for SMEs to adapt their business to the digital age with advanced management features.",
      images: [day1Img],
      image: day1Img,
      thumbnail: day1Img,
      details:
        "A web application for SME's to adapt their business to the digital age.",
      features: [
        "Google Analytics",
        "User management",
        "Content management",
        "Form builder",
        "LMS (Learning Management System)",
      ],
      solved: [
        "Limited budget for development but still want a robust web application",
        "Instead of sourcing expensive web development services, I built the application using open-source technologies like CodeIgniter and React",
      ],
      tech: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "CodeIgniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "AWS RDS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "FORMBUILDER",
      name: "Form Builder & Reports Builder",
      type: "Data Management Platform",
      color: "--valorant-accent",
      description:
        "A comprehensive web application for creating and managing forms and reports with advanced user management capabilities.",
      images: [formbuilderImg],
      image: formbuilderImg,
      thumbnail: formbuilderImg,
      details: "A web application for creating and managing forms and reports.",
      features: [
        "Form builder",
        "Report builder",
        "User management",
        "Content management",
      ],
      solved: [
        "Limited budget for development but still want a robust web application",
        "Data collection and management for large number of members",
        "Help cooperative management with their executive decisions",
      ],
      tech: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "AWS RDS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "STUDENT",
      name: "Student ID Cash Card",
      type: "IoT Hardware/Software",
      color: "--tech-gold",
      description:
        "Award-winning thesis project combining Arduino hardware with web application for cashless canteen payments using NFC technology.",
      images: [studentIdImg],
      image: studentIdImg,
      thumbnail: studentIdImg,
      details:
        "This is my thesis project where I give my full effort and apply what I learn during my studies. The project consists of 2 components: Hardware and software. I created the prototype's hardware component which is made with arduino, and Arduino components. The prototype is connected to the internet which is served by Apache server, and the software component is written in core PHP at backend and jquery, CSS3, HTML5, Bootstrap in frontend. This thesis project was awarded 'Best in Thesis Award' by my alma mater.",
      features: [
        "NFC technology",
        "IoT keypad",
        "LCD display",
        "Arduino Ethernet connection",
      ],
      solved: [
        "Lessen the queue that causes payment delays during break time - students can now order, tap and go",
        "This thesis project was awarded 'Best in Thesis Award' by my alma mater",
      ],
      tech: [
        {
          name: "Arduino",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "jQuery",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "HEALTHCARE",
      name: "Healthcare Management System",
      type: "Medical Information System",
      color: "--valorant-cyan",
      description:
        "Comprehensive healthcare facility management system solving record management challenges and improving patient care efficiency.",
      images: [healthcenterImg],
      image: healthcenterImg,
      thumbnail: healthcenterImg,
      details:
        "One of the problems faced by today's health center is the increasing large numbers of records and managing information. Misplaced and duplicated unwanted records are a pain and patient data is difficult to find. A group of individuals approached me to build a system that will manage information with easy access, flexibility and reliability.",
      features: [
        "User management",
        "Content management",
        "Appointment scheduling",
        "Patient management",
      ],
      solved: [
        "Streamlined healthcare facility management processes",
        "Improved patient appointment scheduling and management",
      ],
      tech: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "CodeIgniter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "MAQLIT",
      name: "Maqlit Website",
      type: "Business Website",
      color: "--valorant-red",
      description:
        "Professional business website for construction supplies trading company with product showcase and customer inquiry management.",
      images: [maqlitImg],
      image: maqlitImg,
      thumbnail: maqlitImg,
      details:
        "Maqlit is a construction supplies trading company. They have good products and services, and are construction specialists. They offer solutions for clients who need supplies. Their reputation is good with both clients and partners but the problem is they don't have an online profile for branding and product showcase.",
      features: [
        "Google Analytics",
        "Product showcase",
        "Product details",
        "Product inquiries",
        "Product catalogs",
        "Contact form",
      ],
      solved: [
        "Helped establish an online presence for Maqlit",
        "Enhanced brand visibility and customer engagement",
        "Reduced inquiries and increased sales through online channels",
        "Saved cost on manual catalog printing",
      ],
      tech: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "WordPress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "AWS RDS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "VAPOR",
      name: "Vaporthority E-commerce",
      type: "E-commerce Platform",
      color: "--valorant-accent",
      description:
        "Full-featured e-commerce website for vape products with comprehensive product management and customer engagement features.",
      images: [vaporthority],
      image: vaporthority,
      thumbnail: vaporthority,
      details:
        "Vaporthority is an e-commerce website that sells vape products. They needed an online platform for branding and product showcase with full e-commerce capabilities.",
      features: [
        "Full E-commerce functionality",
        "Google Analytics",
        "Product showcase",
        "Product details",
        "Product inquiries",
        "Product catalogs",
        "Contact form",
      ],
      solved: [
        "Saved cost on expensive e-commerce platforms",
        "Helped establish an online presence for Vaporthority",
        "Enhanced brand visibility and customer engagement",
      ],
      tech: [
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Nginx",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        },
        {
          name: "WordPress",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "AWS RDS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "GENDER",
      name: "Gender Reveal Voting SAAS",
      type: "Event Management SAAS",
      color: "--tech-gold",
      description:
        "Modern web application for creating and managing gender reveal voting events with real-time participant engagement.",
      images: [genderReveal1Img, genderReveal2Img],
      image: genderReveal1Img,
      thumbnail: genderReveal1Img,
      details:
        "A web application for creating and managing gender reveal voting events. Users can create events, invite participants, and track votes in real-time.",
      features: [
        "Event creation",
        "Participant management",
        "Real-time voting",
        "Result tracking",
      ],
      solved: [
        "Streamlined event management and voting processes",
        "Enhanced user engagement through real-time updates",
        "Provided a fun and interactive way for users to celebrate",
      ],
      tech: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Serverless",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "AWS RDS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
        },
      ],
      status: "COMPLETED",
    },
    {
      id: "PORTFOLIO",
      name: "Portfolio Website v1",
      type: "Personal Portfolio",
      color: "--valorant-cyan",
      description:
        "Personal portfolio website showcasing skills, projects, and experiences with modern design and interactive features.",
      images: [portfolioImg],
      image: portfolioImg,
      thumbnail: portfolioImg,
      details:
        "A personal portfolio website to showcase my skills, projects, and experiences.",
      features: ["Project showcase", "Skills display", "Contact form"],
      solved: [
        "Created a professional online presence to attract potential clients and employers",
        "Highlighted my skills and projects effectively",
        "Provided a platform for potential clients to contact me easily",
      ],
      futureImprovements: [
        "Add a blog section to share insights and updates",
        "Implement a dark mode for better user experience",
      ],
      tech: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Serverless",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Google Sheets",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
        },
      ],
      status: "COMPLETED",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-background tactical-grid"></div>
      <div className="projects-background-text">PROJECTS</div>

      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">PROJECT PORTFOLIO</h2>
          <p className="section-subtitle">
            Real-world solutions & achievements
          </p>
        </div>

        {/* Carousel Layout */}
        <div className="carousel-wrapper">
          <div className="projects-carousel">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${carouselIndex * 33.333}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="project-card-carousel corner-clip"
                  onClick={() => handleProjectClick(index)}
                  onMouseEnter={playHoverSound}
                  style={{
                    borderColor: `var(${project.color})`,
                    "--glow-color": `var(${project.color})`,
                  }}
                >
                  <div className="project-image">
                    <img src={project.thumbnail} alt={project.thumbnail} />
                    <div className="project-overlay"></div>
                    <div className="project-overlay-content">
                      <h3 className="project-name">{project.name}</h3>
                      <p className="project-type">{project.type}</p>
                    </div>
                  </div>

                  <div className="project-tech-preview">
                    {project.tech.slice(0, 5).map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech.icon}
                        alt={tech.name}
                        className="tech-icon-small"
                        style={{
                          filter: `grayscale(100%) brightness(0.8) sepia(1) hue-rotate(${getHueRotation(
                            project.color
                          )}deg) saturate(2)`,
                        }}
                      />
                    ))}
                    {project.tech.length > 5 && (
                      <span className="tech-more">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Controls - Bottom Right */}
        <div className="carousel-controls">
          <div className="carousel-indicator geometric-clip">
            <span>
              {carouselIndex + 1}/{projects.length}
            </span>
          </div>
          <button
            className="carousel-nav carousel-nav-prev geometric-clip"
            onClick={prevProject}
            onMouseEnter={playHoverSound}
            disabled={carouselIndex === 0}
          >
            ‹
          </button>
          <button
            className="carousel-nav carousel-nav-next geometric-clip"
            onClick={nextProject}
            onMouseEnter={playHoverSound}
            disabled={carouselIndex >= projects.length - 3}
          >
            ›
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content corner-clip"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="modal-header">
              <div className="modal-title-section">
                <h3 className="modal-title">{projects[selectedMap].name}</h3>
                <span
                  className="project-type-badge arrow-clip"
                  style={{ background: `var(${projects[selectedMap].color})` }}
                >
                  {projects[selectedMap].type}
                </span>
              </div>

              <div className="modal-image-showcase">
                <img
                  src={projects[selectedMap].image}
                  alt={projects[selectedMap].name}
                  className="modal-showcase-image"
                />
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-description">
                <p>{projects[selectedMap].description}</p>
              </div>

              <div className="modal-details-content">
                <div className="details-section">
                  <h4 style={{ color: `var(${projects[selectedMap].color})` }}>
                    Project Details
                  </h4>
                  <p>{projects[selectedMap].details}</p>
                </div>

                {projects[selectedMap].features && (
                  <div className="features-section">
                    <h4
                      style={{ color: `var(${projects[selectedMap].color})` }}
                    >
                      Key Features
                    </h4>
                    <ul className="features-list">
                      {projects[selectedMap].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {projects[selectedMap].solved && (
                  <div className="solved-section">
                    <h4
                      style={{ color: `var(${projects[selectedMap].color})` }}
                    >
                      Problems Solved
                    </h4>
                    <ul className="solutions-list">
                      {projects[selectedMap].solved.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="tech-stack-section">
                  <h4 style={{ color: `var(${projects[selectedMap].color})` }}>
                    Technology Stack
                  </h4>
                  <div className="tech-stack-grid">
                    {projects[selectedMap].tech.map((tech, index) => (
                      <div
                        key={index}
                        className="tech-item geometric-clip glow-on-hover"
                        style={{
                          borderColor: `var(${projects[selectedMap].color})`,
                          "--glow-color": `var(${projects[selectedMap].color})`,
                        }}
                        onMouseEnter={playHoverSound}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          style={{
                            filter: `grayscale(100%) brightness(0.8) sepia(1) hue-rotate(${getHueRotation(
                              projects[selectedMap].color
                            )}deg) saturate(2)`,
                          }}
                        />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
