import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';
import { products } from '../data/products';

const reviews = [
  { id: 1, name: 'Emma R.', rating: 5, comment: 'The sofa is incredibly comfortable and looks stunning in my living room.' },
  { id: 2, name: 'Liam K.', rating: 4.5, comment: 'Premium materials and fast delivery. The details are exceptional.' },
  { id: 3, name: 'Ava S.', rating: 4.8, comment: 'A luxury finish at a great price. My guests always compliment it.' }
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, addRecentlyViewed } = useContext(ShopContext);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find((item) => item.id === id);

  useEffect(() => {
    if (product) {
      addRecentlyViewed(product);
    }
  }, [product, addRecentlyViewed]);

  if (!product) {
    return (
      <div className="page-shell not-found-shell">
        <h2>Product not found</h2>
        <p>We could not locate that product. Please return to the Shop page.</p>
        <Link to="/shop" className="button-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <div className="page-shell product-details-page">
      <section className="detail-hero glass-card">
        <div className="detail-gallery">
          <div className="detail-main-image">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=640';
              }}
            />
          </div>
          <div className="detail-thumbs">
            {product.images.map((image, index) => (
              <button
                key={image}
                className={activeImage === index ? 'thumb active' : 'thumb'}
                onClick={() => setActiveImage(index)}
                aria-label={`Show image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${product.name} variation ${index + 1}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=640';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="detail-summary">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-meta">{product.brand} · {product.availability}</p>
          <div className="detail-rating">{product.rating} ★ ({product.reviews} reviews)</div>
          <div className="price-block">
            <span className="new-price">${product.price}</span>
            <span className="old-price">${product.oldPrice}</span>
            <span className="discount-badge">{product.discount}% off</span>
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-actions">
            <button className="button-primary" onClick={() => { addToCart(product); navigate('/cart'); }}>
              Add to cart
            </button>
            <button className="button-secondary" onClick={() => addToWishlist(product)}>
              Add to wishlist
            </button>
          </div>

          <div className="detail-specs glass-card">
            <h3>Specifications</h3>
            <ul>
              {product.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <div className="detail-list">
              <div>
                <span>Material</span>
                <strong>{product.material}</strong>
              </div>
              <div>
                <span>Dimensions</span>
                <strong>{product.dimensions}</strong>
              </div>
              <div>
                <span>Weight</span>
                <strong>{product.weight}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tabs-grid">
        <div className="content-block glass-card">
          <h3>Customer reviews</h3>
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div>
                <strong>{review.name}</strong>
                <span>{review.rating} ★</span>
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="content-block glass-card">
          <h3>Related pieces</h3>
          <div className="related-grid">
            {related.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="related-card">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=640';
                  }}
                />
                <div>
                  <strong>{item.name}</strong>
                  <span>${item.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
