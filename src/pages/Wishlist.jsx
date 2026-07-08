import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(ShopContext);

  return (
    <div className="page-shell wishlist-page">
      <section className="page-hero glass-card wishlist-hero">
        <div>
          <p className="eyebrow">Favorites</p>
          <h1>Your wishlist of luxury furniture</h1>
          <p>Save pieces you love for later styling and checkout.</p>
        </div>
      </section>

      <section className="wishlist-grid">
        {wishlistItems.length === 0 ? (
          <div className="empty-state glass-card">
            <h2>Your wishlist is empty</h2>
            <p>Add premium products to save them for later.</p>
            <Link to="/shop" className="button-primary">
              Explore products
            </Link>
          </div>
        ) : (
          wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-card glass-card">
              <img src={item.images[0]} alt={item.name} loading="lazy" />
              <div>
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <div className="product-prices">
                  <span className="new-price">${item.price}</span>
                  <span className="old-price">${item.oldPrice}</span>
                </div>
                <div className="wishlist-actions">
                  <button className="button-primary" onClick={() => addToCart(item)}>
                    Add to cart
                  </button>
                  <button className="button-secondary" onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Wishlist;
