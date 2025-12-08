import { useState } from 'react';
import Button from './Button';
import { imgLogoContainer } from '../assets/images';

function Header({ activeSection, isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Home', section: 'hero' },
    { href: '#tentang-kami', label: 'Tentang Kami', section: 'tentang-kami' },
    { href: '#layanan', label: 'Layanan', section: 'layanan' },
    { href: '#kontak', label: 'Kontak', section: 'kontak' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(5,5,5,0.6)] border-b border-[#646464]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[120px] md:w-[177px] h-8 md:h-12">
          <img src={imgLogoContainer} alt="KGiTON Logo" className="w-full h-full object-contain" />
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex gap-4 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.section}
              href={link.href} 
              className={`px-4 py-3 rounded-full font-open-sans font-semibold text-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors ${
                activeSection === link.section ? 'text-white' : 'text-[#646464] hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Button variant={isScrolled ? "Primary" : "Tertiary"} className="w-[200px]" />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 backdrop-blur-md bg-[rgba(5,5,5,0.95)] border-b border-[#646464] transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <a 
              key={link.section}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-full font-open-sans font-semibold text-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors ${
                activeSection === link.section ? 'text-white' : 'text-[#646464]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <Button variant={isScrolled ? "Primary" : "Tertiary"} className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
