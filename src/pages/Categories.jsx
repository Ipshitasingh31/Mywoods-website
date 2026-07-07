import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { products as productData } from '../data/products';

const categoryMap = {
  'living-room': {
    title: 'Living Room Collections',
    description: 'Sophisticated seating, tables, and accents crafted for luxurious living spaces.',
    filters: ['Sofas', 'Chairs', 'Coffee Tables', 'TV Units']
  },
  bedroom: {
    title: 'Bedroom Collections',
    description: 'Sleep in style with premium beds, wardrobes, and curated bedroom essentials.',
    filters: ['Beds', 'Wardrobes']
  },
  dining: {
    title: 'Dining Collections',
    description: 'Entertain in style with elegant dining tables and seating for every home.',
    filters: ['Dining Tables', 'Chairs']
  },
  sofas: {
    title: 'Sofas',
    description: 'Plush seating solutions with premium leather and tailored silhouettes.',
    filters: ['Sofas']
  },
  beds: {
    title: 'Beds',
    description: 'Modern bed frames and elegant headboards for restful sleep.',
    filters: ['Beds']
  }
};

function Categories() {
  const { categoryId } = useParams();
  const category = categoryMap[categoryId] || {
    title: 'Curated Collections',
    description: 'Explore premium furniture categories and discover your next statement piece.',
    filters: []
  };

  const products = useMemo(() => {
    if (!category.filters.length) {
      return productData;
    }
    return productData.filter((product) => category.filters.includes(product.category));
  }, [category.filters]);

  return (
    <div className="page-shell categories-page">
      <section className="page-hero glass-card categories-hero">
        <div>
          <p className="eyebrow">Category spotlight</p>
          <h1>{category.title}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <section className="products">
        <div className="section-head">
          <h2>{products.length} pieces selected for you</h2>
          <Link to="/shop" className="button-secondary">
            Browse all products
          </Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Categories;
