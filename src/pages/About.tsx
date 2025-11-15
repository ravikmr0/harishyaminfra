import { Award, Users, TrendingUp, Heart, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const stats = [
    { icon: TrendingUp, label: '5+ Years', value: 'Industry Experience' },
    { icon: Users, label: '500+', value: 'Happy Customers' },
    { icon: Award, label: '10+', value: 'Projects Completed' },
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
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4 font-playfair">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a227] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 border-4 border-[#d4af37]/20 group-hover:border-[#d4af37] group-hover:scale-105">
                <img 
                  src="/images/about/sudheer.jpg"
                  alt="Sudheer Kumar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Sudheer Kumar</h3>
              <p className="text-[#d4af37] font-semibold uppercase tracking-widest text-sm mb-4">Founder & CEO</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">Lead the organization’s vision, strategy, and overall direction from inception to growth.</p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </button>
                <button className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                  <Mail className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 border-4 border-[#d4af37]/20 group-hover:border-[#d4af37] group-hover:scale-105">
                <img 
                  src="/images/about/vikash.jpg"
                  alt="Vikash Sharma"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Vikash Sharma</h3>
              <p className="text-[#d4af37] font-semibold uppercase tracking-widest text-sm mb-4">Managing Director</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">Provide strategic leadership to drive the company’s growth and long-term vision.</p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </button>
                <button className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                  <Mail className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 border-4 border-[#d4af37]/20 group-hover:border-[#d4af37] group-hover:scale-105">
                <img 
                  src="/images/about/ashish.jpg"
                  alt="Ashish Chaudhary"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Ashish Chaudhary</h3>
              <p className="text-[#d4af37] font-semibold uppercase tracking-widest text-sm mb-4">Team Leader's</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">Communicate clearly between team and management for seamless coordination.</p>
              <div className="flex gap-4 justify-center">
                <button className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                  <Linkedin className="h-6 w-6" />
                </button>
                <button className="text-[#d4af37] hover:text-[#c9a227] transition-colors">
                  <Mail className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Grid Boxes Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-[#f8f9fa] to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-4 font-playfair">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover what sets Harishyam Infra apart in the real estate industry</p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#d4af37] to-[#c9a227] mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Box 1 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#d4af37] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#d4af37]/30 to-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#d4af37]/50 group-hover:to-[#c9a227]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#d4af37] transition-colors duration-300 font-playfair relative z-10">Award Winning</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Recognized for excellence and innovation in real estate development across multiple platforms.</p>
            </div>

            {/* Box 2 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#d4af37] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#d4af37]/30 to-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#d4af37]/50 group-hover:to-[#c9a227]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#d4af37] transition-colors duration-300 font-playfair relative z-10">Quality Assured</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Every project undergoes rigorous quality checks to ensure premium standards and customer satisfaction.</p>
            </div>

            {/* Box 3 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#d4af37] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#d4af37]/30 to-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#d4af37]/50 group-hover:to-[#c9a227]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#d4af37] transition-colors duration-300 font-playfair relative z-10">Innovation First</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Leveraging cutting-edge technology and sustainable practices in all our developments.</p>
            </div>

            {/* Box 4 */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#d4af37] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#d4af37]/30 to-[#c9a227]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-[#d4af37]/50 group-hover:to-[#c9a227]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-3 group-hover:text-[#d4af37] transition-colors duration-300 font-playfair relative z-10">Premium Living</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Offering luxury amenities and world-class facilities for an elevated lifestyle experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}