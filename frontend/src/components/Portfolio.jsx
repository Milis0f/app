import React, { useState, useEffect } from "react";
import { Download, ChevronDown, Shield, Code, Database, Network, Cpu, Lock, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section, .hero-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleDownloadCV = () => {
    // Mock CV download - will be replaced with real file
    const link = document.createElement('a');
    link.href = '/cv-matteo-pollo.pdf'; // Mock path
    link.download = 'CV-Matteo-Pollo-Cybersecurite.pdf';
    link.click();
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="portfolio-nav">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text">MATTEO POLLO</span>
          </div>
          <div className="nav-links">
            <a href="#about" className="nav-link">À propos</a>
            <a href="#experience" className="nav-link">Expérience</a>
            <a href="#skills" className="nav-link">Compétences</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-background">
          <div className="gradient-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              MATTEO<br />
              POLLO
            </h1>
            <p className="hero-subtitle">Sécurité IT & Développement</p>
            <p className="hero-description">
              Spécialiste en cybersécurité et développement d'applications sécurisées.
              Passionné par la protection des infrastructures et l'innovation technologique.
            </p>
            <Button onClick={handleDownloadCV} className="download-btn">
              <Download className="btn-icon" />
              Télécharger mon CV
            </Button>
            
            <div className="social-buttons">
              <Button 
                onClick={() => window.open(mockData.contact.linkedin, '_blank')}
                className="social-btn linkedin-btn"
              >
                <Linkedin className="btn-icon" />
                LinkedIn
              </Button>
              
              <Button 
                onClick={() => window.open(mockData.contact.github, '_blank')}
                className="social-btn github-btn"
              >
                <Github className="btn-icon" />
                GitHub
              </Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="cyber-grid">
              <Shield className="floating-icon" />
              <Lock className="floating-icon" />
              <Network className="floating-icon" />
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown className="scroll-arrow" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2 className="section-title">À PROPOS DE MOI</h2>
          
          {/* Personal Introduction */}
          <div className="about-intro">
            <div className="intro-content">
              <p className="about-description">
                {mockData.about.description}
              </p>
              
              <div className="personal-stats">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Années d'expérience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Projets réalisés</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">94%</span>
                  <span className="stat-label">Score ANSSI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="about-grid">
            {/* Education Card */}
            <Card className="about-card education-card">
              <div className="card-header">
                <h3 className="card-title">Formation</h3>
              </div>
              <div className="card-content">
                {mockData.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="edu-main">
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <p className="edu-school">{edu.institution}</p>
                    </div>
                    <div className="edu-details">
                      <span className="edu-year">{edu.year}</span>
                      {edu.mention && <Badge variant="secondary" className="edu-badge">{edu.mention}</Badge>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Certifications Card */}
            <Card className="about-card certifications-card">
              <div className="card-header">
                <h3 className="card-title">Certifications</h3>
              </div>
              <div className="card-content">
                {mockData.certifications.map((cert, index) => (
                  <div key={index} className="cert-item">
                    <div className="cert-info">
                      <h4 className="cert-name">{cert.name}</h4>
                      <p className="cert-score">{cert.score}</p>
                    </div>
                    <div className="cert-icon">
                      <Shield className="cert-shield" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="container">
          <h2 className="section-title">EXPÉRIENCE PROFESSIONNELLE</h2>
          <div className="experience-grid">
            {mockData.experience.map((exp, index) => (
              <Card key={index} className="experience-card">
                <div className="exp-header">
                  <h3 className="exp-title">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-tasks">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="exp-task">{task}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">COMPÉTENCES TECHNIQUES</h2>
          <div className="skills-grid">
            {mockData.skills.map((skillCategory, index) => (
              <Card key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    {skillCategory.category === 'Développement' && <Code />}
                    {skillCategory.category === 'Administration Système' && <Cpu />}
                    {skillCategory.category === 'Sécurité' && <Shield />}
                    {skillCategory.category === 'Base de Données' && <Database />}
                  </div>
                  <h3 className="skill-category">{skillCategory.category}</h3>
                </div>
                <div className="skill-tags">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="skill-tag">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-title">PROJETS & MISSIONS</h2>
          <div className="projects-grid">
            {mockData.projects.map((project, index) => (
              <Card key={index} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="contact-info">
              <h2 className="footer-title">CONTACT</h2>
              <div className="contact-grid">
                <div className="contact-item">
                  <h4 className="contact-label">Email</h4>
                  <a href={`mailto:${mockData.contact.email}`} className="contact-link">
                    {mockData.contact.email}
                  </a>
                </div>
                <div className="contact-item">
                  <h4 className="contact-label">LinkedIn</h4>
                  <a href={mockData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                    POLLO Matteo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Matteo Pollo - Cybersécurité & Développement</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;