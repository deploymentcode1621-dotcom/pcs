import { Target, Lightbulb, Users, Award, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const visionMission = [
    {
      icon: Target,
      title: 'Our Vision',
      description:
        'To be a leading HVAC solutions company recognized for innovation, quality execution, and energy-efficient climate control systems.',
      color: 'blue',
    },
    {
      icon: Lightbulb,
      title: 'Our Mission',
      description:
        'To provide advanced HVAC solutions that enhance comfort and productivity. To deliver projects on time with uncompromising quality standards. To promote energy efficiency and sustainable practices. To build long-term client relationships through reliable service and support.',
      color: 'indigo',
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering the highest quality HVAC solutions with attention to every detail.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your comfort and satisfaction are at the heart of everything we do.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Leveraging latest technology and sustainable practices for optimal results.',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Trusted service with guaranteed performance and long-term support.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Years of Excellence' },
    { number: '500+', label: 'Successful Projects' },
    { number: '50+', label: 'Expert Technicians' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            About Professional Cooling Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Your Trusted HVAC Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a trusted HVAC solutions provider delivering efficient, reliable, and sustainable 
            cooling systems for residential, commercial, and industrial applications.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">
                  Who We Are
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With a strong focus on comfort, energy efficiency, and sustainability, we design and 
                  implement customized HVAC solutions tailored to client needs.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our expertise spans from system design and installation to maintenance and retrofitting, 
                  ensuring optimal indoor air quality and long-term performance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We serve residential, commercial, and industrial sectors with world-class equipment 
                  from trusted brands and a team of certified professionals.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {visionMission.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
                >
                  <div className="mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-blue-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications & Expertise */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-bold mb-4">Certified & Trusted</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our commitment to excellence is backed by industry certifications and partnerships 
            with leading HVAC manufacturers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
              ISO Certified
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
              Licensed Professionals
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
              Fully Insured
            </span>
            <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-semibold">
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;