import React from 'react';

const CATEGORIES = [
  { id: 1, name: "Women's",    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80' },
  { id: 2, name: "Men's",      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=500&q=80' },
  { id: 3, name: 'Electronics',image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&q=80' },
  { id: 4, name: 'Groceries',  image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=500&q=80' },

  { id: 6, name: 'Sports',     image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&q=80' },

  { id: 8, name: 'Kids',       image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80' },
];

const CategoryGrid = ({ setCurrentPage }) => {
  return (
    <div>
      <h2 style={{ fontWeight: 700, fontSize: '1.5rem', color: '#212121', marginBottom: '1.25rem' }}>
        Shop by Category
      </h2>
      <div className="category-wrapper">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="category-card"
            onClick={() => setCurrentPage && setCurrentPage('products')}
            style={{ cursor: 'pointer' }}
          >
            <img src={cat.image} alt={cat.name} className="category-img" />
            <div className="category-title">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
