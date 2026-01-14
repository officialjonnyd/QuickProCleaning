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
    'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/7414910/pexels-photo-7414910.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920',
    'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920'
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
      title: 'Commercial Cleaning',
      description: 'Professional cleaning for offices, facilities, Airbnb\'s, and commercial spaces.'
    },
    {
      icon: ShieldCheck,
      title: 'Sanitation & Disinfection',
      description: 'Certified hospital-grade disinfection for high-risk environments.'
    },
    {
      icon: HeartPulse,
      title: 'Medical Facility Cleaning',
      description: 'Specialized protocols for clinics, dental offices, and medical practices.'
    },
    {
      icon: Briefcase,
      title: 'Office & Facility Cleaning',
      description: 'Keep your workplace fresh, productive, and healthy.'
    },
    {
      icon: Landmark,
      title: 'Banking Facilities',
      description: 'Professional cleaning for high-visibility, high-security environments.'
    },
    {
      icon: Car,
      title: 'Dealership & Showroom',
      description: 'Showroom floor care to help your inventory shine.'
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#1A3D7C] via-[#2a5294] to-[#1A3D7C] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/reliable_commercial_cleaning_you_can_trust.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#7ABB00] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              CERTIFIED & RELIABLE
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Commercial Cleaning & <span className="text-[#7ABB00]">Sanitation Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Certified sanitation and disinfection services backed by professional commercial cleaning designed for medical clinics, dental clinics, offices, banks, move-in-and out cleaning, vehicle dealerships & more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-[#7ABB00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6aa900] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="bg-white text-[#1A3D7C] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#7ABB00]" />
                <span>Certified</span>
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

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-4">
                See The Difference
              </h2>
              <p className="text-lg text-gray-600">
                From cluttered to pristine - professional cleaning that transforms your space
              </p>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {slides.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt="Commercial cleaning showcase"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <div className="absolute bottom-8 right-8 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-4">
              About QuickPro
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are certified sanitation and disinfection specialists, focused on protecting people and spaces in professional environments — serving clinics, offices, banking facilities and more.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-[#7ABB00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-[#7ABB00]" />
              </div>
              <h3 className="font-semibold text-[#1A3D7C] mb-2">Certified</h3>
              <p className="text-sm text-gray-600">Professional protocols</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#7ABB00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#7ABB00]" />
              </div>
              <h3 className="font-semibold text-[#1A3D7C] mb-2">Flexible</h3>
              <p className="text-sm text-gray-600">Scheduling available</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#7ABB00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[#7ABB00]" />
              </div>
              <h3 className="font-semibold text-[#1A3D7C] mb-2">Eco-Friendly</h3>
              <p className="text-sm text-gray-600">Safe products</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-[#7ABB00]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#7ABB00]" />
              </div>
              <h3 className="font-semibold text-[#1A3D7C] mb-2">Trusted</h3>
              <p className="text-sm text-gray-600">Reliable service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
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
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-[#7ABB00] group"
              >
                <div className="bg-[#1A3D7C] w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7ABB00] transition-colors">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#1A3D7C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7ABB00] transition-all"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need reliable cleaning or disinfection for your business?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free quote today and experience the QuickPro difference
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
