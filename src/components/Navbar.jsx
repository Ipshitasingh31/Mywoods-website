import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Sofa & Seating', to: '/products' },
  { label: 'Beds & Bedroom', to: '/products' },
  { label: 'Dining & Kitchen', to: '/products' },
  { label: 'Shop Now', to: '/products', isAction: true },
  { label: 'CMS', to: '/cms', isAction: true },
];

function Navbar({ cartCount, wishlistCount }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="brand" aria-label="Mywoods home">
          <span className="brand__mark">M</span>
          <span className="brand__text">Mywoods</span>
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar-icons">
          <Link to="/products" className="navbar-icon" aria-label="Search">
            🔍
          </Link>
          <Link to="/wishlist" className="navbar-icon" aria-label="Wishlist">
            ♡
          </Link>
          <Link to="/cart" className="navbar-icon" aria-label="Cart">
            🛍️
            {cartCount > 0 ? <span className="navbar-icon__badge">{cartCount}</span> : null}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
