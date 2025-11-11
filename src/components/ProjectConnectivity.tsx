import { MapPin, Clock, Navigation } from 'lucide-react';

interface ConnectivityItem {
  icon: React.ReactNode;
  title: string;
  distance: string;
  time: string;
  description: string;
}

const connectivityData: ConnectivityItem[] = [
  {
    icon: <Navigation className="h-8 w-8 text-[#d4af37]" />,
    title: 'Noida International Airport',
    distance: '25 km',
    time: '35-40 mins',
    description: 'Direct connectivity via expressway'
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#d4af37]" />,
    title: 'Delhi City Center',
    distance: '35 km',
    time: '45-50 mins',
    description: 'Via NH-24 and expressway'
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#d4af37]" />,
    title: 'Metro Station',
    distance: '8 km',
    time: '15 mins',
    description: 'Nearest metro connectivity'
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#d4af37]" />,
    title: 'Shopping Mall',
    distance: '5 km',
    time: '10 mins',
    description: 'Premium retail destinations'
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#d4af37]" />,
    title: 'Hospital',
    distance: '3 km',
    time: '8 mins',
    description: 'Multi-specialty healthcare'
  },
  {
    icon: <MapPin className="h-8 w-8 text-[#d4af37]" />,
    title: 'School & College',
    distance: '2 km',
    time: '5 mins',
    description: 'Top-rated educational institutions'
  },
];

export default function ProjectConnectivity() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4 font-playfair">
            Project Connectivity
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategically located with excellent connectivity to major landmarks and amenities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectivityData.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#d4af37] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#1a2332]/10 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1a2332] mb-2">
                    {item.title}
                  </h3>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-[#d4af37]" />
                      <span className="font-semibold text-[#1a2332]">{item.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-[#d4af37]" />
                      <span className="text-gray-600">{item.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-gradient-to-r from-[#1a2332] to-[#2d3e50] rounded-lg overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 font-playfair">
                Prime Location Advantage
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Direct access to Noida International Airport</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Close proximity to business districts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Well-connected via metro and highways</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2 flex-shrink-0"></div>
                  <span>Surrounded by premium amenities</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-300 h-80 md:h-auto flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}