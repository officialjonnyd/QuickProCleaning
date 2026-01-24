import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Building2,
  HeartPulse,
  Briefcase,
  Landmark,
  Car,
  ArrowRight,
  CheckCircle2,
  Leaf,
  Clock,
  Award
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/5de5f668-9c2a-49d6-8e07-02e85db7b74d.png',
    '/8d3ce9ba-c558-43e2-8b59-fbda44fcceeb.png',
    '/78e57bf0-d9f5-4985-bd60-3c5a34744dc5.png',
    '/e67c4573-d61f-4846-9275-2c1fc00d95a4.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      icon: Building2,
      title: 'Airbnb & Rental Turnover',
      description: 'Specialized cleaning for Airbnb hosts and rental properties, ensuring units are move-in ready after every guest.'
    },
    {
      icon: ShieldCheck,
      title: 'Property Management Cleaning',
      description: 'Comprehensive cleaning solutions tailored for property managers handling multiple units and tenant turnovers.'
    },
    {
      icon: HeartPulse,
      title: 'Move-In & Move-Out Cleaning',
      description: 'Detailed cleaning services to restore rental properties to pristine condition between tenants.'
    },
    {
      icon: Briefcase,
      title: 'Commercial Window Cleaning',
      description: 'Professional window and glass cleaning for storefronts, offices, and commercial buildings.'
    },
    {
      icon: Landmark,
      title: 'Office & Facility Cleaning',
      description: 'Keep your workplace fresh, organized, and professional with regular cleaning services.'
    },
    {
      icon: Car,
      title: 'Post-Construction Cleaning',
      description: 'Remove construction dust and debris to prepare buildings for occupancy or presentation.'
    }
  ];

  return (
    <div>
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt="Commercial cleaning background"
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Blue Gradient Overlay - fades from left to right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26, 61, 124, 0.95) 0%, rgba(26, 61, 124, 0.85) 30%, rgba(26, 61, 124, 0.6) 60%, rgba(26, 61, 124, 0.3) 100%)'
          }}
        />

        {/* Subtle dot pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass-green text-[#7ABB00] font-bold px-4 py-2 rounded-full text-sm mb-6 shadow-lg">
              <Award className="w-4 h-4" />
              RELIABLE & PROFESSIONAL
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Commercial & Property Management Cleaning Services in <span className="text-[#7ABB00]">Edmonton</span>
            </h1>

            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg">
              We provide professional commercial, Airbnb, and property management cleaning services throughout Edmonton and surrounding areas. From move-out rental cleaning and post-construction cleanup to commercial window and building cleaning, our services are designed to keep properties clean, presentable, and ready for occupancy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="glass-green text-[#7ABB00] font-bold px-8 py-4 rounded-xl hover:bg-[#7ABB00] hover:text-white transition-all shadow-2xl hover:shadow-[#7ABB00]/50 flex items-center justify-center gap-2 border-2 border-[#7ABB00]/30"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="glass-white text-[#1A3D7C] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-2xl hover:shadow-white/30"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Eco-Friendly Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5217882/pexels-photo-5217882.jpeg"
            alt="Professional window cleaning"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <section className="py-16 relative z-10" style={{
          background: 'linear-gradient(to bottom, rgba(122, 187, 0, 0.2) 0%, rgba(255, 255, 255, 0.9) 100%)'
        }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-4">
                About QuickPro
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Professional cleaning services focused on property management, Airbnb turnover, commercial spaces, and move-in/move-out cleaning — serving property managers, business owners, and facility managers across the region.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-110 bg-[#1A3D7C] border-2 border-[#1A3D7C]">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Professional</h3>
                <p className="text-sm text-white/80">Trained protocols</p>
              </div>
              <div className="text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-110 bg-[#7ABB00] border-2 border-[#7ABB00]">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Flexible</h3>
                <p className="text-sm text-white/80">Scheduling available</p>
              </div>
              <div className="text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-110 bg-[#1A3D7C] border-2 border-[#1A3D7C]">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Eco-Friendly</h3>
                <p className="text-sm text-white/80">Safe products</p>
              </div>
              <div className="text-center p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-110 bg-[#7ABB00] border-2 border-[#7ABB00]">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Trusted</h3>
                <p className="text-sm text-white/80">Reliable service</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/85 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-4">
              Core Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive cleaning solutions for every professional environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:border-[#7ABB00] group"
              >
                <div className="glass-dark w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#7ABB00] transition-all shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-xl font-bold hover:bg-[#7ABB00] transition-all shadow-xl"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      </div>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need reliable cleaning for your property or business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Whether you manage Airbnb properties, rental units, or commercial spaces — get a free quote today
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#7ABB00] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
