import { Link } from 'react-router-dom';
import { DollarSign, Building2, Calendar, Ruler, ArrowRight, CheckCircle2, Info } from 'lucide-react';

export default function Pricing() {
  const pricingFactors = [
    {
      icon: Ruler,
      title: 'Facility Square Footage',
      description: 'Larger spaces require more time and resources'
    },
    {
      icon: Calendar,
      title: 'Service Frequency',
      description: 'Regular schedules offer better value'
    },
    {
      icon: Building2,
      title: 'Type of Service',
      description: 'Specialized services have different requirements'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#1A3D7C] to-[#2a5294] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <DollarSign className="w-16 h-16 mb-6 opacity-90 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Custom quotes tailored to your facility's unique needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-white border-l-4 border-[#7ABB00] p-6 rounded-r-2xl mb-12 shadow-xl">
              <div className="flex gap-3">
                <Info className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#1A3D7C] text-lg mb-2">
                    Custom Pricing Explained
                  </h3>
                  <p className="text-gray-800">
                    Every facility is unique, and so are its cleaning needs. Our pricing is based on several factors to ensure you get the most accurate quote for your specific requirements.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-[#1A3D7C] mb-8 text-center">
              Pricing Factors
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="glass-white p-6 rounded-2xl text-center shadow-xl hover:shadow-2xl transition-all">
                  <div className="glass-green w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <factor.icon className="w-8 h-8 text-[#7ABB00]" />
                  </div>
                  <h3 className="font-bold text-[#1A3D7C] mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {factor.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-dark text-white p-12 md:p-16 rounded-2xl shadow-2xl text-center border-2 border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                Get Your Custom Quote Today
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
                Every facility is unique, and pricing depends on your specific needs, size, and service requirements. We provide detailed, transparent quotes tailored to your business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 glass-green text-[#7ABB00] font-bold px-10 py-5 rounded-xl hover:bg-[#7ABB00] hover:text-white transition-all shadow-2xl hover:shadow-[#7ABB00]/50 border-2 border-[#7ABB00]/30"
              >
                Request Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="glass-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <CheckCircle2 className="w-10 h-10 text-[#7ABB00] mb-4" />
                <h3 className="font-bold text-[#1A3D7C] text-xl mb-3">
                  Competitive Pricing & No Hidden Fees
                </h3>
                <p className="text-gray-800">
                  Our quotes include all costs upfront. What we quote is what you pay - no surprises.
                </p>
              </div>
              <div className="glass-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all">
                <CheckCircle2 className="w-10 h-10 text-[#7ABB00] mb-4" />
                <h3 className="font-bold text-[#1A3D7C] text-xl mb-3">
                  Flexible Options
                </h3>
                <p className="text-gray-800">
                  We offer one-time services or ongoing contracts with volume discounts for regular cleaning schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="glass-dark text-white p-10 md:p-12 rounded-2xl shadow-2xl text-center border-2 border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                What's Included in Every Service
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 text-left mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span className="text-white/90">Professional, trained staff</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span className="text-white/90">All cleaning supplies included</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span className="text-white/90">Eco-friendly products</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span className="text-white/90">Flexible scheduling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span className="text-white/90">Quality assurance checks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7ABB00] flex-shrink-0 mt-1" />
                  <span className="text-white/90">Insured and bonded service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Custom Quote?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a detailed, no-obligation quote tailored to your facility's specific needs
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 glass-white text-[#7ABB00] font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-2xl border-2 border-white/30"
          >
            Request Your Free Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
