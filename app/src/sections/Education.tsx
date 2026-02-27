import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Building2, X, ExternalLink, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const education = [
    {
      degree: 'Bachelor of Science (Honors)',
      field: 'Business Management',
      institution: 'University of Derby, UK',
      period: 'Completed',
    },
    {
      degree: 'Higher Secondary Certificate +2',
      field: 'General Science',
      institution: 'Pakistan School & College, Kuwait (PSCK)',
      period: 'Completed',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      field: '',
      institution: 'New Pakistan International School, Kuwait (NPIS)',
      period: 'Completed',
    },
  ];

  const certifications = [
    {
      name: 'Certificate of Excellence',
      subtitle: 'Inbound Operations',
      organization: 'Boutiqaat',
      year: '2023',
      image: '/boutiqaat-cert.jpg',
    },
    {
      name: 'OTHM Extended Level 5 Diploma',
      subtitle: 'Business Management',
      organization: 'OTHM Qualifications',
      year: '2023',
      image: '/othm-cert-1.png',
    },
    {
      name: 'Bachelor Degree Certificate',
      subtitle: 'Business Management',
      organization: 'University of Derby, UK',
      year: 'Completed',
      image: '/degree-cert-1.png',
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
          trigger: educationRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(educationRef.current?.children || [], 
              { opacity: 0, y: 30 }, 
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
            );
          },
        })
      );

      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: certsRef.current,
          start: 'top 85%',
          once: true,
          onEnter: () => {
            gsap.fromTo(certsRef.current?.children || [], 
              { opacity: 0, y: 40, scale: 0.98 }, 
              { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out' }
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
      id="education"
      className="relative py-24 lg:py-32 bg-white"
    >
      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-12 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X size={20} />
            </button>
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Header */}
          <div ref={headerRef} className="text-center mb-20">
            <span className="section-label centered mb-6">Education & Certifications</span>
            <h2
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Academic{' '}
              <span className="text-gradient">Background</span>
            </h2>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Education Column */}
            <div className="lg:col-span-2">
              <h3 
                className="text-lg font-semibold mb-8 flex items-center gap-3"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-100">
                  <GraduationCap size={20} style={{ color: '#f4bd03' }} />
                </div>
                Education
              </h3>

              <div ref={educationRef} className="space-y-4">
                {education.map((edu, index) => (
                  <div 
                    key={index}
                    className="group p-5 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:border border-gray-100 transition-all duration-500"
                  >
                    <h4 
                      className="font-semibold mb-1"
                      style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
                    >
                      {edu.degree}
                    </h4>
                    {edu.field && (
                      <p 
                        className="text-sm mb-3"
                        style={{ color: '#f4bd03', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {edu.field}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}>
                      <Building2 size={14} />
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-white rounded-2xl border border-amber-100">
                <h4 
                  className="font-semibold mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
                >
                  <Globe size={18} style={{ color: '#f4bd03' }} />
                  Languages
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-xl"
                    >
                      <span 
                        className="text-sm font-medium"
                        style={{ color: '#444', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {lang.name}
                      </span>
                      <span 
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{ background: '#f4bd03', color: '#000' }}
                      >
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificates Column */}
            <div className="lg:col-span-3">
              <h3 
                className="text-lg font-semibold mb-8 flex items-center gap-3"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#1a1a1a' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-100">
                  <Award size={20} style={{ color: '#f4bd03' }} />
                </div>
                Certifications
              </h3>

              <div ref={certsRef} className="grid sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500"
                  >
                    {/* Certificate Image */}
                    <div 
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                      onClick={() => setSelectedCert(cert.image)}
                    >
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex items-center gap-2 px-5 py-2.5 bg-white rounded-full shadow-lg">
                          <ExternalLink size={16} />
                          <span className="text-sm font-medium">View Certificate</span>
                        </div>
                      </div>
                    </div>

                    {/* Certificate Info */}
                    <div className="p-5">
                      <h4 
                        className="font-semibold mb-1"
                        style={{ fontFamily: 'Playfair Display, serif', color: '#1a1a1a' }}
                      >
                        {cert.name}
                      </h4>
                      <p 
                        className="text-sm mb-3"
                        style={{ color: '#f4bd03', fontFamily: 'Poppins, sans-serif' }}
                      >
                        {cert.subtitle}
                      </p>
                      <div className="flex items-center justify-between">
                        <span 
                          className="text-sm flex items-center gap-1.5"
                          style={{ color: '#888', fontFamily: 'Poppins, sans-serif' }}
                        >
                          <Building2 size={14} />
                          {cert.organization}
                        </span>
                        <button
                          onClick={() => setSelectedCert(cert.image)}
                          className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                          style={{ color: '#f4bd03', fontFamily: 'Poppins, sans-serif' }}
                        >
                          View
                          <ExternalLink size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
