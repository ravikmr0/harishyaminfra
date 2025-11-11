import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log('Contact form:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subtext: 'Mon - Fri, 9 AM - 6 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@harishyaminfra.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: 'City Center, India',
      subtext: 'Visit our office'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: '9 AM - 6 PM',
      subtext: 'Monday to Friday'
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a2332] to-[#2d3e50] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="bg-[#f8f9fa] p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <Icon className="h-10 w-10 text-[#d4af37] mx-auto mb-4" />
                  <h3 className="font-bold text-[#1a2332] mb-2">{info.title}</h3>
                  <p className="font-semibold text-[#1a2332] mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.subtext}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a2332] mb-8 font-playfair">Send us a Message</h2>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                      className="mt-1"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{String(errors.name.message)}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register('email', { required: 'Email is required' })}
                      className="mt-1"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{String(errors.email.message)}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    {...register('phone', { required: 'Phone is required' })}
                    className="mt-1"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{String(errors.phone.message)}</p>}
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    {...register('subject', { required: 'Subject is required' })}
                    className="mt-1"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{String(errors.subject.message)}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    {...register('message', { required: 'Message is required' })}
                    className="mt-1"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{String(errors.message.message)}</p>}
                </div>

                <Button type="submit" className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-[#1a2332] mb-8 font-playfair">Find Us</h2>
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">Google Maps Integration</p>
                  <p className="text-gray-500 text-sm">City Center, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a2332] text-center mb-12 font-playfair">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                q: 'What are the payment options available?',
                a: 'We offer flexible payment plans including down payment, installments, and full payment options.'
              },
              {
                q: 'How long does the booking process take?',
                a: 'The booking process typically takes 2-3 days after document verification.'
              },
              {
                q: 'Are the projects RERA approved?',
                a: 'Yes, all our projects are RERA approved and registered with the authorities.'
              },
              {
                q: 'What is the possession timeline?',
                a: 'Possession timelines vary by project. Please contact us for specific details.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-[#f8f9fa] p-6 rounded-lg">
                <h3 className="font-bold text-[#1a2332] mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
