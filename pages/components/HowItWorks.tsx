export default function HowItWorks() {
  const steps = [
    { num: 1, icon: '🔍', title: 'Browse & Select', desc: 'Explore our curated collection online or visit our showroom. Choose your dream dress and accessories.' },
    { num: 2, icon: '✨', title: 'Try & Fit', desc: 'Book a fitting appointment. Our expert stylists will ensure everything fits perfectly for your big day.' },
    { num: 3, icon: '💕', title: 'Pick Up & Return', desc: 'Collect your rental on your chosen date and return after the event. We handle the rest — stress free!' },
  ];

  return (
    <section id="how">
      <div className="section-header reveal">
        <span className="section-label">✦ Simple Process</span>
        <h2 className="section-title">
          How It <em>Works</em>
        </h2>
        <div className="section-divider" />
      </div>
      <div className="steps-container">
        {steps.map((s) => (
          <div key={s.num} className="step reveal">
            <div className="step-num">
              {s.num}
              <span className="step-icon">{s.icon}</span>
            </div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}