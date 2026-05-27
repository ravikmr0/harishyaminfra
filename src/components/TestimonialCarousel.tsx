import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
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
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner',
    content: 'Beautiful plots with amazing amenities. The entire process was smooth and hassle-free. Very satisfied with my purchase.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
  },
  {
    name: 'Amit Patel',
    role: 'Business Owner',
    content: 'Great location and excellent infrastructure. The customer service team was very helpful throughout the process.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80'
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative bg-white">
      <div className="bg-gradient-to-br from-[#f8f9fa] to-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-5 p-5 md:p-6">
          {/* Image */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#b26243] to-[#8d4a33] rounded-full opacity-20 blur-lg"></div>
            <img 
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#b26243] shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-4">
              <Quote className="h-5 w-5 text-[#b26243] flex-shrink-0 mt-1" />
              <div className="flex gap-1">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#b26243] text-[#b26243]" />
                ))}
              </div>
            </div>
            <p className="text-base md:text-lg text-[#2c3e50] mb-4 leading-relaxed font-light">
              "{testimonials[current].content}"
            </p>
            <div className="border-l-4 border-[#b26243] pl-3">
              <p className="text-base font-semibold text-[#1a2332] font-display">{testimonials[current].name}</p>
              <p className="text-xs uppercase tracking-widest text-[#b26243] font-semibold mt-1">{testimonials[current].role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prev}
          className="border-2 border-[#b26243] text-[#b26243] hover:bg-[#b26243] hover:text-white transition-all rounded-full h-12 w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="flex gap-3 items-center">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-300 ${
                idx === current ? 'bg-[#b26243] w-10 h-3' : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={next}
          className="border-2 border-[#b26243] text-[#b26243] hover:bg-[#b26243] hover:text-white transition-all rounded-full h-12 w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}

