import React from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../mock';

const About = () => {
  const { personal, education, certifications } = portfolioData;

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">À propos de moi</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionné par la technologie et la sécurité informatique, je combine développement et cybersécurité 
            pour créer des solutions robustes et sécurisées.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <MapPin className="text-blue-600 mr-3" size={24} />
                Informations personnelles
              </h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <span className="font-medium w-20">Email:</span>
                  <a href={`mailto:${personal.email}`} className="text-blue-600 hover:underline ml-4">
                    {personal.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium w-20">Téléphone:</span>
                  <a href={`tel:${personal.phone}`} className="text-blue-600 hover:underline ml-4">
                    {personal.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium w-20">Adresse:</span>
                  <span className="ml-4">{personal.address}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-medium w-20">LinkedIn:</span>
                  <span className="text-blue-600 ml-4">{personal.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Certification */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Award className="text-green-600 mr-3" size={24} />
                Certification
              </h3>
              {certifications.map((cert) => (
                <div key={cert.id} className="border-l-4 border-green-500 pl-6 py-2">
                  <h4 className="text-xl font-semibold text-black">{cert.name}</h4>
                  <p className="text-green-600 font-medium">{cert.score}</p>
                  <p className="text-gray-600 mt-2">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                <GraduationCap className="text-purple-600 mr-3" size={24} />
                Formation
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative pl-8">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    {index < education.length - 1 && (
                      <div className="absolute left-2 top-4 w-0.5 h-16 bg-purple-200"></div>
                    )}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-purple-600">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-black">{edu.degree}</h4>
                      {edu.mention && (
                        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {edu.mention}
                        </span>
                      )}
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-gray-500 text-sm flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Langues</h4>
                  <div className="space-y-3">
                    {portfolioData.languages.map((lang, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-700">{lang.name}</span>
                        <span className="text-blue-600 font-medium">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-black mb-4">Centres d'intérêt</h4>
                  <div className="space-y-2">
                    {portfolioData.interests.map((interest, index) => (
                      <div key={index} className="text-gray-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;