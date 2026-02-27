import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, ChevronDown, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2, defaults: { ease: 'power3.out' } });

      tl.fromTo(greetingRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }
      )
      .fromTo(nameRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1 }, 
        '-=0.5'
      )
      .fromTo(titleRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.6'
      )
      .fromTo(descRef.current, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        '-=0.5'
      )
      .fromTo(contactRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        '-=0.4'
      )
      .fromTo(buttonsRef.current, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }, 
        '-=0.3'
      )
      .fromTo(statsRef.current?.children || [], 
        { opacity: 0, y: 30, scale: 0.9 }, 
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 }, 
        '-=0.3'
      )
      .fromTo(imageRef.current, 
        { opacity: 0, x: 80, scale: 0.95 }, 
        { opacity: 1, x: 0, scale: 1, duration: 1.2 }, 
        '-=1'
      );

      const scrollTriggers: ScrollTrigger[] = [];
      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(contentRef.current, { y: -progress * 60 });
            gsap.set(imageRef.current, { y: -progress * 30, scale: 1 - progress * 0.05 });
          },
        })
      );

      return () => scrollTriggers.forEach(st => st.kill());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToExperience = () => {
    document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '5+', label: 'Years Exp.' },
    { value: '5', label: 'Companies' },
    { value: '4', label: 'Languages' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[20%] w-96 h-96 rounded-full bg-gradient-to-br from-amber-100/40 to-transparent blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-gradient-to-tr from-amber-50/60 to-transparent blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-[5%] w-64 h-64 rounded-full bg-gradient-to-bl from-yellow-100/30 to-transparent blur-2xl animate-float" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full px-8 lg:px-16 xl:px-24 py-24">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center max-w-[1600px] mx-auto">
            
            {/* Text Content */}
            <div ref={contentRef} className="order-2 lg:order-1">
              <span
                ref={greetingRef}
                className="inline-block text-sm font-medium tracking-widest uppercase mb-6"
                style={{ color: '#f4bd03', fontFamily: 'Poppins, sans-serif' }}
              >
                Welcome to my portfolio
              </span>

              <h1
                ref={nameRef}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold mb-6 tracking-tight"
                style={{ fontFamily: 'Playfair Display, serif', lineHeight: 1 }}
              >
                Hassan
                <br />
                <span className="text-gradient">Zahid-ul Hassan</span>
              </h1>

              <p
                ref={titleRef}
                className="text-xl lg:text-2xl font-medium mb-6"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
              >
                Operations Coordinator
              </p>

              <p
                ref={descRef}
                className="text-base lg:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: '#555', fontFamily: 'Poppins, sans-serif' }}
              >
                Resourceful professional in management operations, known for high productivity 
                and efficient task completion. Specialized in strategic planning, team leadership, 
                and operational improvement.
              </p>

              {/* Contact Info */}
              <div ref={contactRef} className="flex flex-wrap gap-4 mb-10">
                {[
                  { icon: Mail, text: 'hasankwt2222@outlook.com', href: 'mailto:hasankwt2222@outlook.com' },
                  { icon: Phone, text: '+965 69335882', href: 'tel:+96569335882' },
                  { icon: MapPin, text: 'Salwa, Kuwait', href: null },
                ].map((item, i) => (
                  item.href ? (
                    <a 
                      key={i}
                      href={item.href}
                      className="flex items-center gap-2 text-sm px-4 py-2.5 bg-white/80 backdrop-blur rounded-full border border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
                      style={{ color: '#555', fontFamily: 'Poppins, sans-serif' }}
                    >
                      <item.icon size={14} style={{ color: '#f4bd03' }} />
                      {item.text}
                    </a>
                  ) : (
                    <span 
                      key={i}
                      className="flex items-center gap-2 text-sm px-4 py-2.5 bg-white/80 backdrop-blur rounded-full border border-gray-100"
                      style={{ color: '#555', fontFamily: 'Poppins, sans-serif' }}
                    >
                      <item.icon size={14} style={{ color: '#f4bd03' }} />
                      {item.text}
                    </span>
                  )
                ))}
              </div>

              {/* Buttons */}
              <div ref={buttonsRef} className="flex flex-wrap gap-4 mb-12">
                <button onClick={scrollToExperience} className="btn-primary">
                  View Experience
                  <ArrowRight size={18} />
                </button>
                <a
                  href="https://www.linkedin.com/in/hassan-zahid-761a041ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin size={18} />
                  Connect
                </a>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="flex gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className="text-3xl lg:text-4xl font-bold mb-1"
                      style={{ color: '#f4bd03', fontFamily: 'Playfair Display, serif' }}
                    >
                      {stat.value}
                    </div>
                    <div 
                      className="text-xs uppercase tracking-wider"
                      style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div ref={imageRef} className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image Frame */}
                <div 
                  className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] lg:w-[440px] lg:h-[560px] xl:w-[500px] xl:h-[620px] overflow-hidden rounded-[2rem]"
                  style={{ boxShadow: '0 40px 100px rgba(0, 0, 0, 0.12)' }}
                >
                  <img
                    src="/profile-hero.jpg"
                    alt="Hassan Zahid-ul Hassan"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div 
                  className="absolute -bottom-6 -left-6 w-48 h-48 rounded-[1.5rem] -z-10"
                  style={{ background: 'linear-gradient(135deg, #f4bd03, #ffd966)' }}
                />
                <div 
                  className="absolute -top-4 -right-4 w-32 h-32 rounded-full -z-10 border-4"
                  style={{ borderColor: '#f4bd03' }}
                />

                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-4 right-8 px-6 py-4 bg-white rounded-2xl shadow-xl"
                  style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)' }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #f4bd03, #ffd966)' }}
                    >
                      <span className="text-xl font-bold text-black">5+</span>
                    </div>
                    <div>
                      <div 
                        className="text-sm font-semibold"
                        style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
                      >
                        Years
                      </div>
                      <div 
                        className="text-xs"
                        style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
                      >
                        Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span 
            className="text-xs uppercase tracking-widest"
            style={{ color: '#999', fontFamily: 'Poppins, sans-serif' }}
          >
            Scroll
          </span>
          <ChevronDown size={24} style={{ color: '#f4bd03' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
