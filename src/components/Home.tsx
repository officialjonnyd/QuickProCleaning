import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  Building2,
  HeartPulse,
  Briefcase,
  Landmark,
  Car,
  ArrowRight,
  CheckCircle2,
  Star,
  Leaf,
  Clock,
  Award
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning for offices, facilities, and commercial spaces.'
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

  const testimonials = [
    {
      text: "QuickPro's certified sanitation keeps our clinic safe and spotless.",
      author: "Dr. L.",
      role: "Medical Clinic"
    },
    {
      text: "Professional, reliable & detail-oriented.",
      author: "J. McAllister",
      role: "Bank Manager"
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
              Certified sanitation and disinfection services backed by professional commercial cleaning designed for medical clinics, dental clinics, offices, banks, vehicle dealerships & more.
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

      <section className="py-20 bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-200">
              Trusted by professionals across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#7ABB00] text-[#7ABB00]" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#7ABB00] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
