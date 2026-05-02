export default function Gallery() {
  const images = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ-OoWfP1hGyx7TluQtiyjqfFRCBq6ah2Utv0xIvskTniNkbf2msooAo5LavDobrvQhTQsNwftotVPNei1B4xAwIc8DJKFxa0emiIVaNLhMMMFcJWvWV-M9d-bgnWw76-uK-2LUBtRSgmH3d8ujMbQ22rQxEI-ZXTT7DMJoOxyx37equyUi8Haghz8W5TpLPJXdFe7a3vuN7Fv8C_6D0BZKw9EeNdfNhFWsDDXzWLrpqMFiWCLYxuG9tkhb-iZhuy3BQVyPENkWDlO',
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop',
  
    'https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=600&auto=format&fit=crop',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBnf54Yd0Ci4utG4ZhSSDlwHqLZwEMKJ2mzA0-wYIsQWsLFm5fBkl55m_AuznKEMjb4DDMVc1iSRpOllScgT42-YVxfNlYFEvPfksWpZLhMn8Mv9U6nJ6CSRBRDcNip3vWvWjxR3xflaF6tAU45cwqGJ8cbmcnunIZ7-rlorcqaV5gJ-Hq5LhEEpFZ8-bkGlv-2bdQAQD6YZkmJElgjJ_RrMyDVtFMxcTTEMGeVJ7xD5JOuJHlp0XSn__qjuJHokNoIGxfuPnEES3R_',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ54XIdEXuVcnxiJGWrlnMfyCy9h-FxscRnPVfzPZEfVgImSw5Mwhm8uxPBV01unkmWcRoiR_DXC_1pFnwh_0GllBfQkMrAfuG1RCclYFc4qDydRHET8UOipHQs_hS7Ot-ddQ2WoNkrjnJSTF86H-ci1l28K2sJy2pGS4qo5S00nDr43HxbEvpEMiWqpLp6YxhD5S7-wJipt3L0ujxPWGM4GvvOtAJxJAZwvXszVj1j7CbF-wxqZTmFROQtYjrwstNoTviVislkHfU'
  ];

  return (
    <section id="gallery">
      <div className="section-header reveal">
        <span className="section-label">✦ Lookbook</span>
        <h2 className="section-title">
          Our <em>Gallery</em>
        </h2>
        <div className="section-divider" />
      </div>
      <div className="gallery-grid reveal">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item">
            <img src={src} alt={`Gallery item ${idx + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="#contact" className="btn-outline">
          View Full Gallery
        </a>
      </div>
    </section>
  );
}