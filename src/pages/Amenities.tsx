import { Wifi, Zap, Leaf, Dumbbell, Utensils, Shield, Waves, Trees } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    {
      category: 'Recreation',
      items: [
        { icon: Dumbbell, name: 'Fitness Center', desc: 'State-of-the-art gym with modern equipment', bg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80' },
        { icon: Waves, name: 'Swimming Pool', desc: 'Olympic-size pool with aqua aerobics', bg: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=500&q=80' },
        { icon: Trees, name: 'Jogging Track', desc: '2km landscaped jogging track', bg: 'https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=500&q=80' },
        { icon: Utensils, name: 'Community Hall', desc: 'Multi-purpose event space', bg: 'https://images.unsplash.com/photo-1519167758993-c8071db1fe72?w=500&q=80' }
      ]
    },
    {
      category: 'Lifestyle',
      items: [
        { icon: Leaf, name: 'Green Spaces', desc: 'Lush gardens and landscaped parks', bg: 'https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=500&q=80' },
        { icon: Wifi, name: 'High-Speed WiFi', desc: 'Fiber optic connectivity throughout', bg: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&q=80' },
        { icon: Zap, name: 'Smart Homes', desc: 'IoT-enabled smart home systems', bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
        { icon: Shield, name: '24/7 Security', desc: 'CCTV surveillance and trained staff', bg: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">World-Class Amenities</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Experience luxury living with premium amenities designed for your comfort</p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-5 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&q=80)'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {amenities.map((category, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-4xl font-bold text-[#1a2332] mb-12 font-playfair text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <div key={itemIdx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-[#d4af37] group">
                      {/* Background Image */}
                      <div className="relative h-40 bg-cover bg-center overflow-hidden" style={{backgroundImage: `url(${item.bg})`}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 bg-black/30"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="h-7 w-7 text-[#d4af37]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2332] mb-2">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
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
      <section className="py-16 px-4 bg-[#1a2332] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">50+</p>
              <p className="text-gray-300">Premium Amenities</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">24/7</p>
              <p className="text-gray-300">Security & Support</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">100%</p>
              <p className="text-gray-300">Maintenance Included</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">5-Star</p>
              <p className="text-gray-300">Living Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}