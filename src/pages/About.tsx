import { Award, Users, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const stats = [
    { icon: TrendingUp, label: '15+ Years', value: 'Industry Experience' },
    { icon: Users, label: '5000+', value: 'Happy Customers' },
    { icon: Award, label: '50+', value: 'Projects Completed' },
    { icon: Heart, label: '100%', value: 'Customer Satisfaction' },
  ];

  const values = [
    {
      title: 'Integrity',
      description: 'We believe in transparent dealings and honest business practices.'
    },
    {
      title: 'Quality',
      description: 'Excellence in every aspect of our projects and services.'
    },
    {
      title: 'Innovation',
      description: 'Embracing modern technologies and sustainable practices.'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our ultimate goal and priority.'
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2d3e50] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">About Harishyam Infra</h1>
          <p className="text-xl text-gray-300">Building dreams, creating communities</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a2332] mb-6 font-playfair">Who We Are</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Harishyam Infra is a leading real estate developer with over 15 years of experience in creating premium residential developments. We are committed to delivering exceptional quality and value to our customers.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our portfolio includes multiple successful projects across prime locations, each designed with meticulous attention to detail and customer satisfaction at the core.
              </p>
              <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
                Learn More
              </Button>
            </div>
            <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80" 
                alt="Company"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">Our Track Record</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <Icon className="h-12 w-12 text-[#d4af37] mx-auto mb-4" />
                  <p className="text-3xl font-bold text-[#1a2332] mb-2">{stat.label}</p>
                  <p className="text-gray-600">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="bg-[#f8f9fa] p-8 rounded-lg border-l-4 border-[#d4af37]">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4 font-playfair">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Meet the visionary leaders driving Harishyam Infra's success with decades of combined expertise</p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a227] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group h-full">
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80"
                  alt="Rajesh Kumar"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm leading-relaxed font-light">Visionary leader with proven track record in premium real estate development</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Rajesh Kumar</h3>
                <p className="text-[#d4af37] font-semibold uppercase tracking-widest text-xs mb-4 pb-4 border-b border-gray-200">Founder & Chairman</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">With 20+ years of real estate expertise, Rajesh has pioneered innovative residential developments across premium locations.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30 text-xs font-semibold">Real Estate</span>
                  <span className="bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30 text-xs font-semibold">Strategy</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group h-full">
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80"
                  alt="Priya Sharma"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm leading-relaxed font-light">Operations excellence and customer satisfaction focused leader</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Priya Sharma</h3>
                <p className="text-[#d4af37] font-semibold uppercase tracking-widest text-xs mb-4 pb-4 border-b border-gray-200">Managing Director</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">Priya leads operations with a focus on customer satisfaction and project excellence, ensuring every development exceeds expectations.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30 text-xs font-semibold">Operations</span>
                  <span className="bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30 text-xs font-semibold">Quality</span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group h-full">
              <div className="relative mb-6 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80"
                  alt="Amit Patel"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm leading-relaxed font-light">Financial strategist driving sustainable growth and profitability</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#d4af37] hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Amit Patel</h3>
                <p className="text-[#d4af37] font-semibold uppercase tracking-widest text-xs mb-4 pb-4 border-b border-gray-200">Chief Financial Officer</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">Amit brings financial acumen and strategic planning expertise, ensuring sustainable growth and transparent financial management.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30 text-xs font-semibold">Finance</span>
                  <span className="bg-gradient-to-r from-[#d4af37]/10 to-[#c9a227]/10 text-[#d4af37] px-3 py-1 rounded-full border border-[#d4af37]/30 text-xs font-semibold">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}