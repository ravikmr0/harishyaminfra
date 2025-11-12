import { Briefcase, MapPin, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Careers() {
  const jobs = [
    {
      title: 'Senior Real Estate Manager',
      department: 'Sales & Marketing',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead our sales team and manage client relationships for premium projects.'
    },
    {
      title: 'Project Architect',
      department: 'Design & Planning',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design innovative residential and commercial projects with modern architecture.'
    },
    {
      title: 'Site Engineer',
      department: 'Construction',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Oversee construction quality and ensure timely project completion.'
    },
    {
      title: 'Customer Relations Executive',
      department: 'Customer Service',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Provide exceptional customer support and handle client inquiries.'
    },
    {
      title: 'Financial Analyst',
      department: 'Finance',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Analyze financial data and support investment decisions.'
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Noida, UP',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create and execute marketing campaigns for our projects.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2c3e50] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Build your career with India's leading real estate developer</p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-12 text-center font-playfair">Why Join Harishyam Infra?</h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#d4af37]" />
              </div>
              <h3 className="font-bold text-[#1a2332] mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">Work with talented professionals in a supportive environment</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-[#d4af37]" />
              </div>
              <h3 className="font-bold text-[#1a2332] mb-2">Career Growth</h3>
              <p className="text-gray-600">Continuous learning and professional development opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-[#d4af37]" />
              </div>
              <h3 className="font-bold text-[#1a2332] mb-2">Competitive Salary</h3>
              <p className="text-gray-600">Industry-leading compensation and benefits package</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#d4af37]/10 to-[#c9a227]/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#d4af37]" />
              </div>
              <h3 className="font-bold text-[#1a2332] mb-2">Prime Location</h3>
              <p className="text-gray-600">Work from our modern office in the heart of Noida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-12 text-center font-playfair">Open Positions</h2>
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-[#d4af37]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1a2332] mb-2 font-playfair">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4 text-[#d4af37]" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-[#d4af37]" />
                        {job.location}
                      </span>
                      <span className="bg-[#d4af37]/10 text-[#d4af37] px-3 py-1 rounded-full text-xs font-semibold">{job.type}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Experience: {job.experience}</span>
                  <Button className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#d4af37] to-[#c9a227] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1a2332] mb-4 font-playfair">Don't see your role?</h2>
          <p className="text-lg text-[#1a2332]/80 mb-8">Send us your resume and we'll keep it on file for future opportunities</p>
          <Button className="bg-[#1a2332] hover:bg-[#2c3e50] text-white font-semibold px-8 py-3 text-lg">
            Send Your Resume
          </Button>
        </div>
      </section>
    </div>
  );
}