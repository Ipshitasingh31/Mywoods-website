export const categories = [
  { id: 'sofas', label: 'Sofas', description: 'Plush and modern seating solutions', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=540' },
  { id: 'beds', label: 'Beds', description: 'Elegant beds for restful sleep', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=540' },
  { id: 'wardrobes', label: 'Wardrobes', description: 'Sleek storage for every bedroom', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=540' },
  { id: 'dining-tables', label: 'Dining Tables', description: 'Luxury dining sets for refined homes', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=540' },
  { id: 'chairs', label: 'Chairs', description: 'Designer chairs for modern living', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=540' },
  { id: 'outdoor', label: 'Outdoor Furniture', description: 'Weather resistant premium designs', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=540' },
  { id: 'coffee-tables', label: 'Coffee Tables', description: 'Modern occasional tables for lounges', image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=540' },
  { id: 'storage', label: 'Storage', description: 'Smart cabinets, shelves and units', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=540' },
  { id: 'tv-units', label: 'TV Units', description: 'Minimal media units with premium finish', image: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=540' },
  { id: 'bookshelves', label: 'Bookshelves', description: 'Curated book storage for modern homes', image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=540' },
  { id: 'recliners', label: 'Recliners', description: 'Luxurious recliners with soft padding', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=540' }
];

export const brands = ['LuxeCraft', 'Maison Noir', 'Studio Elle', 'Aurora Home', 'Casa Beige'];

export const products = [
  {
    id: 'sofa-01',
    name: 'Savoy Leather Sofa',
    brand: 'LuxeCraft',
    category: 'Sofas',
    price: 2399,
    oldPrice: 2899,
    discount: 17,
    rating: 4.9,
    reviews: 48,
    colors: ['Beige', 'Black'],
    material: 'Italian leather',
    availability: 'In stock',
    description: 'A premium leather sofa with sculpted curves and soft cushioning for a luxurious living room statement.',
    dimensions: '92" W x 38" D x 32" H',
    weight: '92 lbs',
    specs: [
      'Premium Italian leather',
      'Solid walnut legs',
      'High resilience foam',
      'Timeless beige finish'
    ],
    images: [
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=640',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=640'
    ]
  },
  {
    id: 'bed-01',
    name: 'Eclipse Bed Frame',
    brand: 'Maison Noir',
    category: 'Beds',
    price: 1899,
    oldPrice: 2299,
    discount: 17,
    rating: 4.7,
    reviews: 34,
    colors: ['Ivory', 'Brown'],
    material: 'Solid oak & velvet',
    availability: 'In stock',
    description: 'A modern bed frame with velvet headboard and oak details crafted for hotel-like bedroom comfort.',
    dimensions: '85" W x 86" D x 50" H',
    weight: '110 lbs',
    specs: [
      'Plush velvet headboard',
      'Solid oak slats',
      'Integrated storage design',
      'Luxurious brown finish'
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640'
    ]
  },
  {
    id: 'wardrobe-01',
    name: 'Aria Sliding Wardrobe',
    brand: 'Studio Elle',
    category: 'Wardrobes',
    price: 1599,
    oldPrice: 1899,
    discount: 16,
    rating: 4.8,
    reviews: 22,
    colors: ['Oak', 'White'],
    material: 'Ash veneer',
    availability: 'Limited stock',
    description: 'A sleek sliding-door wardrobe with soft-close mechanics and integrated LED lighting.',
    dimensions: '72" W x 24" D x 84" H',
    weight: '180 lbs',
    specs: [
      'Soft-close sliding doors',
      'LED interior lighting',
      'Adjustable shelving',
      'Premium ash veneer'
    ],
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=640',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=640',
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=640'
    ]
  },
  {
    id: 'dining-01',
    name: 'Aster Marble Dining Table',
    brand: 'Aurora Home',
    category: 'Dining Tables',
    price: 1799,
    oldPrice: 2099,
    discount: 14,
    rating: 4.8,
    reviews: 31,
    colors: ['Beige', 'Black'],
    material: 'Marble & metal',
    availability: 'In stock',
    description: 'A dining table with premium marble top and brushed metal legs for an elegant dining room focal point.',
    dimensions: '78" W x 40" D x 30" H',
    weight: '120 lbs',
    specs: [
      'Solid marble top',
      'Brushed steel legs',
      'Seats up to 8',
      'Minimalist silhouette'
    ],
    images: [
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=640',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=640',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=640'
    ]
  },
  {
    id: 'chair-01',
    name: 'Nero Lounge Chair',
    brand: 'Casa Beige',
    category: 'Chairs',
    price: 649,
    oldPrice: 799,
    discount: 19,
    rating: 4.6,
    reviews: 28,
    colors: ['Black', 'Walnut'],
    material: 'Faux leather',
    availability: 'In stock',
    description: 'A sculptural lounge chair with padded seat and elegant dark finish designed for modern living spaces.',
    dimensions: '30" W x 34" D x 34" H',
    weight: '45 lbs',
    specs: [
      'Soft faux leather',
      'Curved design',
      'Powder coated frame',
      'Accent stitching detail'
    ],
    images: [
      'https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=640',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=640'
    ]
  },
  {
    id: 'hall-table-01',
    name: 'Solstice Narrow Console',
    brand: 'LuxeCraft',
    category: 'Storage',
    price: 799,
    oldPrice: 949,
    discount: 16,
    rating: 4.7,
    reviews: 18,
    colors: ['Teak', 'Walnut'],
    material: 'Solid teak',
    availability: 'In stock',
    description: 'A slim console table designed for elegant entryways and luxe hallway styling.',
    dimensions: '48" W x 14" D x 32" H',
    weight: '45 lbs',
    specs: [
      'Solid teak frame',
      'Matte brass accents',
      'Drawer storage',
      'Hand-finished surface'
    ],
    images: [
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=640',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=640',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640'
    ]
  },
  {
    id: 'outdoor-01',
    name: 'Oasis Garden Set',
    brand: 'Maison Noir',
    category: 'Outdoor Furniture',
    price: 1299,
    oldPrice: 1499,
    discount: 13,
    rating: 4.5,
    reviews: 16,
    colors: ['Sand', 'Taupe'],
    material: 'Weather resistant wicker',
    availability: 'In stock',
    description: 'A luxury outdoor seating set designed for patios and terraces with comfortable neutral tones.',
    dimensions: 'Table 48" W x 24" H, Chair 28" W x 33" H',
    weight: '75 lbs',
    specs: [
      'All-weather wicker',
      'Quick-dry cushions',
      'Corrosion resistant frame',
      'Elegant taupe palette'
    ],
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=640',
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=640',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=640'
    ]
  },
  {
    id: 'coffee-01',
    name: 'Luna Coffee Table',
    brand: 'Studio Elle',
    category: 'Coffee Tables',
    price: 499,
    oldPrice: 599,
    discount: 17,
    rating: 4.8,
    reviews: 14,
    colors: ['Cream', 'Oak'],
    material: 'Marble & wood',
    availability: 'In stock',
    description: 'A contemporary coffee table with marble top and wooden details for a curated living room display.',
    dimensions: '44" W x 24" D x 16" H',
    weight: '52 lbs',
    specs: [
      'Polished marble top',
      'Solid wood legs',
      'Smooth rounded edges',
      'Modern coffee table style'
    ],
    images: [
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=640',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=640',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=640'
    ]
  },
  {
    id: 'storage-01',
    name: 'Cove Storage Cabinet',
    brand: 'Aurora Home',
    category: 'Storage',
    price: 729,
    oldPrice: 859,
    discount: 15,
    rating: 4.7,
    reviews: 12,
    colors: ['Walnut', 'Beige'],
    material: 'Ash wood',
    availability: 'Limited stock',
    description: 'A softly curved storage cabinet with hidden shelving and premium wood finish for modern entryways.',
    dimensions: '48" W x 16" D x 34" H',
    weight: '78 lbs',
    specs: [
      'Hidden storage compartments',
      'Soft-close doors',
      'Ash wood finish',
      'Versatile design'
    ],
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=640',
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=640',
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b77?w=640'
    ]
  }
];
