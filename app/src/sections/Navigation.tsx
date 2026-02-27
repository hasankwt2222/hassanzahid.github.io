import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between max-w-[1600px] mx-auto">
          
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hassan<span style={{ color: '#f4bd03' }}>.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-gray-600 hover:text-black transition-colors relative group"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://www.linkedin.com/in/hassan-zahid-761a041ba"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hire Me
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[400px] mt-4' : 'max-h-0'
          }`}
        >
          <div className="bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/hassan-zahid-761a041ba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-black text-white rounded-xl text-sm font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Hire Me
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
