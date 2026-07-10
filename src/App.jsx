import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios';
import Navbar from './components/Navbar';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import CMSPage from './pages/CMS';
import Login from "./pages/Login";
import Register from "./pages/Register";

const fallbackProducts = [
  {
    id: '1',
    name: 'Aurelia Lounge Chair',
    category: 'Chairs',
    price: 420,
    image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80',
    description: 'Sculpted ash wood with plush linen upholstery for cozy evenings.',
  },
  {
    id: '2',
    name: 'Nordic Oak Bed',
    category: 'Beds',
    price: 980,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    description: 'A calm, minimalist bed frame with hand-finished oak detailing.',
  },
  {
    id: '3',
    name: 'Cedar Dining Table',
    category: 'Dining',
    price: 1180,
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=900&q=80',
    description: 'Solid cedar with a warm grain and generous seating for gatherings.',
  },
  {
    id: '4',
    name: 'Velvet Empire Sofa',
    category: 'Sofas',
    price: 1320,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
    description: 'Low-profile comfort with sculptural arms and rich upholstery.',
  },
  {
    id: '5',
    name: 'Linen Accent Console',
    category: 'Decor',
    price: 360,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    description: 'Presents layered texture and refined storage for curated interiors.',
  },
  {
    id: '6',
    name: 'Bamboo Temple Set',
    category: 'Temple',
    price: 550,
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    description: 'An elegant devotional display with meticulous handcrafted detailing.',
  },
];

function App() {
  const [products, setProducts] = useState(fallbackProducts);
  const [cart, setCart] = useState(() => {
    const stored = window.localStorage.getItem('mywoods-cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const stored = window.localStorage.getItem('mywoods-wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

  useEffect(() => {
    window.localStorage.setItem('mywoods-cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem('mywoods-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get('/api/woods');
        if (Array.isArray(response.data) && response.data.length > 0) {
          setProducts(response.data);
        }
      } catch (error) {
        setProducts(fallbackProducts);
      }
    };

    loadProducts();
  }, []);

  const addToCart = (product) => {
    const productId = product._id || product.id;
    setCart((current) => {
      const existing = current.find((item) => (item._id || item.id) === productId);
      if (existing) {
        return current.map((item) =>
          (item._id || item.id) === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1, id: productId }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((current) => current.filter((item) => (item._id || item.id) !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((current) =>
      current
        .map((item) =>
          (item._id || item.id) === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleWishlist = (product) => {
    const productId = product._id || product.id;
    setWishlist((current) => {
      const exists = current.some((item) => (item._id || item.id) === productId);
      if (exists) {
        return current.filter((item) => (item._id || item.id) !== productId);
      }
      return [...current, product];
    });
  };

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const wishlistCount = wishlist.length;

  return (
    <div className="app-shell">
      <Navbar cartCount={cartCount} wishlistCount={wishlistCount} />
      <AnnouncementBar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage products={products} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
          <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
          <Route path="/products/:id" element={<ProductDetailPage products={products} addToCart={addToCart} toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
          <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} addToCart={addToCart} toggleWishlist={toggleWishlist} />} />
          <Route path="/register" element={<Register />} />
          <Route
  path="/cms"
  element={
    <ProtectedRoute>
      <CMSPage />
    </ProtectedRoute>
  }
/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
