import { 
  Users, 
  Zap, 
  DollarSign, 
  ThumbsUp, 
  Shield, 
  Award, 
  Clock, 
  Settings,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const WhyUs = () => {
  const mainReasons = [
    {
      icon: Users,
      title: 'Experienced Technical Team',
      description: 'Skilled engineers and technicians dedicated to providing top-quality HVAC solutions',
      points: [
        'Certified professionals',
        '15+ years industry experience',
        'Continuous training programs',
        'Expert troubleshooting',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: 'End-to-End Project Execution',
      description: 'Comprehensive project management from design to installation to testing and commissioning',
      points: [
        'Custom design solutions',
        'Professional installation',
        'Quality testing',
        'Complete commissioning',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: DollarSign,
      title: 'Energy-Efficient & Cost-Effective',
      description: 'Tailored systems designed to optimize performance and minimize operating costs',
      points: [
        'Energy-saving designs',
        'Lower utility bills',
        'High ROI systems',
        'Sustainable solutions',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: ThumbsUp,
      title: 'Strong After-Sales Service Support',
      description: 'Reliable maintenance and support to ensure system longevity and efficiency',
      points: [
        'AMC packages available',
        'Emergency breakdown service',
        'Regular maintenance',
        'Spare parts availability',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Award,
      title: 'Quality Equipment & Trusted Brands',
      description: 'Use of high-quality HVAC equipment from leading, reliable manufacturers',
      points: [
        'Original products only',
        'Manufacturer warranties',
        'Latest technology',
        'Proven reliability',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Compliance with Safety & Industry Standards',
      description: 'Strict adherence to safety protocols and industry regulations',
      points: [
        'ISO certified processes',
        'Safety compliance',
        'Industry standards',
        'Quality assurance',
      ],
      color: 'from-red-500 to-red-600',
    },
  ];

  const additionalBenefits = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your time and complete projects within agreed timelines',
    },
    {
      icon: Settings,
      title: 'Customized Solutions',
      description: 'Every project is unique - we tailor our solutions to your specific needs',
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: '500+ successful projects and counting with satisfied clients',
    },
    {
      icon: CheckCircle,
      title: 'Transparent Pricing',
      description: 'No hidden costs - clear and competitive pricing for all services',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Free site visit and requirement analysis',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Custom solution design with cost estimation',
    },
    {
      number: '03',
      title: 'Installation',
      description: 'Professional installation by certified team',
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Complete system testing and quality checks',
    },
    {
      number: '05',
      title: 'Training',
      description: 'Client training on system operation',
    },
    {
      number: '06',
      title: 'Support',
      description: 'Ongoing maintenance and 24/7 support',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Reliable HVAC Solutions for Your Comfort
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our professional approach and commitment to excellence
          </p>
        </div>

        {/* Main Reasons Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {mainReasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${reason.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-white/90 text-sm">{reason.description}</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {reason.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Additional Benefits</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More reasons why we're the right choice for your HVAC needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 mb-20 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality at every step
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Why We Stand Out
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we compare to typical service providers
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">PCS</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Others</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['ISO Certified', true, false],
                    ['24/7 Support', true, false],
                    ['Free Site Visit', true, false],
                    ['Warranty Support', true, true],
                    ['Certified Technicians', true, false],
                    ['Energy Efficient Solutions', true, false],
                    ['Transparent Pricing', true, false],
                    ['AMC Packages', true, true],
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">{row[0]}</td>
                      <td className="px-6 py-4 text-center">
                        {row[1] ? (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400 text-2xl">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row[2] ? (
                          <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400 text-2xl">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-center text-white animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let us show you why we're the preferred choice for HVAC solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Get Started Today
            </a>
            <a
              href="tel:9766124219"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-blue-600 transition-all"
            >
              Call: 9766124219
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;