import ProductCard from '../components/ProductCard';

function ProductsPage({ products, addToCart, toggleWishlist, wishlist }) {
  return (
    <div className="page-shell">
      <h1>Collection</h1>
      <p>Discover premium wooden furniture designed for enduring beauty.</p>
      <div className="product-grid" style={{ marginTop: '1.2rem' }}>
        {products.map((product) => (
          <ProductCard
            key={product._id || product.id}
            product={product}
            addToCart={addToCart}
            toggleWishlist={toggleWishlist}
            isWishlisted={wishlist.some((item) => (item._id || item.id) === (product._id || product.id))}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
