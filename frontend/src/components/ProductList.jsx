import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const MOCK_PRODUCTS = [
// (rating will be added dynamically per product)

  // ── Women's (10) ──────────────────────────────────────
  { _id: 'w1',  name: 'Floral Wrap Dress',         brand: 'Zara',         description: 'Elegant floral print wrap dress for all occasions', price: 2499, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80' },
  { _id: 'w2',  name: 'Classic White Kurti',        brand: 'W',            description: 'Pure cotton hand-block printed white kurti', price: 1299, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1583391733958-d25e07fac04f?w=500&q=80' },
  { _id: 'w3',  name: 'High-Rise Skinny Jeans',     brand: "Levi's",       description: 'Stretch denim high-rise fit, 5-pocket style', price: 2999, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80' },
  { _id: 'w4',  name: 'Boho Maxi Skirt',            brand: 'Global Desi',  description: 'Flared tier maxi skirt with mirror work', price: 1799, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=500&q=80' },
  { _id: 'w5',  name: 'Linen Blazer',               brand: 'H&M',          description: 'Smart casual linen blend blazer in beige', price: 3499, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1604311795833-25e1d5c128c6?w=500&q=80' },
  { _id: 'w6',  name: 'Pleated Palazzo Pants',      brand: 'Biba',         description: 'Wide-leg palazzo pants perfect for ethnic wear', price: 1099, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500&q=80' },
  { _id: 'w7',  name: 'Crop Sweatshirt',            brand: 'Nike',         description: 'Cozy fleece crop sweatshirt for casual wear', price: 1899, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80' },
  { _id: 'w8',  name: 'Satin Evening Gown',         brand: 'Mango',        description: 'Luxurious floor-length satin gown in midnight blue', price: 5999, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&q=80' },
  { _id: 'w9',  name: 'Striped T-Shirt',            brand: 'Forever 21',   description: 'Classic multi-stripe round-neck tee', price: 699, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&q=80' },
  { _id: 'w10', name: 'Embroidered Anarkali Suit',  brand: 'Libas',        description: 'Designer embroidered anarkali with dupatta', price: 3999, category: "Women's", imageUrl: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=500&q=80' },

  // ── Men's (10) ────────────────────────────────────────
  { _id: 'm1',  name: 'Oxford Formal Shirt',        brand: 'Peter England', description: 'Slim-fit 100% cotton formal office shirt', price: 1499, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80' },
  { _id: 'm2',  name: 'Slim Chino Pants',           brand: 'Marks & Spencer', description: 'Smart slim chinos in stretch cotton', price: 2199, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80' },
  { _id: 'm3',  name: 'Denim Trucker Jacket',       brand: "Levi's",       description: 'Classic blue trucker denim jacket', price: 4299, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80' },
  { _id: 'm4',  name: 'Polo Neck T-Shirt',          brand: 'PUMA',         description: 'Moisture-wicking polo tee for sports & leisure', price: 999, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=500&q=80' },
  { _id: 'm5',  name: 'Hooded Sweatshirt',          brand: 'Nike',         description: 'Fleece-lined pullover hoodie in dark grey', price: 2799, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80' },
  { _id: 'm6',  name: 'Running Shorts',             brand: 'Adidas',       description: 'Lightweight dry-fit running shorts with zip pocket', price: 1199, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1622519407650-3df9883f76a5?w=500&q=80' },
  { _id: 'm7',  name: 'Ethnic Kurta Set',           brand: 'Manyavar',     description: 'Festive ready kurta with churidar pyjama', price: 3499, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80' },
  { _id: 'm8',  name: 'Leather Biker Jacket',       brand: 'Roadster',     description: 'Faux leather biker jacket with zipper detail', price: 5499, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80' },
  { _id: 'm9',  name: 'Cargo Combat Pants',         brand: 'SNITCH',       description: 'Relaxed-fit cargo pants with 6 pockets', price: 1899, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1519992823232-9a7b3cc5cbbe?w=500&q=80' },
  { _id: 'm10', name: 'Graphic Print Tee',          brand: 'H&M',          description: 'Oversized graphic tee in 100% organic cotton', price: 799, category: "Men's", imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80' },

  // ── Electronics (10) ──────────────────────────────────
  { _id: 'e1',  name: 'Sony WH-1000XM5 Headphones', brand: 'Sony',        description: 'Industry-leading noise cancellation, 30hr battery', price: 27900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80' },
  { _id: 'e2',  name: 'MacBook Air M2',              brand: 'Apple',       description: 'Supercharged by M2 chip, 18hr battery life', price: 99900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80' },
  { _id: 'e3',  name: 'LG 4K OLED TV 55"',          brand: 'LG',          description: 'Gallery-series OLED evo with AI ThinQ', price: 119900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4e10a?w=500&q=80' },
  { _id: 'e4',  name: 'iPad Air 5th Gen',            brand: 'Apple',       description: 'M1 chip, 10.9" Liquid Retina, 5G ready', price: 59900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80' },
  { _id: 'e5',  name: 'Nikon Z50 Mirrorless Camera', brand: 'Nikon',       description: '20.9MP DX mirrorless with 16-50mm kit lens', price: 74900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80' },
  { _id: 'e6',  name: 'Bose SoundLink Speaker',      brand: 'Bose',        description: 'Portable Bluetooth speaker, 360° sound, waterproof', price: 14900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80' },
  { _id: 'e7',  name: 'Dell XPS 13 Laptop',          brand: 'Dell',        description: 'Intel i7, 16GB RAM, 512GB SSD, 13.4" FHD+', price: 109900, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80' },
  { _id: 'e8',  name: 'PlayStation 5 Console',       brand: 'Sony',        description: 'Ultra-fast SSD, 4K gaming, DualSense controller', price: 49990, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&q=80' },
  { _id: 'e9',  name: 'Smart Home Security Camera',  brand: 'TP-Link',     description: 'Full HD 1080p, AI detection, night vision, 2-way audio', price: 3499, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
  { _id: 'e10', name: 'Kindle Paperwhite 11th Gen',  brand: 'Amazon',      description: '6.8" display, warm light, waterproof, 10 weeks battery', price: 14999, category: 'Electronics', imageUrl: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&q=80' },

  // ── Groceries (10) ────────────────────────────────────
  { _id: 'g1',  name: 'Organic Basmati Rice 5kg',   brand: 'Daawat',      description: 'Aged extra-long grain premium basmati rice', price: 599, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80' },
  { _id: 'g2',  name: 'Cold-Pressed Olive Oil 1L',  brand: "Borges",      description: 'Extra virgin cold-pressed Mediterranean olive oil', price: 799, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80' },
  { _id: 'g3',  name: 'Mixed Dry Fruits 500g',      brand: 'Happilo',     description: 'Premium California almonds, cashews, walnuts blend', price: 599, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80' },
  { _id: 'g4',  name: 'Himalayan Pink Salt 1kg',    brand: 'Tata Salt',   description: 'Natural mineral-rich pink salt from the Himalayas', price: 149, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?w=500&q=80' },
  { _id: 'g5',  name: 'Organic Honey 500g',         brand: 'Dabur',       description: '100% pure raw forest honey, no added sugar', price: 349, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80' },
  { _id: 'g6',  name: 'Atta Whole Wheat Flour 10kg',brand: 'Aashirvaad',  description: 'Stone-ground whole wheat flour for soft rotis', price: 449, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&q=80' },
  { _id: 'g7',  name: 'Green Tea 100 Bags',         brand: 'Lipton',      description: 'Natural green tea with antioxidants, no additives', price: 249, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1564890369478-c89ca3d9cfc8?w=500&q=80' },
  { _id: 'g8',  name: 'Coconut Milk 400ml x 3',     brand: 'Dabur',       description: 'Premium thick coconut milk for curries & desserts', price: 299, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=500&q=80' },
  { _id: 'g9',  name: 'Dark Chocolate 70% 100g',    brand: 'Lindt',       description: 'Swiss premium dark chocolate, single origin cocoa', price: 399, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=500&q=80' },
  { _id: 'g10', name: 'Protein Oats 1kg',           brand: 'Quaker',      description: 'Rolled oats with added protein, high fibre', price: 199, category: 'Groceries', imageUrl: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=500&q=80' },

  // ── Sports & Fitness (10) ─────────────────────────────
  { _id: 's1',  name: 'Nike Air Max 270',           brand: 'Nike',        description: "Men's lifestyle running shoe with Air unit", price: 12995, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80' },
  { _id: 's2',  name: 'Yoga Mat Non-Slip',          brand: 'Boldfit',     description: '6mm thick anti-tear eco yoga mat with carry bag', price: 999, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1601614917637-251f28b7470c?w=500&q=80' },
  { _id: 's3',  name: 'Spalding NBA Basketball',    brand: 'Spalding',    description: 'Official NBA size & weight, composite leather', price: 2799, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?w=500&q=80' },
  { _id: 's4',  name: 'Adjustable Dumbbell Set',    brand: 'Kobo',        description: '10kg-40kg adjustable dumbbell with carrying case', price: 5499, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80' },
  { _id: 's5',  name: 'Cycling Helmet',             brand: 'Nivia',       description: 'Aero-dynamic adult cycling helmet, CE certified', price: 1799, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
  { _id: 's6',  name: 'Resistance Bands Set',       brand: 'Boldfit',     description: 'Set of 5 latex resistance bands with bag', price: 599, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a04?w=500&q=80' },
  { _id: 's7',  name: 'Cricket Bat English Willow', brand: 'SS',          description: 'Grade A English willow bat, 2.8lbs', price: 3999, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&q=80' },
  { _id: 's8',  name: 'Jump Rope Speed Cable',      brand: 'Adidas',      description: 'Professional speed jump rope with bearings', price: 799, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?w=500&q=80' },
  { _id: 's9',  name: 'Badminton Racket Pair',      brand: 'Yonex',       description: 'Yonex GR 303i racket with 6 shuttles', price: 1299, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80' },
  { _id: 's10', name: 'Gym Gloves Pro',             brand: 'Decathlon',   description: 'Anti-slip palm padding, wrist support included', price: 499, category: 'Sports', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80' },

  // ── Kids (10) ─────────────────────────────────────────
  { _id: 'k1',  name: 'LEGO Technic Car Set',       brand: 'LEGO',        description: '634 pieces motorised technic sports car', price: 4999, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500&q=80' },
  { _id: 'k2',  name: 'Toddler Ride-On Cycle',      brand: 'Baybee',      description: 'Easy push ride-on balance bicycle 1-3 yrs', price: 1799, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1571607388263-1044f9ea01dd?w=500&q=80' },
  { _id: 'k3',  name: 'Kids Watercolor Painting Set', brand: 'Camlin',    description: '24 shades watercolor cakes with brushes & pad', price: 399, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80' },
  { _id: 'k4',  name: 'Stuffed Teddy Bear 60cm',    brand: 'Archies',     description: 'Super soft plush teddy bear, machine washable', price: 899, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=500&q=80' },
  { _id: 'k5',  name: 'Magnetic Building Blocks',   brand: 'Skoolzy',     description: '40pc magnetic tiles for creative STEM building', price: 1599, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=500&q=80' },
  { _id: 'k6',  name: "Kids' Summer Dress 4-6Y",    brand: 'FirstCry',    description: 'Floral cotton frock with frills, 4-6 years', price: 699, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1476234251651-f353703a034d?w=500&q=80' },
  { _id: 'k7',  name: "Boys Superhero T-Shirt",     brand: 'Zara Kids',   description: 'Marvel print superhero tee, 3-10 years', price: 599, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500&q=80' },
  { _id: 'k8',  name: 'Kids Wooden Puzzle 100pc',   brand: 'Hasbro',      description: 'Colorful world map educational wooden puzzle', price: 799, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=500&q=80' },
  { _id: 'k9',  name: "Children's Rain Boots",      brand: 'Crocs',       description: 'Waterproof PVC rain boots with anti-slip sole', price: 1199, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1533795613027-4c027e1fd0a5?w=500&q=80' },
  { _id: 'k10', name: 'RC Remote Control Car',      brand: 'Maisto',      description: 'High-speed 1:18 off-road RC car, 30min playtime', price: 2499, category: 'Kids', imageUrl: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80' },
];

const CATEGORIES = ["All", "Women's", "Men's", "Electronics", "Groceries", "Sports", "Kids"];

const filterOptions = {
  'GENDER': ['Men', 'Women', 'Boys', 'Girls'],
  'BRAND': ['Nike', "Levi's", 'Sony', 'Samsung', 'Apple', 'Adidas', 'PUMA', 'H&M', 'Zara'],
  'COLOR': ['Black', 'Blue', 'White', 'Red', 'Green'],
  'FABRIC': ['Cotton', 'Polyester', 'Denim', 'Silk', 'Fleece'],
  'TYPE': ['Casual', 'Formal', 'Sports', 'Party', 'Ethnic'],
  'FIT': ['Regular', 'Slim', 'Loose', 'Oversized'],
  'PATTERN': ['Solid', 'Striped', 'Checked', 'Printed', 'Floral'],
  'OCCASION': ['Casual', 'Formal', 'Wedding', 'Sports', 'Party'],
  'SIZE': ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  'COLLAR': ['Polo', 'Round Neck', 'V-Neck', 'Hooded'],
  'PRICE': ['Under ₹500', '₹500 – ₹2000', '₹2000 – ₹10,000', 'Over ₹10,000']
};

const BRAND_MAP = {
  "w1":"Zara","w2":"W","w3":"Levi's","w4":"Global Desi","w5":"H&M","w6":"Biba","w7":"Nike","w8":"Mango","w9":"Forever 21","w10":"Libas",
  "m1":"Peter England","m2":"Marks & Spencer","m3":"Levi's","m4":"PUMA","m5":"Nike","m6":"Adidas","m7":"Manyavar","m8":"Roadster","m9":"SNITCH","m10":"H&M",
};

const ProductList = ({ setCurrentPage }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFilter, setExpandedFilter] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortOption, setSortOption] = useState('Popularity');
  const { addToCart } = useCart();
  // Add a rating property (1‑5 stars) to each mock product
  const PRODUCTS = MOCK_PRODUCTS.map(p => ({ ...p, rating: Math.floor(Math.random() * 5) + 1 }));

  const toggleFilter = (f) => setExpandedFilter(expandedFilter === f ? '' : f);

  let filtered = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  // Apply selected filters (e.g., SIZE)
  filtered = filtered.filter(p => {
    for (const filterName in selectedFilters) {
      if (!selectedFilters[filterName] || selectedFilters[filterName].size === 0) continue;
      const selectedSet = selectedFilters[filterName];
      if (filterName === 'SIZE') {
        const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];
        const prodSize = sizeOptions[parseInt(p._id.replace(/\D/g, '') || '0') % sizeOptions.length];
        if (!selectedSet.has(prodSize)) return false;
      } else {
        // For other filters, you can extend logic as needed. Currently they are not tied to product data.
        // Skip filtering for unknown attributes.
      }
    }
    return true;
  });

  let sortedProducts = [...filtered];
  if (sortOption === 'LowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'HighToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'Newest') {
    sortedProducts.sort((a, b) => {
      const ida = parseInt(a._id.replace(/\D/g, '') || '0');
      const idb = parseInt(b._id.replace(/\D/g, '') || '0');
      return idb - ida;
    });
  }

  const handleBuyNow = (product) => {
    addToCart(product);
    setCurrentPage('cart');
  };

  const discountPct = (id) => {
    const pcts = [10, 15, 20, 25, 30, 35, 40, 45, 50];
    const idx = parseInt(id.replace(/\D/g, '') || '0') % pcts.length;
    return pcts[idx];
  };

  const handleFilterChange = (filterName, option) => {
    setSelectedFilters(prev => {
      const newSet = new Set(prev[filterName] || []);
      if (newSet.has(option)) {
        newSet.delete(option);
      } else {
        newSet.add(option);
      }
      return { ...prev, [filterName]: newSet };
    });
  };

  return (
    <div className="main-layout" style={{ maxWidth: '1600px' }}>
      {/* Sidebar */}
      <aside className="filters-sidebar-fk">
        <div className="filter-header-fk">Filters & Sort</div>

        {/* Sort Options placed here instead of Categories */}
        <div className="filter-section-fk" style={{ marginBottom: '1.5rem' }}>
          <h5 style={{ fontSize: '0.9rem', color: '#878787', fontWeight: 600, letterSpacing: '0.5px' }}>SORT BY</h5>
          <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0 0 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li
              className={sortOption === 'Popularity' ? 'active-filter' : ''}
              onClick={() => setSortOption('Popularity')}
              style={{ padding: '4px 0', cursor: 'pointer', color: sortOption === 'Popularity' ? '#2874f0' : '#212121', fontWeight: sortOption === 'Popularity' ? 600 : 400 }}
            >
              Popularity
            </li>
            <li
              className={sortOption === 'LowToHigh' ? 'active-filter' : ''}
              onClick={() => setSortOption('LowToHigh')}
              style={{ padding: '4px 0', cursor: 'pointer', color: sortOption === 'LowToHigh' ? '#2874f0' : '#212121', fontWeight: sortOption === 'LowToHigh' ? 600 : 400 }}
            >
              Price — Low to High
            </li>
            <li
              className={sortOption === 'HighToLow' ? 'active-filter' : ''}
              onClick={() => setSortOption('HighToLow')}
              style={{ padding: '4px 0', cursor: 'pointer', color: sortOption === 'HighToLow' ? '#2874f0' : '#212121', fontWeight: sortOption === 'HighToLow' ? 600 : 400 }}
            >
              Price — High to Low
            </li>
            <li
              className={sortOption === 'Newest' ? 'active-filter' : ''}
              onClick={() => setSortOption('Newest')}
              style={{ padding: '4px 0', cursor: 'pointer', color: sortOption === 'Newest' ? '#2874f0' : '#212121', fontWeight: sortOption === 'Newest' ? 600 : 400 }}
            >
              Newest First
            </li>
          </ul>
        </div>

        {/* Accordion filters */}
        {Object.keys(filterOptions).map(acc => (
          <div key={acc} className="filter-accordion-container">
            <div className="filter-accordion" onClick={() => toggleFilter(acc)}>
              <span>{acc}</span>
              <span className="chevron">{expandedFilter === acc ? '▲' : '▼'}</span>
            </div>
            {expandedFilter === acc && (
              <div className="filter-options-content" style={{ padding: '0 15px 15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {filterOptions[acc].map(opt => (
                  <label key={opt} style={{ fontSize: '0.9rem', color: '#212121', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={selectedFilters[acc] ? selectedFilters[acc].has(opt) : false}
                      onChange={() => handleFilterChange(acc, opt)}
                    /> {opt}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </aside>

      {/* Product Grid */}
      <section className="product-grid-container-fk">
        <div className="grid-header-fk" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '16px' }}>
          <div className="breadcrumbs" style={{ width: '100%' }}>
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            <span style={{color: '#878787', fontSize: '0.9rem', marginLeft: '8px'}}> 
              (Showing 1 – {filtered.length} of {filtered.length} products)
            </span>
          </div>
          
          {/* Horizontal Categories */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', overflowX: 'auto', paddingBottom: '8px', width: '100%', scrollbarWidth: 'none' }}>
            {CATEGORIES.map(cat => (
              <div 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 16px', whiteSpace: 'nowrap', borderRadius: '20px', cursor: 'pointer',
                  fontWeight: selectedCategory === cat ? 600 : 400,
                  fontSize: '0.9rem', border: '1px solid',
                  borderColor: selectedCategory === cat ? '#2874f0' : '#e0e0e0',
                  color: selectedCategory === cat ? '#fff' : '#212121',
                  background: selectedCategory === cat ? '#2874f0' : '#fff'
                }}
              >
                {cat === 'All' ? 'All Categories' : cat}
              </div>
            ))}
          </div>
        </div>

        <div className="product-grid-fk">
          {sortedProducts.map(product => {
            const disc = discountPct(product._id);
            const origPrice = Math.round(product.price / (1 - disc / 100));

            return (
              <div key={product._id} className="product-card-fk">
                <div className="heart-icon-fk">♥</div>
                <div className="product-img-wrapper-fk">
                  <img src={product.imageUrl} alt={product.name} />
                </div>

                <div className="product-info-fk">
                  <div className="brand-fk">{product.brand}</div>
                  <div className="title-fk" title={product.name}>{product.name}</div>

                  <div className="price-row-fk">
                    <span className="current-price-fk">₹{product.price.toLocaleString('en-IN')}</span>
                    <span className="original-price-fk">₹{origPrice.toLocaleString('en-IN')}</span>
                    <span className="discount-fk">{disc}% off</span>
                  </div>

                  <div className="deal-row-fk">
                    {disc >= 40
                      ? <span className="hot-deal-fk">🔥 Hot Deal</span>
                      : <span className="buy-2-fk">Buy 2, save extra 5%</span>}
                  </div>

                  <div style={{ fontSize: '0.78rem', color: '#878787', marginTop: '4px' }}>{product.description}</div>
                  <div className="rating-fk" style={{ marginTop: '4px' }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: i < product.rating ? '#ffb400' : '#ccc' }}>★</span>
                    ))}
                  </div>
                </div>

                <div className="bottom-actions-fk">
                  <button
                    className="btn-cart-fk"
                    onClick={() => { addToCart(product); alert('Item added to cart! 🛒'); }}
                  >
                    Add to Cart
                  </button>
                  <button className="btn-buy-fk" onClick={() => handleBuyNow(product)}>
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && <div style={{ padding: '2rem' }}>No products found.</div>}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
          <button
            style={{ padding: '10px 40px', background: '#fff', border: '1px solid #c2c2c2', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => setCurrentPage('home')}
          >
            ← Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
