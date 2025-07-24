import React, { useState } from 'react'
import './Skills.css'

const Skills = () => {
  const [selectedAbility, setSelectedAbility] = useState(0)

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

  const abilities = [
    {
      id: 'F',
      name: 'FRONTEND ARSENAL',
      type: 'Core',
      description: 'Build lightning-fast, responsive interfaces that increase user engagement by 45%. 6+ years mastering modern frameworks.',
      icon: '⚡',
      color: '--tech-blue',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', years: 6 },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', years: 4 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', years: 6 },
        { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', years: 6 },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', years: 3 },
        { name: 'SASS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', years: 5 }
      ]
    },
    {
      id: 'B',
      name: 'BACKEND FORTRESS',
      type: 'Expert',
      description: 'Architect scalable backend systems handling millions of requests. Master of Laravel, PHP, and database optimization.',
      icon: '🛡️',
      color: '--tech-red',
      skills: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg', years: 4 },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', years: 5 },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', years: 4 },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', years: 3 },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', years: 5 },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', years: 3 }
      ]
    },
    {
      id: 'D',
      name: 'DEVOPS OPERATIONS',
      type: 'Advanced',
      description: 'Deploy and scale applications with 99.9% uptime using Docker, AWS services, and automated CI/CD pipelines.',
      icon: '🎯',
      color: '--tech-orange',
      skills: [
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', years: 4 },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', years: 3 },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', years: 5 },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', years: 6 },
        { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', years: 4 }
      ]
    },
    {
      id: 'A',
      name: 'ARCHITECT MINDSET',
      type: 'Leadership',
      description: 'Deliver end-to-end solutions that exceed expectations. Lead teams, design systems, and drive business growth.',
      icon: '👑',
      color: '--tech-gold',
      skills: [
        { name: 'Team Leadership', icon: '👥', years: 3 },
        { name: 'System Design', icon: '🏗️', years: 4 },
        { name: 'API Design', icon: '🔌', years: 5 },
        { name: 'Database Design', icon: '🗄️', years: 5 },
        { name: 'Performance', icon: '⚡', years: 4 },
        { name: 'Mentoring', icon: '🎓', years: 2 }
      ]
    }
  ]

  return (
    <section className="skills">
      <div className="skills-background tactical-grid"></div>
      <div className="skills-background-text">ARSENAL</div>
      
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">TECH ARSENAL</h2>
          <p className="section-subtitle">Choose your weapon of choice</p>
        </div>

        <div className="abilities-grid">
          <div className="ability-selector">
            {abilities.map((ability, index) => (
              <div 
                key={ability.id}
                className={`ability-card ${selectedAbility === index ? 'active' : ''} glitch-hover glow-on-hover`}
                onClick={() => {
                  playClickSound()
                  setSelectedAbility(index)
                }}
                onMouseEnter={playHoverSound}
              >
                <div className="ability-key geometric-clip">
                  {ability.id}
                </div>
                <div className="ability-info">
                  <h3>{ability.name}</h3>
                  <span className="ability-type">{ability.type}</span>
                </div>
                <div className="ability-icon" style={{ color: `var(${ability.color})` }}>
                  {ability.icon}
                </div>
              </div>
            ))}
          </div>

          <div className="ability-showcase">
            <div className="ability-preview corner-clip">
              <div className="preview-header">
                <div className="ability-name">
                  <span className="key-indicator" style={{ background: `var(${abilities[selectedAbility].color})` }}>
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
                      '--glow-color': `var(${abilities[selectedAbility].color})`
                    }}
                  >
                    <div className="tech-icon">
                      <img src={skill.icon} alt={skill.name} />
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
                            className={`level-bar ${i < skill.years ? 'active' : ''}`}
                            style={{ background: i < skill.years ? `var(${abilities[selectedAbility].color})` : '#333' }}
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
                    <div className="fill" style={{ 
                      width: `${80 + (selectedAbility * 5)}%`,
                      background: `var(${abilities[selectedAbility].color})`
                    }}></div>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>EXPERIENCE</span>
                  <div className="bar">
                    <div className="fill" style={{ 
                      width: `${70 + (selectedAbility * 10)}%`,
                      background: `var(${abilities[selectedAbility].color})`
                    }}></div>
                  </div>
                </div>
                <div className="stat-bar">
                  <span>IMPACT</span>
                  <div className="bar">
                    <div className="fill" style={{ 
                      width: `${90 - (selectedAbility * 2)}%`,
                      background: `var(${abilities[selectedAbility].color})`
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-timeline">
          <h3>CAREER PROGRESSION</h3>
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content corner-clip">
                <h4>Software Engineer</h4>
                <span className="timeline-date">2023 - Present</span>
                <p>Mosaic Solutions - Optimized databases by 60%, built serverless solutions processing 10M+ records</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content corner-clip">
                <h4>CTO & Full Stack Developer</h4>
                <span className="timeline-date">2022 - 2023</span>
                <p>Partsman PH - Built $2M+ e-commerce platform, managed 4 developers, achieved 99.9% uptime</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content corner-clip">
                <h4>Full Stack Developer</h4>
                <span className="timeline-date">2019 - 2022</span>
                <p>Day 1 Tech Inc - Delivered 20+ custom web solutions, built CMS handling 100K+ content items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills