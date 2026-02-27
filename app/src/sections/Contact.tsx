import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, MapPin, Languages, ExternalLink, Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const contacts = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Hassan Zahid-ul Hassan',
      action: 'Connect',
      href: 'https://www.linkedin.com/in/hassan-zahid-761a041ba',
      color: '#0077b5',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hasankwt2222@outlook.com',
      action: 'Send Email',
      href: 'mailto:hasankwt2222@outlook.com',
      color: '#ea4335',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+965 69335882',
      action: 'Call',
      href: 'tel:+96569335882',
      color: '#34a853',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Salwa, Kuwait',
      action: 'View Map',
      href: 'https://maps.google.com/?q=Salwa,Kuwait',
      color: '#f4bd03',
    },
  ];

  const languages = [
    { name: 'Urdu', level: 'Native' },
    { name: 'English', level: 'Expert' },
    { name: 'Hindi', level: 'Expert' },
    { name: 'Arabic', level: 'Intermediate' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollTriggers: ScrollTrigger[] = [];

      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(headerRef.current, 
              { opacity: 0, y: 40 }, 
              { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );
          },
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(cardsRef.current?.children || [], 
              { opacity: 0, y: 30, scale: 0.97 }, 
              { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
            );
          },
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: ctaRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(ctaRef.current, 
              { opacity: 0, y: 40 }, 
              { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
            );
          },
        })
      );

      return () => scrollTriggers.forEach(st => st.kill());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-amber-100/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span className="section-label centered mb-6">Get In Touch</span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Let's{' '}
              <span className="text-gradient">Connect</span>
            </h2>
            <p 
              className="text-lg max-w-2xl mx-auto"
              style={{ color: '#666', fontFamily: 'Poppins, sans-serif' }}
            >
              I'm always open to discussing new opportunities, operations challenges, 
              or potential collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Cards */}
            <div ref={cardsRef} className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.label === 'LinkedIn' || contact.label === 'Location' ? '_blank' : undefined}
                  rel={contact.label === 'LinkedIn' || contact.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${contact.color}15` }}
                  >
                    <contact.icon 
                      size={24} 
                      style={{ color: contact.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p 
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ color: '#999', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {contact.label}
                    </p>
                    <p 
                      className="font-medium truncate"
                      style={{ color: '#1a1a1a', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {contact.value}
                    </p>
                  </div>
                  <ArrowUpRight 
                    size={18} 
                    className="text-gray-300 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" 
                  />
                </a>
              ))}

              {/* Languages Card */}
              <div className="p-5 bg-white rounded-2xl border border-gray-100 sm:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(244, 189, 3, 0.1)' }}
                  >
                    <Languages size={18} style={{ color: '#f4bd03' }} />
                  </div>
                  <h4 
                    className="font-semibold"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
                  >
                    Languages
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-sm"
                      style={{ color: '#555', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {lang.name}
                      <span 
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: '#f4bd03', color: '#000' }}
                      >
                        {lang.level}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div ref={ctaRef} className="lg:col-span-1">
              <div 
                className="h-full p-8 rounded-3xl flex flex-col items-center justify-center text-center"
                style={{ 
                  background: 'linear-gradient(135deg, #f4bd03, #ffd966)',
                  boxShadow: '0 20px 60px rgba(244, 189, 3, 0.3)'
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Send size={28} className="text-black" />
                </div>
                <h3 
                  className="text-2xl font-semibold mb-3 text-black"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Ready to Collaborate?
                </h3>
                <p 
                  className="text-sm mb-6 text-black/70"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  I'm ready to bring value to your team and help achieve your goals.
                </p>
                <a
                  href="mailto:hasankwt2222@outlook.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Send Message
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
