import { useEffect, useState } from 'react';
import axios from 'axios';

const emptyForm = {
  name: '',
  category: 'Beds',
  price: '',
  image: '',
  description: '',
};

function CMSPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const loadProducts = async () => {
    try {
      const response = await axios.get("/api/woods");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const payload = {
        ...form,
        price: Number(form.price),
      };

      if (editingId) {
        await axios.put(`/api/woods/${editingId}`, payload);
      } else {
        await axios.post("/api/woods", payload);
      }

      setForm(emptyForm);
      setEditingId(null);
      loadProducts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      description: product.description || '',
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/woods/${id}`);
      loadProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page-shell">
    
<button
  onClick={() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  }}
  style={{
    padding: "10px 20px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    float: "right",
  }}
>
  Logout
</button>
      <h1>CMS Dashboard</h1>
      <div className="cms-card">
        <h2>{editingId ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Product name" required />
          <select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}>
            <option value="Beds">Beds</option>
            <option value="Sofas">Sofas</option>
            <option value="Dining">Dining</option>
            <option value="Chairs">Chairs</option>
            <option value="Decor">Decor</option>
            <option value="Temple">Temple</option>
          </select>
          <input value={form.price} onChange={(event) => setForm({ ...form, price: event.target.value })} placeholder="Price" type="number" required />
          <input value={form.image} onChange={(event) => setForm({ ...form, image: event.target.value })} placeholder="Image URL" />
          <textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Short description" rows="3" />
          <button className="btn btn--primary" type="submit">Save Product</button>
        </form>
      </div>

      <div className="cms-list">
        {products.map((product) => (
          <div className="cms-item" key={product._id}>
            <div>
              <strong>{product.name}</strong>
              <div>{product.category} • ${product.price}</div>
            </div>
            <div className="card-actions">
              <button className="btn btn--secondary" onClick={() => handleEdit(product)}>Edit</button>
              <button className="btn btn--primary" onClick={() => handleDelete(product._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CMSPage;
