import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <h3>Mywoods</h3>
          <p>Timeless furniture shaped with warm woods, clean lines, and modern comfort.</p>
        </div>
        <div>
          <h3>Categories</h3>
          <ul>
            <li><Link to="/products">Beds</Link></li>
            <li><Link to="/products">Sofas</Link></li>
            <li><Link to="/products">Dining</Link></li>
            <li><Link to="/products">Decor</Link></li>
          </ul>
        </div>
        <div>
          <h3>Customer Care</h3>
          <ul>
            <li><Link to="/products">Shipping</Link></li>
            <li><Link to="/products">Returns</Link></li>
            <li><Link to="/products">Support</Link></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>hello@mywoods.com</li>
            <li>+1 (800) 555-0146</li>
            <li>14 River Street, Austin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
