import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/projects?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919540074200', '_blank');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        {/* Mobile/Tablet Header - Logo, Search, Menu */}
        <div className="lg:hidden flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo Only */}
          <button
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
            className="cursor-pointer flex-shrink-0 hover:opacity-90 transition-all"
          >
            <div className="relative w-18 h-12 sm:w-22 sm:h-11 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white p-1">
              <img
                src="/logoo.jpg"
                alt="Harishyam Infra Logo"
                className="w-full h-full object-contain object-center"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          </button>

          {/* Search Bar - Mobile/Tablet */}
          <form onSubmit={handleSearch} className="flex-1 max-w-xs">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 pr-9 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37] focus:ring-opacity-20 transition-all text-xs sm:text-sm bg-white"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#1a2332]" />
            ) : (
              <Menu className="h-6 w-6 text-[#1a2332]" />
            )}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between gap-4 sm:gap-6">
          {/* Logo Only */}
          <button
            onClick={() => {
              navigate('/');
              setIsOpen(false);
            }}
            aria-label="Go to home"
            className="cursor-pointer flex-shrink-0 hover:opacity-90 transition-all"
          >
            <div className="relative w-36 h-14 xl:w-30 xl:h-13 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all bg-white p-1.5">
              <img
                src="/logoo.jpg"
                alt="Harishyam Infra Logo"
                className="w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>

          </button>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className="text-gray-700 hover:text-[#d4af37] font-medium transition-colors text-sm xl:text-base relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="flex items-center flex-1 max-w-xs lg:max-w-sm mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4af37] focus:ring-2 focus:ring-[#d4af37] focus:ring-opacity-20 transition-all text-sm bg-white"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* CTA Button - Desktop */}
          <div className="flex-shrink-0">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold text-sm px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              Inquire
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-1 border-t pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  navigate(link.href);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-[#f8f9fa] hover:text-[#d4af37] rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}

            {/* Mobile CTA Button */}
            <div className="px-2 pt-3 border-t mt-3">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-[#d4af37] hover:bg-[#c9a227] text-[#1a2332] font-semibold text-sm py-2.5 rounded-lg"
              >
                Inquire Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}