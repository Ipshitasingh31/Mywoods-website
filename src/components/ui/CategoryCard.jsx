import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <motion.article
      className="category-card glass-card"
      whileHover={{ scale: 1.02, y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <img src={category.image} alt={category.label} loading="lazy" />
      <div className="category-card-copy">
        <h3>{category.label}</h3>
        <p>{category.description}</p>
        <Link to={`/categories/${category.id}`} className="button-secondary">
          Explore
        </Link>
      </div>
    </motion.article>
  );
}

export default CategoryCard;
