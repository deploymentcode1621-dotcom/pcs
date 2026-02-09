import { Wind, Snowflake, Cpu, Droplets, ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Wind,
      title: 'Air Handling Units (AHUs)',
      description: 'Complete range of AHUs for optimal air circulation and climate control',
      features: [
        'Energy-efficient design',
        'Variable speed drives',
        'Advanced filtration systems',
        'Customizable configurations',
      ],
      brands: ['Daikin', 'Carrier', 'Trane'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Snowflake,
      title: 'VRF Systems',
      description: 'Variable Refrigerant Flow systems for flexible and efficient cooling',
      features: [
        'Individual zone control',
        'Energy recovery',
        'Quiet operation',
        'Easy installation',
      ],
      brands: ['Daikin', 'LG', 'Mitsubishi'],
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Cpu,
      title: 'Split AC Units',
      description: 'Non-VRF split units for residential and small commercial spaces',
      features: [
        'Multiple capacity options',
        'Inverter technology',
        'Smart controls',
        'Low noise levels',
      ],
      brands: ['Daikin', 'LG', 'Blue Star'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Droplets,
      title: 'Chillers',
      description: 'Industrial-grade chillers for large-scale cooling requirements',
      features: [
        'High efficiency',
        'Reliable performance',
        'Remote monitoring',
        'Low maintenance',
      ],
      brands: ['Carrier', 'York', 'Trane'],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const accessories = [
    'Ducting (Round & Square)',
    'Insulation Materials',
    'Thermostats & Controls',
    'Air Filters',
    'Refrigerant Lines',
    'Condensate Pumps',
    'Diffusers & Grilles',
    'Expansion Valves',
  ];

  const trustedBrands = [
    { name: 'Daikin', specialty: 'VRF Systems & AHUs' },
    { name: 'LG', specialty: 'Multi V Systems' },
    { name: 'Carrier', specialty: 'Chillers & AHUs' },
    { name: 'Blue Star', specialty: 'Commercial AC' },
    { name: 'Voltas', specialty: 'Split Systems' },
    { name: 'Trane', specialty: 'Industrial HVAC' },
    { name: 'Mitsubishi', specialty: 'VRF Technology' },
    { name: 'York', specialty: 'Chillers' },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Wind className="w-4 h-4" />
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Premium HVAC Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We supply and install world-class HVAC products from leading manufacturers
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {productCategories.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Header */}
                <div className={`bg-gradient-to-r ${product.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                      <p className="text-white/90">{product.description}</p>
                    </div>
                  </div>
                </div>

                {/* Product Body */}
                <div className="p-8">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-blue-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">Available Brands</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.brands.map((brand, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    Get Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accessories & Components */}
        <div className="mb-20 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Accessories & Components
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete range of HVAC accessories and components for any installation
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {accessories.map((accessory, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm">{accessory}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted Brands */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              Trusted Brand Partners
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We partner with world-renowned HVAC manufacturers to deliver quality products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustedBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-2">{brand.name}</h4>
                <p className="text-sm text-gray-600">{brand.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                All our products come with manufacturer warranties and are installed by certified professionals. 
                We ensure compliance with industry standards and provide comprehensive after-sales support.
              </p>
              <div className="space-y-3">
                {[
                  'Original manufacturer products',
                  'Certified installation',
                  'Comprehensive warranty',
                  'Regular maintenance support',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2">Need Help Choosing?</h4>
                <p className="text-blue-200">Our experts will guide you to the perfect solution</p>
              </div>
              <a
                href="#contact"
                className="block w-full py-4 bg-white text-blue-900 rounded-xl font-semibold text-center hover:bg-blue-50 transition-all hover:-translate-y-1 shadow-lg"
              >
                Consult Our Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;