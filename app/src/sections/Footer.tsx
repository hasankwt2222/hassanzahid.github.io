import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Heart, Mail, Phone, ArrowUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.fromTo(contentRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-16 lg:py-20"
      style={{ background: '#0a0a0a' }}
    >
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
        style={{ background: '#f4bd03' }}
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="text-black group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div ref={contentRef} className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">
            
            {/* Brand */}
            <div>
              <h3
                className="text-2xl lg:text-3xl font-semibold text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Hassan Zahid-ul Hassan
              </h3>
              <p 
                className="text-sm"
                style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
              >
                Operations Professional
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6 lg:gap-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors relative group"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/hassan-zahid-761a041ba' },
                { icon: Mail, href: 'mailto:hasankwt2222@outlook.com' },
                { icon: Phone, href: 'tel:+96569335882' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.icon === Linkedin ? '_blank' : undefined}
                  rel={item.icon === Linkedin ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 text-gray-400 hover:bg-amber-400 hover:border-amber-400 hover:text-black transition-all duration-300"
                >
                  <item.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p 
              className="text-sm text-gray-500 flex items-center gap-1"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              © {new Date().getFullYear()} Hassan Zahid-ul Hassan. Made with
              <Heart size={14} className="text-amber-400 mx-1" fill="#f4bd03" />
            </p>
            <p 
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
