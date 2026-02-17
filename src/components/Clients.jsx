import React from 'react';
import { 
  Building, Building2, GraduationCap, Home as HomeIcon, 
  Factory, Hotel, Award 
} from 'lucide-react';

const Clients = () => {
  const clients = [
    { icon: HomeIcon, title: 'Residential', subtitle: 'Buildings' },
    { icon: Building2, title: 'Commercial', subtitle: 'Buildings' },
    { icon: Building, title: 'Corporate', subtitle: 'Offices' },
    { icon: Award, title: 'Hospitals & Healthcare', subtitle: 'Facilities' },
    { icon: Hotel, title: 'Hotels & Hospitality', subtitle: '' },
    { icon: Factory, title: 'Industrial Units', subtitle: '' },
    { icon: GraduationCap, title: 'Educational Institutions', subtitle: '' },
    { icon: Building2, title: 'and more...', subtitle: '' }
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

      <section id="clients" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Our Clients
            </h2>
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {clients.map((client, index) => {
              const Icon = client.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-center hover-lift shadow-md transition-all"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 shadow-lg">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                    {client.title}
                  </h3>
                  {client.subtitle && (
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                      {client.subtitle}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;