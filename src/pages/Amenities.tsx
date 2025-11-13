import { Wifi, Zap, Leaf, Dumbbell, Utensils, Shield, Waves, Trees } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      category: 'Recreation',
      items: [
        { icon: Dumbbell, name: 'Fitness Center', desc: 'State-of-the-art gym with modern equipment' },
        { icon: Waves, name: 'Swimming Pool', desc: 'Olympic-size pool with aqua aerobics' },
        { icon: Trees, name: 'Jogging Track', desc: '2km landscaped jogging track' },
        { icon: Utensils, name: 'Community Hall', desc: 'Multi-purpose event space' }
      ]
    },
    {
      category: 'Lifestyle',
      items: [
        { icon: Leaf, name: 'Green Spaces', desc: 'Lush gardens and landscaped parks' },
        { icon: Wifi, name: 'High-Speed WiFi', desc: 'Fiber optic connectivity throughout' },
        { icon: Zap, name: 'Smart Homes', desc: 'IoT-enabled smart home systems' },
        { icon: Shield, name: '24/7 Security', desc: 'CCTV surveillance and trained staff' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 px-4 text-white overflow-hidden">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair animate-fade-in-up">World-Class Amenities</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>Experience luxury living with premium amenities designed for your comfort</p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-[#f8f9fa] to-white relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-3" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {amenities.map((category, idx) => (
            <div key={idx} className="mb-20">
              <h2 className="text-4xl font-bold text-[#1a2332] mb-12 font-playfair text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={itemIdx} 
                      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-l-4 border-[#d4af37] group hover:scale-105 hover:-translate-y-2"
                    >
                      {/* Icon Section with Gradient Background */}
                      <div className="h-32 bg-gradient-to-br from-[#d4af37]/15 to-[#c9a227]/10 flex items-center justify-center relative overflow-hidden">
                        {/* Animated Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                        <Icon className="h-16 w-16 text-[#d4af37] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a2332] mb-2 group-hover:text-[#d4af37] transition-colors duration-300">{item.name}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
      <section className="py-16 px-4 bg-[#1a2332] text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#d4af37] mb-2 group-hover:text-white transition-colors duration-300">50+</p>
              <p className="text-gray-300">Premium Amenities</p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#d4af37] mb-2 group-hover:text-white transition-colors duration-300">24/7</p>
              <p className="text-gray-300">Security & Support</p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#d4af37] mb-2 group-hover:text-white transition-colors duration-300">100%</p>
              <p className="text-gray-300">Maintenance Included</p>
            </div>
            <div className="group hover:scale-110 transition-transform duration-300">
              <p className="text-4xl font-bold text-[#d4af37] mb-2 group-hover:text-white transition-colors duration-300">5-Star</p>
              <p className="text-gray-300">Living Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}