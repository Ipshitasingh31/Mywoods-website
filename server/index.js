import express from 'express';
import cors from 'cors';
import path from 'path';
import { pathToFileURL } from 'url';

const app = express();
app.use(cors());
app.use(express.json());

// In-memory DB (server restart ke baad data reset hoga)
const woods = [
  {
    _id: '1',
    name: 'Teak Wood',
    description: 'Premium hardwood for furniture and outdoor use.',
    color: 'Golden Brown',
    density: 720,
    origin: 'India',
    pricePerUnit: 60.5,
    available: true,
    type: 'hardwood',
  },
  {
    _id: '2',
    name: 'Oak Wood',
    description: 'Strong and durable wood with a visible grain pattern.',
    color: 'Light Brown',
    density: 770,
    origin: 'USA',
    pricePerUnit: 45.5,
    available: true,
    type: 'hardwood',
  },
  {
    _id: '3',
    name: 'Pine Wood',
    description: 'Lightweight softwood suitable for interior projects.',
    color: 'Pale Yellow',
    density: 500,
    origin: 'Canada',
    pricePerUnit: 28,
    available: true,
    type: 'softwood',
  },
];
let nextId = woods.length + 1;

function normalizeWood(body) {
  return {
    name: body?.name,
    description: body?.description,
    color: body?.color ?? null,
    density: body?.density ?? null,
    origin: body?.origin ?? null,
    pricePerUnit: body?.pricePerUnit ?? null,
    available: body?.available ?? true,
    type: body?.type ?? 'hardwood',
  };
}

// POST /api/woods - create
app.post('/api/woods', (req, res) => {
  const wood = normalizeWood(req.body);

  if (!wood.name) {
    return res.status(400).json({ message: 'name is required' });
  }

  const id = String(nextId++);
  const created = { _id: id, ...wood };
  woods.push(created);

  res.status(201).json(created);
});

// GET /api/woods - list
app.get('/api/woods', (req, res) => {
  res.json(woods);
});

// PUT /api/woods/:id - update
app.put('/api/woods/:id', (req, res) => {
  const { id } = req.params;
  const idx = woods.findIndex((w) => w._id === id);

  if (idx === -1) {
    return res.status(404).json({ message: 'Wood not found' });
  }

  const updates = normalizeWood(req.body);

  // allow partial update: keep old values if not provided
  woods[idx] = {
    ...woods[idx],
    ...Object.fromEntries(
      Object.entries(updates).filter(([, v]) => v !== null && v !== undefined)
    ),
  };

  res.json(woods[idx]);
});

// DELETE /api/woods/:id - delete
app.delete('/api/woods/:id', (req, res) => {
  const { id } = req.params;
  const idx = woods.findIndex((w) => w._id === id);

  if (idx === -1) {
    return res.status(404).json({ message: 'Wood not found' });
  }

  const deleted = woods[idx];
  woods.splice(idx, 1);
  res.json({ message: 'Deleted', deleted });
});

const PORT = process.env.PORT || 5000;
const isDirectRun = process.argv[1]
  ? import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
  : false;

if (isDirectRun) {
  app.listen(PORT, () => {
    console.log(`CMS API running on http://localhost:${PORT}`);
  });
}

export default app;

