import { Building2, Home, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Residential Development',
      description: 'Premium residential projects designed with modern architecture and sustainable living in mind.',
      features: ['Luxury Apartments', 'Villas', 'Townhouses', 'Smart Homes']
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Comprehensive property management services ensuring optimal maintenance and tenant satisfaction.',
      features: ['Maintenance', 'Tenant Relations', 'Financial Management', '24/7 Support']
    },
    {
      icon: TrendingUp,
      title: 'Investment Consulting',
      description: 'Expert guidance on real estate investments with proven returns and growth potential.',
      features: ['Market Analysis', 'Portfolio Planning', 'ROI Optimization', 'Legal Support']
    },
    {
      icon: Users,
      title: 'Customer Support',
      description: 'Dedicated support team available round-the-clock for all your queries and concerns.',
      features: ['24/7 Assistance', 'Expert Advisors', 'Quick Resolution', 'Personalized Service']
    },
    {
      icon: Shield,
      title: 'Legal & Compliance',
      description: 'Ensuring all projects meet Government regulations and legal requirements.',
      features: ['Government Approved', 'Documentation', 'Compliance', 'Transparency']
    },
    {
      icon: Zap,
      title: 'Smart Infrastructure',
      description: 'State-of-the-art infrastructure with modern amenities and sustainable features.',
      features: ['IoT Integration', 'Green Energy', 'Security Systems', 'Smart Parking']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Comprehensive real estate solutions tailored to meet your needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-[#d4af37]">
                  <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a2332] mb-3 font-playfair">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-2 h-2 bg-[#d4af37] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
                    Learn More
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#d4af37] to-[#c9a227] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-4 font-playfair">Ready to Get Started?</h2>
          <p className="text-lg text-[#1a2332]/80 mb-8">Contact our team today to discuss your real estate needs</p>
          <Button className="bg-[#1a2332] hover:bg-[#2c3e50] text-white font-semibold px-8 py-3 text-lg">
            Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
}