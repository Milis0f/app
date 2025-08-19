import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Expérience Professionnelle</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mon parcours professionnel dans le développement d'applications et la sécurité informatique
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-blue-200 hidden md:block"></div>
              )}
              
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">{exp.title}</h3>
                        <h4 className="text-xl text-blue-600 font-semibold mb-3">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="mr-2" size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="mr-2" size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{exp.description}</p>
                    
                    {/* Tasks */}
                    <div>
                      <h5 className="text-lg font-semibold text-black mb-4">Réalisations principales :</h5>
                      <ul className="space-y-3">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start space-x-3">
                            <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" size={16} />
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-blue-50 rounded-2xl p-8">
            <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-700 font-medium">Années d'expérience</div>
          </div>
          <div className="text-center bg-green-50 rounded-2xl p-8">
            <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
            <div className="text-gray-700 font-medium">Score certification ANSSI</div>
          </div>
          <div className="text-center bg-purple-50 rounded-2xl p-8">
            <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
            <div className="text-gray-700 font-medium">Projets réalisés</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;