import { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  '/images/plots/shri-hari-vatika-6.jpg',
  '/images/plots/shri-hari-vatika-4.jpg',
  '/images/plots/shri-hari-vatika-3.jpg',
  '/images/plots/shri-hari-vatika-2.jpg',
  '/images/plots/shri-hari-vatika-5.jpg',
  '/images/plots/shri-hari-vatika-1.jpg',
  '/images/plots/shri-hari-vatika-7.jpg',
  '/images/plots/shri-hari-vatika-8.jpg',
];

export default function ProjectGallery() {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  const next = () => setCurrent((current + 1) % galleryImages.length);
  const prev = () => setCurrent((current - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1a2332] font-playfair">Project Gallery</h2>

      {/* Main Image */}
      <div className="relative bg-gray-200 rounded-lg overflow-hidden">
        <div className="relative h-96 md:h-[500px]">
          <img
            src={galleryImages[current]}
            alt={`Gallery ${current + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setFullscreen(true)}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <Maximize2 className="h-5 w-5 text-[#1a2332]" />
          </button>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-[#1a2332]" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-[#1a2332]" />
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
          {current + 1} / {galleryImages.length}
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a2332] mb-4">All Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all ${
                idx === current ? 'border-[#d4af37]' : 'border-gray-200'
              }`}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Virtual Tour */}
      <div className="bg-[#f8f9fa] p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">360° Virtual Tour</h3>
        <p className="text-gray-600 mb-6">Experience the project in immersive 360° panoramic view</p>
        <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
          Launch Virtual Tour
        </Button>
      </div>
    </div>
  );
}
