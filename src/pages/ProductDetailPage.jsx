import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetailPage({ products, addToCart, toggleWishlist, wishlist }) {
  const { id } = useParams();

  const product = useMemo(() => products.find((item) => (item._id || item.id) === id), [products, id]);

  if (!product) {
    return (
      <div className="page-shell">
        <div className="empty-state">This piece is currently unavailable.</div>
      </div>
    );
  }

  const isWishlisted = wishlist.some((item) => (item._id || item.id) === (product._id || product.id));

  return (
    <div className="page-shell">
      <div className="grid-2">
        <div className="detail-card">
          <img src={product.image || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'} alt={product.name} />
          <h1>{product.name}</h1>
          <p>{product.description || 'Designed with premium wood and tailored comfort.'}</p>
          <div className="card-actions">
            <button className="btn btn--primary" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="icon-btn" onClick={() => toggleWishlist(product)}>{isWishlisted ? '♥' : '♡'}</button>
          </div>
        </div>
        <div className="detail-card">
          <h2>Product Details</h2>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Material:</strong> Solid oak, walnut, or ash</p>
          <p><strong>Delivery:</strong> White-glove setup available</p>
          <Link className="btn btn--secondary" to="/products">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
