import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/shop-context';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.05;
  const delivery = subtotal > 0 ? 35 : 0;
  const total = subtotal + gst + delivery;

  return (
    <div className="page-shell cart-page">
      <section className="page-hero glass-card cart-hero">
        <div>
          <p className="eyebrow">Your cart</p>
          <h1>Review items before checkout</h1>
          <p>Secure your premium furniture with transparent pricing, fast shipping, and effortless checkout.</p>
        </div>
      </section>

      <section className="cart-layout">
        <div className="cart-items glass-card">
          {cartItems.length === 0 ? (
            <div className="empty-state">
              <h2>Your cart is empty</h2>
              <p>Browse our shop to add elegant furniture pieces to your collection.</p>
              <Link to="/shop" className="button-primary">
                Continue shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-table-head">
                <span>Item</span>
                <span>Quantity</span>
                <span>Price</span>
              </div>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-row">
                  <div className="cart-item-meta">
                    <img src={item.images[0]} alt={item.name} loading="lazy" />
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.brand}</span>
                      <button className="remove-link" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <div className="price-label">${item.price * item.quantity}</div>
                </div>
              ))}
            </>
          )}
        </div>

        <aside className="cart-summary glass-card">
          <h2>Price summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>GST</span>
            <span>${gst.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <div className="coupon-card">
            <input type="text" placeholder="Coupon code" />
            <button type="button" className="button-secondary">
              Apply
            </button>
          </div>
          <button
            className="button-primary"
            onClick={() => navigate('/checkout')}
            disabled={cartItems.length === 0}
          >
            Proceed to checkout
          </button>
        </aside>
      </section>
    </div>
  );
}

export default Cart;
