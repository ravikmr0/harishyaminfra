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
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=member${member}`}
                    alt={`Team Member ${member}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1a2332] mb-1">Team Member {member}</h3>
                  <p className="text-[#d4af37] font-semibold mb-2">Executive Position</p>
                  <p className="text-gray-600 text-sm">Experienced professional with expertise in real estate development.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
