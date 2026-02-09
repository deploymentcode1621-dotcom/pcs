import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const Home = () => {
  const features = [
    'ISO Certified Services',
    '24/7 Customer Support',
    'Experienced Technicians',
    'Quality Equipment',
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInUp">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              <CheckCircle className="w-4 h-4" />
              Trusted HVAC Solutions Provider
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-900 leading-tight mb-6">
                Cooling India,
                <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Comfortably...!
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Professional HVAC solutions delivering efficient, reliable, and sustainable cooling systems 
                for residential, commercial, and industrial applications.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 animate-fadeInUp"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:9766124219"
                className="flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">15+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900">100%</div>
                <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Illustration Area */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative aspect-square">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl transform rotate-3 opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                {/* AC Unit Icon/Illustration */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-32 h-32 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">
                    Professional Cooling Services
                  </h3>
                  <p className="text-gray-600">
                    Your trusted HVAC partner since 2010
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="text-center">
                  <div className="text-3xl mb-1">❄️</div>
                  <div className="text-sm font-semibold text-blue-900">Energy</div>
                  <div className="text-xs text-gray-600">Efficient</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-3xl mb-1">⚡</div>
                  <div className="text-sm font-semibold text-blue-900">Quick</div>
                  <div className="text-xs text-gray-600">Installation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;