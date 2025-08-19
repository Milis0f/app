import React from 'react';
import { ExternalLink, Github, Code, Database, Shield } from 'lucide-react';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;

  const getProjectIcon = (technologies) => {
    if (technologies.some(tech => tech.toLowerCase().includes('mobile'))) {
      return <Code className="text-blue-600" size={24} />;
    }
    if (technologies.some(tech => tech.toLowerCase().includes('oracle') || tech.toLowerCase().includes('sql'))) {
      return <Database className="text-green-600" size={24} />;
    }
    if (technologies.some(tech => tech.toLowerCase().includes('directory') || tech.toLowerCase().includes('security'))) {
      return <Shield className="text-purple-600" size={24} />;
    }
    return <Code className="text-blue-600" size={24} />;
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'terminé':
        return 'bg-green-100 text-green-800';
      case 'en cours':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Mes Projets</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mes réalisations dans le développement d'applications et la sécurité informatique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Project Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    {getProjectIcon(project.technologies)}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              {/* Technologies */}
              <div className="p-8 pt-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Actions */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span className="font-medium">Voir détails</span>
                  </button>
                  <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">Vous avez un projet en tête ?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Je suis toujours intéressé par de nouveaux défis dans le développement et la cybersécurité. 
              N'hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Discutons de votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;