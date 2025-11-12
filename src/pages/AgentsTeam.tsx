import { Phone, Mail, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AgentsTeam() {
  const agents = [
    {
      name: 'Rajesh Kumar',
      role: 'Senior Sales Executive',
      specialization: 'Residential Projects',
      phone: '+91 9876543210',
      email: 'rajesh@harishyaminfra.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
      experience: '8+ years',
      properties: 150
    },
    {
      name: 'Priya Sharma',
      role: 'Sales Manager',
      specialization: 'Commercial Properties',
      phone: '+91 9876543211',
      email: 'priya@harishyaminfra.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      experience: '6+ years',
      properties: 120
    },
    {
      name: 'Amit Patel',
      role: 'Investment Consultant',
      specialization: 'Investment Properties',
      phone: '+91 9876543212',
      email: 'amit@harishyaminfra.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
      experience: '7+ years',
      properties: 180
    },
    {
      name: 'Neha Singh',
      role: 'Sales Executive',
      specialization: 'Luxury Apartments',
      phone: '+91 9876543213',
      email: 'neha@harishyaminfra.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
      experience: '4+ years',
      properties: 95
    },
    {
      name: 'Vikram Kumar',
      role: 'Senior Consultant',
      specialization: 'Project Planning',
      phone: '+91 9876543214',
      email: 'vikram@harishyaminfra.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
      experience: '9+ years',
      properties: 200
    },
    {
      name: 'Anjali Verma',
      role: 'Customer Relations',
      specialization: 'Client Support',
      phone: '+91 9876543215',
      email: 'anjali@harishyaminfra.com',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anjali',
      experience: '5+ years',
      properties: 110
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our Sales Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Meet our experienced agents ready to assist you</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 border-[#d4af37]">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-[#d4af37]/20 to-[#c9a227]/20 flex items-center justify-center">
                  <img src={agent.image} alt={agent.name} className="w-32 h-32 rounded-full" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a2332] mb-1 font-playfair">{agent.name}</h3>
                  <p className="text-[#d4af37] font-semibold text-sm mb-4">{agent.role}</p>
                  
                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <Award className="h-4 w-4 text-[#d4af37]" />
                      <span>{agent.specialization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="font-semibold">Experience:</span>
                      <span>{agent.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="font-semibold">Properties Sold:</span>
                      <span>{agent.properties}</span>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-6">
                    <a href={`tel:${agent.phone}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#d4af37] transition-colors">
                      <Phone className="h-4 w-4" />
                      {agent.phone}
                    </a>
                    <a href={`mailto:${agent.email}`} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#d4af37] transition-colors">
                      <Mail className="h-4 w-4" />
                      {agent.email}
                    </a>
                  </div>

                  <Button className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
                    Connect Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#1a2332] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">50+</p>
              <p className="text-gray-300">Expert Agents</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">5000+</p>
              <p className="text-gray-300">Properties Sold</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">98%</p>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">24/7</p>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#d4af37] to-[#c9a227] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-4 font-playfair">Ready to Find Your Dream Property?</h2>
          <p className="text-lg text-[#1a2332]/80 mb-8">Connect with our team today for personalized assistance</p>
          <Button className="bg-[#1a2332] hover:bg-[#2c3e50] text-white font-semibold px-8 py-3 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}