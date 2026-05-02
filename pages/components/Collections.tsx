export default function Collections() {
  return (
    <section id="collections">
      <div className="section-header reveal">
        <span className="section-label">✦ Our Categories</span>
        <h2 className="section-title">
          Everything for Your
          <br />
          <em>Perfect Wedding</em>
        </h2>
        <div className="section-divider" />
      </div>
      <div className="collections-grid">
        {[
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB98KEBxfHyNdvg1iTaQHuCeOjhdmh9OlMMmnNx5ptIWSd6q8Vfk8cEdYh7AArguIcSStttxPSPYpk1VxSbqNHpDfdnnY9smDmAtc5jx6aNX8-94Kczbh6CeAyEg_L8Qrg0ab30xjPmFozHu3xF2cX_4zA_CBbiPn4aUyxjtUuh3yrHSBuOJ0foC6nIEZDOHQKfxy8rayof-aB6bBFG_7ms4oGdhGRH8PzcmlehoHeC-eMInKtfYTHYoWKWtkVwJ46MZUvxV4x85Ani',
            name: 'Jewelry Sets',
            desc: 'From classic ball gowns to modern minimalist silhouettes — find the one that tells your story.',
            price: 'FROM LKR 5,000 / DAY',
            badge: 'Most Popular',
          },
          {
            image: '/images/showcase/main.png',
            name: 'Bridesmaid Dresses',
            desc: 'Coordinate your whole bridal party with our stunning range of bridesmaid collections.',
            price: 'FROM LKR 2,000 / DAY',
            badge: 'New Arrivals',
            newBadge: true,
          },
          // {
          //   image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=400&auto=format&fit=crop',
          //   name: 'Veils & Headpieces',
          //   desc: 'Cathedral veils, floral crowns, tiaras and more — crown your look with elegance.',
          //   price: 'FROM LKR 1,000 / DAY',
          // },
          {
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=400&auto=format&fit=crop',
            name: 'Jewelry Sets',
            desc: 'Sparkling necklaces, earrings & bracelets to complete your bridal ensemble.',
            price: 'FROM LKR 800 / DAY',
          },
          // {
          //   image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop',
          //   name: 'Bridal Shoes',
          //   desc: 'Step into your new life in style — heels, flats, and embellished sandals available.',
          //   price: 'FROM LKR 500 / DAY',
          // },
          {
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHEb0iwJ-FQyrEAzmhiJmTEdJjXKjxyyOEL7b3RruqlJUvhFXeZcpe0U_nkKqmAyFzhYArLq612D8Pv6NTjkcR8WrIrRdwVNMtIIgxinOTNIO7FaKiLgTp5a49ABDyuUqqYy5wUsbzXt4WJM5z4c8AHHp9KWB4Z_OOZMfoYwdBUtakgHQ2EcTRNjpEs8jGlMfvyk1dKSy51mi3i4cDmre10Xd2h5MYF2Eo3vy9Gx0iG-b4YDApxT4q2PViS5xay9cl-7t3s8P_vNBY',
            name: 'Bouquets',
            desc: 'Silk & artificial floral bouquets in every colour palette — fresh & preserved options.',
            price: 'FROM LKR 1,500 / DAY',
          },
        ].map((item, idx) => (
          <div key={idx} className="collection-card reveal">
            {item.badge && (
              <span className={`card-badge${item.newBadge ? ' new' : ''}`}>
                {item.badge}
              </span>
            )}
            <div className="card-image-container">
              <img src={item.image} alt={item.name} className="card-image" />
            </div>
            <h3 className="card-name">{item.name}</h3>
            <p className="card-desc">{item.desc}</p>
            <p className="card-price">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}