import React, { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [selectedMap, setSelectedMap] = useState(0)

  // Sound effects
  const playClickSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBCOEx+/zix4FEo3b+N2QPwgWZr/0xmkfCiWS4fO8aDMGHm+668OAMwgTdcy/6HhHDh1is+OqYisJIJnZ8cZ2KAQoiNLzz3IpBSqO2/DMdysEK4fQ8tJ5KAQ')
    audio.volume = 0.3
    audio.play().catch(() => {})
  }

  const playHoverSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRvIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU4AAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBSi')
    audio.volume = 0.1
    audio.play().catch(() => {})
  }

  const projects = [
    {
      id: 'CAST',
      name: 'Casting Application',
      type: 'Data Platform',
      description: 'Led database optimization reducing query times by 60% and implemented AWS serverless ETL workflows processing 10M+ records daily.',
      image: '🎬',
      tech: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'AWS Lambda', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' }
      ],
      status: 'COMPLETED',
      sites: ['Frontend', 'Backend', 'Database'],
      features: ['60% Faster Queries', 'AWS Lambda ETL', '10M+ Records/Day', 'Real-time Monitoring']
    },
    {
      id: 'PARTS',
      name: 'Partsman PH E-commerce',
      type: 'E-commerce Platform',
      description: 'Architected complete e-commerce solution as CTO, managing 4 developers and delivering platform handling $2M+ in transactions.',
      image: '🚗',
      tech: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
      ],
      status: 'COMPLETED',
      sites: ['Storefront', 'Admin', 'API'],
      features: ['Led 4 Developers', '$2M+ Transactions', 'Secure Payments', 'Location Services']
    },
    {
      id: 'NULAB',
      name: 'Web Music Mixer',
      type: 'Creative Platform',
      description: 'Built innovative web music mixer with real-time audio processing and analytics dashboard tracking 50K+ user sessions.',
      image: '🎵',
      tech: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
      ],
      status: 'COMPLETED',
      sites: ['Mixer', 'Analytics', 'Admin'],
      features: ['Real-time Audio', 'Web-based Mixing', '50K+ Sessions', 'User Analytics']
    },
    {
      id: 'KYNA',
      name: 'Mobile Development Suite',
      type: 'Cross-Platform',
      description: 'Developed cross-platform mobile apps with seamless payment integration, reducing transaction processing time by 40%.',
      image: '📱',
      tech: [
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Xendit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ],
      status: 'COMPLETED',
      sites: ['Mobile', 'API', 'Payment'],
      features: ['iOS & Android', '40% Faster Payments', 'RESTful APIs', 'QA Testing']
    }
  ]

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
                  className={`agent-card ${selectedMap === index ? 'selected' : ''}`}
                  onClick={() => {
                    playClickSound()
                    setSelectedMap(index)
                  }}
                  onMouseEnter={playHoverSound}
                >
                  <div className="agent-portrait">
                    <div className="agent-image">{project.image}</div>
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
              <div className="feature-icon-large">🎯</div>
              <div className="feature-content">
                <h3 className="feature-title">{projects[selectedMap].name}</h3>
                <div className="feature-subtitle">{projects[selectedMap].type}</div>
                <p className="feature-description">{projects[selectedMap].description}</p>
                
                <div className="tech-showcase">
                  {projects[selectedMap].tech.map((tech, index) => (
                    <div key={index} className="tech-item-mini">
                      <img src={tech.icon} alt={tech.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="feature-card secondary-feature">
              <div className="feature-icon-large">📊</div>
              <div className="feature-content">
                <h3 className="feature-title">MENU UI</h3>
                <div className="feature-subtitle">Improved client navigation & UI</div>
                <div className="stats-mini">
                  {projects[selectedMap].features.map((feature, index) => (
                    <div key={index} className="stat-item-mini">
                      <span className="stat-check">✓</span>
                      <span className="stat-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bottom-section">
            <div className="feature-card surrender-card">
              <div className="surrender-icon">🏳️</div>
              <div className="surrender-content">
                <h3>DEPLOYMENT</h3>
                <p>Ready for production deployment</p>
              </div>
            </div>

            <div className="feature-card ranked-card">
              <div className="ranked-icon">💎</div>
              <div className="ranked-content">
                <h3>QUALITY</h3>
                <p>Enterprise-grade solutions</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Projects