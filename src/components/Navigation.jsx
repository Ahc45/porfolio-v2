import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Sound effects
  const playClickSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBCOEx+/zix4FEo3b+N2QPwgWZr/0xmkfCiWS4fO8aDMGHm+668OAMwgTdcy/6HhHDh1is+OqYisJIJnZ8cZ2KAQoiNLzz3IpBSqO2/DMdysEK4fQ8tJ5KAQ');
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const playHoverSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRvIAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YU4AAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSsFJHfH8N2QQAoUXrTp66hVFApGn+DyvmkfBSi');
    audio.volume = 0.1;
    audio.play().catch(() => {});
  };

  const navigationItems = [
    { 
      id: 'home', 
      label: 'HOME', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 9V22H9V16H15V22H22V9L12 2Z" fill="#FF4654"/>
          <path d="M12 2L22 9V10L12 3L2 10V9L12 2Z" fill="#FFCC00" opacity="0.8"/>
          <rect x="10" y="12" width="4" height="4" fill="#00FF88" opacity="0.6"/>
        </svg>
      ), 
      section: '.hero' 
    },
    { 
      id: 'arsenal', 
      label: 'ARSENAL', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6V12C4 16.5 7 20.26 12 22C17 20.26 20 16.5 20 12V6L12 2Z" fill="#00FF88"/>
          <path d="M9 11L11 13L15 9L17 11L11 17L7 13L9 11Z" fill="#0D1117" opacity="0.3"/>
          <rect x="8" y="5" width="8" height="1" fill="#00D4FF" opacity="0.8"/>
          <rect x="6" y="8" width="12" height="1" fill="#00D4FF" opacity="0.6"/>
          <circle cx="12" cy="12" r="1" fill="#FFCC00"/>
        </svg>
      ), 
      section: '.skills' 
    },
    { 
      id: 'maps', 
      label: 'MAPS', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M2 3L8 2L16 4L22 2V19L16 21L8 19L2 21V3Z" fill="#00D4FF"/>
          <path d="M8 2V19M16 4V21" stroke="#9146FF" strokeWidth="1" opacity="0.6"/>
          <circle cx="5" cy="8" r="1.5" fill="#FF4654" opacity="0.8"/>
          <circle cx="12" cy="10" r="1.5" fill="#FFCC00" opacity="0.8"/>
          <circle cx="19" cy="7" r="1.5" fill="#00FF88" opacity="0.8"/>
          <path d="M5 8L12 10L19 7" stroke="#FFFFFF" strokeWidth="1" opacity="0.4"/>
        </svg>
      ), 
      section: '.projects' 
    },
    { 
      id: 'contact', 
      label: 'CONTACT', 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2Z" fill="#FFCC00"/>
          <path d="M12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18Z" fill="#FF4654" opacity="0.8"/>
          <rect x="8" y="6" width="8" height="1" fill="#00D4FF" opacity="0.8"/>
          <rect x="8" y="8" width="6" height="1" fill="#00D4FF" opacity="0.6"/>
          <rect x="8" y="10" width="8" height="1" fill="#00D4FF" opacity="0.8"/>
          <rect x="8" y="12" width="4" height="1" fill="#00D4FF" opacity="0.6"/>
        </svg>
      ), 
      section: '.contact' 
    }
  ];

  const scrollToSection = (sectionSelector) => {
    const element = document.querySelector(sectionSelector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY + 200;
      
      // Update sticky state
      setIsScrolled(window.scrollY > 100);

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const sectionId = section.className.split(' ')[0];

        if (scrollPos >= top && scrollPos < top + height) {
          switch(sectionId) {
            case 'hero': setActiveSection('home'); break;
            case 'skills': setActiveSection('arsenal'); break;
            case 'projects': setActiveSection('maps'); break;
            case 'contact': setActiveSection('contact'); break;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation */}
      <nav className={`valorant-navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-background"></div>
        
        <div className="nav-content">
          <div className="nav-brand">
            <div className="brand-icon">⚡</div>
            <span className="brand-text">DAVE CANDAR</span>
            <div className="brand-status">
              <div className="status-dot"></div>
              <span>AVAILABLE</span>
            </div>
          </div>

          <div className="nav-items">
            {navigationItems.map((item) => (
              <div
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item)}
                onMouseEnter={playHoverSound}
              >
                <div className="nav-item-inner">
                  <div className="nav-icon">{item.icon}</div>
                  <span className="nav-label">{item.label}</span>
                  <div className="nav-indicator"></div>
                </div>
                <div className="nav-item-glow"></div>
              </div>
            ))}
          </div>

          <div className="nav-actions">
            <button 
              className="nav-hire-btn"
              onClick={() => {
                playClickSound();
                scrollToSection('.contact');
              }}
              onMouseEnter={playHoverSound}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="btn-icon">
                <path d="M3 7V5C3 3.89 3.89 3 5 3H7L5 5V7H3ZM17 3H19C20.11 3 21 3.89 21 5V7H19V5L17 3ZM21 17V19C21 20.11 20.11 21 19 21H17L19 19V17H21ZM7 21H5C3.89 21 3 20.11 3 19V17H5V19L7 21Z" fill="currentColor"/>
                <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.2"/>
                <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.4"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
                <path d="M12 6V2M12 22V18M6 12H2M22 12H18" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
              </svg>
              <span className="btn-text">HIRE ME</span>
            </button>
            
            <button 
              className="nav-resume-btn"
              onClick={() => {
                playClickSound();
                window.open('https://drive.google.com/file/d/1H9nDLaCtJMJMiKTQNy40zwXzV8Ku5CG9/view?usp=sharing', '_blank');
              }}
              onMouseEnter={playHoverSound}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="btn-icon">
                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor"/>
                <path d="M14 2V8H20" fill="currentColor" opacity="0.4"/>
                <rect x="7" y="12" width="10" height="1" fill="currentColor" opacity="0.6"/>
                <rect x="7" y="14" width="8" height="1" fill="currentColor" opacity="0.5"/>
                <rect x="7" y="16" width="10" height="1" fill="currentColor" opacity="0.6"/>
                <rect x="7" y="18" width="6" height="1" fill="currentColor" opacity="0.5"/>
              </svg>
              <span className="btn-text">RESUME</span>
            </button>
          </div>
        </div>

        {/* Side Accent */}
        <div className="nav-side-accent">
          <div className="accent-line"></div>
          <div className="accent-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navigation;