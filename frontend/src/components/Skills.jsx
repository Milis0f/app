import React, { useState } from 'react';
import { Code, Server, Wrench, Briefcase, Shield, ChevronRight } from 'lucide-react';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('development');

  const skillCategories = [
    { 
      id: 'development', 
      label: 'Développement', 
      icon: Code, 
      color: 'blue',
      data: skills.development 
    },
    { 
      id: 'system', 
      label: 'Système & Réseau', 
      icon: Server, 
      color: 'green',
      data: skills.system 
    },
    { 
      id: 'tools', 
      label: 'Outils', 
      icon: Wrench, 
      color: 'purple',
      data: skills.tools 
    },
    { 
      id: 'project', 
      label: 'Gestion de Projet', 
      icon: Briefcase, 
      color: 'orange',
      data: skills.project 
    },
    { 
      id: 'security', 
      label: 'Cybersécurité', 
      icon: Shield, 
      color: 'red',
      data: skills.security 
    }
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      blue: {
        bg: isActive ? 'bg-blue-600' : 'bg-blue-50',
        text: isActive ? 'text-white' : 'text-blue-700',
        icon: 'text-blue-600',
        border: 'border-blue-200'
      },
      green: {
        bg: isActive ? 'bg-green-600' : 'bg-green-50',
        text: isActive ? 'text-white' : 'text-green-700',
        icon: 'text-green-600',
        border: 'border-green-200'
      },
      purple: {
        bg: isActive ? 'bg-purple-600' : 'bg-purple-50',
        text: isActive ? 'text-white' : 'text-purple-700',
        icon: 'text-purple-600',
        border: 'border-purple-200'
      },
      orange: {
        bg: isActive ? 'bg-orange-600' : 'bg-orange-50',
        text: isActive ? 'text-white' : 'text-orange-700',
        icon: 'text-orange-600',
        border: 'border-orange-200'
      },
      red: {
        bg: isActive ? 'bg-red-600' : 'bg-red-50',
        text: isActive ? 'text-white' : 'text-red-700',
        icon: 'text-red-600',
        border: 'border-red-200'
      }
    };
    return colors[color];
  };

  const activeCategory = skillCategories.find(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Compétences Techniques</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un aperçu de mes compétences et technologies maîtrisées dans différents domaines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tabs Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-3 sticky top-32">
              {skillCategories.map((category) => {
                const isActive = activeTab === category.id;
                const colorClasses = getColorClasses(category.color, isActive);
                const Icon = category.icon;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} hover:scale-105 transform`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon size={20} className={isActive ? 'text-white' : colorClasses.icon} />
                      <span className="font-medium">{category.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 min-h-96">
              <div className="flex items-center space-x-3 mb-8">
                {activeCategory && (
                  <>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(activeCategory.color).bg}`}>
                      <activeCategory.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-black">{activeCategory.label}</h3>
                  </>
                )}
              </div>

              <div className="space-y-6">
                {activeCategory?.data.map((skillGroup, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <ChevronRight className={`flex-shrink-0 mt-1 ${getColorClasses(activeCategory.color).icon}`} size={20} />
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg">{skillGroup}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category) => {
              const colorClasses = getColorClasses(category.color);
              const Icon = category.icon;
              
              return (
                <div key={category.id} className="text-center">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={colorClasses.icon} size={24} />
                  </div>
                  <h4 className="font-semibold text-black text-sm">{category.label}</h4>
                  <p className="text-gray-500 text-sm">{category.data.length} compétence{category.data.length > 1 ? 's' : ''}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;