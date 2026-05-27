import { Award, Users, TrendingUp, Heart } from 'lucide-react';
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
      <section className="section-shell-hero bg-gradient-to-r from-[#1a2332] to-[#2d3e50] text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 font-playfair">About Harishyam Infra</h1>
          <p className="text-xl text-gray-300">Building dreams, creating communities</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 content-grid items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a2332] mb-3 font-playfair">Who We Are</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Harishyam Infra is a leading real estate developer with over 15 years of experience in creating premium residential developments. We are committed to delivering exceptional quality and value to our customers.
              </p>
              <p className="text-gray-700 mb-3 leading-relaxed">
                Our portfolio includes multiple successful projects across prime locations, each designed with meticulous attention to detail and customer satisfaction at the core.
              </p>
              <Button className="bg-[#b26243] hover:bg-[#8d4a33] text-white font-semibold">
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
      <section className="section-shell bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-5 md:mb-6 font-playfair">Our Track Record</h2>
          <div className="grid md:grid-cols-4 card-grid">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                  <Icon className="h-12 w-12 text-[#b26243] mx-auto mb-3" />
                  <p className="text-3xl font-bold text-[#1a2332] mb-1">{stat.label}</p>
                  <p className="text-gray-600 text-sm">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-5 md:mb-6 font-playfair">Our Core Values</h2>
          <div className="grid md:grid-cols-2 card-grid">
            {values.map((value, idx) => (
              <div key={idx} className="bg-[#f8f9fa] p-5 rounded-lg border-l-4 border-[#b26243]">
                <h3 className="text-2xl font-bold text-[#1a2332] mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-shell bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-heading">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-3 font-playfair">Meet Our Team</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b26243] to-[#8d4a33] mx-auto mt-3"></div>
          </div>
          
          <div className="grid md:grid-cols-3 content-grid">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 border-4 border-[#b26243]/20 group-hover:border-[#b26243] group-hover:scale-105">
                <img 
                  src="/images/about/sudheer.jpg"
                  alt="Sudheer Kumar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Sudheer Kumar</h3>
              <p className="text-[#b26243] font-semibold uppercase tracking-widest text-sm mb-4">Founder & CEO</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">Lead the organizationâ€™s vision, strategy, and overall direction from inception to growth.</p>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 border-4 border-[#b26243]/20 group-hover:border-[#b26243] group-hover:scale-105">
                <img 
                  src="/images/about/anubhav.jpeg"
                  alt="Anubhav Sharma"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Anubhav Sharma</h3>
              <p className="text-[#b26243] font-semibold uppercase tracking-widest text-sm mb-4">Managing Director</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">Provide strategic leadership to drive the companyâ€™s growth and long-term vision.</p>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-8 w-48 h-48 rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex-shrink-0 border-4 border-[#b26243]/20 group-hover:border-[#b26243] group-hover:scale-105">
                <img 
                  src="/images/about/soniya.jpg"
                  alt="Soniya Yadav"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">Soniya Yadav</h3>
              <p className="text-[#b26243] font-semibold uppercase tracking-widest text-sm mb-4">Team Leader</p>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">Communicate clearly between team and management for seamless coordination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Grid Boxes Section */}
      <section className="section-shell bg-gradient-to-b from-white via-[#f8f9fa] to-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#b26243]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#b26243]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="section-heading">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2332] mb-3 font-playfair">Why Choose Us</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Discover what sets Harishyam Infra apart in the real estate industry</p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#b26243] to-[#8d4a33] mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 card-grid">
            {/* Box 1 */}
            <div className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#b26243] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b26243]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#b26243]/30 to-[#8d4a33]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-[#b26243]/50 group-hover:to-[#8d4a33]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">ðŸ†</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-2 group-hover:text-[#b26243] transition-colors duration-300 font-playfair relative z-10">Award Winning</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Recognized for excellence and innovation in real estate development across multiple platforms.</p>
            </div>

            {/* Box 2 */}
            <div className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#b26243] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b26243]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#b26243]/30 to-[#8d4a33]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-[#b26243]/50 group-hover:to-[#8d4a33]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">âœ“</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-2 group-hover:text-[#b26243] transition-colors duration-300 font-playfair relative z-10">Quality Assured</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Every project undergoes rigorous quality checks to ensure premium standards and customer satisfaction.</p>
            </div>

            {/* Box 3 */}
            <div className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#b26243] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b26243]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#b26243]/30 to-[#8d4a33]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-[#b26243]/50 group-hover:to-[#8d4a33]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">ðŸš€</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-2 group-hover:text-[#b26243] transition-colors duration-300 font-playfair relative z-10">Innovation First</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Leveraging cutting-edge technology and sustainable practices in all our developments.</p>
            </div>

            {/* Box 4 */}
            <div className="group relative bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-b-4 border-[#b26243] hover:border-l-8 hover:border-b-8 hover:scale-105 hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#b26243]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="h-16 w-16 bg-gradient-to-br from-[#b26243]/30 to-[#8d4a33]/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-[#b26243]/50 group-hover:to-[#8d4a33]/40 transition-all duration-300 shadow-md relative z-10">
                <span className="text-4xl">ðŸ’Ž</span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-2 group-hover:text-[#b26243] transition-colors duration-300 font-playfair relative z-10">Premium Living</h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">Offering luxury amenities and world-class facilities for an elevated lifestyle experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


