import React, { useState, useEffect } from "react";
import { Download, ChevronDown, Shield, Code, Database, Network, Cpu, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { mockData } from "../data/mock";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                {mockData.about.description}
              </p>
            </div>
            
            <div className="education-timeline">
              <h3 className="subsection-title">Parcours Scolaire</h3>
              {mockData.education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="timeline-institution">{edu.institution}</p>
                    <span className="timeline-year">{edu.year}</span>
                    {edu.mention && <Badge variant="outline" className="mention-badge">{edu.mention}</Badge>}
                  </div>
                </div>
              ))}
            </div>

            <div className="certifications">
              <h3 className="subsection-title">Certifications</h3>
              <div className="cert-grid">
                {mockData.certifications.map((cert, index) => (
                  <Card key={index} className="cert-card">
                    <div className="cert-content">
                      <h4 className="cert-name">{cert.name}</h4>
                      <p className="cert-score">{cert.score}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
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
                  <h4 className="contact-label">Adresse</h4>
                  <p className="contact-value">{mockData.contact.address}</p>
                </div>
                <div className="contact-item">
                  <h4 className="contact-label">Email</h4>
                  <a href={`mailto:${mockData.contact.email}`} className="contact-link">
                    {mockData.contact.email}
                  </a>
                </div>
                <div className="contact-item">
                  <h4 className="contact-label">Téléphone</h4>
                  <a href={`tel:${mockData.contact.phone}`} className="contact-link">
                    {mockData.contact.phone}
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