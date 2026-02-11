import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of cooling service images - Replace these URLs with your actual image URLs
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1631545806609-7cde79c2da0b?w=800&h=600&fit=crop',
      title: 'Commercial AC Installation',
      description: 'Professional installation services'
    },
    {
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      title: 'Industrial Cooling Systems',
      description: 'Large-scale HVAC solutions'
    },
    {
      url: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=800&h=600&fit=crop',
      title: 'Maintenance & Repair',
      description: 'Expert maintenance services'
    },
    {
      url: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop',
      title: 'Residential Solutions',
      description: 'Home comfort systems'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden group">
      <div className="aspect-[4/3] relative">
        {/* Images */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
              
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-blue-100">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;