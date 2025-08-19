import React from 'react';
import { ChevronDown, Shield, Code, Database } from 'lucide-react';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Main Content */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              {personal.name}
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-700 font-light max-w-4xl mx-auto">
            {personal.title}
          </p>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {personal.description}
          </p>
          
          <div className="text-lg text-gray-600">
            <p>{personal.subtitle}</p>
            <p className="text-blue-600 font-medium">{personal.location}</p>
          </div>
        </div>

        {/* Features Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-black">Cybersécurité</h3>
            <p className="text-gray-600 text-center">Certification ANSSI • Sécurisation des accès • Gestion des droits</p>
          </div>
          
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Code className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-black">Développement</h3>
            <p className="text-gray-600 text-center">Applications mobiles • API REST • C# • JavaScript</p>
          </div>
          
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Database className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-black">Infrastructure</h3>
            <p className="text-gray-600 text-center">Active Directory • Virtualisation • Réseaux</p>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          onClick={scrollToAbout}
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <span className="text-lg font-medium">Découvrir mon parcours</span>
          <ChevronDown size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer p-2"
        >
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;