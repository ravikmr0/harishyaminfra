import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ProjectLocation() {
  const [selectedPlot, setSelectedPlot] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-[#1a2332] mb-4 font-playfair">Location & Map</h2>
        <p className="text-gray-600 mb-6">
          Strategically located with excellent connectivity to major business districts, educational institutions, and healthcare facilities.
        </p>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 font-semibold">Interactive Map View</p>
          <p className="text-gray-500 text-sm">Google Maps Integration</p>
        </div>
      </div>

      {/* Location Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-[#f8f9fa] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#1a2332] mb-4">Nearby Landmarks</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">•</span>
              <div>
                <p className="font-semibold text-[#1a2332]">International Airport</p>
                <p className="text-sm text-gray-600">15 km away</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">•</span>
              <div>
                <p className="font-semibold text-[#1a2332]">Business District</p>
                <p className="text-sm text-gray-600">8 km away</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">•</span>
              <div>
                <p className="font-semibold text-[#1a2332]">Shopping Mall</p>
                <p className="text-sm text-gray-600">3 km away</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-[#f8f9fa] p-6 rounded-lg">
          <h3 className="text-xl font-bold text-[#1a2332] mb-4">Connectivity</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">•</span>
              <div>
                <p className="font-semibold text-[#1a2332]">Metro Station</p>
                <p className="text-sm text-gray-600">2 km away</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">•</span>
              <div>
                <p className="font-semibold text-[#1a2332]">Highway Access</p>
                <p className="text-sm text-gray-600">Direct access</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d4af37] font-bold">•</span>
              <div>
                <p className="font-semibold text-[#1a2332]">Public Transport</p>
                <p className="text-sm text-gray-600">Excellent connectivity</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Plot Legend */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-[#1a2332] mb-4">Plot Status Legend</h3>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-500 rounded"></div>
            <span className="text-gray-700">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-500 rounded"></div>
            <span className="text-gray-700">Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-500 rounded"></div>
            <span className="text-gray-700">Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
}
