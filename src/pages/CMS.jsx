import { useEffect, useState } from "react";
import "./CMS.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CMS = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [id, setId] = useState(null);
  const [idData, setIdData] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const API_URL = "/api/woods";

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCloseEdit = () => setShowEdit(false);

  const handleShowEdit = (item) => {
    setIdData(item);
    setName(item.name);
    setDescription(item.description);
    setShowEdit(true);
  };

const handleCloseDelete = () => setShowDelete(false);

const handleShowDelete = (id) => {
  setId(id);
  setShowDelete(true);
};

  const callAPI = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetch(API_URL);

      if (!response.ok) {
        const errText = await response.text().catch(() => "");
        throw new Error(`Fetch failed (${response.status}) ${errText}`);
      }

      const result = await response.json();
      setData(Array.isArray(result) ? result : []);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const callPostAPI = async () => {
    const raw = {
      name,
      type: "hardwood",
      origin: "USA",
      color: "Light Red",
      density: 770,
      pricePerUnit: 45.5,
      description,
      available: true,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(raw),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || JSON.stringify(result));
        return;
      }

      alert("Wood Added Successfully!");
      handleClose();
      callAPI();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  const callDeleteAPI = async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => "");
        throw new Error(`Delete failed (${response.status}) ${errText}`);
      }

      handleCloseDelete();
      callAPI();
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Delete failed");
    }
  };

  const callEditAPI = async () => {
    const raw = {
      name,
      description,
    };

    const woodId = idData?._id ?? idData?.id;

    if (!woodId) {
      setErrorMessage("Missing wood id for edit");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${woodId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(raw),
      });

      if (!response.ok) {
        const errText = await response.text().catch(() => "");
        throw new Error(`Edit failed (${response.status}) ${errText}`);
      }

      handleCloseEdit();
      callAPI();
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Edit failed");
    }
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="table-top-container">
      <h2>CMS Dashboard</h2>

      <Button variant="success" onClick={handleShow}>
        + Add Wood
      </Button>

      {errorMessage ? <p className="cms-error">{errorMessage}</p> : null}

      <div className="table-container">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Color</th>
                <th>Density</th>
                <th>Origin</th>
                <th>Price</th>
                <th>Available</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="8">No woods found. Add one to get started.</td>
                </tr>
              ) : data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.color}</td>
                  <td>{item.density}</td>
                  <td>{item.origin}</td>
                  <td>Rs. {item.pricePerUnit}</td>
                  <td>{item.available ? "Yes" : "No"}</td>
                  <td className="action-cell">
                    <button
  className="edit-btn"
  onClick={() => handleShowEdit(item)}
>
  Edit
</button>

<button
  className="delete-btn"
  onClick={() => handleShowDelete(item._id)}
>
  Delete
</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Wood</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Wood Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <br />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={callPostAPI}>Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDelete} onHide={handleCloseDelete}>
  <Modal.Header closeButton>
    <Modal.Title>Delete Wood</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    Are you sure you want to delete this wood?
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseDelete}>
      Cancel
    </Button>

    <Button variant="danger" onClick={callDeleteAPI}>
      Delete
    </Button>
  </Modal.Footer>
</Modal>

<Modal show={showEdit} onHide={handleCloseEdit}>
  <Modal.Header closeButton>
    <Modal.Title>Edit Wood</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <input
      type="text"
      placeholder="Wood Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <br />
    <br />

    <textarea
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary" onClick={handleCloseEdit}>
      Cancel
    </Button>

    <Button variant="primary" onClick={callEditAPI}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
    </div>
  );
};

export default CMS;
