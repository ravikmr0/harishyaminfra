import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1a2332] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-20 h-13 rounded-lg overflow-hidden bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/10 p-1.5">
                <img 
                  src="/logoo.jpg" 
                  alt="Harishyam Infra Logo" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl font-playfair leading-tight tracking-tight">Harishyam Infra</h3>
                <p className="text-[10px] text-[#d4af37] font-semibold uppercase tracking-widest">Real Estate</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Premium real estate solutions with a commitment to excellence and customer satisfaction.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Facebook className="h-5 w-5 text-[#d4af37]" />
              </a>
              <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Instagram className="h-5 w-5 text-[#d4af37]" />
              </a>
              <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Youtube className="h-5 w-5 text-[#d4af37]" />
              </a>
               <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Linkedin className="h-5 w-5 text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Projects</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/projects')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-left">Shri Hari Vatika</button></li>
              <li><button onClick={() => navigate('/projects')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-left">Harishyam Township</button></li>
              <li><button onClick={() => navigate('/projects')} className="text-gray-400 hover:text-[#d4af37] transition-colors text-left">Keshav Puram Township</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/projects')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Projects</button></li>
              <li><button onClick={() => navigate('/services')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Services</button></li>
              <li><button onClick={() => navigate('/about')} className="text-gray-400 hover:text-[#d4af37] transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Resources</h4>
            <ul className="space-y-2">
              <li><button onClick={() => navigate('/amenities')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Amenities</button></li>
              <li><button onClick={() => navigate('/testimonials')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Testimonials</button></li>
              <li><button onClick={() => navigate('/brochures')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Brochures</button></li>
              <li><button onClick={() => navigate('/agents')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Our Team</button></li>
              <li><button onClick={() => navigate('/careers')} className="text-gray-400 hover:text-[#d4af37] transition-colors">Careers</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+91 9540074200</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@harishyaminfra.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Office Tower-A, Bhutani Alphathum, Sector 90, Noida, Uttar Pradesh 201304, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p>&copy; 2025 Harishyam Infra Pvt. Ltd. All rights reserved.</p>
            </div>
            <div className="flex gap-6 md:justify-end flex-wrap">
              <button onClick={() => navigate('/privacy-policy')} className="hover:text-[#d4af37] transition-colors">Privacy Policy</button>
              <button onClick={() => navigate('/terms-conditions')} className="hover:text-[#d4af37] transition-colors">Terms & Conditions</button>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}