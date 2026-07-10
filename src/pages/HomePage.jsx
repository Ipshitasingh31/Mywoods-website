import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const categories = [
  { name: 'Beds', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sofas', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80' },
  { name: 'Dining', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Chairs', image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80' },
  { name: 'Decor', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Temple', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
];

const features = [
  { title: 'Premium Quality', text: 'Crafted with luxe finishes and careful detailing.' },
  { title: 'Solid Wood', text: 'Beautiful hardwoods sourced for strength and warmth.' },
  { title: 'Affordable Price', text: 'Accessible luxury designed for modern homes.' },
  { title: 'Fast Delivery', text: 'White-glove service and swift nationwide shipping.' },
];

const testimonials = [
  {
    name: 'Ava Chen',
    role: 'Interior Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: '★★★★★',
    review: 'Every piece feels bespoke and elevated. My living room looks magazine-ready.',
  },
  {
    name: 'Liam Ortiz',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: '★★★★★',
    review: 'The craftsmanship and delivery experience exceeded every expectation.',
  },
  {
    name: 'Mina Patel',
    role: 'Architect',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: '★★★★★',
    review: 'Sophisticated, durable, and stunningly finished—perfect for our showroom.',
  },
];

function HomePage({ products, addToCart, toggleWishlist, wishlist }) {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <h1>
            Made to Last.
            <br />
            <span>Made for You.</span>
          </h1>
        </div>
        <div className="hero__image">
          <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80" alt="Premium furniture interior"/>
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Explore by Category</h2>
          <p>Curated essentials for every room.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.name} className="card category-card">
              <img className="category-card__image" src={category.image} alt={category.name} />
              <div className="category-card__body">
                <h3>{category.name}</h3>
                <p>Modern silhouettes with timeless character.</p>
                <Link className="btn btn--secondary" to="/products">View Collection</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Featured Pieces</h2>
          <p>New arrivals crafted to elevate daily rituals.</p>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product._id || product.id}
              product={product}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={wishlist.some((item) => (item._id || item.id) === (product._id || product.id))}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Why Choose Us</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="card feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Client Love</h2>
          <p>Trusted by homeowners and designers alike.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card testimonial-card">
              <div>{testimonial.rating}</div>
              <p>{testimonial.review}</p>
              <div className="testimonial-card__author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <strong>{testimonial.name}</strong>
                  <div>{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <div>
          <h2>Stay in the loop</h2>
          <p>Receive launches, styling tips, and exclusive offers.</p>
        </div>
        <form className="newsletter__form">
          <input type="email" placeholder="Email address" />
          <button className="btn btn--secondary" type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}

export default HomePage;
