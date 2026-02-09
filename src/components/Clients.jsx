import { Building2, Home, Factory, GraduationCap, Hotel, Hospital, Briefcase, Star } from 'lucide-react';

const Clients = () => {
  const clientCategories = [
    {
      icon: Home,
      title: 'Residential Buildings',
      description: 'Apartments, villas, and residential complexes',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building2,
      title: 'Commercial Complexes',
      description: 'Shopping malls, retail spaces, and business centers',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Briefcase,
      title: 'Corporate Offices',
      description: 'IT parks, office buildings, and corporate campuses',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Hospital,
      title: 'Hospitals & Healthcare',
      description: 'Medical facilities, clinics, and healthcare centers',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Hotel,
      title: 'Hotels & Hospitality',
      description: 'Hotels, resorts, and hospitality facilities',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Factory,
      title: 'Industrial Units',
      description: 'Manufacturing plants and industrial facilities',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Schools, colleges, and universities',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Star,
      title: 'and more...',
      description: 'Various other sectors and applications',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const featuredClients = [
    {
      name: 'Leading Manufacturing Company',
      logo: '🏭',
      sector: 'Industrial',
      project: 'Complete HVAC system for 50,000 sq ft facility',
    },
    {
      name: 'Infinity Pvt Ltd',
      logo: '🏢',
      sector: 'Commercial',
      project: 'VRF system installation for office complex',
    },
    {
      name: 'ST Telemedia Global Data Centres',
      logo: '💾',
      sector: 'Data Center',
      project: 'Precision cooling solutions',
    },
    {
      name: 'Adani Group',
      logo: '⚡',
      sector: 'Corporate',
      project: 'Multi-location HVAC maintenance',
    },
  ];

  const testimonials = [
    {
      company: 'Tech Corporate Office',
      name: 'Rajesh Kumar',
      position: 'Facility Manager',
      text: 'PCS provided excellent service for our office HVAC installation. Professional team and timely delivery.',
      rating: 5,
    },
    {
      company: 'Residential Complex',
      name: 'Priya Sharma',
      position: 'Society President',
      text: 'Very satisfied with the AMC service. Quick response and efficient maintenance throughout the year.',
      rating: 5,
    },
    {
      company: 'Manufacturing Unit',
      name: 'Amit Desai',
      position: 'Plant Manager',
      text: 'Reliable industrial cooling solutions. Their technical expertise helped us optimize our operations.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '50+', label: 'Corporate Clients' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            Our Clients
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Trusted by Leading Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We serve diverse sectors with customized HVAC solutions
          </p>
        </div>

        {/* Client Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Categories */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Sectors We Serve</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive HVAC solutions across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                  style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                >
                  <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold">{category.title}</h4>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Clients */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">Featured Clients</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Some of our esteemed clients we've had the privilege to serve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredClients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4 text-center">{client.logo}</div>
                <h4 className="text-lg font-bold text-blue-900 mb-2 text-center">
                  {client.name}
                </h4>
                <div className="text-center mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                    {client.sector}
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-center">{client.project}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from our satisfied customers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-blue-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600 font-medium mt-1">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Experience professional HVAC solutions backed by quality service and customer satisfaction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              Start Your Project
            </a>
            <a
              href="tel:9766124219"
              className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-blue-400 transition-all"
            >
              Call: 9766124219
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;