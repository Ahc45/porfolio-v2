import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [selectedMap, setSelectedMap] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const nextImage = () => {
    const currentProject = projects[selectedMap];
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
    );
    playClickSound();
  };

  const prevImage = () => {
    const currentProject = projects[selectedMap];
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
    );
    playClickSound();
  };

  const handleProjectChange = (index) => {
    playClickSound();
    setSelectedMap(index);
    setCurrentImageIndex(0); // Reset image index when project changes
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
      id: "CAST",
      name: "Casting Application",
      type: "Data Platform",
      color: "--valorant-cyan", // Data/Analytics theme
      description:
        "Led database optimization reducing query times by 60% and implemented AWS serverless ETL workflows processing 10M+ records daily.",
      images: [
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      ],
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop",
      problem:
        "Entertainment industry struggled with inefficient talent casting workflows, manual data processing, and slow query performance affecting production timelines.",
      solution:
        "Architected a comprehensive casting platform with optimized database queries, automated ETL pipelines, and real-time analytics dashboard.",
      designThinking: [
        "User Research: Interviewed 15+ casting directors to understand pain points",
        "Information Architecture: Designed intuitive talent search and filtering system",
        "Performance Optimization: Implemented database indexing and query optimization",
        "Scalability: Built AWS serverless architecture for handling peak loads",
      ],
      results: [
        "60% reduction in query response time",
        "10M+ records processed daily via automated ETL",
        "40% increase in casting efficiency",
        "99.9% system uptime achieved",
      ],
      tech: [
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "AWS Lambda",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
      ],
      status: "COMPLETED",
      sites: ["Frontend", "Backend", "Database"],
      features: [
        "60% Faster Queries",
        "AWS Lambda ETL",
        "10M+ Records/Day",
        "Real-time Monitoring",
      ],
      liveDemo: "https://casting-demo.example.com",
      githubRepo: "https://github.com/example/casting-app",
    },
    {
      id: "PARTS",
      name: "Partsman PH E-commerce",
      type: "E-commerce Platform",
      color: "--valorant-red", // E-commerce/Business theme
      description:
        "Architected complete e-commerce solution as CTO, managing 4 developers and delivering platform handling $2M+ in transactions.",
      images: [
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=600&fit=crop",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
      problem:
        "Auto parts retailers in Philippines lacked efficient online presence, struggling with inventory management, payment processing, and customer experience.",
      solution:
        "Built comprehensive e-commerce platform with advanced inventory system, secure payment integration, and location-based services for parts delivery.",
      designThinking: [
        "Market Research: Analyzed Philippines auto parts market and customer behavior",
        "UX Design: Created intuitive parts search with vehicle compatibility filters",
        "Team Leadership: Managed 4 developers using Agile methodology",
        "Payment Integration: Implemented secure payment gateways for Philippine market",
      ],
      results: [
        "$2M+ in transaction volume processed",
        "300% increase in online sales conversion",
        "4-person development team successfully managed",
        "95% customer satisfaction rating",
      ],
      tech: [
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
      status: "COMPLETED",
      sites: ["Storefront", "Admin", "API"],
      features: [
        "Led 4 Developers",
        "$2M+ Transactions",
        "Secure Payments",
        "Location Services",
      ],
      liveDemo: "https://partsman-ph.example.com",
      githubRepo: "https://github.com/example/partsman-ph",
    },
    {
      id: "NULAB",
      name: "Web Music Mixer",
      type: "Creative Platform",
      color: "--valorant-accent", // Creative/Audio theme
      description:
        "Built innovative web music mixer with real-time audio processing and analytics dashboard tracking 50K+ user sessions.",
      images: [
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571974599782-87624638275d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?w=800&h=600&fit=crop",
      ],
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      problem:
        "Musicians and content creators needed accessible web-based audio mixing tools without expensive software, with limited real-time collaboration features.",
      solution:
        "Developed browser-based music mixer with real-time audio processing, collaborative features, and comprehensive analytics for user engagement tracking.",
      designThinking: [
        "User Experience: Designed intuitive mixing interface mimicking physical DJ equipment",
        "Audio Engineering: Implemented Web Audio API for low-latency processing",
        "Analytics Integration: Built comprehensive user behavior tracking system",
        "Performance Optimization: Optimized for smooth real-time audio manipulation",
      ],
      results: [
        "50,000+ active user sessions tracked",
        "85% user retention rate after first session",
        "Real-time audio processing with <10ms latency",
        "Featured on 3 major music technology blogs",
      ],
      tech: [
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "Vue.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
      ],
      status: "COMPLETED",
      sites: ["Mixer", "Analytics", "Admin"],
      features: [
        "Real-time Audio",
        "Web-based Mixing",
        "50K+ Sessions",
        "User Analytics",
      ],
      liveDemo: "https://nulab-mixer.example.com",
      githubRepo: "https://github.com/example/nulab-mixer",
    },
    {
      id: "KYNA",
      name: "Mobile Development Suite",
      type: "Cross-Platform",
      color: "--tech-gold", // Mobile/Premium theme
      description:
        "Developed cross-platform mobile apps with seamless payment integration, reducing transaction processing time by 40%.",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571867424488-4565932edb41?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      ],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      problem:
        "Businesses needed unified mobile solution for both iOS and Android platforms with fast, secure payment processing and consistent user experience.",
      solution:
        "Created cross-platform mobile development suite with optimized payment flows, comprehensive API integration, and automated testing framework.",
      designThinking: [
        "Cross-Platform Strategy: Chose React Native for code reusability and native performance",
        "Payment UX: Designed streamlined checkout flow reducing friction points",
        "API Architecture: Built RESTful APIs with proper authentication and rate limiting",
        "Quality Assurance: Implemented comprehensive testing suite for both platforms",
      ],
      results: [
        "40% reduction in payment processing time",
        "90% code reusability between iOS and Android",
        "99.8% payment success rate achieved",
        "Deployed to both App Store and Google Play",
      ],
      tech: [
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "Xendit",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
      status: "COMPLETED",
      sites: ["Mobile", "API", "Payment"],
      features: [
        "iOS & Android",
        "40% Faster Payments",
        "RESTful APIs",
        "QA Testing",
      ],
      liveDemo: "https://kyna-mobile.example.com",
      githubRepo: "https://github.com/example/kyna-mobile",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-background tactical-grid"></div>
      <div className="projects-background-text">PROJECTS</div>

      <div className="projects-container">
        <div className="section-header">
          <div className="patch-header">
            <div className="valorant-logo">⚡ DAVE CANDAR</div>
            <h2 className="patch-title">PORTFOLIO HIGHLIGHTS</h2>
            <div className="patch-version">v2.0</div>
          </div>
        </div>

        <div className="patch-content">
          {/* Agent Portraits Section */}
          <div className="agents-section">
            <div className="agents-header">
              <div className="updates-label">UPDATES</div>
            </div>
            <div className="agents-grid">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`agent-card ${
                    selectedMap === index ? "selected" : ""
                  }`}
                  onClick={() => {
                    handleProjectChange(index);
                  }}
                  onMouseEnter={playHoverSound}
                >
                  <div className="agent-portrait">
                    <div className="agent-image">
                      <img src={project.thumbnail} alt={project.name} />
                    </div>
                    <div className="agent-selection-indicator"></div>
                  </div>
                  <div className="agent-name">{project.id}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights Section */}
          <div className="features-section">
            <div className="feature-card main-feature">
              {/* Image Slider */}
              <div className="image-slider">
                <div className="slider-container">
                  <button
                    className="slider-btn prev-btn ability-type-badge"
                    onClick={prevImage}
                    onMouseEnter={playHoverSound}
                  >
                    ‹
                  </button>

                  <div className="slider-image-container">
                    <div className="image-overlay"></div>
                    <img
                      src={projects[selectedMap].images[currentImageIndex]}
                      alt={`${projects[selectedMap].name} screenshot ${
                        currentImageIndex + 1
                      }`}
                      className="slider-image"
                    />
                  </div>

                  <button
                    className="slider-btn next-btn ability-type-badge"
                    onClick={nextImage}
                    onMouseEnter={playHoverSound}
                  >
                    ›
                  </button>
                </div>

                <div className="slider-indicators">
                  {projects[selectedMap].images.map((_, index) => (
                    <button
                      key={index}
                      className={`indicator ${
                        index === currentImageIndex ? "active" : ""
                      }`}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        playClickSound();
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{projects[selectedMap].name}</h3>
                <div className="feature-subtitle">
                  {projects[selectedMap].type}
                </div>
                <p className="feature-description">
                  {projects[selectedMap].description}
                </p>

                <div className="tech-showcase">
                  {projects[selectedMap].tech.map((tech, index) => (
                    <div
                      key={index}
                      className="tech-item-mini"
                      style={{
                        borderColor: `var(${projects[selectedMap].color})`,
                        background: `var(${projects[selectedMap].color})15`, // 15 is 5% opacity in hex
                      }}
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
