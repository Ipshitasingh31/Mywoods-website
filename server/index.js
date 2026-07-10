import { randomUUID } from 'node:crypto';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mywoods';

let dbConnected = false;
const memoryProducts = [];

app.use(cors());
app.use(express.json());

const woodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, default: '' },
    description: { type: String, default: '' },
  },
  { timestamps: true }
);

const Wood = mongoose.models.Wood || mongoose.model('Wood', woodSchema);

app.get('/api/health', (req, res) => {
  res.json({ message: 'API is working' });
});

app.get('/api/woods', async (req, res) => {
  try {
    if (dbConnected) {
      const woods = await Wood.find().sort({ createdAt: -1 });
      return res.json(woods);
    }

    return res.json(memoryProducts);
  } catch (error) {
    res.status(500).json({ message: 'GET failed', error: error.message });
  }
});

app.post('/api/woods', async (req, res) => {
  try {
    if (dbConnected) {
      const wood = await Wood.create(req.body);
      return res.status(201).json(wood);
    }

    const wood = {
      _id: randomUUID(),
      ...req.body,
      price: Number(req.body.price),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    memoryProducts.unshift(wood);
    return res.status(201).json(wood);
  } catch (error) {
    res.status(400).json({ message: 'POST failed', error: error.message });
  }
});

app.put('/api/woods/:id', async (req, res) => {
  try {
    if (dbConnected) {
      const updated = await Wood.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!updated) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.json(updated);
    }

    const index = memoryProducts.findIndex((item) => item._id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const updated = {
      ...memoryProducts[index],
      ...req.body,
      price: Number(req.body.price ?? memoryProducts[index].price),
      updatedAt: new Date().toISOString(),
    };
    memoryProducts[index] = updated;
    return res.json(updated);
  } catch (error) {
    res.status(400).json({ message: 'PUT failed', error: error.message });
  }
});

app.delete('/api/woods/:id', async (req, res) => {
  try {
    if (dbConnected) {
      const deleted = await Wood.findByIdAndDelete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.json({ message: 'Deleted successfully' });
    }

    const index = memoryProducts.findIndex((item) => item._id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Product not found' });
    }

    memoryProducts.splice(index, 1);
    return res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'DELETE failed', error: error.message });
  }
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    dbConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
  }

  app.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}`);
  });
};

startServer();
