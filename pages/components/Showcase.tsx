export default function Showcase() {
  const dresses = [
    {
      name: 'Celestial Princess',
      style: 'Ball Gown · Ivory White',
      price: '8,000',
      bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)',
      image: '/images/showcase/whiterow.webp',
      avail: 'Available',
      availClass: 'avail-yes',
    },
    {
      name: 'Golden Empress',
      style: 'Traditional · Champagne Gold',
      price: '12,000',
      bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)',
      image: '/images/showcase/brown.webp',
      avail: '2 Left',
      availClass: 'avail-few',
    },
    {
      name: 'Rose Enchantress',
      style: 'Mermaid · Blush Rose',
      price: '10,000',
      bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)',
      image: '/images/showcase/halfdress.webp',
      avail: 'Available',
      availClass: 'avail-yes',
    },
    {
      name: 'Sage Serenity',
      style: 'Bohemian · Sage & Lace',
      price: '7,500',
      bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)',
      image: '/images/showcase/full.webp',
      avail: 'Available',
      availClass: 'avail-yes',
    },
  ];

  return (
    <section id="showcase">
      <div className="section-header reveal">
        <span className="section-label">✦ Featured Collection</span>
        <h2 className="section-title">
          Our <em>Signature Gowns</em>
        </h2>
        <div className="section-divider" />
      </div>
      <div className="showcase-grid">
        {dresses.map((d, i) => (
          <div key={i} className="dress-card reveal">
            <div className="dress-img" style={{ background: d.bg }}>
              <span className={`dress-avail ${d.availClass}`}>{d.avail}</span>
              <img src={d.image} alt={d.name} className="showcase-image" />
            </div>
            <div className="dress-info">
              <h3 className="dress-name">{d.name}</h3>
              <p className="dress-style">{d.style}</p>
              <div className="dress-footer">
                <div className="dress-price">
                  LKR {d.price}
                  <span>/day</span>
                </div>
                <button
                  className="btn-rent"
                  onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="#contact" className="btn-primary">
          View All Dresses
        </a>
      </div>
    </section>
  );
}