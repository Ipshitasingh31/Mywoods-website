import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-shell not-found-page">
      <section className="not-found-card glass-card">
        <h1>404</h1>
        <p>Page not found. The destination you are looking for does not exist.</p>
        <Link to="/" className="button-primary">
          Return home
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
