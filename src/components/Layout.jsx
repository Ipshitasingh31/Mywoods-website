import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import Toast from './Toast';

function Layout() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="page-content"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Toast />
    </div>
  );
}

export default Layout;
