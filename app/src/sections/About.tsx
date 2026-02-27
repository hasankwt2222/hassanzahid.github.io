import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, TrendingUp, Award, Sparkles, Lightbulb, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: Target, title: 'Strategic Planning', desc: 'Data-driven decision making' },
    { icon: Users, title: 'Team Leadership', desc: 'Building high-performance teams' },
    { icon: TrendingUp, title: 'Process Optimization', desc: 'Continuous improvement' },
    { icon: Award, title: 'Quality Assurance', desc: 'Maintaining excellence' },
  ];

  const skills = [
    'Microsoft Office Suite',
    'Warehouse Management',
    'Team Leadership',
    'Process Optimization',
    'Logistics Coordination',
    'Inventory Control',
    'Data Entry',
    'Audit Compliance',
    'Stakeholder Management',
    'Quality Control',
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
          trigger: contentRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(contentRef.current?.children || [], 
              { opacity: 0, y: 30 }, 
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
            );
          },
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: featuresRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(featuresRef.current?.children || [], 
              { opacity: 0, y: 40, scale: 0.95 }, 
              { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out' }
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
              { opacity: 0, y: 20 }, 
              { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: 'power3.out' }
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
      id="about"
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/30 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span className="section-label centered mb-6">About Me</span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Driving Operational{' '}
              <span className="text-gradient">Excellence</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column - Text */}
            <div ref={contentRef} className="space-y-6">
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#444', fontFamily: 'Poppins, sans-serif' }}
              >
                Resourceful professional in management operations, known for high productivity 
                and efficient task completion. I possess specialized skills in strategic planning, 
                team leadership, and operational improvement.
              </p>

              <p
                className="text-lg leading-relaxed"
                style={{ color: '#555', fontFamily: 'Poppins, sans-serif' }}
              >
                I excel in communication, problem-solving, and adaptability, ensuring seamless 
                execution of business strategies and enhancement of team performance. Currently 
                based in Salwa, Kuwait.
              </p>

              {/* Key Highlights */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  { icon: Sparkles, text: 'High Productivity' },
                  { icon: Lightbulb, text: 'Problem Solver' },
                  { icon: Zap, text: 'Fast Learner' },
                  { icon: Shield, text: 'Reliable' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full"
                  >
                    <item.icon size={16} style={{ color: '#f4bd03' }} />
                    <span 
                      className="text-sm font-medium"
                      style={{ color: '#1a1a1a', fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Features */}
            <div ref={featuresRef} className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div 
                  key={i}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500"
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #f4bd03, #ffd966)' }}
                  >
                    <feature.icon size={22} className="text-black" />
                  </div>
                  <h4 
                    className="font-semibold mb-1"
                    style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
                  >
                    {feature.title}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
                  >
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h3 
              className="text-sm font-semibold uppercase tracking-widest mb-8 text-center"
              style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
            >
              Core Competencies
            </h3>
            <div ref={skillsRef} className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-5 py-2.5 bg-gray-100 rounded-full text-sm font-medium hover:bg-amber-400 hover:text-black transition-all duration-300 cursor-default"
                  style={{ color: '#444', fontFamily: 'Poppins, sans-serif' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
