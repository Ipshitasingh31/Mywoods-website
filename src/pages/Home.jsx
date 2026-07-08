import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

      <section className="hero">
        <div className="hero-content">
          <h1>Premium Wooden Furniture</h1>

          <p>
            Discover handcrafted furniture made from premium quality wood.
            Elegant, durable and designed for modern living.
          </p>

          <button>Explore Collection</button>
        </div>
      </section>

      <section className="home-support-section">
        <div className="glass-card support-card">
          <p className="eyebrow">MyWoods</p>
          <h2>Crafted for comfort, service, and timeless design.</h2>
          <p>
            From expert guidance to lasting craftsmanship, MyWoods brings premium furniture and
            concierge support to every room.
          </p>

          <div className="support-grid">
            <div>
              <h3>MyWoods</h3>
              <p>Curated collections built around elegant living and everyday comfort.</p>
            </div>
            <div>
              <h3>Customer Service</h3>
              <p>Friendly support for styling advice, delivery questions, and aftercare.</p>
            </div>
            <div>
              <h3>Fast Delivery</h3>
              <p>Trusted shipping and careful handling to bring your pieces home safely.</p>
            </div>
          </div>

          <Link to="/shop" className="button-primary support-link">
            Get into the shop
          </Link>
        </div>
      </section>

      <section className="products">
        <h2>Our Best Sellers</h2>

        <div className="card-container">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=480"
              alt="Chair"
            />
            <h3>Wooden Chair</h3>
            <p>Comfortable handcrafted wooden chair.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=480"
              alt="Table"
            />
            <h3>Dining Table</h3>
            <p>Premium oak dining table for your family.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=480"
              alt="Bed"
            />
            <h3>Wooden Bed</h3>
            <p>Luxury wooden bed with modern design.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;