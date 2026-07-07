function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Premium Wooden Furniture</h1>

          <p>
            Discover handcrafted furniture made from premium quality wood.
            Elegant, durable and designed for modern living.
          </p>

          <button>Explore Collection</button>
        </div>
      </section>

      <section className="products">

        <h2>Our Best Sellers</h2>

        <div className="card-container">

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=480"
              alt="Chair"
            />
            <h3>Wooden Chair</h3>
            <p>Comfortable handcrafted wooden chair.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=480"
              alt="Table"
            />
            <h3>Dining Table</h3>
            <p>Premium oak dining table for your family.</p>
          </div>

          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=480"
              alt="Bed"
            />
            <h3>Wooden Bed</h3>
            <p>Luxury wooden bed with modern design.</p>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;