import { useEffect, useMemo, useState } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import ProductCard from '../components/ui/ProductCard';
import { brands, categories as categoryData, products as productData } from '../data/products';

function Shop() {
  const { addToWishlist } = useContext(ShopContext);
  const [filters, setFilters] = useState({
    category: 'All',
    brand: 'All',
    color: 'All',
    rating: 'All',
    discount: 'All',
    availability: 'All',
    minPrice: 0,
    maxPrice: 3000
  });
  const [sort, setSort] = useState('latest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 380);
    return () => window.clearTimeout(timer);
  }, []);

  const productList = useMemo(() => {
    return productData
      .filter((product) =>
        filters.category === 'All' || product.category === filters.category
      )
      .filter((product) => filters.brand === 'All' || product.brand === filters.brand)
      .filter((product) => filters.color === 'All' || product.colors.includes(filters.color))
      .filter((product) => filters.rating === 'All' || product.rating >= Number(filters.rating))
      .filter((product) =>
        filters.discount === 'All' || product.discount >= Number(filters.discount)
      )
      .filter((product) =>
        filters.availability === 'All' || product.availability === filters.availability
      )
      .filter((product) => product.price >= filters.minPrice && product.price <= filters.maxPrice)
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price;
        if (sort === 'price-high') return b.price - a.price;
        if (sort === 'popular') return b.reviews - a.reviews;
        if (sort === 'best-selling') return b.discount - a.discount;
        return 0;
      });
  }, [filters, sort]);

  const label = filters.category === 'All' ? 'All Categories' : filters.category;

  return (
    <div className="page-shell shop-page">
      <section className="page-hero glass-card shop-hero">
        <div>
          <p className="eyebrow">Discover modern furniture</p>
          <h1>Shop luxury pieces with effortless style</h1>
          <p className="hero-copy">
            Explore a curated collection of living room, bedroom, and dining furniture designed for elevated comfort.
          </p>
        </div>
      </section>

      <section className="shop-layout">
        <aside className="filters-panel glass-card">
          <div className="section-label">Filters</div>
          <div className="filter-group">
            <label>Category</label>
            <select
              value={filters.category}
              onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
            >
              <option>All</option>
              {categoryData.map((category) => (
                <option key={category.id}>{category.label}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Brand</label>
            <select
              value={filters.brand}
              onChange={(e) => setFilters((prev) => ({ ...prev, brand: e.target.value }))}
            >
              <option>All</option>
              {brands.map((brand) => (
                <option key={brand}>{brand}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Color</label>
            <select
              value={filters.color}
              onChange={(e) => setFilters((prev) => ({ ...prev, color: e.target.value }))}
            >
              <option>All</option>
              <option>Beige</option>
              <option>Black</option>
              <option>Oak</option>
              <option>White</option>
              <option>Walnut</option>
            </select>
          </div>

          <div className="filter-group range-group">
            <label>Price Range</label>
            <div className="price-inputs">
              <input
                type="number"
                min="0"
                value={filters.minPrice}
                onChange={(e) => setFilters((prev) => ({ ...prev, minPrice: Number(e.target.value) }))}
                aria-label="Minimum price"
              />
              <span>–</span>
              <input
                type="number"
                min="0"
                value={filters.maxPrice}
                onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))}
                aria-label="Maximum price"
              />
            </div>
          </div>

          <div className="filter-group">
            <label>Rating</label>
            <select
              value={filters.rating}
              onChange={(e) => setFilters((prev) => ({ ...prev, rating: e.target.value }))}
            >
              <option value="All">All</option>
              <option value="4">4 ★ & up</option>
              <option value="4.5">4.5 ★ & up</option>
              <option value="4.7">4.7 ★ & up</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Discount</label>
            <select
              value={filters.discount}
              onChange={(e) => setFilters((prev) => ({ ...prev, discount: e.target.value }))}
            >
              <option value="All">All</option>
              <option value="10">10%+</option>
              <option value="15">15%+</option>
              <option value="20">20%+</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Availability</label>
            <select
              value={filters.availability}
              onChange={(e) => setFilters((prev) => ({ ...prev, availability: e.target.value }))}
            >
              <option>All</option>
              <option>In stock</option>
              <option>Limited stock</option>
            </select>
          </div>

          <button
            className="button-secondary"
            onClick={() =>
              setFilters({
                category: 'All',
                brand: 'All',
                color: 'All',
                rating: 'All',
                discount: 'All',
                availability: 'All',
                minPrice: 0,
                maxPrice: 3000
              })
            }
          >
            Reset filters
          </button>
        </aside>

        <section className="shop-results">
          <div className="shop-toolbar">
            <div>
              <p className="eyebrow">{productList.length} items available</p>
              <h2>Showing {label} in luxury furniture</h2>
            </div>
            <div className="shop-sorting">
              <label>Sort by</label>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="price-low">Price Low to High</option>
                <option value="price-high">Price High to Low</option>
                <option value="best-selling">Best Selling</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="products-grid">
              {Array.from({ length: 8 }).map((_, index) => (
                <article key={index} className="skeleton-card" />
              ))}
            </div>
          ) : (
            <div className="products-grid">
              {productList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="shop-highlight glass-card">
            <div>
              <p className="eyebrow">Deal of the day</p>
              <h3>Curated luxury furniture bundles</h3>
              <p>Shop limited-time bundles with complimentary styling advice and fast shipping.</p>
            </div>
            <button className="button-primary" onClick={() => addToWishlist(productData[0])}>
              Save a bundle
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Shop;
