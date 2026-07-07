import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <div className="page-shell success-page">
      <section className="success-card glass-card">
        <span className="success-icon">✓</span>
        <h1>Order confirmed</h1>
        <p>Thank you for shopping at MyWoods. Your premium furniture will arrive soon.</p>
        <div className="success-actions">
          <Link to="/shop" className="button-secondary">
            Continue shopping
          </Link>
          <Link to="/" className="button-primary">
            Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}

export default OrderSuccess;
