import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Showcase from './components/Showcase';

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = particleRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    const orbs = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 200 + 100,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: ['rgba(244,194,194,', 'rgba(212,175,55,', 'rgba(181,72,93,'][i % 3],
    }));

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      orbs.forEach((o) => {
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, o.color + '0.12)');
        g.addColorStop(1, o.color + '0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fill();

        o.x += o.vx;
        o.y += o.vy;

        if (o.x < -o.r) o.x = W + o.r;
        if (o.x > W + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = H + o.r;
        if (o.y > H + o.r) o.y = -o.r;
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    window.addEventListener('resize', handleResize);

    // particles
    const createParticle = () => {
      const p = document.createElement('div');
      p.className = 'particle';

      const size = Math.random() * 6 + 2;

      const colors = [
        'rgba(212,175,55,0.4)',
        'rgba(181,72,93,0.3)',
        'rgba(244,194,194,0.5)',
        'rgba(255,255,255,0.6)',
      ];

      p.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${Math.random() * 100}vw;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation-duration:${Math.random() * 10 + 8}s;
        animation-delay:${Math.random() * 5}s;
      `;

      container.appendChild(p);
      setTimeout(() => p.remove(), 18000);
    };

    const interval = setInterval(createParticle, 600);
    for (let i = 0; i < 8; i++) createParticle();

    // reveal animation
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    });

    reveals.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="bg-canvas" />
      <div ref={particleRef} id="particles" />

      <a
        href="https://wa.me/94750701234"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>


      <Navbar />
      <Hero /> 
      <Collections />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}