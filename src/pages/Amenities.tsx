import { Home, Trees, ShieldCheck, Route, GraduationCap, Zap, Waves, Droplets, Shield } from 'lucide-react';

import { slugify } from "@/lib/utils";

export default function Amenities() {
  const amenities = [
    {
      category: 'Township Amenities',
      items: [
        { icon: Home, name: 'Gated Township', desc: 'Secure and planned community living' },
        { icon: GraduationCap, name: 'School within Township', desc: 'Quality education within walking distance' },
        { icon: Trees, name: 'Green Park & Open Spaces', desc: 'Beautiful green environments for relaxation' },
        { icon: ShieldCheck, name: 'Boundary Wall', desc: 'Boundary wall on all sides for privacy' },
        { icon: Zap, name: '24×7 Electricity', desc: 'Uninterrupted power supply availability' },
        { icon: Waves, name: 'Drainage System', desc: 'Well-planned water management system' },
        { icon: Route, name: 'Wide Roads', desc: '40ft Main, 30ft Internal, 25ft Connecting' },
        { icon: Shield, name: '24×7 Security', desc: 'Security guard & monitoring round-the-clock' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section id="amenities-hero" className="relative px-4 py-14 md:py-16 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1400&q=85)',
          }}
        ></div>
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332]/85 via-[#1a2332]/75 to-[#2c3e50]/85"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b26243]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b26243]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 font-playfair animate-fade-in-up">World-Class Amenities</h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>Experience luxury living with premium amenities designed for your comfort</p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section id="amenity-collections" className="section-shell bg-gradient-to-b from-white via-[#f8f9fa] to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #b26243 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {amenities.map((category, idx) => (
            <div key={idx} className="mb-7 md:mb-9">
              <h2
                className="text-3xl font-bold text-[#1a2332] mb-5 font-playfair text-center"
                id={slugify(category.category)}
              >
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 card-grid">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={itemIdx} 
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 border-[#b26243] group hover:scale-105 hover:-translate-y-2"
                      id={slugify(item.name)}
                    >
                      {/* Icon Section with Gradient Background */}
                      <div className="h-24 bg-gradient-to-br from-[#b26243]/15 to-[#8d4a33]/10 flex items-center justify-center relative overflow-hidden">
                        {/* Animated Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                        <Icon className="h-14 w-14 text-[#b26243] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold text-[#1a2332] mb-1 group-hover:text-[#b26243] transition-colors duration-300">{item.name}</h3>
                        <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Highlight */}
      <section id="amenities-stats" className="section-shell-tight bg-[#1a2332] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b26243]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b26243]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 card-grid text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#b26243] mb-2 group-hover:text-white transition-colors duration-300">8+</p>
              <p className="text-gray-300">Premium Amenities</p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#b26243] mb-2 group-hover:text-white transition-colors duration-300">24/7</p>
              <p className="text-gray-300">Security & Support</p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#b26243] mb-2 group-hover:text-white transition-colors duration-300">100%</p>
              <p className="text-gray-300">Maintenance Included</p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#b26243] mb-2 group-hover:text-white transition-colors duration-300">5-Star</p>
              <p className="text-gray-300">Living Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

