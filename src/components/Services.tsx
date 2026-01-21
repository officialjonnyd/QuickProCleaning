import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      title: 'Commercial Cleaning',
      description: 'Professional commercial cleaning services designed to maintain clean, organized, and professional business environments. Ideal for offices, retail spaces, and commercial facilities requiring consistent, high-quality cleaning.',
      image: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg',
      alt: 'Professional commercial office cleaning service'
    },
    {
      title: 'Post-Construction Cleaning',
      description: 'Detailed cleaning services for newly constructed or renovated spaces. We remove dust, debris, and construction residue to prepare buildings for occupancy, presentation, or final inspections.',
      image: 'https://images.pexels.com/photos/8961188/pexels-photo-8961188.jpeg',
      alt: 'Post-construction cleaning and debris removal'
    },
    {
      title: 'Move-In & Move-Out Cleaning',
      description: 'Specialized cleaning for rental properties, property managers, and Airbnb hosts after tenants or guests move out. This service focuses on restoring units to move-in-ready condition and is not standard residential cleaning.',
      image: 'https://images.pexels.com/photos/4239039/pexels-photo-4239039.jpeg',
      alt: 'Rental property and Airbnb turnover cleaning'
    },
    {
      title: 'Window Cleaning',
      description: 'Commercial window and glass cleaning for ground-level businesses with storefront windows, offices, and large glass fixtures. Enhances visibility, presentation, and curb appeal.',
      image: 'https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg',
      alt: 'Commercial window and glass cleaning service'
    },
    {
      title: 'Janitorial Services',
      description: 'Ongoing janitorial services tailored to your facility\'s needs. Includes routine cleaning, waste removal, and maintenance tasks to ensure a clean and functional environment.',
      image: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg',
      alt: 'Professional janitorial and building maintenance'
    },
    {
      title: 'Office Cleaning',
      description: 'Professional office cleaning services focused on workspaces, common areas, washrooms, and kitchens to support a clean, productive, and professional office environment.',
      image: 'https://images.pexels.com/photos/7235859/pexels-photo-7235859.jpeg',
      alt: 'Office workspace and common area cleaning'
    },
    {
      title: 'ECO-Friendly Cleaning (Upon Request)',
      description: 'Environmentally conscious cleaning options available upon request, using eco-friendly products and methods suitable for businesses prioritizing sustainability.',
      image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg',
      alt: 'Eco-friendly green cleaning products and services'
    },
    {
      title: 'Building Cleaning',
      description: 'Comprehensive cleaning services for entire commercial buildings, including shared spaces, hallways, restrooms, and common areas.',
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      alt: 'Commercial building lobby and common area cleaning'
    },
    {
      title: 'Medical Facility Cleaning',
      description: 'Cleaning services tailored for medical clinics and healthcare environments with a focus on cleanliness, detail, and maintaining professional care spaces.',
      image: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg',
      alt: 'Medical clinic and healthcare facility cleaning'
    },
    {
      title: 'Dealership Cleaning',
      description: 'Professional cleaning for automotive dealerships, including showrooms, offices, and customer areas to maintain a polished and professional appearance.',
      image: 'https://images.pexels.com/photos/3354647/pexels-photo-3354647.jpeg',
      alt: 'Auto dealership showroom and facility cleaning'
    },
    {
      title: 'Financial Institution Cleaning',
      description: 'Discreet and reliable cleaning services for banks and financial offices, ensuring clean, professional environments for clients and staff.',
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
      alt: 'Bank and financial office cleaning services'
    },
    {
      title: 'Gym & Fitness Cleaning',
      description: 'Cleaning services designed for gyms and fitness centers, focusing on equipment areas, locker rooms, and high-traffic spaces.',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      alt: 'Gym and fitness center equipment cleaning'
    },
    {
      title: 'Daycare & School Cleaning',
      description: 'Professional cleaning services for schools and daycare facilities, maintaining clean, organized spaces for students, staff, and visitors.',
      image: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg',
      alt: 'School and daycare facility cleaning'
    },
    {
      title: 'Sanitizing & Disinfecting Services',
      description: 'Targeted sanitizing and disinfecting services for commercial spaces, focusing on high-touch surfaces and shared areas.',
      image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg',
      alt: 'Commercial disinfecting and sanitizing service'
    }
  ];

  return (
    <div>
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg"
            alt="Professional cleaning services"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Blue Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(26, 61, 124, 0.95) 0%, rgba(26, 61, 124, 0.85) 50%, rgba(26, 61, 124, 0.75) 100%)'
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Comprehensive cleaning solutions tailored for every professional environment
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="glass-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className={`grid md:grid-cols-2 gap-6 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    <div className={`p-8 flex flex-col justify-center ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                      <h3 className="text-2xl font-bold text-[#1A3D7C] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className={`relative overflow-hidden min-h-[250px] ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <img
                        src={service.image}
                        alt={service.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#7ABB00] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Request a Free Cleaning Quote
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Contact us today and discover how QuickPro can transform your facility
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="glass-white text-[#7ABB00] font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-2xl inline-block border-2 border-white/30"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/pricing"
              className="glass-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-[#2a5294] transition-all shadow-2xl inline-block"
            >
              View Pricing Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
