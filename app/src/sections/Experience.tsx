import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Operations Coordinator',
      company: 'WIYAK',
      location: 'Sharq, Kuwait City',
      period: 'March 2025 - Present',
      description: 'Coordinated daily ride assignments across a large fleet of professional drivers, ensuring optimal coverage and efficiency. Managed real-time dispatch operations using GPS and ETA tools.',
      highlights: ['Fleet Management', 'GPS Dispatch', 'Route Optimization', 'Driver Coordination'],
      current: true,
    },
    {
      title: 'Assistant Accountant Intern',
      company: 'Amwaaj Dental Center',
      location: 'Salmiya, Kuwait',
      period: 'January 2025 - February 2025',
      description: 'Managed daily bookkeeping functions with attention to accounts receivable, accounts payable, banking reconciliation and disbursements.',
      highlights: ['Bookkeeping', 'Financial Reconciliation', 'Budget Preparation'],
      current: false,
    },
    {
      title: 'Inbound Operations Coordinator',
      company: 'Boutiqaat Operations',
      location: 'Sulaibiya, Kuwait',
      period: 'September 2021 - February 2025',
      description: 'Coordinated day-to-day warehouse operations, including inventory management, order fulfillment, and logistics. Led a team to ensure timely processing of orders.',
      highlights: ['Warehouse Operations', 'Inventory Management', 'Team Leadership'],
      current: false,
    },
    {
      title: 'Data Entry',
      company: 'United Laboratories Company',
      location: 'Kuwait City, Kuwait',
      period: 'January 2023 - March 2023',
      description: 'Performed accurate data entry and administrative tasks to support operational needs. Created detailed reports on data entry activities.',
      highlights: ['Data Entry', 'Record Management', 'Report Creation'],
      current: false,
    },
    {
      title: 'Auditing Coordinator',
      company: 'Nestle',
      location: 'Al Kuwait, Kuwait',
      period: 'August 2021 - August 2022',
      description: 'Conducted comprehensive audits of internal processes, ensuring compliance with company policies and industry standards.',
      highlights: ['Internal Auditing', 'Compliance', 'Financial Analysis'],
      current: false,
    },
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

      const cards = timelineRef.current?.querySelectorAll('.exp-card');
      cards?.forEach((card, index) => {
        scrollTriggers.push(
          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              gsap.fromTo(card, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: index * 0.1 }
              );
            },
          })
        );
      });

      return () => scrollTriggers.forEach(st => st.kill());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-20">
            <span className="section-label centered mb-6">Work Experience</span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Professional{' '}
              <span className="text-gradient">Journey</span>
            </h2>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Center Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-300 via-amber-200 to-transparent lg:-translate-x-1/2" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`exp-card relative grid lg:grid-cols-2 gap-8 lg:gap-16 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div 
                    className={`absolute left-8 lg:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 lg:-translate-x-1/2 ${
                      exp.current ? 'bg-amber-400 animate-pulse' : 'bg-gray-300'
                    }`}
                    style={{ boxShadow: exp.current ? '0 0 20px rgba(244, 189, 3, 0.5)' : '0 2px 8px rgba(0,0,0,0.1)' }}
                  />

                  {/* Content */}
                  <div className={`pl-20 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div 
                      className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500"
                    >
                      {/* Badge */}
                      {exp.current && (
                        <span 
                          className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4"
                          style={{ background: '#f4bd03', color: '#000', fontFamily: 'Poppins, sans-serif' }}
                        >
                          Current Position
                        </span>
                      )}

                      {/* Title & Company */}
                      <h3 
                        className="text-xl lg:text-2xl font-semibold mb-2"
                        style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
                      >
                        {exp.title}
                      </h3>
                      
                      <div 
                        className={`flex items-center gap-2 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                      >
                        <Briefcase size={16} style={{ color: '#f4bd03' }} />
                        <span 
                          className="font-medium"
                          style={{ color: '#444', fontFamily: 'Poppins, sans-serif' }}
                        >
                          {exp.company}
                        </span>
                      </div>

                      {/* Meta Info */}
                      <div 
                        className={`flex flex-wrap gap-4 mb-4 text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`}
                        style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
                      >
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p 
                        className="text-sm leading-relaxed mb-5"
                        style={{ color: '#666', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-xs"
                            style={{ color: '#555', fontFamily: 'Poppins, sans-serif' }}
                          >
                            <CheckCircle2 size={12} style={{ color: '#f4bd03' }} />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
