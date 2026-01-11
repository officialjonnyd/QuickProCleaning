import { ShieldCheck, Leaf, Clock, Award, Target, Users, Heart } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About QuickPro Cleaning Solutions
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Certified professionals dedicated to protecting your people and spaces
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At QuickPro Cleaning Solutions Ltd, we combine commercial cleaning expertise with certified sanitation and disinfection services to protect your spaces and the people in them. We understand that cleanliness is more than appearance—it's about health, safety, and peace of mind.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#7ABB00] to-[#6aa900] text-white p-8 md:p-12 rounded-2xl shadow-xl mb-16">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Target className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Reliable</h3>
                  <p className="text-white/90">Consistent, dependable service you can count on</p>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Trusted</h3>
                  <p className="text-white/90">Serving businesses across multiple industries</p>
                </div>
                <div>
                  <Award className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Certified</h3>
                  <p className="text-white/90">Professional standards and protocols</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-12 text-center">
              Why We Are Different
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#7ABB00]">
                <div className="bg-[#1A3D7C] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3">
                  Certified Disinfection Protocols
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We follow hospital-grade disinfection standards to ensure the highest level of cleanliness and safety for your facility. Our team is trained in the latest sanitization techniques.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#7ABB00]">
                <div className="bg-[#1A3D7C] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3">
                  Medical-Grade Sanitation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Specialized procedures designed for healthcare and high-risk environments. We understand the critical importance of infection control and contamination prevention.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#7ABB00]">
                <div className="bg-[#1A3D7C] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3">
                  Flexible Scheduling
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We work around your business hours to minimize disruption. Whether you need daily, weekly, or monthly service, we adapt to your schedule and operational needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#7ABB00]">
                <div className="bg-[#1A3D7C] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3D7C] mb-3">
                  Eco-Conscious Products
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We use environmentally responsible cleaning solutions that are tough on germs but gentle on the planet. Effective cleaning doesn't have to compromise sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3D7C] mb-8 text-center">
              Professional Certification
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-2xl mx-auto">
              Our owner is certified by the International Association of Professions Career College as a Cleaning Business Owner, demonstrating our commitment to professional excellence and industry best practices.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#7ABB00] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A3D7C] mb-2">
                    Certified Cleaning Business Owner
                  </h3>
                  <p className="text-gray-600 mb-4">
                    International Association of Professions Career College • December 2025
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="/certification.pdf"
                  className="w-full h-[600px] border-0"
                  title="Professional Certification"
                />
              </div>

              <div className="mt-6 text-center">
                <a
                  href="/certification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1A3D7C] hover:text-[#7ABB00] font-semibold transition-colors"
                >
                  <Award className="w-5 h-5" />
                  View Full Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1A3D7C] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Brand Promise
            </h2>
            <div className="flex flex-wrap justify-center gap-8 text-xl font-semibold">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#7ABB00] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span>Reliable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#7ABB00] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <span>Trusted</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#7ABB00] rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span>Certified</span>
              </div>
            </div>
            <p className="mt-8 text-lg text-gray-200 leading-relaxed">
              When you choose QuickPro, you're choosing a partner committed to excellence in every detail. We don't just clean—we create safer, healthier environments for your business to thrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
