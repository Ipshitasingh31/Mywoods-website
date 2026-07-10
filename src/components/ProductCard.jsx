import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart, toggleWishlist, isWishlisted }) {
  return (
    <article className="card product-card">
      <img className="product-card__image" src={product.image || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'} alt={product.name} />
      <div className="product-card__body">
        <div className="product-card__meta">
          <span className="product-card__category">{product.category}</span>
          <span className="product-card__price">${product.price}</span>
        </div>
        <h3>{product.name}</h3>
        <p>{product.description || 'Hand-finished wood with premium comfort.'}</p>
        <div className="product-card__actions">
          <button className="btn btn--primary" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="icon-btn" onClick={() => toggleWishlist(product)}>
            {isWishlisted ? '♥' : '♡'}
          </button>
        </div>
        <div className="card-actions" style={{ marginTop: '0.75rem' }}>
          <Link className="btn btn--secondary" to={`/products/${product._id || product.id}`}>
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
