import React from 'react';
import { Users, Zap, Wind, Award, Shield, CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const whyChooseUs = [
    {
      icon: Users,
      title: 'Experienced Technical Team',
      description: 'Skilled engineers and technicians with decades of expertise in HVAC solutions.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'End-to-End Project Execution',
      description: 'Comprehensive project management from design and installation through post-installation support.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wind,
      title: 'Energy Efficient & Cost-Effective Solutions',
      description: 'Solutions designed to optimize energy consumption and reduce operational costs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Strong After-Sales Service Support',
      description: 'Reliable maintenance and support to ensure long-term system efficiency.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Quality Equipment & Trusted Brands',
      description: 'We use only premium equipment from leading, reliable manufacturers.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: CheckCircle,
      title: 'Compliance with Safety & Industry Standards',
      description: 'Strict adherence to safety codes, standards, and regulations.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <>
      <style>{`
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
      `}</style>

      <section id="why-us" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Reliable HVAC Solutions for Your Comfort
            </p>
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover-lift border border-blue-100 shadow-md transition-all"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;