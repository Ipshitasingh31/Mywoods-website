import { useMemo, useState } from 'react';
import { products as productData } from '../data/products';
import { ShopContext } from './shop-context';

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast({ id: Date.now(), message });
    window.clearTimeout(window.__shopToastTimer);
    window.__shopToastTimer = window.setTimeout(() => setToast(null), 2600);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...current, { ...product, quantity }];
    });
    showToast(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId));
    showToast('Removed from cart');
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const addToWishlist = (product) => {
    setWishlistItems((current) => {
      if (current.some((item) => item.id === product.id)) {
        return current;
      }
      return [...current, product];
    });
    showToast(`${product.name} added to wishlist`);
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((current) => current.filter((item) => item.id !== productId));
    showToast('Removed from wishlist');
  };

  const addRecentlyViewed = (product) => {
    setRecentlyViewed((current) => {
      const filtered = current.filter((item) => item.id !== product.id);
      return [product, ...filtered].slice(0, 6);
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const value = useMemo(
    () => ({
      products: productData,
      cartItems,
      wishlistItems,
      recentlyViewed,
      toast,
      cartCount,
      cartSubtotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      addToWishlist,
      removeFromWishlist,
      addRecentlyViewed,
      showToast
    }),
    [cartItems, wishlistItems, recentlyViewed, toast, cartCount, cartSubtotal]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
