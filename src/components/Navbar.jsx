import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Living Room', to: '/categories/living-room' },
  { label: 'Bedroom', to: '/categories/bedroom' },
  { label: 'Dining', to: '/categories/dining' }
];

function Navbar() {
  const { cartCount, wishlistItems } = useContext(ShopContext);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <header className="navbar-shell">
      <div className="navbar-backdrop" />
      <div className="navbar-inner">
        <Link to="/" className="brand-link">
          <span className="brand-mark">M</span>
          <div>
            <p>MyWoods</p>
            <small>Furniture Atelier</small>
          </div>
        </Link>

        <div className="navbar-search">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search premium furniture"
            aria-label="Search products"
          />
          <button type="button">Search</button>
        </div>

        <nav className={`navbar-links ${open ? 'open' : ''}`}>
          <button className="nav-close" onClick={() => setOpen(false)}>
            ×
          </button>
          <ul>
            <li>
              <label className="categories-dropdown">
                Categories
                <select aria-label="Choose category">
                  <option>All Categories</option>
                  <option>Sofas</option>
                  <option>Beds</option>
                  <option>Dining Tables</option>
                </select>
              </label>
            </li>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <Link to="/wishlist" className="icon-button" aria-label="Wishlist">
            ♥<span>{wishlistItems.length}</span>
          </Link>
          <Link to="/cart" className="icon-button" aria-label="Cart">
            🛒<span>{cartCount}</span>
          </Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
      <div className="navbar-hero-wave" />
    </header>
  );
}

export default Navbar;