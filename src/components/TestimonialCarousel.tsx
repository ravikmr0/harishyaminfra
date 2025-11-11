import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Rajesh Kumar',
    role: 'Property Investor',
    content: 'Excellent investment opportunity. The transparency and professionalism of Harishyam Infra is commendable. Highly recommended!',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh'
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    content: 'Beautiful plots with amazing amenities. The entire process was smooth and hassle-free. Very satisfied with my purchase.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya'
  },
  {
    name: 'Amit Patel',
    role: 'Business Owner',
    content: 'Great location and excellent infrastructure. The customer service team was very helpful throughout the process.',
    rating: 5,
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit'
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="flex-shrink-0">
            <img 
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <p className="text-lg text-gray-700 mb-4 italic">
              "{testimonials[current].content}"
            </p>
            <div>
              <p className="font-bold text-[#1a2332]">{testimonials[current].name}</p>
              <p className="text-gray-600 text-sm">{testimonials[current].role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === current ? 'bg-[#d4af37] w-8' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37]/10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
