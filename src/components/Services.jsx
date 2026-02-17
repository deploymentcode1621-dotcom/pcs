import React from 'react';
import { CheckCircle, Snowflake, Building, Wrench } from 'lucide-react';

const Services = () => {
  const products = [
    {
      title: 'HVAC System Products & Projects',
      items: [
        'VRFs, VRV systems (Daikin & LG etc.)',
        'Air condition (Ducted & Ductless)',
        'Supply / Installation Piping & commissioning',
        'AHU (air handling Units)',
        'Chilled water VAV & CAV air-conditioning system',
        'Installation of Ahu/ Ductes',
        'AC Duct Installation & Pump',
        'Ductwork'
      ]
    },
    {
      title: 'Industrial Structure & Fabrication',
      items: [
        'AC grill Supply / Installation',
        'Structural Fabrication of Installation & Installation',
        'Grill ducting / Piping & Wirings',
        'MS Replacement of U bolt etc.',
        'AC Material Replacement',
        'Main water gutter fabrication & fence',
        'Windows Railing / Installation from M.S Pipe/etc.',
        'G.I fabrication & structure work'
      ]
    },
    {
      title: 'Annual Maintenance Services (AMC)',
      items: [
        'AMC to meet clients requirements and need to ensure continued operations and enhance the knowledge of AC maintenance service team',
        'AMC includes quarterly and half yearly service basis',
        'Call charges, Labor charges & other materials will be charged as actual'
      ]
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

      <section id="services" className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
              Products & Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive HVAC Solutions for Your Comfort
            </p>
            <div className="h-1 sm:h-1.5 w-16 sm:w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mt-3 sm:mt-4 md:mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 hover-lift transition-all"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${
                  index === 0 ? 'from-blue-500 to-blue-600' : 
                  index === 1 ? 'from-green-500 to-green-600' : 
                  'from-orange-500 to-orange-600'
                } rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-lg`}>
                  {index === 0 ? <Snowflake className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" /> : 
                   index === 1 ? <Building className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" /> : 
                   <Wrench className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                  {product.title}
                </h3>
                <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-2.5 md:gap-3 text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;