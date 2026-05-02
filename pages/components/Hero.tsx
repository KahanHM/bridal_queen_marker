import { useEffect } from 'react';


export default function Hero() {
  useEffect(() => {
    const heroContent = document.querySelector('.hero-content') as HTMLElement;
    const heroDress = document.querySelector('.hero-3d-dress') as HTMLElement;
    // New elements for parallax layers
    const heroBgLayer1 = document.querySelector('.hero-bg-layer-1') as HTMLElement;
    const heroBgLayer2 = document.querySelector('.hero-bg-layer-2') as HTMLElement;

    const parallax = () => {
      const sy = window.scrollY;
      // Existing elements parallax
      if (heroContent) heroContent.style.transform = `translateY(${sy * 0.3}px)`;
      if (heroDress)
        heroDress.style.transform = `translateY(calc(-50% + ${sy * 0.2}px))`;

      // New layers parallax with different speeds
      if (heroBgLayer1) heroBgLayer1.style.transform = `translateY(${sy * 0.1}px)`; // Slower layer
      if (heroBgLayer2) heroBgLayer2.style.transform = `translateY(${sy * 0.15}px)`; // Mid-speed layer
    };

    window.addEventListener('scroll', parallax, { passive: true });
    return () => window.removeEventListener('scroll', parallax);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg" />
      {/* New background layers for enhanced parallax */}
      <div className="hero-bg-layer-1" />
      <div className="hero-bg-layer-2" />
      <div className="hero-3d-dress">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKjvM5KZ4V5mTcVVLrvCudhUQHx462DQbJ96AeruQ_CEHEIMi-X8dVy2Adgb4HNipnrliwAME9Ech4nHnnyXoi9wRqXgjkYw8xwLE75VQcbZjKK73cBzebs80mfD4kavYlb1fqOBKd6iUjlCGwPWWl7gP5ToRklDqlJCJaRNU2VIIBCgceigBWOpQnpU-K5ZTrbiKz2XvICwgr-bLszWcGTqgSXbW4QxzQGD4MzpEgYv0yUZtX-AaO24pYqYd94WZ7FePCHBZmr21j" 
          alt="Bridal Dress"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      <div className="hero-content">
        <div className="hero-badge">✦ Premium Bridal Rentals ✦</div>
        <h1 className="hero-title">
          Find Your
          <br />
          <em>Dream Dress</em>
        </h1>
        <p className="hero-sub">For the most magical day of your life</p>
        <p className="hero-tagline">✦ Rent · Shine · Celebrate ✦</p>
        <div className="hero-btns">
          <a href="#showcase" className="btn-primary">
            Browse Collection
          </a>
          <a href="#contact" className="btn-outline">
            Book a Fitting
          </a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}