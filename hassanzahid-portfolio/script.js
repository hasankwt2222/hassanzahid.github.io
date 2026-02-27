/**
 * HASSAN ZAHID PORTFOLIO - JAVASCRIPT
 * Production-Ready Interactive Functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // NAVIGATION
  // ============================================
  
  const navbar = document.querySelector('.navbar');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const navLinksItems = document.querySelectorAll('.nav-links a');
  
  // Navbar scroll effect
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Mobile menu toggle
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = mobileMenuBtn.querySelectorAll('span');
      if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  // Close mobile menu when clicking a link
  navLinksItems.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      const spans = mobileMenuBtn.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
  
  // Active nav link on scroll
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinksItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNavLink);
  
  // ============================================
  // SMOOTH SCROLL
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ============================================
  // FADE IN ANIMATIONS (Intersection Observer)
  // ============================================
  
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  fadeElements.forEach(el => fadeObserver.observe(el));
  
  // ============================================
  // SKILL BARS ANIMATION
  // ============================================
  
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay for stagger effect
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, 200);
        skillObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  skillBars.forEach(bar => skillObserver.observe(bar));
  
  // ============================================
  // CERTIFICATE MODAL
  // ============================================
  
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalIssuer = document.getElementById('modalIssuer');
  const modalClose = document.querySelector('.modal-close');
  const certificateCards = document.querySelectorAll('.certificate-card');
  
  // Certificate data
  const certificates = {
    'boutiqaat': {
      image: 'assets/images/boutiqaat-cert.jpg',
      title: 'Certificate of Excellence',
      issuer: 'Boutiqaat - 2023'
    },
    'othm': {
      image: 'assets/images/othm-cert-1.png',
      title: 'OTHM Level 5 Diploma',
      issuer: 'OTHM Qualifications'
    },
    'degree': {
      image: 'assets/images/degree-cert-1.png',
      title: 'Bachelor of Science',
      issuer: 'University of Derby'
    }
  };
  
  // Open modal
  certificateCards.forEach(card => {
    card.addEventListener('click', function() {
      const certId = this.getAttribute('data-certificate');
      const cert = certificates[certId];
      
      if (cert && modal) {
        modalImage.src = cert.image;
        modalImage.alt = cert.title;
        modalTitle.textContent = cert.title;
        modalIssuer.textContent = cert.issuer;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal functions
  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  // Close on background click
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  
  // ============================================
  // CURRENT YEAR IN FOOTER
  // ============================================
  
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
  
  // ============================================
  // TYPING EFFECT (Optional enhancement)
  // ============================================
  
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    heroSubtitle.style.opacity = '1';
    
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        heroSubtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
  }
  
  // ============================================
  // PARALLAX EFFECT FOR HERO SHAPES
  // ============================================
  
  const shapes = document.querySelectorAll('.shape');
  
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    
    shapes.forEach((shape, index) => {
      const speed = (index + 1) * 0.2;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });
  
  // ============================================
  // BUTTON RIPPLE EFFECT
  // ============================================
  
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
      `;
      
      button.style.position = 'relative';
      button.style.overflow = 'hidden';
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Add ripple animation keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
  
  // ============================================
  // PRELOADER (Optional)
  // ============================================
  
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });
  
  // ============================================
  // PERFORMANCE: Lazy load images
  // ============================================
  
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }
  
  // ============================================
  // CONTACT CARD CLICK HANDLERS
  // ============================================
  
  const contactCards = document.querySelectorAll('.contact-card');
  
  contactCards.forEach(card => {
    card.addEventListener('click', function() {
      const link = this.querySelector('a');
      if (link) {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
          window.open(href, '_blank');
        }
      }
    });
  });
  
  // ============================================
  // SCROLL TO TOP BUTTON (Optional)
  // ============================================
  
  // Create scroll to top button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  scrollTopBtn.className = 'scroll-top-btn';
  scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #f4bd03 0%, #f59e0b 100%);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(244, 189, 3, 0.4);
  `;
  
  document.body.appendChild(scrollTopBtn);
  
  // Show/hide scroll to top button
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollTopBtn.style.opacity = '1';
      scrollTopBtn.style.visibility = 'visible';
    } else {
      scrollTopBtn.style.opacity = '0';
      scrollTopBtn.style.visibility = 'hidden';
    }
  });
  
  // Scroll to top on click
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Hover effect for scroll button
  scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 8px 25px rgba(244, 189, 3, 0.6)';
  });
  
  scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(244, 189, 3, 0.4)';
  });
  
  console.log('🚀 Hassan Zahid Portfolio - Ready!');
});
