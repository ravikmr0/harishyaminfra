import { Star, Quote } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Verma',
      role: 'Homeowner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh',
      text: 'Harishyam Infra delivered our dream home on time and within budget. The quality of construction is exceptional and the customer service is outstanding.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Investor',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
      text: 'Investing with Harishyam Infra was the best decision. The returns have been excellent and the transparency in dealings is commendable.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amit',
      text: 'The commercial space I rented from them is perfect for my business. The location, amenities, and support are all top-notch.',
      rating: 5
    },
    {
      name: 'Neha Singh',
      role: 'Homeowner',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=neha',
      text: 'Living in Harishyam Infra project has been a wonderful experience. The community is great and the amenities are world-class.',
      rating: 5
    },
    {
      name: 'Vikram Kumar',
      role: 'Investor',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram',
      text: 'Professional team, transparent dealings, and excellent project execution. Highly recommended for anyone looking to invest in real estate.',
      rating: 5
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Client Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Hear from our satisfied customers about their experience with Harishyam Infra</p>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border-t-4 border-[#d4af37]">
                    <div className="flex items-center gap-4 mb-6">
                      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
                      <div>
                        <h3 className="font-bold text-[#1a2332]">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                    <div className="flex gap-2 mb-4">
                      <Quote className="h-5 w-5 text-[#d4af37] flex-shrink-0" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-[#1a2332] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">5000+</p>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">4.9/5</p>
              <p className="text-gray-300">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">98%</p>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#d4af37] mb-2">15+</p>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}