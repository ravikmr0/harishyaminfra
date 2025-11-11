import { useState } from 'react';
import { Heart, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  plotSizes: string;
  priceRange: string;
  id: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  plotSizes,
  priceRange,
  id
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all"
        >
          <Heart 
            className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        {/* Quick Stats */}
        <div className={`grid grid-cols-2 gap-4 mb-6 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-75'}`}>
          <div className="bg-[#f8f9fa] p-3 rounded">
            <p className="text-xs text-gray-500 mb-1">Plot Sizes</p>
            <p className="font-semibold text-[#1a2332]">{plotSizes}</p>
          </div>
          <div className="bg-[#f8f9fa] p-3 rounded">
            <p className="text-xs text-gray-500 mb-1">Price Range</p>
            <p className="font-semibold text-[#d4af37]">{priceRange}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button 
            className="flex-1 bg-[#1a2332] hover:bg-[#0f1419] text-white"
            onClick={() => navigate(`/project/${id}`)}
          >
            View Details
          </Button>
          <Button 
            variant="outline"
            className="flex-1 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10"
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
}
