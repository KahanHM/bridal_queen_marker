import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <a
          href="#"
          className="nav-logo"
          onClick={(e) => {
  e.preventDefault();
  setMobileOpen(false);
  setTimeout(() => scrollTo('contact'), 50);
}}
        >
          <span className="crown">👑</span>
          <span>Bridal Queen Marker</span>
        </a>

        <ul className="nav-links">
          {[
            ['Collections', 'collections'],
            ['Dresses', 'showcase'],
            ['How It Works', 'how'],
            ['Gallery', 'gallery'],
            ['Contact', 'contact'],
          ].map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(id);
                }}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav-cta"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('contact');
              }}
            >
              Book a Fitting
            </a>
          </li>
        </ul>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <button
          className="mobile-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        {[
          ['Collections', 'collections'],
          ['Dresses', 'showcase'],
          ['How It Works', 'how'],
          ['Gallery', 'gallery'],
          ['Contact', 'contact'],
        ].map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(id);
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          style={{ color: 'var(--gold)' }}
          onClick={(e) => {
            e.preventDefault();
            scrollTo('contact');
          }}
        >
          Book a Fitting ✦
        </a>
      </div>
    </>
  );
}