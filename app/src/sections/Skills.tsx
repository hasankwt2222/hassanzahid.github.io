import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FileSpreadsheet, FileText, Presentation, Mail,
  Warehouse, Users, TrendingUp, Truck, Package,
  FileBarChart, Database, ClipboardCheck, Handshake,
  MessageSquare, ShieldCheck, Building, UserCheck, Receipt
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Microsoft Excel', icon: FileSpreadsheet },
    { name: 'Microsoft Word', icon: FileText },
    { name: 'Microsoft PowerPoint', icon: Presentation },
    { name: 'Microsoft Outlook', icon: Mail },
    { name: 'Warehouse Management', icon: Warehouse },
    { name: 'Team Leadership', icon: Users },
    { name: 'Process Optimization', icon: TrendingUp },
    { name: 'Logistics Coordination', icon: Truck },
    { name: 'Inventory Control', icon: Package },
    { name: 'Reporting & Documentation', icon: FileBarChart },
    { name: 'Data Entry & Management', icon: Database },
    { name: 'Audit Compliance', icon: ClipboardCheck },
    { name: 'Stakeholder Management', icon: Handshake },
    { name: 'Effective Communication', icon: MessageSquare },
    { name: 'Quality Assurance', icon: ShieldCheck },
    { name: 'Administrative Management', icon: Building },
    { name: 'Vendor Engagement', icon: UserCheck },
    { name: 'Customer Invoicing', icon: Receipt },
  ];

  const coreSkills = [
    { name: 'Microsoft Office Suite', proficiency: 95 },
    { name: 'Warehouse Management', proficiency: 92 },
    { name: 'Logistics Coordination', proficiency: 90 },
    { name: 'Team Leadership', proficiency: 88 },
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
          trigger: skillsRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(skillsRef.current?.children || [], 
              { opacity: 0, y: 20, scale: 0.95 }, 
              { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.03, ease: 'power3.out' }
            );
          },
        })
      );

      const progressBars = barsRef.current?.querySelectorAll('.progress-fill');
      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: barsRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            progressBars?.forEach((bar, index) => {
              gsap.fromTo(bar, 
                { width: '0%' }, 
                { 
                  width: `${coreSkills[index]?.proficiency}%`, 
                  duration: 1.2, 
                  ease: 'power3.out',
                  delay: 0.3 + index * 0.1
                }
              );
            });
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
      id="skills"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f4bd03 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span 
              className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(244, 189, 3, 0.1)', color: '#f4bd03', fontFamily: 'Poppins, sans-serif' }}
            >
              Skills & Expertise
            </span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What I Bring to the{' '}
              <span className="text-gradient">Table</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="flex flex-wrap justify-center gap-3 mb-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-400 hover:border-amber-400 transition-all duration-300 cursor-default"
              >
                <skill.icon 
                  size={16} 
                  className="text-gray-400 group-hover:text-black transition-colors" 
                />
                <span 
                  className="text-sm text-gray-300 group-hover:text-black transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Core Skills Progress Bars */}
          <div ref={barsRef} className="max-w-3xl mx-auto">
            <h3 
              className="text-lg font-semibold text-white mb-10 text-center"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Core Competencies
            </h3>

            <div className="space-y-6">
              {coreSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span 
                      className="text-white font-medium"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {skill.name}
                    </span>
                    <span 
                      className="text-sm font-semibold"
                      style={{ color: '#f4bd03', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="progress-fill h-full rounded-full relative"
                      style={{ 
                        width: '0%',
                        background: 'linear-gradient(90deg, #f4bd03, #ffd966)'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
