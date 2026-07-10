import { Link } from 'react-router-dom';

function WishlistPage({ wishlist, addToCart, toggleWishlist }) {
  if (!wishlist.length) {
    return (
      <div className="page-shell">
        <h1>Your Wishlist</h1>
        <div className="empty-state">Nothing saved yet.</div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <h1>Your Wishlist</h1>
      <div className="product-grid">
        {wishlist.map((item) => (
          <article className="card product-card" key={item._id || item.id}>
            <img className="product-card__image" src={item.image || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'} alt={item.name} />
            <div className="product-card__body">
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <div className="product-card__meta">
                <span className="product-card__price">${item.price}</span>
              </div>
              <div className="product-card__actions">
                <button className="btn btn--primary" onClick={() => addToCart(item)}>Add to Cart</button>
                <button className="icon-btn" onClick={() => toggleWishlist(item)}>♥</button>
              </div>
              <div className="card-actions" style={{ marginTop: '0.75rem' }}>
                <Link className="btn btn--secondary" to={`/products/${item._id || item.id}`}>View Details</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
