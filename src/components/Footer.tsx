import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a2332] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
                <span className="font-bold text-[#1a2332] text-lg">HI</span>
              </div>
              <h3 className="font-bold text-lg font-playfair">Harishyam Infra</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Premium real estate solutions with a commitment to excellence and customer satisfaction.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Facebook className="h-5 w-5 text-[#d4af37]" />
              </a>
              <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Linkedin className="h-5 w-5 text-[#d4af37]" />
              </a>
              <a href="#" className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 p-2 rounded transition-colors">
                <Instagram className="h-5 w-5 text-[#d4af37]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-[#d4af37] transition-colors">Projects</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-[#d4af37] transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-[#d4af37] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Our Projects</h4>
            <ul className="space-y-2">
              <li><a href="/project/shri-hari-vatika" className="text-gray-400 hover:text-[#d4af37] transition-colors">Shri Hari Vatika</a></li>
              <li><a href="/project/harishyam-township" className="text-gray-400 hover:text-[#d4af37] transition-colors">Harishyam Township</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Upcoming Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors">Completed Projects</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#d4af37]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@harishyaminfra.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">City Center, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p>&copy; 2024 Harishyam Infra. All rights reserved.</p>
            </div>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
