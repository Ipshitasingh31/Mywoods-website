function CartPage({ cart, removeFromCart, updateQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cart.length) {
    return (
      <div className="page-shell">
        <h1>Your Cart</h1>
        <div className="empty-state">No items added yet.</div>
      </div>
    );
  }

  return (
    <div className="page-shell grid-2">
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item._id || item.id}>
            <div className="cart-item__content">
              <img src={item.image || 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80'} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>${item.price}</p>
              </div>
            </div>
            <div className="card-actions">
              <button className="icon-btn" onClick={() => updateQuantity(item._id || item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button className="icon-btn" onClick={() => updateQuantity(item._id || item.id, 1)}>+</button>
              <button className="btn btn--secondary" onClick={() => removeFromCart(item._id || item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
        <p>Total: ${total}</p>
        <button className="btn btn--primary">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
