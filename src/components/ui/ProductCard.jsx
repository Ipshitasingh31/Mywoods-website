import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useContext(ShopContext);

  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div className="product-image-wrap">
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        <span className="discount-badge">{product.discount}% off</span>
        <div className="product-actions">
          <button onClick={() => addToWishlist(product)} aria-label="Add to wishlist">
            ♥
          </button>
          <Link to={`/product/${product.id}`} className="quick-view">
            Quick view
          </Link>
        </div>
      </div>
      <div className="product-meta">
        <p className="product-brand">{product.brand}</p>
        <h3>{product.name}</h3>
        <div className="product-rating">{product.rating} ★ ({product.reviews})</div>
        <div className="product-prices">
          <span className="new-price">${product.price}</span>
          <span className="old-price">${product.oldPrice}</span>
        </div>
        <button className="button-secondary" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>
    </motion.article>
  );
}

export default ProductCard;
