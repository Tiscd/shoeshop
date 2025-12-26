import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import { getProducts } from '../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (
    <div>
      <Banner />
      <h2 style={{ textAlign: 'center', color: '#ff758c', margin: '40px 0' }}>Gợi Ý Hôm Nay</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;