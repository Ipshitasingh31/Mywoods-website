import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Checkout() {
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.05;
  const delivery = subtotal > 0 ? 35 : 0;
  const total = subtotal + gst + delivery;

  return (
    <div className="page-shell checkout-page">
      <section className="page-hero glass-card checkout-hero">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1>Complete your order</h1>
          <p>Finalize your luxury furniture selection with our streamlined checkout experience.</p>
        </div>
      </section>

      <section className="checkout-layout">
        <div className="checkout-form glass-card">
          <h2>Shipping details</h2>
          <div className="form-grid">
            <label>
              Full name
              <input type="text" placeholder="Enter your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Address
              <input type="text" placeholder="Street address" />
            </label>
            <label>
              City
              <input type="text" placeholder="City" />
            </label>
            <label>
              Postal code
              <input type="text" placeholder="Postal code" />
            </label>
            <label>
              Country
              <input type="text" placeholder="Country" />
            </label>
          </div>
          <button
            className="button-primary"
            onClick={() => navigate('/order-success')}
            disabled={cartItems.length === 0}
          >
            Place order
          </button>
        </div>

        <aside className="order-summary glass-card">
          <h2>Order summary</h2>
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
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <span>{item.name}</span>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            ))}
          </div>
          <Link to="/cart" className="button-secondary">
            Edit cart
          </Link>
        </aside>
      </section>
    </div>
  );
}

export default Checkout;
