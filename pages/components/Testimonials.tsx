import { useEffect, useRef } from 'react';

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let interval = setInterval(() => {
      track.scrollBy({ left: 360, behavior: 'smooth' });
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 4000);

    const stop = () => clearInterval(interval);
    track.addEventListener('mouseenter', stop);
    return () => {
      clearInterval(interval);
      track.removeEventListener('mouseenter', stop);
    };
  }, []);

 const cards = [
  {
    text: "Alhamdulillah, I felt truly beautiful and confident on my nikah day. The gown was elegant and modest, exactly what I was looking for.",
    name: 'Ayesha Nazeera',
    date: 'Married · January 2025',
    avatar: '🧕',
  },
  {
    text: "The team was very respectful and patient. They helped me choose a modest and graceful dress. May Allah bless them for their kindness.",
    name: 'Fathima Zahra',
    date: 'Married · March 2025',
    avatar: '🧕',
  },
  {
    text: "Alhamdulillah, everything was perfect. The dress was beautiful, modest, and affordable. It truly made my special day memorable.",
    name: 'Zainab Fairoza',
    date: 'Married · February 2025',
    avatar: '🧕',
  },
  {
    text: "Our whole bridal group was dressed modestly and elegantly. Everyone loved the coordinated look. JazakAllah khair for the amazing service.",
    name: 'Ruqaiya Shifana',
    date: 'Married · April 2025',
    avatar: '🧕',
  },
  
];

  return (
    <section id="testimonials">
      <div className="section-header reveal">
        <span className="section-label">✦ Happy Brides</span>
        <h2 className="section-title">
          What Our <em>Brides Say</em>
        </h2>
        <div className="section-divider" />
      </div>
      <div className="testimonials-track reveal" ref={trackRef}>
        {cards.map((c, i) => (
          <div key={i} className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{c.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{c.avatar}</div>
              <div>
                <div className="author-name">{c.name}</div>
                <div className="author-date">{c.date}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}