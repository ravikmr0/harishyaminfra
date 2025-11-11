import { useState } from 'react';

const floorPlans = [
  {
    name: '1000 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    bedrooms: 2,
    bathrooms: 2,
    price: '₹50L - ₹75L'
  },
  {
    name: '1500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    bedrooms: 3,
    bathrooms: 2,
    price: '₹75L - ₹1Cr'
  },
  {
    name: '2000 sq.ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    bedrooms: 3,
    bathrooms: 3,
    price: '₹1Cr - ₹1.25Cr'
  },
  {
    name: '2500 sq.ft',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
    bedrooms: 4,
    bathrooms: 3,
    price: '₹1.25Cr - ₹1.5Cr'
  },
];

export default function ProjectFloorPlans() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#1a2332] font-playfair">Floor Plans</h2>

      {/* Main Floor Plan */}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={floorPlans[selectedPlan].image}
          alt={floorPlans[selectedPlan].name}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Plan Details */}
      <div className="bg-[#f8f9fa] p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-[#1a2332] mb-4 font-playfair">
          {floorPlans[selectedPlan].name}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Bedrooms</p>
            <p className="text-2xl font-bold text-[#1a2332]">{floorPlans[selectedPlan].bedrooms}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Bathrooms</p>
            <p className="text-2xl font-bold text-[#1a2332]">{floorPlans[selectedPlan].bathrooms}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Price Range</p>
            <p className="text-2xl font-bold text-[#d4af37]">{floorPlans[selectedPlan].price}</p>
          </div>
        </div>
      </div>

      {/* Plan Selector */}
      <div>
        <h3 className="text-lg font-semibold text-[#1a2332] mb-4">Available Plans</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {floorPlans.map((plan, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPlan(idx)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                idx === selectedPlan
                  ? 'border-[#d4af37] bg-[#d4af37]/10'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <p className="font-semibold text-[#1a2332]">{plan.name}</p>
              <p className="text-sm text-gray-600 mt-1">{plan.bedrooms} BHK</p>
              <p className="text-sm font-semibold text-[#d4af37] mt-2">{plan.price}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
