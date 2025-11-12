import { Award, CheckCircle, Users, TrendingUp } from 'lucide-react';
import TestimonialCarousel from './TestimonialCarousel';
import ProjectTimeline from './ProjectTimeline';

export default function TrustSection() {
  const certifications = [
    { icon: Award, label: 'Government Approved', value: 'All Projects' },
    { icon: CheckCircle, label: 'ISO Certified', value: 'Quality Assured' },
    { icon: Users, label: '5000+', value: 'Happy Customers' },
    { icon: TrendingUp, label: '15+ Years', value: 'Industry Experience' },
  ];

  return (
    <section className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto">
        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">
            Why Trust Harishyam Infra
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {certifications.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-center"
                >
                  <Icon className="h-12 w-12 text-[#d4af37] mx-auto mb-4" />
                  <h3 className="font-bold text-[#1a2332] mb-2">{cert.label}</h3>
                  <p className="text-gray-600 text-sm">{cert.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">
            Client Testimonials
          </h2>
          <TestimonialCarousel />
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">
            Project Progress
          </h2>
          <ProjectTimeline />
        </div>
      </div>
    </section>
  );
}