import { Zap, Leaf, Dumbbell, ShoppingCart, Utensils, Waves } from 'lucide-react';

interface Amenity {
  icon: any;
  name: string;
  description: string;
}

const amenities: Amenity[] = [
  {
    icon: Zap,
    name: 'Power Backup',
    description: '24/7 uninterrupted power supply with backup generators'
  },
  {
    icon: Leaf,
    name: 'Green Spaces',
    description: 'Landscaped gardens and parks for recreation'
  },
  {
    icon: Dumbbell,
    name: 'Fitness Center',
    description: 'State-of-the-art gym and yoga facilities'
  },
  {
    icon: ShoppingCart,
    name: 'Shopping Complex',
    description: 'Retail outlets and commercial spaces'
  },
  {
    icon: Utensils,
    name: 'Community Center',
    description: 'Multi-purpose hall for events and gatherings'
  },
  {
    icon: Waves,
    name: 'Swimming Pool',
    description: 'Olympic-size swimming pool with facilities'
  },
];

export default function ProjectAmenities() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1a2332] mb-8 font-playfair">World-Class Amenities</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenities.map((amenity, idx) => {
          const Icon = amenity.icon;
          return (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Icon className="h-12 w-12 text-[#d4af37] mb-4" />
              <h3 className="text-xl font-bold text-[#1a2332] mb-2">{amenity.name}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
