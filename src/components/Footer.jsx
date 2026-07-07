import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="footer-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <div className="footer-grid">
        <div>
          <h4>MyWoods</h4>
          <p>Premium furniture for modern homes. Designed with calm luxury and effortless styling.</p>
        </div>

        <div>
          <h5>Customer Service</h5>
          <ul>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order Tracking</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h5>Information</h5>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h5>Newsletter</h5>
          <p>Receive curated furniture drops and luxury home styling tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 MyWoods. Crafted for premium living.</p>
        <div className="social-icons">Instagram · Pinterest · LinkedIn</div>
      </div>
    </motion.footer>
  );
}

export default Footer;
