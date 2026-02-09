import { Wind, Wrench, Clock, Flame, Factory, Building2, ArrowRight } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Wind,
      title: 'HVAC System Products & Projects',
      items: [
        'AHUs, VRF system',
        'Daikin, LG etc.',
        'Non - VRF - Split unit',
        'Erection & commissioning of the complete HVAC',
        'Ducting, Insulation, Round & square ducting',
        'Chiller Installation & Piping',
        'Fabrication',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Factory,
      title: 'Industrial Structure & Fabrication',
      items: [
        'Fire Fighting System',
        'Pre-Engineering Building Fabrication & Installation',
        'All fabrication work & piping job',
        'S.S. Piping & Penslod',
        'Rain water gutter fabrication & fixing',
        'Rectangle Bubble Thermal Insulation under roof application',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Clock,
      title: 'Annual Maintenance Service (AMC)',
      description:
        'In order to meet diverse requirements of client, we offer world class range of AC maintenance service. Our entire service is in compliance with set industrial standards and guidelines.',
      items: [
        'Preventive maintenance',
        'Emergency breakdown service',
        'Filter cleaning & replacement',
        'Gas charging & leak detection',
        'Complete system inspection',
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional installation with experienced technicians ensuring optimal performance.',
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      description: 'Complete HVAC solutions for offices, retail spaces, and commercial buildings.',
    },
    {
      icon: Factory,
      title: 'Industrial Solutions',
      description: 'Specialized cooling systems for manufacturing and industrial facilities.',
    },
    {
      icon: Flame,
      title: 'Fire Fighting Systems',
      description: 'Complete fire safety system installation and maintenance services.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Wind className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Comprehensive HVAC Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From installation to maintenance, we provide complete HVAC services tailored to your needs
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {service.description && (
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  )}
                  
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <div className="mt-1">
                          <ArrowRight className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services Grid */}
        <div className="mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Service Process</h3>
            <p className="text-blue-200 max-w-2xl mx-auto">
              A systematic approach to delivering excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your requirements' },
              { step: '02', title: 'Design', desc: 'Custom solution planning' },
              { step: '03', title: 'Installation', desc: 'Professional implementation' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance & service' },
            ].map((process, index) => (
              <div
                key={index}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="text-5xl font-bold text-white/20 mb-3">{process.step}</div>
                <h4 className="text-xl font-bold mb-2">{process.title}</h4>
                <p className="text-blue-200 text-sm">{process.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us design the perfect HVAC solution for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:9766124219"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Call: 9766124219
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;