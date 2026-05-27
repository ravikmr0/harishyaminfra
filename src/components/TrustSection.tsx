import { Award, CheckCircle, Users, TrendingUp } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';

export default function TrustSection() {
  const certifications = [
    { icon: Award, label: 'Government Approved', value: 'All Projects' },
    { icon: CheckCircle, label: 'ISO Certified', value: 'Quality Assured' },
    { icon: Users, label: '5000+', value: 'Happy Customers' },
    { icon: TrendingUp, label: '15+ Years', value: 'Industry Experience' },
  ];

  return (
    <section className="section-shell bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Certifications */}
        <div className="mb-9 md:mb-10">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-5 md:mb-6 font-playfair">
            Why Trust Harishyam Infra
          </h2>
          
          <div className="grid md:grid-cols-4 card-grid">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-4 md:p-5 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
                >
                  <Icon className="h-12 w-12 text-[#b26243] mx-auto mb-3" />
                  <h3 className="font-bold text-[#1a2332] text-sm mb-1">{cert.label}</h3>
                  <p className="text-gray-600 text-xs">{cert.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-5 md:mb-6 font-playfair">
            Client Testimonials
          </h2>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
}

